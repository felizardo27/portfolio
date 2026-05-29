import React from 'react';
import { useLanguageStore } from '../../../context/useLanguageStore';
import { Container } from '../../Container';
import { Badge } from '../../Badge';
import { Button } from '../../Button';
import { Github, Mail, Shield, FileText } from 'lucide-react';
import { GithubHeatmap } from '../../GithubHeatmap';
import { ScrollReveal } from '../../ScrollReveal';
import { dataSocialLinks } from '../../../data/dataSocialLinks';
import { SocialLinkProps } from '../../../interfaces/firebaseTypes';
import {
  StyledHeroSection,
  GridContainer,
  HeroContent,
  BadgeWrapper,
  Headline,
  Paragraph,
  CTAButtons,
  DashboardCard,
  DashboardHeader,
  TerminalIndicator,
  TechLine,
  TechLabel,
  TechValue,
  Dot
} from './styles';

interface HeroSectionProps {
  onViewResume?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onViewResume }) => {
  const { language } = useLanguageStore();
  const { data: socialData } = dataSocialLinks();

  const handleScrollTo = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isEn = language === 'en';

  const socialArray = socialData ? (Object.values(socialData) as SocialLinkProps[]) : [];
  const githubLink = socialArray.find(s => s.name?.toLowerCase().includes('github'))?.url || 'https://github.com/felizardo27';

  return (
    <StyledHeroSection id="home">
      <Container>
        <GridContainer>
          <HeroContent>
            <ScrollReveal direction="up" delay={0.1} duration={0.6}>
              <BadgeWrapper>
                <Badge variant="blue" pulse>
                  {isEn ? 'Remote Ready & Available' : 'Disponível para Remoto'}
                </Badge>
              </BadgeWrapper>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.2} duration={0.6}>
              <Headline>
                João Pedro Felizardo<br />
                <span>
                  {isEn 
                    ? 'Full Stack & Mobile Developer' 
                    : 'Desenvolvedor Full Stack e Mobile'}
                </span>
              </Headline>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3} duration={0.6}>
              <Paragraph>
                {isEn 
                  ? 'Developing responsive web and mobile applications with React, React Native, TypeScript, and Node.js.' 
                  : 'Desenvolvendo aplicativos web e mobile modernos com React, React Native, TypeScript e Node.js.'}
              </Paragraph>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.4} duration={0.6}>
              <CTAButtons>
                <Button 
                  variant="primary" 
                  icon={<Mail />} 
                  onClick={() => handleScrollTo('contact')}
                >
                  {isEn ? 'Contact Me' : 'Entre em Contato'}
                </Button>
                <Button 
                  variant="outline" 
                  icon={<FileText />}
                  onClick={onViewResume}
                >
                  {isEn ? 'View CV' : 'Ver Currículo'}
                </Button>
                <Button 
                  variant="secondary" 
                  icon={<Github />}
                  onClick={() => window.open(githubLink, '_blank', 'noreferrer')}
                >
                  GitHub
                </Button>
              </CTAButtons>
            </ScrollReveal>
          </HeroContent>


          {/* Decorative Command Center Widget */}
          <ScrollReveal direction="left" delay={0.25} duration={0.7} scale={0.98}>
            <DashboardCard>
              <DashboardHeader>
                <TerminalIndicator>
                  <Shield size={11} style={{ marginRight: '4px', verticalAlign: 'middle', display: 'inline' }} />
                  {isEn ? 'CORE_TELEMETRY.SYS' : 'TELEMETRIA_CORE.SYS'}
                </TerminalIndicator>
                <TechValue $pulseColor="#10B981">
                  <Dot color="#10B981" />
                  ONLINE
                </TechValue>
              </DashboardHeader>

              <TechLine>
                <TechLabel>{isEn ? 'LOCALE' : 'LOCALIZAÇÃO'}</TechLabel>
                <TechValue>{isEn ? 'Brazil // UTC-3' : 'Brasil // UTC-3'}</TechValue>
              </TechLine>

              <TechLine>
                <TechLabel>{isEn ? 'ROLE' : 'CARGO'}</TechLabel>
                <TechValue $pulseColor="#0066FF">
                  {isEn ? 'Full Stack & Mobile Developer' : 'Desenvolvedor Full Stack e Mobile'}
                </TechValue>
              </TechLine>

              <TechLine>
                <TechLabel>{isEn ? 'MAIN_STACK' : 'TECNOLOGIAS'}</TechLabel>
                <TechValue>{isEn ? 'React, Mobile, Node' : 'React, Mobile, Node'}</TechValue>
              </TechLine>

              <TechLine>
                <TechLabel>{isEn ? 'DATABASES' : 'BANCOS_DE_DADOS'}</TechLabel>
                <TechValue>PostgreSQL & MySQL</TechValue>
              </TechLine>

              <TechLine>
                <TechLabel>{isEn ? 'CONTAINERIZED' : 'INFRAESTRUTURA'}</TechLabel>
                <TechValue $pulseColor="#9D4EDD">Docker & AWS</TechValue>
              </TechLine>

              <TechLine>
                <TechLabel>{isEn ? 'REMOTE_SYNC' : 'STATUS_REMOTO'}</TechLabel>
                <TechValue $pulseColor="#10B981">{isEn ? 'global_avail // true' : 'disp_global // true'}</TechValue>
              </TechLine>

              <GithubHeatmap />
            </DashboardCard>
          </ScrollReveal>
        </GridContainer>
      </Container>
    </StyledHeroSection>
  );
};
