import React, { useState, useEffect, useRef } from "react";
import { useLanguageStore } from "../../context/useLanguageStore";
import {
  BadgeContainer,
  BadgeTrigger,
  PulseCircle,
  TooltipWrapper,
  TooltipHeader,
  TooltipStatusText,
  EqualizerContainer,
  EqualizerBar,
  TrackContent,
  AlbumArtwork,
  TrackDetails,
  TrackTitle,
  TrackArtist,
  OfflineTrackContent,
  OfflineTextSub,
} from "./styles";
import { Icon } from "../Icon";

export const NowPlayingBadge: React.FC = () => {
  const { language } = useLanguageStore();
  const isEn = language === "en";

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [songData, setSongData] = useState<{
    title?: string;
    artist?: string;
    album?: string;
    albumImageUrl?: string;
    songUrl?: string;
    notConfigured?: boolean;
    error?: string;
  } | null>(null);

  const [showTooltip, setShowTooltip] = useState<boolean>(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const fetchNowPlayingStatus = async () => {
    try {
      const response = await fetch("/api/spotify/now-playing");
      const contentType = response.headers.get("content-type") || "";

      if (!contentType.includes("application/json")) {
        throw new Error(
          `Unexpected response type from Spotify endpoint: ${contentType || "unknown"}`,
        );
      }

      if (response.ok) {
        const data = await response.json();
        setIsPlaying(!!data.isPlaying);
        setSongData(data);
      } else {
        setIsPlaying(false);
        setSongData({ error: "Endpoint error" });
      }
    } catch (networkErr) {
      console.warn("Network issue fetching Spotify playing track:", networkErr);
      setIsPlaying(false);
      setSongData({ error: "Network offline" });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNowPlayingStatus();

    const intervalId = setInterval(fetchNowPlayingStatus, 10000);
    return () => {
      clearInterval(intervalId);
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setShowTooltip(false);
    }, 400);
  };

  const handleToggleTooltip = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowTooltip((prev) => !prev);
  };

  return (
    <BadgeContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <BadgeTrigger
        id="spotify-now-playing-badge"
        onClick={handleToggleTooltip}
        $isPlaying={isPlaying}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Spotify Playback Status"
      >
        <span style={{ fontSize: "14px", lineHeight: 1 }}>🎵</span>
        <PulseCircle $isPlaying={isPlaying} />
      </BadgeTrigger>

      {showTooltip && (
        <TooltipWrapper
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          onMouseEnter={() => {
            if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
          }}
          onMouseLeave={handleMouseLeave}
        >
          <TooltipHeader>
            <TooltipStatusText $isPlaying={isPlaying}>
              {isLoading
                ? isEn
                  ? "Checking..."
                  : "Verificando..."
                : isPlaying
                  ? isEn
                    ? "Listening now"
                    : "Escutando agora"
                  : isEn
                    ? "Not playing"
                    : "Nada tocando"}
            </TooltipStatusText>

            {isPlaying && (
              <EqualizerContainer>
                <EqualizerBar />
                <EqualizerBar />
                <EqualizerBar />
              </EqualizerContainer>
            )}
          </TooltipHeader>

          {isLoading ? (
            <OfflineTrackContent>
              <div
                style={{ padding: "4px 0", fontSize: "0.8rem", color: "#888" }}
              >
                {isEn ? "Loading track info..." : "Carregando informações..."}
              </div>
            </OfflineTrackContent>
          ) : isPlaying && songData?.title ? (
            <TrackContent>
              {songData.albumImageUrl ? (
                <AlbumArtwork
                  src={songData.albumImageUrl}
                  alt={songData.album || "Album Art"}
                />
              ) : (
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "6px",
                    backgroundColor: "#333",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon name="disc" size={20} style={{ color: "#fff" }} />
                </div>
              )}
              <TrackDetails>
                {songData.songUrl ? (
                  <TrackTitle
                    href={songData.songUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {songData.title}
                  </TrackTitle>
                ) : (
                  <span
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      color: "#fff",
                    }}
                  >
                    {songData.title}
                  </span>
                )}
                <TrackArtist>{songData.artist}</TrackArtist>
              </TrackDetails>
            </TrackContent>
          ) : songData?.notConfigured ? (
            <OfflineTrackContent>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  color: "#ffd000",
                }}
              >
                <Icon name="help-circle" size={14} />
                <span style={{ fontSize: "0.75rem", fontWeight: 700 }}>
                  {isEn ? "Setup Required" : "Configurações"}
                </span>
              </div>
              <OfflineTextSub>
                {isEn
                  ? "Currently Showing Offsite Mode. Set Spotify secrets in AI Studio config."
                  : "Modo Offline: Configure suas credenciais do Spotify."}
              </OfflineTextSub>
            </OfflineTrackContent>
          ) : (
            <OfflineTrackContent>
              <OfflineTextSub style={{ opacity: 0.85 }}>
                {isEn
                  ? "I am currently offline or silent on Spotify."
                  : "Estou offline ou sem tocar nada no momento."}
              </OfflineTextSub>
            </OfflineTrackContent>
          )}
        </TooltipWrapper>
      )}
    </BadgeContainer>
  );
};
