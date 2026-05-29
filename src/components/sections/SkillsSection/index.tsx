import React from "react";
import { Code2, Cpu, Wrench } from "lucide-react";

import { useLanguageStore } from "../../../context/useLanguageStore";
import { Container } from "../../Container";
import { SectionHeader } from "../../SectionHeader";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "../../ScrollReveal";
import { dataSkills } from "../../../data/dataSkills";

import {
  SkillsWrapper,
  CategoryGroup,
  CategoryHeader,
  CategoryTitle,
  CategoryIcon,
  SkillsGrid,
  TechCard,
  TechIconImage,
  TechName,
  TelemetryLine,
} from "./styles";

export const SkillsSection: React.FC = () => {
  const { language } = useLanguageStore();
  const { data: skillsData } = dataSkills();

  const isEn = language === "en";

  const getLocalizedText = (
    value: any,
    fallback = ""
  ): string => {
    if (!value) return fallback;

    if (typeof value === "string") {
      return value;
    }

    return (
      value[isEn ? "enUs" : "ptBr"] ||
      value[isEn ? "en" : "pt"] ||
      value.enUs ||
      value.en ||
      value.ptBr ||
      value.pt ||
      fallback
    );
  };

  const getHeaderIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Code2 size={16} />;
      case 1:
        return <Cpu size={16} />;
      default:
        return <Wrench size={16} />;
    }
  };

  const displayTitle = getLocalizedText(
    skillsData?.title,
    isEn ? "Skills" : "Habilidades"
  );

  const rawCategories = skillsData?.data
    ? Array.isArray(skillsData.data)
      ? skillsData.data
      : Object.values(skillsData.data)
    : [];

  const categories = rawCategories;

  return (
    <SkillsWrapper id="skills">
      <Container>
        <ScrollReveal direction="up" delay={0.05}>
          <SectionHeader
            prefix="03"
            title={displayTitle}
            description={
              isEn
                ? "Technologies I use to build web, mobile, APIs, and cloud-based products."
                : "Tecnologias que uso para construir produtos web, mobile, APIs e soluções em nuvem."
            }
          />
        </ScrollReveal>

        {categories.map((category, categoryIndex) => {
          const categoryTitle = getLocalizedText(category.title);

          const rawIcons = category.icons || [];
          const icons = Array.isArray(rawIcons)
            ? rawIcons
            : Object.values(rawIcons);

          if (icons.length === 0) return null;

          return (
            <ScrollReveal
              key={categoryIndex}
              direction="up"
              delay={0.1 * categoryIndex}
              duration={0.6}
            >
              <CategoryGroup>
                <CategoryHeader>
                  <CategoryIcon>
                    {getHeaderIcon(categoryIndex)}
                  </CategoryIcon>

                  <CategoryTitle>{categoryTitle}</CategoryTitle>

                  <TelemetryLine>
                    {isEn ? "STACK_LAYER // ACTIVE" : "CAMADA_STACK // ATIVA"}
                  </TelemetryLine>
                </CategoryHeader>

                <StaggerContainer staggerChildren={0.04}>
                  <SkillsGrid>
                    {icons.map((icon, iconIndex) => {
                      if (!icon?.name) return null;

                      return (
                        <StaggerItem
                          key={`${icon.name}_${iconIndex}`}
                          direction="up"
                          scale={0.93}
                        >
                          <TechCard>
                            {icon.url && (
                              <TechIconImage
                                src={icon.url}
                                alt={icon.name}
                                referrerPolicy="no-referrer"
                                loading="lazy"
                              />
                            )}

                            <TechName>{icon.name}</TechName>
                          </TechCard>
                        </StaggerItem>
                      );
                    })}
                  </SkillsGrid>
                </StaggerContainer>
              </CategoryGroup>
            </ScrollReveal>
          );
        })}
      </Container>
    </SkillsWrapper>
  );
};