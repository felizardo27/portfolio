import React, { useState, useEffect } from 'react';
import { useLanguageStore } from '../../context/useLanguageStore';
import { Container } from '../Container';
import { ToggleTheme } from '../ToggleTheme';
import { ToggleLanguage } from '../ToggleLanguage';
import { Menu, X, ShieldCheck } from 'lucide-react';
import { ScrollReveal } from '../ScrollReveal';
import {
  NavContainer,
  InnerNav,
  LogoUrl,
  DesktopLinks,
  NavLink,
  ControlsWrapper,
  MobileMenuButton,
  MobileDrawer,
  DrawerNavLink,
  TelemetryBar,
  DrawerFooter
} from './styles';

export const Navbar: React.FC = () => {
  const { language } = useLanguageStore();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const isEn = language === 'en';

  const navLinks = [
    { id: 'home', label: isEn ? 'Home' : 'Início' },
    { id: 'about', label: isEn ? 'About' : 'Sobre' },
    { id: 'skills', label: isEn ? 'Skills' : 'Habilidades' },
    { id: 'projects', label: isEn ? 'Projects' : 'Projetos' },
    { id: 'experience', label: isEn ? 'Experience' : 'Experiência' },
    { id: 'education', label: isEn ? 'Education' : 'Formação' },
    { id: 'contact', label: isEn ? 'Contact' : 'Contato' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section intersection tracking
      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [language]);

  const handleLinkClick = (id: string) => {
    setIsMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <ScrollReveal trigger="animate" direction="down" delay={0.05} duration={0.5} distance={15} style={{ position: 'sticky', top: 0, zIndex: 1000, width: '100%' }}>
        <NavContainer $isScrolled={isScrolled}>
          <Container style={{ height: '100%' }}>
            <InnerNav>
              <LogoUrl onClick={() => handleLinkClick('home')} aria-label="Logo Home">
                <span>&lt;</span> felizardo27_ <span>/&gt;</span>
              </LogoUrl>

              <DesktopLinks>
                {navLinks.map((link) => (
                  <NavLink
                    key={link.id}
                    $isActive={activeSection === link.id}
                    onClick={() => handleLinkClick(link.id)}
                  >
                    {link.label}
                  </NavLink>
                ))}
              </DesktopLinks>

              <ControlsWrapper>
                <ToggleLanguage />
                <ToggleTheme />
                <MobileMenuButton
                  onClick={() => setIsMobileOpen(!isMobileOpen)}
                  aria-label="Toggle menu link list"
                >
                  {isMobileOpen ? <X /> : <Menu />}
                </MobileMenuButton>
              </ControlsWrapper>
            </InnerNav>
          </Container>
        </NavContainer>
      </ScrollReveal>

      {/* Mobile Slider Panel */}
      <MobileDrawer $isOpen={isMobileOpen}>
        <TelemetryBar>
          <span>
            <ShieldCheck size={11} style={{ verticalAlign: 'middle', marginRight: '4px', display: 'inline' }} />
            SYS.LOAD // CONNECTED
          </span>
          <span>STABLE</span>
        </TelemetryBar>
        {navLinks.map((link) => (
          <DrawerNavLink
            key={link.id}
            $isActive={activeSection === link.id}
            onClick={() => handleLinkClick(link.id)}
          >
            // {link.label.toUpperCase()}
          </DrawerNavLink>
        ))}
        <DrawerFooter />
      </MobileDrawer>
    </>
  );
};
