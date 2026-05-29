import React from 'react';
import { useLanguageStore } from '../../../context/useLanguageStore';
import { Container } from '../../Container';
import { SectionHeader } from '../../SectionHeader';
import { ProjectCard } from '../../ProjectCard';
import { Button } from '../../Button';
import { Github } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../../ScrollReveal';
import { dataProjects } from '../../../data/dataProjects';
import { dataSocialLinks } from '../../../data/dataSocialLinks';
import { ProjectProps, SocialLinkProps } from '../../../interfaces/firebaseTypes';
import {
  StyledProjectsSection,
  OthersGrid,
  GithubLinkWrapper,
  CodePulse
} from './styles';

export const ProjectsSection: React.FC = () => {
  const { language } = useLanguageStore();
  const { data } = dataProjects();
  const { data: socialData } = dataSocialLinks();

  const isEn = language === 'en';

  const sectionTitle = data?.title?.[language === 'en' ? 'en' : 'pt'] || (isEn ? 'Deploy Registry' : 'Registro de Projetos');
  const rawProjects = data?.data ? (Object.values(data.data) as ProjectProps[]) : [];

  const projects = rawProjects.map((p, idx) => {
    const techRecord = p.technologies || {};
    const technologies = Array.isArray(techRecord) ? techRecord : Object.values(techRecord);
    
    const getDesc = (descField: any) => {
      if (!descField) return '';
      if (typeof descField === 'string') return descField;
      if (typeof descField === 'object') {
        return Object.values(descField).join(' ');
      }
      return '';
    };

    const descEn = getDesc(p.description?.en);
    const descPt = getDesc(p.description?.pt);

    let catEn = '';
    let catPt = '';
    if ((p as any).category) {
      const cat = (p as any).category;
      if (typeof cat === 'string') {
        catEn = cat;
        catPt = cat;
      } else if (typeof cat === 'object') {
        catEn = cat.en || cat.enUs || cat.pt || '';
        catPt = cat.pt || cat.ptBr || cat.en || '';
      }
    }

    let finalStatus: 'Live' | 'MVP' | 'WIP' | 'Study' | 'Archived' = 'Study';
    const possibleStatuses = ['Live', 'MVP', 'WIP', 'Study', 'Archived'];
    const pStatus = (p as any).status;
    if (pStatus && possibleStatuses.includes(pStatus)) {
      finalStatus = pStatus as 'Live' | 'MVP' | 'WIP' | 'Study' | 'Archived';
    } else if (p.buttons?.liveUrl) {
      finalStatus = 'Live';
    }

    return {
      id: p.title ? p.title.toLowerCase().replace(/\s+/g, '_') : `proj_${idx}`,
      title: p.title || '',
      category: {
        en: catEn,
        pt: catPt
      },
      description: {
        en: descEn,
        pt: descPt
      },
      technologies,
      status: finalStatus,
      githubUrl: p.buttons?.repository || undefined,
      liveUrl: p.buttons?.liveUrl || undefined,
      imageUrl: p.imageUrl || undefined,
      isFeatured: idx < 3
    };
  });

  const socialArray = socialData ? (Object.values(socialData) as SocialLinkProps[]) : [];
  const baseGithub = socialArray.find(s => s.name?.toLowerCase().includes('github'))?.url || 'https://github.com/felizardo27';
  const githubRepoUrl = baseGithub.includes('?') ? baseGithub : `${baseGithub}?tab=repositories`;

  return (
    <StyledProjectsSection id="projects">
      <Container>
        <ScrollReveal direction="up" delay={0.05}>
          <SectionHeader
            prefix="04"
            title={sectionTitle}
            description={isEn 
              ? 'Fully-staged software applications, SaaS systems, and core developer tools.' 
              : 'Sistemas funcionais em produção, plataformas autorais SaaS e ferramentas de produtividade para desenvolvedores.'}
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
              onClick={() => window.open(githubRepoUrl, '_blank', 'noreferrer')}
            >
              {isEn ? 'Explore All Github Repositories' : 'Explorar Repositórios no GitHub'}
            </Button>
          </GithubLinkWrapper>
        </ScrollReveal>
        
        <ScrollReveal direction="none" delay={0.3} duration={0.8}>
          <CodePulse>
            // {isEn ? 'git commit -am "production-build-stable"' : 'git commit -am "producao-estavel"'}
          </CodePulse>
        </ScrollReveal>
      </Container>
    </StyledProjectsSection>
  );
};

