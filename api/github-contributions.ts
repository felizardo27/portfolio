interface GitHubContributionDay {
  date: string;
  contributionCount: number;
  color: string;
  contributionLevel: string;
}

interface GitHubContributionWeek {
  contributionDays: GitHubContributionDay[];
}

interface GitHubGraphQLResponse {
  data?: {
    viewer?: {
      login: string;
      contributionsCollection?: {
        restrictedContributionsCount: number;
        totalCommitContributions: number;
        totalPullRequestContributions: number;
        totalIssueContributions: number;
        totalPullRequestReviewContributions: number;
        contributionCalendar?: {
          totalContributions: number;
          weeks: GitHubContributionWeek[];
        };
      };
    };
  };
  errors?: {
    message: string;
    type?: string;
  }[];
}

const sendJson = (res: any, status: number, data: unknown) => {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate=86400");
  return res.status(status).json(data);
};

const formatUTCDate = (date: Date) => {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

export default async function handler(req: any, res: any) {
  console.log("[github-contributions] Function called");

  if (req.method !== "GET") {
    return sendJson(res, 405, {
      message: "Method not allowed",
    });
  }

  const githubToken = process.env.GITHUB_TOKEN;

  if (!githubToken) {
    return sendJson(res, 500, {
      message: "Missing GITHUB_TOKEN environment variable",
    });
  }

  const now = new Date();

  const from = new Date();
  from.setUTCDate(now.getUTCDate() - 167);

  const fromDate = formatUTCDate(from);
  const toDate = formatUTCDate(now);

  const query = `
    query GetViewerContributions($from: DateTime!, $to: DateTime!) {
      viewer {
        login
        contributionsCollection(from: $from, to: $to) {
          restrictedContributionsCount
          totalCommitContributions
          totalPullRequestContributions
          totalIssueContributions
          totalPullRequestReviewContributions
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
                color
                contributionLevel
              }
            }
          }
        }
      }
    }
  `;

  try {
    const githubResponse = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${githubToken}`,
        Accept: "application/vnd.github+json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: {
          from: `${fromDate}T00:00:00Z`,
          to: `${toDate}T23:59:59Z`,
        },
      }),
    });

    const githubJson = (await githubResponse.json()) as GitHubGraphQLResponse;

    console.log("[github-contributions] GitHub response:", {
      status: githubResponse.status,
      ok: githubResponse.ok,
      errors: githubJson.errors,
      viewer: githubJson.data?.viewer?.login,
    });

    if (!githubResponse.ok || githubJson.errors?.length) {
      return sendJson(res, 500, {
        message: "GitHub GraphQL request failed",
        status: githubResponse.status,
        errors: githubJson.errors,
      });
    }

    const viewer = githubJson.data?.viewer;
    const collection = viewer?.contributionsCollection;
    const calendar = collection?.contributionCalendar;

    if (!viewer || !collection || !calendar) {
      return sendJson(res, 404, {
        message: "Contribution calendar not found",
      });
    }

    const days = calendar.weeks
      .flatMap((week) => week.contributionDays)
      .filter((day) => day.date >= fromDate && day.date <= toDate)
      .map((day) => ({
        date: day.date,
        count: day.contributionCount,
        color: day.color,
        level: day.contributionLevel,
        commits:
          day.contributionCount > 0
            ? [`${day.contributionCount} GitHub contribution(s)`]
            : [],
      }));

    return sendJson(res, 200, {
      username: viewer.login,
      totalContributions: calendar.totalContributions,
      totalCommitContributions: collection.totalCommitContributions,
      totalPullRequestContributions: collection.totalPullRequestContributions,
      totalIssueContributions: collection.totalIssueContributions,
      totalPullRequestReviewContributions:
        collection.totalPullRequestReviewContributions,
      restrictedContributionsCount: collection.restrictedContributionsCount,
      days,
    });
  } catch (error) {
    return sendJson(res, 500, {
      message: "Unexpected error while fetching GitHub contributions",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
}