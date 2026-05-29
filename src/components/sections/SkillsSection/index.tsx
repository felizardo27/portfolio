import React from 'react';
import { useLanguageStore } from '../../../context/useLanguageStore';
import { Container } from '../../Container';
import { SectionHeader } from '../../SectionHeader';
import { Code2, Cpu, Wrench } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../../ScrollReveal';
import { dataSkills } from '../../../data/dataSkills';
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
  TelemetryLine
} from './styles';

export const SkillsSection: React.FC = () => {
  const { language } = useLanguageStore();
  const { data: skillsData } = dataSkills();

  const isEn = language === 'en';

  const defaultTitle = isEn ? 'Skills' : 'Habilidades';
  const displayTitle = skillsData?.title?.[isEn ? 'enUs' : 'ptBr'] || defaultTitle;

  // Header icons based on category indices
  const getHeaderIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Code2 size={16} />;
      case 1: return <Cpu size={16} />;
      default: return <Wrench size={16} />;
    }
  };

  // Falling back to a clean list if skillsData is not ready
  const rawCategories = skillsData?.data || [
    {
      title: { enUs: "Languages & Databases", ptBr: "Linguagens & Bancos de Dados" },
      icons: [
        { name: "JavaScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" },
        { name: "TypeScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg" },
        { name: "Python", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" }
      ]
    }
  ];

  const categories = Array.isArray(rawCategories) ? rawCategories : Object.values(rawCategories);


  return (
    <SkillsWrapper id="skills">
      <Container>
        <ScrollReveal direction="up" delay={0.05}>
          <SectionHeader
            prefix="03"
            title={displayTitle}
            description={isEn 
              ? 'Fully-loaded compiler targets, databases, and frameworks driving my active stacks.' 
              : 'Filtro por camadas do ecossistema, compiladores, frameworks e utilitários que domino no dia a dia.'}
          />
        </ScrollReveal>

        {(categories as any[]).map((cat: any, idx) => {
          const categoryTitle = cat.title?.[isEn ? 'enUs' : 'ptBr'] || '';
          const rawIcons = cat.icons || [];
          const icons = Array.isArray(rawIcons) ? rawIcons : Object.values(rawIcons);

          if (icons.length === 0) return null;

          return (
            <ScrollReveal key={idx} direction="up" delay={0.1 * idx} duration={0.6}>
              <CategoryGroup>
                <CategoryHeader>
                  <CategoryIcon>{getHeaderIcon(idx)}</CategoryIcon>
                  <CategoryTitle>{categoryTitle}</CategoryTitle>
                  <TelemetryLine>STACK_LAYER // ACTIVE</TelemetryLine>
                </CategoryHeader>

                <StaggerContainer staggerChildren={0.04}>
                  <SkillsGrid>
                    {icons.map((icon, iconIdx) => (
                      <StaggerItem key={iconIdx} direction="up" scale={0.93}>
                        <TechCard>
                          {icon.url ? (
                            <TechIconImage 
                              src={icon.url} 
                              alt={icon.name} 
                              referrerPolicy="no-referrer"
                              loading="lazy"
                            />
                          ) : null}
                          <TechName>{icon.name}</TechName>
                        </TechCard>
                      </StaggerItem>
                    ))}
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
