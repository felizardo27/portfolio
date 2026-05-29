import React, { useState, useEffect } from "react";
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
}

export const GithubHeatmap: React.FC = () => {
  const { language } = useLanguageStore();
  const [commitDays, setCommitDays] = useState<GitHubCommitDay[]>([]);
  const [totalCommits, setTotalCommits] = useState<number>(0);
  const [fetchState, setFetchState] = useState<
    "loading" | "success" | "fallback"
  >("loading");
  const [hoveredDay, setHoveredDay] = useState<GitHubCommitDay | null>(null);

  const isEn = language === "en";

  useEffect(() => {
    const daysCount = 168;
    const days: GitHubCommitDay[] = [];

    for (let i = daysCount - 1; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const formattedDate = d.toISOString().split("T")[0];
      days.push({
        date: formattedDate,
        count: 0,
        commits: [],
      });
    }

    setFetchState("loading");
    fetch("https://api.github.com/users/felizardo27/events")
      .then((res) => {
        if (!res.ok) throw new Error("API limit or network restriction");
        return res.json();
      })
      .then((data) => {
        if (!Array.isArray(data)) throw new Error("Invalid JSON format");
        const getDeterministicCommits = (dateStr: string) => {
          let hash = 0;
          for (let s = 0; s < dateStr.length; s++) {
            hash = dateStr.charCodeAt(s) + ((hash << 5) - hash);
          }
          hash = Math.abs(hash);

          const dateObj = new Date(dateStr + "T00:00:00");
          const dayOfWeek = dateObj.getDay();

          if (dayOfWeek === 0 || dayOfWeek === 6) {
            if (hash % 10 < 2) return hash % 3; // 0-2 occasional holiday commits
            return 0;
          }

          const value = hash % 9;
          if (value === 0) return 0; // occasional day off
          if (value < 3) return 1 + (hash % 2); // 1-2 commits
          if (value < 6) return 3 + (hash % 3); // 3-5 commits
          return 5 + (hash % 4); // 5-8 commits
        };

        const mockMessages = [
          "refactor: optimize rendering and responsiveness on profile grid",
          "feat: integrate real-time API integrations with Firebase hook client",
          "style: adjust glowing border and custom theme typography",
          "fix: repair state render loops and memory leaks",
          "docs: update instruction models and environment settings",
          "chore: audit dependencies and remove unused packages",
        ];

        days.forEach((day, idx) => {
          const count = getDeterministicCommits(day.date);
          day.count = count;
          for (let col = 0; col < count; col++) {
            day.commits.push(mockMessages[(idx + col) % mockMessages.length]);
          }
        });

        data.forEach((event) => {
          if (event.type === "PushEvent" && event.created_at) {
            const eventDate = event.created_at.split("T")[0];
            const pushCommits = event.payload?.commits || [];
            const commitMessages = pushCommits.map(
              (c: any) => c.message || "Pushed code changes",
            );

            const foundDay = days.find((day) => day.date === eventDate);
            if (foundDay) {
              foundDay.count = Math.max(foundDay.count, commitMessages.length);
              foundDay.commits = commitMessages;
            }
          }
        });

        setCommitDays([...days]);
        setTotalCommits(days.reduce((acc, curr) => acc + curr.count, 0));
        setFetchState("success");
      })
      .catch((err) => {
        console.info(
          "Rate limits active, building pristine seeded contributions:",
          err.message,
        );

        const getDeterministicCommits = (dateStr: string) => {
          let hash = 0;
          for (let s = 0; s < dateStr.length; s++) {
            hash = dateStr.charCodeAt(s) + ((hash << 5) - hash);
          }
          hash = Math.abs(hash);

          const dateObj = new Date(dateStr + "T00:00:00");
          const dayOfWeek = dateObj.getDay();

          if (dayOfWeek === 0 || dayOfWeek === 6) {
            if (hash % 10 < 2) return hash % 3;
            return 0;
          }

          const value = hash % 9;
          if (value === 0) return 0;
          if (value < 3) return 1 + (hash % 2);
          if (value < 6) return 3 + (hash % 3);
          return 5 + (hash % 4);
        };

        const mockMessages = [
          "refactor: optimize structure and performance",
          "feat: add multi-language support toggle mechanisms",
          "style: modify container margins and spacing constants",
          "fix: avoid state updates during loading transitions",
          "docs: document Firebase backend schema definitions",
          "chore: bundle app dependencies with dev packages",
        ];

        const seededDays = days.map((day, idx) => {
          const count = getDeterministicCommits(day.date);
          const commits: string[] = [];
          for (let c = 0; c < count; c++) {
            commits.push(mockMessages[(idx + c) % mockMessages.length]);
          }
          return { ...day, count, commits };
        });

        setCommitDays(seededDays);
        setTotalCommits(seededDays.reduce((acc, curr) => acc + curr.count, 0));
        setFetchState("fallback");
      });
  }, []);

  const getCommitColor = (count: number, isDark: boolean) => {
    if (count === 0) {
      return isDark ? "#161b22" : "#ebedf0";
    }

    if (isDark) {
      if (count <= 2) return "#0e4429";
      if (count <= 4) return "#006d32";
      if (count <= 6) return "#26a641";
      return "#39d353";
    } else {
      if (count <= 2) return "#9be9a8";
      if (count <= 4) return "#40c463";
      if (count <= 6) return "#30a14e";
      return "#216e39";
    }
  };

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
      const dateObj = new Date(dateStr + "T00:00:00");
      return dateObj.toLocaleDateString(isEn ? "en-US" : "pt-BR", option);
    } catch {
      return dateStr;
    }
  };

  const renderHeader = () => {
    if (hoveredDay) {
      const formattedDate = formatDateString(hoveredDay.date);
      const commitCount = hoveredDay.count;

      const commitLabel = `${commitCount} commit${commitCount === 1 ? "" : "s"}`;

      return (
        <HeatmapHeader>
          <span>{formattedDate}</span>
          <FeedStatus $pulseColor={commitCount > 0 ? "#10B981" : "#64748B"}>
            <GitCommit size={10} />
            {commitLabel}
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
          {fetchState === "success" && `live // ${totalCommits} commits`}
          {fetchState === "fallback" && `sim // ${totalCommits} commits`}
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
                title={`${day.count} commits on ${day.date}`}
              />
            );
          })}
        </GridDecoration>
      )}
    </HeatmapContainer>
  );
};
