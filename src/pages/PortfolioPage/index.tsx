import React, { useState, useEffect } from 'react';
import { useFirebaseStore } from '../../context/useFirebaseData';
import { Navbar } from '../../components/Navbar';
import { HeroSection } from '../../components/sections/HeroSection';
import { AboutSection } from '../../components/sections/AboutSection';
import { SkillsSection } from '../../components/sections/SkillsSection';
import { ProjectsSection } from '../../components/sections/ProjectsSection';
import { ExperienceSection } from '../../components/sections/ExperienceSection';
import { EducationSection } from '../../components/sections/EducationSection';
import { ContactSection } from '../../components/sections/ContactSection';
import { ResumeModal } from '../../components/ResumeModal';
import { Container } from '../../components/Container';
import { useLanguageStore } from '../../context/useLanguageStore';
import {
  MainLayout,
  FooterContainer,
  FooterGrid,
  FooterBranding,
  FooterText,
  LoadingScreen,
  LoaderBars,
  LoaderBar,
  TechLoaderLabel,
  SectionWrapper
} from './styles';

export const PortfolioPage: React.FC = () => {
  const { language } = useLanguageStore();
  const { database, getData } = useFirebaseStore();
  const [loading, setLoading] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const isEn = language === 'en';

  useEffect(() => {
    const loadFirebaseStore = async () => {
      try {
        await getData();
      } catch (err) {
        console.error('Failed to load portfolio database via Zustand store:', err);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 700);
      }
    };

    loadFirebaseStore();
  }, [getData]);

  const hasData = database !== null;

  if (loading || !hasData) {
    return (
      <LoadingScreen>
        <LoaderBars>
          <LoaderBar />
          <LoaderBar />
          <LoaderBar />
          <LoaderBar />
        </LoaderBars>
        <TechLoaderLabel>SYS.BOOTING // CONNECTING_DATABASE</TechLoaderLabel>
      </LoadingScreen>
    );
  }

  const handleViewResume = () => {
    setIsResumeOpen(true);
  };

  return (
    <MainLayout>
      <Navbar />
      <SectionWrapper>
        <HeroSection onViewResume={handleViewResume} />
        <AboutSection onViewResume={handleViewResume} />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />

        <FooterContainer>
          <Container>
            <FooterGrid>
              <FooterBranding>
                <span>&lt;</span> felizardo27_ <span>/&gt;</span>
              </FooterBranding>
              
              <FooterText>
                {isEn 
                  ? 'All systems operational // © 2026 Joao Pedro' 
                  : 'Sistemas operando normalmente // © 2026 Joao Pedro'}
              </FooterText>
            </FooterGrid>
          </Container>
        </FooterContainer>
      </SectionWrapper>
      
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />
    </MainLayout>
  );
};
