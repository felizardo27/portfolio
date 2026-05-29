import React from 'react';
import { useLanguageStore } from '../../../context/useLanguageStore';
import { Container } from '../../Container';
import { SectionHeader } from '../../SectionHeader';
import { Button } from '../../Button';
import { MapPin, ShieldAlert, Target, Globe, FileText } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../../ScrollReveal';
import { dataAbout } from '../../../data/dataAbout';
import {
  AboutWrapper,
  TwoColGrid,
  TextContent,
  Paragraph,
  CardsColumn,
  MiniCard,
  MiniCardIcon,
  MiniCardText,
  MiniCardTitle,
  MiniCardDesc
} from './styles';

interface AboutSectionProps {
  onViewResume?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onViewResume }) => {
  const { language } = useLanguageStore();
  const { data } = dataAbout();

  const isEn = language === 'en';

  const defaultTitle = isEn ? 'About' : 'Sobre';
  const displayTitle = data?.title || defaultTitle;
  const description = data?.description;


  return (
    <AboutWrapper id="about">
      <Container>
        <ScrollReveal direction="up" delay={0.05}>
          <SectionHeader
            prefix="02"
            title={displayTitle}
          />
        </ScrollReveal>
        
        <TwoColGrid>
          <ScrollReveal direction="right" delay={0.1} duration={0.6}>
            <TextContent>
              {description ? (
                description.split('\n\n').map((para, idx) => (
                  <Paragraph key={idx}>{para}</Paragraph>
                ))
              ) : (
                <>
                  <Paragraph>
                    {isEn 
                      ? 'I am João Pedro Felizardo, a Full Stack Developer dedicated to bringing high-fidelity products, automation engines, and hybrid applications into reality. Over the past several years, I have built architectures from the grounding layers up, leveraging React and Node.js ecosystems to model stable, reactive experiences.'
                      : 'Me chamo João Pedro Felizardo, Desenvolvedor Full Stack dedicado a tirar do papel produtos de alta fidelidade, motores de automação e aplicativos híbridos. Ao longo dos últimos anos, venho construindo sistemas escaláveis do zero, utilizando o ecossistema React e Node.js para modelar soluções estáveis.'}
                  </Paragraph>
                  <Paragraph>
                    {isEn
                      ? 'My engineering scope extends beyond classic code development. I focus heavily on product thinking—evaluating user retention vectors, API latency optimizations, code maintainability models, and fluid transitions that elevate consumer operations.'
                      : 'Minha abordagem de engenharia vai além da escrita de código convencional. Costumo focar intensamente no produto final—avaliando pontos de experiência e retenção de usuários, latência de servidores, manutenibilidade de código e transições limpas que agreguem valor ao negócio.'}
                  </Paragraph>
                </>
              )}

              <div style={{ marginTop: '1.5rem', display: 'flex' }}>
                <Button 
                  variant="primary" 
                  icon={<FileText />} 
                  onClick={onViewResume}
                >
                  {isEn ? 'View My Resume' : 'Visualizar Meu Currículo'}
                </Button>
              </div>
            </TextContent>
          </ScrollReveal>
 
          <StaggerContainer delay={0.15}>
            <CardsColumn>
              <StaggerItem direction="left">
                <MiniCard>
                  <MiniCardIcon><MapPin size={22} /></MiniCardIcon>
                  <MiniCardText>
                    <MiniCardTitle>{isEn ? 'Staged in Brazil' : 'Baseado no Brasil'}</MiniCardTitle>
                    <MiniCardDesc>
                      {isEn 
                        ? 'Operating globally from Brazil, supporting distributed remote workflows seamlessly.' 
                        : 'Operando globalmente a partir do Brasil, integrado a rotinas e processos remotos.'}
                    </MiniCardDesc>
                  </MiniCardText>
                </MiniCard>
              </StaggerItem>

              <StaggerItem direction="left">
                <MiniCard>
                  <MiniCardIcon><ShieldAlert size={22} /></MiniCardIcon>
                  <MiniCardText>
                    <MiniCardTitle>{isEn ? 'Full Stack Engineering' : 'Engenharia de Ponta a Ponta'}</MiniCardTitle>
                    <MiniCardDesc>
                      {isEn 
                        ? 'Commanding full Client-to-Server loops: React Native systems, Adonis APIs, and cloud deployments.' 
                        : 'Domínio de todo o ciclo: apps móveis com React Native, APIs com AdonisJS e deploy na nuvem.'}
                    </MiniCardDesc>
                  </MiniCardText>
                </MiniCard>
              </StaggerItem>

              <StaggerItem direction="left">
                <MiniCard>
                  <MiniCardIcon><Target size={22} /></MiniCardIcon>
                  <MiniCardText>
                    <MiniCardTitle>{isEn ? 'Product-Focused Builder' : 'Orientado a Produto'}</MiniCardTitle>
                    <MiniCardDesc>
                      {isEn 
                        ? 'Treating lines of code as active business modules, optimizing usability alongside technical metrics.' 
                        : 'Foco em transformar linhas de código em ativos de negócios funcionais, eficientes e robustos.'}
                    </MiniCardDesc>
                  </MiniCardText>
                </MiniCard>
              </StaggerItem>

              <StaggerItem direction="left">
                <MiniCard>
                  <MiniCardIcon><Globe size={22} /></MiniCardIcon>
                  <MiniCardText>
                    <MiniCardTitle>{isEn ? 'International Interop' : 'Interoperabilidade Global'}</MiniCardTitle>
                    <MiniCardDesc>
                      {isEn 
                        ? 'Fluent in English, structured in agile teams, and aligned with standard git conventions.' 
                        : 'Inglês fluente, habituado a times ágeis internacionais e padronização rígida de versionamento.'}
                    </MiniCardDesc>
                  </MiniCardText>
                </MiniCard>
              </StaggerItem>
            </CardsColumn>
          </StaggerContainer>
        </TwoColGrid>
      </Container>
    </AboutWrapper>
  );
};
