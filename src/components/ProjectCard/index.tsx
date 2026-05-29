import React from 'react';
import { Project } from '../../interfaces/firebaseTypes';
import { useLanguageStore } from '../../context/useLanguageStore';
import { Badge } from '../Badge';
import { ExternalLink, Github } from 'lucide-react';
import {
  StyledCard,
  Header,
  TitleWrapper,
  CategoryName,
  Title,
  Description,
  TechList,
  TechTag,
  Footer,
  LinksWrapper,
  TelemetryMetric,
  MetricLabel,
  MetricValue,
  AnchorLink,
  GlowAccent,
  ImageContainer,
  CardImage
} from './styles';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { language } = useLanguageStore();

  const title = project.title;
  const category = project.category[language];
  const description = project.description[language];
  const technologies = project.technologies;
  const status = project.status;
  const metrics = project.metrics;

  const hasLive = !!project.liveUrl;
  const hasGithub = !!project.githubUrl;

  const currentStatus = hasLive ? 'Live' : (hasGithub ? 'Source' : project.status);
  const badgeVariant = hasLive ? 'green' : (hasGithub ? 'blue' : 'slate');
  const shouldPulse = hasLive;

  return (
    <StyledCard $isFeatured={false}>
      <div>
        <Header style={{ marginBottom: '1rem' }}>
          <TitleWrapper>
            {category && <CategoryName>{category}</CategoryName>}
            <Title>{title}</Title>
          </TitleWrapper>
          <Badge variant={badgeVariant} pulse={shouldPulse}>
            {currentStatus}
          </Badge>
        </Header>

        {project.imageUrl && (
          <ImageContainer>
            <CardImage
              src={project.imageUrl}
              alt={title}
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </ImageContainer>
        )}

        <Description style={{ marginTop: '1rem', marginBottom: '1.25rem' }}>
          {description}
        </Description>

        <TechList>
          {technologies.map((tech) => (
            <TechTag key={tech}>{tech}</TechTag>
          ))}
        </TechList>
      </div>

      <Footer>
        {metrics ? (
          <TelemetryMetric>
            <MetricLabel>{metrics.label[language]}</MetricLabel>
            <MetricValue>{metrics.value}</MetricValue>
          </TelemetryMetric>
        ) : (
          <div />
        )}

        <LinksWrapper>
          {project.githubUrl && (
            <AnchorLink href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github size={13} />
              <span>Code</span>
            </AnchorLink>
          )}
          {project.liveUrl && (
            <AnchorLink href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={13} />
              <span>{language === 'pt' ? 'Abrir' : 'Launch'}</span>
            </AnchorLink>
          )}
        </LinksWrapper>
      </Footer>
    </StyledCard>
  );
};
export type { ProjectCardProps };
