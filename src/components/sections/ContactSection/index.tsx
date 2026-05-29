import React, { useState } from 'react';
import { useLanguageStore } from '../../../context/useLanguageStore';
import { Container } from '../../Container';
import { SocialButton } from '../../SocialButton';
import { Mail, Copy, Check } from 'lucide-react';
import { ScrollReveal } from '../../ScrollReveal';
import { dataSocialLinks } from '../../../data/dataSocialLinks';
import { SocialLinkProps } from '../../../interfaces/firebaseTypes';
import {
  StyledContactSection,
  ContactBox,
  Title,
  CopyParagraph,
  ButtonsGrid,
  EmailBox,
  CopyFeedback
} from './styles';

export const ContactSection: React.FC = () => {
  const { language } = useLanguageStore();
  const { data: socialData } = dataSocialLinks();
  const [copied, setCopied] = useState(false);

  const isEn = language === 'en';

  const socialArray = socialData ? (Object.values(socialData) as SocialLinkProps[]) : [];
  
  const baseEmail = socialArray.find(s => s.name?.toLowerCase().includes('email'))?.url || 'jp.felizardo27@gmail.com';
  const email = baseEmail.replace(/^mailto:/, '');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Filter systems
  const githubLink = socialArray.find((s) => s.name?.toLowerCase().includes('github'))?.url || 'https://github.com/felizardo27';
  const linkedinLink = socialArray.find((s) => s.name?.toLowerCase().includes('linkedin'))?.url || 'https://linkedin.com/in/felizardo27';

  return (
    <StyledContactSection id="contact">
      <Container>
        <ScrollReveal direction="up" delay={0.05} scale={0.98} duration={0.65}>
          <ContactBox>
            <div>
              <Title>
                {isEn ? "Let's build " : "Vamos construir "}
                <span>{isEn ? "something great" : "algo incrível"}</span>
                {isEn ? " together" : " juntos"}
              </Title>
              <CopyParagraph style={{ marginTop: '0.75rem' }}>
                {isEn 
                  ? "I am currently accepting select opportunities, product consultant requests, and international remote operations. Let's start the dialogue." 
                  : "Estou aberto a novas propostas, parcerias de consultoria de produto e posições remotas internacionais. Entre em contato!"}
              </CopyParagraph>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'center' }}>
              <EmailBox onClick={handleCopyEmail} title={isEn ? 'Copy to clipboard' : 'Copiar email'}>
                {copied ? <Check size={16} style={{ color: '#10B981' }} /> : <Mail size={16} />}
                <span>{email}</span>
                <Copy size={12} style={{ opacity: 0.5, marginLeft: '4px' }} />
              </EmailBox>
              
              {copied && (
                <CopyFeedback>
                  {isEn ? '// Email copied successfully' : '// Email copiado com sucesso!'}
                </CopyFeedback>
              )}
            </div>

            <ButtonsGrid>
              <SocialButton platform="github" url={githubLink} label="GitHub Profile" />
              <SocialButton platform="linkedin" url={linkedinLink} label="LinkedIn Profile" />
              <SocialButton platform="email" url={`mailto:${email}`} label="Open Email Client" />
            </ButtonsGrid>
          </ContactBox>
        </ScrollReveal>
      </Container>
    </StyledContactSection>
  );
};

