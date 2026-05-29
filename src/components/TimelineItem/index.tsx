import React from 'react';
import { useLanguageStore } from '../../context/useLanguageStore';
import { useReducedMotion } from 'motion/react';
import { Experience } from '../../interfaces/firebaseTypes';
import {
  ItemContainer,
  TimeColumn,
  NodeIndicator,
  ContentColumn,
  Header,
  Role,
  CompanyName,
  BulletList,
  BulletItem,
  TechList,
  TechItem,
  TimeSub,
  DesktopTime,
  ItemContentMobileFix
} from './styles';

interface TimelineItemProps {
  experience: Experience;
  index?: number;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ experience, index = 0 }) => {
  const { language } = useLanguageStore();
  const shouldReduceMotion = useReducedMotion();

  const role = experience.role[language];
  const period = experience.period[language];
  const responsibilities = experience.responsibilities[language];
  const company = experience.company;
  const technologies = experience.technologies;

  const variants: any = shouldReduceMotion ? {} : {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <ItemContainer
      initial={shouldReduceMotion ? undefined : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={shouldReduceMotion ? undefined : { once: true, amount: 0.15 }}
      variants={variants}
    >
      <TimeColumn>
        <NodeIndicator />
        <DesktopTime>{period}</DesktopTime>
      </TimeColumn>

      <ContentColumn>
        <ItemContentMobileFix>
          <Header>
            <Role>
              {role}
              <TimeSub>| {period}</TimeSub>
            </Role>
            <CompanyName>{company}</CompanyName>
          </Header>

          <BulletList>
            {responsibilities.map((resp, index) => (
              <BulletItem key={index}>{resp}</BulletItem>
            ))}
          </BulletList>

          <TechList>
            {technologies.map((tech) => (
              <TechItem key={tech}>{tech}</TechItem>
            ))}
          </TechList>
        </ItemContentMobileFix>
      </ContentColumn>
    </ItemContainer>
  );
};
export type { TimelineItemProps };
