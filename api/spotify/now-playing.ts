interface SpotifyTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

interface SpotifyArtist {
  name: string;
}

interface SpotifyImage {
  url: string;
}

interface SpotifyTrackItem {
  name: string;
  artists: SpotifyArtist[];
  external_urls?: {
    spotify?: string;
  };
  album?: {
    name?: string;
    images?: SpotifyImage[];
  };
}

interface SpotifyNowPlayingResponse {
  is_playing?: boolean;
  item?: SpotifyTrackItem | null;
}

const sendJson = (res: any, status: number, data: unknown) => {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "s-maxage=15, stale-while-revalidate=30");
  return res.status(status).json(data);
};

const getSpotifyConfig = () => {
  const clientId = process.env.VITE_SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.VITE_SPOTIFY_CLIENT_SECRET;
  const refreshToken = process.env.VITE_SPOTIFY_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    console.warn(
      "Spotify credentials are not fully configured. Now Playing badge will be disabled.",
    );
  }

  return { clientId, clientSecret, refreshToken };
};

const getAccessToken = async () => {
  const { clientId, clientSecret, refreshToken } = getSpotifyConfig();

  if (!clientId || !clientSecret || !refreshToken) {
    return null;
  }

  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `Spotify token refresh failed (${response.status}): ${errorText.slice(0, 200)}`,
    );
  }

  return (await response.json()) as SpotifyTokenResponse;
};

export default async function handler(req: any, res: any) {
  if (req.method !== "GET") {
    return sendJson(res, 405, { message: "Method not allowed" });
  }

  const { clientId, clientSecret, refreshToken } = getSpotifyConfig();

  if (!clientId || !clientSecret || !refreshToken) {
    return sendJson(res, 200, {
      isPlaying: false,
      notConfigured: true,
    });
  }

  try {
    const token = await getAccessToken();

    if (!token?.access_token) {
      return sendJson(res, 200, {
        isPlaying: false,
        notConfigured: true,
      });
    }

    const spotifyResponse = await fetch(
      "https://api.spotify.com/v1/me/player/currently-playing",
      {
        headers: {
          Authorization: `Bearer ${token.access_token}`,
        },
      },
    );

    if (spotifyResponse.status === 204) {
      return sendJson(res, 200, { isPlaying: false });
    }

    if (spotifyResponse.status === 401 || spotifyResponse.status === 403) {
      return sendJson(res, 200, {
        isPlaying: false,
        error: "Spotify authorization failed",
      });
    }

    if (!spotifyResponse.ok) {
      const errorText = await spotifyResponse.text();
      throw new Error(
        `Spotify now playing failed (${spotifyResponse.status}): ${errorText.slice(0, 200)}`,
      );
    }

    const data =
      (await spotifyResponse.json()) as SpotifyNowPlayingResponse | null;
    const track = data?.item;

    if (!data?.is_playing || !track) {
      return sendJson(res, 200, { isPlaying: false });
    }

    return sendJson(res, 200, {
      isPlaying: true,
      title: track.name,
      artist: track.artists.map((artist) => artist.name).join(", "),
      album: track.album?.name,
      albumImageUrl: track.album?.images?.[0]?.url,
      songUrl: track.external_urls?.spotify,
    });
  } catch (error) {
    return sendJson(res, 500, {
      isPlaying: false,
      error:
        error instanceof Error
          ? error.message
          : "Unexpected error while fetching Spotify status",
    });
  }
}
