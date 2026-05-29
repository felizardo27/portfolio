import React from "react";
import { Github } from "lucide-react";

import { useLanguageStore } from "../../../context/useLanguageStore";
import { Container } from "../../Container";
import { SectionHeader } from "../../SectionHeader";
import { ProjectCard } from "../../ProjectCard";
import { Button } from "../../Button";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "../../ScrollReveal";
import { dataProjects } from "../../../data/dataProjects";
import { dataSocialLinks } from "../../../data/dataSocialLinks";
import {
  ProjectProps,
  SocialLinkProps,
} from "../../../interfaces/firebaseTypes";
import { StyledProjectsSection, OthersGrid, GithubLinkWrapper } from "./styles";

type ProjectStatus = "Live" | "Source";

export const ProjectsSection: React.FC = () => {
  const { language } = useLanguageStore();
  const { data } = dataProjects();
  const { data: socialData } = dataSocialLinks();

  const isEn = language === "en";

  const sectionTitle =
    typeof data?.title === "object"
      ? data.title?.[isEn ? "en" : "pt"]
      : data?.title || (isEn ? "Selected Projects" : "Projetos Selecionados");

  const rawProjects = data?.data
    ? (Object.values(data.data) as ProjectProps[])
    : [];

  const getText = (value: unknown): string => {
    if (!value) return "";

    if (typeof value === "string") {
      return value;
    }

    if (typeof value === "object") {
      const record = value as Record<string, unknown>;

      const localizedValue =
        record[isEn ? "en" : "pt"] ||
        record[isEn ? "enUs" : "ptBr"] ||
        record.pt ||
        record.en;

      if (typeof localizedValue === "string") {
        return localizedValue;
      }

      return Object.values(record)
        .filter((item): item is string => typeof item === "string")
        .join(" ");
    }

    return "";
  };

  const projects = rawProjects.map((project, index) => {
    const techRecord = project.technologies || {};
    const technologies = Array.isArray(techRecord)
      ? techRecord
      : Object.values(techRecord);

    const liveUrl = project.buttons?.liveUrl || undefined;
    const githubUrl = project.buttons?.repository || undefined;

    const status: ProjectStatus | undefined = liveUrl
      ? "Live"
      : githubUrl
        ? "Source"
        : undefined;

    return {
      id: project.title
        ? project.title.toLowerCase().replace(/\s+/g, "_")
        : `project_${index}`,
      title: project.title || "",
      category: {
        en: getText((project as any).category),
        pt: getText((project as any).category),
      },
      description: {
        en: getText(project.description?.en || project.description),
        pt: getText(project.description?.pt || project.description),
      },
      technologies,
      status,
      githubUrl,
      liveUrl,
      imageUrl: project.imageUrl || undefined,
    };
  });

  const socialArray = socialData
    ? (Object.values(socialData) as SocialLinkProps[])
    : [];

  const baseGithub =
    socialArray.find((social) => social.name?.toLowerCase().includes("github"))
      ?.url || "https://github.com/felizardo27";

  const githubRepoUrl = baseGithub.includes("?")
    ? baseGithub
    : `${baseGithub}?tab=repositories`;

  return (
    <StyledProjectsSection id="projects">
      <Container>
        <ScrollReveal direction="up" delay={0.05}>
          <SectionHeader
            prefix="04"
            title={sectionTitle}
            description={
              isEn
                ? "Selected web, mobile, SaaS, and developer-focused projects built to solve real problems."
                : "Projetos selecionados de web, mobile, SaaS e ferramentas para desenvolvedores, criados para resolver problemas reais."
            }
          />
        </ScrollReveal>

        <StaggerContainer staggerChildren={0.06}>
          <OthersGrid>
            {projects.map((project) => (
              <StaggerItem key={project.id} direction="up" scale={0.97}>
                <ProjectCard project={project} />
              </StaggerItem>
            ))}
          </OthersGrid>
        </StaggerContainer>

        <ScrollReveal direction="up" delay={0.2} duration={0.6}>
          <GithubLinkWrapper>
            <Button
              variant="outline"
              icon={<Github />}
              onClick={() =>
                window.open(githubRepoUrl, "_blank", "noopener,noreferrer")
              }
            >
              {isEn
                ? "Explore all GitHub repositories"
                : "Ver todos os repositórios no GitHub"}
            </Button>
          </GithubLinkWrapper>
        </ScrollReveal>
      </Container>
    </StyledProjectsSection>
  );
};
