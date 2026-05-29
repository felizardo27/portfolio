import React from "react";
import { useLanguageStore } from "../../../context/useLanguageStore";
import { Container } from "../../Container";
import { SectionHeader } from "../../SectionHeader";
import { TimelineItem } from "../../TimelineItem";
import { ScrollReveal } from "../../ScrollReveal";
import { dataExperience } from "../../../data/dataExperience";
import { ListItemProps } from "../../../interfaces/firebaseTypes";
import { StyledExperienceSection, TimelineWrapper } from "./styles";

export const ExperienceSection: React.FC = () => {
  const { language } = useLanguageStore();
  const { data } = dataExperience();

  const isEn = language === "en";

  const sectionTitle =
    data?.title || (isEn ? "Deployment Timeline" : "Histórico de Atuação");
  const items = data?.data ? (Object.values(data.data) as ListItemProps[]) : [];

  const splitDesc = (desc?: string): string[] => {
    if (!desc) return [];
    return desc
      .split(/[•\n]/)
      .map((s) => s.replace(/^[•\s\-\*]+/g, "").trim())
      .filter((s) => s.length > 0);
  };

  const experiences = items.map((item, idx) => {
    const rawTags = (item as any).technologies || (item as any).tags;
    let technologies: string[] = [];
    if (rawTags) {
      technologies = Array.isArray(rawTags) ? rawTags : Object.values(rawTags);
    } else {
      const text =
        `${item.title} ${item.subTitle} ${item.description}`.toLowerCase();
      const possible = [
        "React",
        "React Native",
        "TypeScript",
        "JavaScript",
        "Python",
        "Go",
        "PHP",
        "Ruby",
        "Java",
        "Docker",
        "SQLite",
        "Git",
        "CSS",
        "HTML",
        "SQL",
        "AdonisJS",
        "C#",
        "VMware",
        "PowerBI",
        "Server",
        "Networks",
        "Firewall",
        "Agile",
      ];
      const matches: string[] = [];
      possible.forEach((tech) => {
        if (text.includes(tech.toLowerCase())) {
          matches.push(tech);
        }
      });
      technologies = matches.length > 0 ? matches : [];
    }

    return {
      id: `exp_${idx}`,
      company: item.subTitle || "",
      role: {
        en: item.title || "",
        pt: item.title || "",
      },
      period: {
        en: item.date || "",
        pt: item.date || "",
      },
      responsibilities: {
        en: splitDesc(item.description),
        pt: splitDesc(item.description),
      },
      technologies,
    };
  });

  return (
    <StyledExperienceSection id="experience">
      <Container>
        <ScrollReveal direction="up" delay={0.05}>
          <SectionHeader
            prefix="05"
            title={sectionTitle}
            description={
              isEn
                ? "Professional experience across web, mobile, backend, and cloud projects, with a focus on practical technical impact."
                : "Experiência profissional em projetos web, mobile, backend e cloud, com foco em impacto técnico prático."
            }
          />
        </ScrollReveal>

        <TimelineWrapper>
          {experiences.map((exp, idx) => (
            <TimelineItem key={exp.id} experience={exp} index={idx} />
          ))}
        </TimelineWrapper>
      </Container>
    </StyledExperienceSection>
  );
};
