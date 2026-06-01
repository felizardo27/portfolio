import React, { useEffect, useRef, useState } from "react";
import { useLanguageStore } from "../../context/useLanguageStore";
import { GitCommit, Radio } from "lucide-react";
import {
  HeatmapContainer,
  HeatmapHeader,
  FeedStatus,
  GridDecoration,
  GridDecBox,
  ShimmerGrid,
} from "./styles";

interface GitHubCommitDay {
  date: string;
  count: number;
  commits: string[];
  color?: string;
  level?: string;
}

interface GitHubContributionsResponse {
  username: string;
  totalContributions: number;
  totalCommitContributions: number;
  totalPullRequestContributions: number;
  totalIssueContributions: number;
  totalPullRequestReviewContributions: number;
  restrictedContributionsCount: number;
  days: GitHubCommitDay[];
}

export const GithubHeatmap: React.FC = () => {
  const { language } = useLanguageStore();

  const hasFetchedRef = useRef(false);

  const [commitDays, setCommitDays] = useState<GitHubCommitDay[]>([]);
  const [totalCommits, setTotalCommits] = useState<number>(0);
  const [fetchState, setFetchState] = useState<
    "loading" | "success" | "fallback"
  >("loading");
  const [hoveredDay, setHoveredDay] = useState<GitHubCommitDay | null>(null);

  const isEn = language === "en";

  useEffect(() => {
    if (hasFetchedRef.current) return;

    hasFetchedRef.current = true;

    const daysCount = 168;

    const formatLocalDate = (date: Date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");

      return `${year}-${month}-${day}`;
    };

    const buildEmptyDays = () => {
      const days: GitHubCommitDay[] = [];

      for (let i = daysCount - 1; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);

        days.push({
          date: formatLocalDate(date),
          count: 0,
          commits: [],
        });
      }

      return days;
    };

    const getSeededDays = (days: GitHubCommitDay[]) => {
      const mockMessages = [
        "refactor: optimize structure and performance",
        "feat: add multi-language support toggle mechanisms",
        "style: modify container margins and spacing constants",
        "fix: avoid state updates during loading transitions",
        "docs: document Firebase backend schema definitions",
        "chore: bundle app dependencies with dev packages",
      ];

      return days.map((day, idx) => {
        let hash = 0;

        for (let s = 0; s < day.date.length; s++) {
          hash = day.date.charCodeAt(s) + ((hash << 5) - hash);
        }

        hash = Math.abs(hash);

        const dateObj = new Date(`${day.date}T00:00:00`);
        const dayOfWeek = dateObj.getDay();

        let count = 0;

        if (dayOfWeek === 0 || dayOfWeek === 6) {
          if (hash % 10 < 2) {
            count = hash % 3;
          }
        } else {
          const value = hash % 9;

          if (value === 0) count = 0;
          else if (value < 3) count = 1 + (hash % 2);
          else if (value < 6) count = 3 + (hash % 3);
          else count = 5 + (hash % 4);
        }

        const commits = Array.from({ length: count }).map(
          (_, commitIdx) => mockMessages[(idx + commitIdx) % mockMessages.length],
        );

        return {
          ...day,
          count,
          commits,
        };
      });
    };

    const getGithubContributions = async () => {
      setFetchState("loading");

      try {
        const response = await fetch("/api/github-contributions");

        if (!response.ok) {
          throw new Error(`GitHub contributions API error: ${response.status}`);
        }

        const data = (await response.json()) as GitHubContributionsResponse;

        if (!Array.isArray(data.days)) {
          throw new Error("Invalid GitHub contributions response");
        }

        setCommitDays(data.days);
        setTotalCommits(data.totalContributions);
        setFetchState("success");
      } catch (error) {
        console.info("GitHub contributions unavailable:", error);

        const emptyDays = buildEmptyDays();
        const seededDays = getSeededDays(emptyDays);

        setCommitDays(seededDays);
        setTotalCommits(seededDays.reduce((acc, curr) => acc + curr.count, 0));
        setFetchState("fallback");
      }
    };

    getGithubContributions();
  }, []);

  const getCommitLevel = (count: number) => {
    if (count === 0) return 0;
    if (count <= 2) return 1;
    if (count <= 4) return 2;
    return 3;
  };

  const formatDateString = (dateStr: string) => {
    try {
      const option: Intl.DateTimeFormatOptions = {
        day: "numeric",
        month: "short",
      };

      const dateObj = new Date(`${dateStr}T00:00:00`);

      return dateObj.toLocaleDateString(isEn ? "en-US" : "pt-BR", option);
    } catch {
      return dateStr;
    }
  };

  const renderHeader = () => {
    if (hoveredDay) {
      const formattedDate = formatDateString(hoveredDay.date);
      const contributionCount = hoveredDay.count;

      const contributionLabel = isEn
        ? `${contributionCount} contribution${
            contributionCount === 1 ? "" : "s"
          }`
        : `${contributionCount} contribuiç${
            contributionCount === 1 ? "ão" : "ões"
          }`;

      return (
        <HeatmapHeader>
          <span>{formattedDate}</span>

          <FeedStatus
            $pulseColor={contributionCount > 0 ? "#10B981" : "#64748B"}
          >
            <GitCommit size={10} />
            {contributionLabel}
          </FeedStatus>
        </HeatmapHeader>
      );
    }

    return (
      <HeatmapHeader>
        <span>GitHub</span>

        <FeedStatus
          $pulseColor={fetchState === "success" ? "#10B981" : "#FFB703"}
        >
          <Radio
            size={10}
            className={fetchState === "loading" ? "animate-pulse" : ""}
          />

          {fetchState === "loading" && (isEn ? "SYNCING..." : "SINC_LOGS...")}

          {fetchState === "success" &&
            (isEn
              ? `live // ${totalCommits} contributions`
              : `live // ${totalCommits} contribuições`)}

          {fetchState === "fallback" &&
            (isEn
              ? `preview // ${totalCommits} contributions`
              : `preview // ${totalCommits} contribuições`)}
        </FeedStatus>
      </HeatmapHeader>
    );
  };

  return (
    <HeatmapContainer>
      {renderHeader()}

      {fetchState === "loading" ? (
        <ShimmerGrid>
          {Array.from({ length: 168 }).map((_, idx) => (
            <div key={idx} />
          ))}
        </ShimmerGrid>
      ) : (
        <GridDecoration>
          {commitDays.map((day) => {
            const level = getCommitLevel(day.count);
            const active = day.count > 0;

            return (
              <GridDecBox
                key={day.date}
                $active={active}
                $level={level}
                onMouseEnter={() => setHoveredDay(day)}
                onMouseLeave={() => setHoveredDay(null)}
                title={`${day.count} contributions on ${day.date}`}
              />
            );
          })}
        </GridDecoration>
      )}
    </HeatmapContainer>
  );
};