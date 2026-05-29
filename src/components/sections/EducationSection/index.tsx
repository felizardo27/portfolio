import React from 'react';
import { useLanguageStore } from '../../../context/useLanguageStore';
import { Container } from '../../Container';
import { SectionHeader } from '../../SectionHeader';
import { ExternalLink } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../../ScrollReveal';
import { dataEducation } from '../../../data/dataEducation';
import { ListItemProps } from '../../../interfaces/firebaseTypes';
import {
  StyledEducationSection,
  EducationGrid,
  EduCard,
  EduHeader,
  TitleBox,
  Degree,
  Institution,
  Period,
  Description,
  CredentialLink
} from './styles';

export const EducationSection: React.FC = () => {
  const { language } = useLanguageStore();
  const { data } = dataEducation();

  const isEn = language === 'en';

  const sectionTitle = data?.title || (isEn ? 'Academic Ledger' : 'Formação & Certificações');
  const items = data?.data ? (Object.values(data.data) as ListItemProps[]) : [];

  return (
    <StyledEducationSection id="education">
      <Container>
        <ScrollReveal direction="up" delay={0.05}>
          <SectionHeader
            prefix="06"
            title={sectionTitle}
            description={isEn 
              ? 'Staged degrees, computation study loops, and structured credentials.' 
              : 'Fundações acadêmicas e especializações em ciência da computação e tecnologia.'}
          />
        </ScrollReveal>

        <StaggerContainer staggerChildren={0.1}>
          <EducationGrid>
            {items.map((edu, idx) => {
              const degree = edu.title || '';
              const institution = edu.subTitle || '';
              const period = edu.date || '';

              const renderDescription = () => {
                if (edu.url) {
                  return (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {edu.description && <Description>{edu.description}</Description>}
                      <CredentialLink href={edu.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={12} />
                        <span>{isEn ? 'View Credential' : 'Ver Credencial'}</span>
                      </CredentialLink>
                    </div>
                  );
                }
                if (edu.description) {
                  return <Description>{edu.description}</Description>;
                }
                return null;
              };

              return (
                <StaggerItem key={`edu_${idx}`} direction="up" scale={0.97} style={{ height: '100%' }}>
                  <EduCard>
                    <EduHeader>
                      <TitleBox>
                        <Degree>{degree}</Degree>
                        <Institution>{institution}</Institution>
                      </TitleBox>
                      <Period>{period}</Period>
                    </EduHeader>
                    {renderDescription()}
                  </EduCard>
                </StaggerItem>
              );
            })}
          </EducationGrid>
        </StaggerContainer>
      </Container>
    </StyledEducationSection>
  );
};

