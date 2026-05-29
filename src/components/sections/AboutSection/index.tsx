import React from "react";
import { useLanguageStore } from "../../../context/useLanguageStore";
import { Container } from "../../Container";
import { SectionHeader } from "../../SectionHeader";
import { Button } from "../../Button";
import { MapPin, ShieldAlert, Target, Globe, FileText } from "lucide-react";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "../../ScrollReveal";
import { dataAbout } from "../../../data/dataAbout";
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
  MiniCardDesc,
} from "./styles";

interface AboutSectionProps {
  onViewResume?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onViewResume }) => {
  const { language } = useLanguageStore();
  const { data } = dataAbout();

  const isEn = language === "en";

  const defaultTitle = isEn ? "About" : "Sobre";
  const displayTitle = data?.title || defaultTitle;
  const description = data?.description;

  return (
    <AboutWrapper id="about">
      <Container>
        <ScrollReveal direction="up" delay={0.05}>
          <SectionHeader prefix="02" title={displayTitle} />
        </ScrollReveal>

        <TwoColGrid>
          <ScrollReveal direction="right" delay={0.1} duration={0.6}>
            <TextContent>
              {description &&
                description
                  .split("\n\n")
                  .map((para, idx) => <Paragraph key={idx}>{para}</Paragraph>)}

              <div style={{ marginTop: "1.5rem", display: "flex" }}>
                <Button
                  variant="primary"
                  icon={<FileText />}
                  onClick={onViewResume}
                >
                  {isEn ? "View My Resume" : "Visualizar Meu Currículo"}
                </Button>
              </div>
            </TextContent>
          </ScrollReveal>

          <StaggerContainer delay={0.15}>
            <CardsColumn>
              <StaggerItem direction="left">
                <MiniCard>
                  <MiniCardIcon>
                    <MapPin size={22} />
                  </MiniCardIcon>
                  <MiniCardText>
                    <MiniCardTitle>
                      {isEn ? "Based in Brazil" : "Baseado no Brasil"}
                    </MiniCardTitle>
                    <MiniCardDesc>
                      {isEn
                        ? "Working from Brazil with experience in remote collaboration, async workflows, and globally accessible digital products."
                        : "Atuando do Brasil com experiência em colaboração remota, fluxos assíncronos e produtos digitais acessíveis globalmente."}
                    </MiniCardDesc>
                  </MiniCardText>
                </MiniCard>
              </StaggerItem>

              <StaggerItem direction="left">
                <MiniCard>
                  <MiniCardIcon>
                    <ShieldAlert size={22} />
                  </MiniCardIcon>
                  <MiniCardText>
                    <MiniCardTitle>
                      {isEn
                        ? "Full Stack Development"
                        : "Desenvolvimento Full Stack"}
                    </MiniCardTitle>
                    <MiniCardDesc>
                      {isEn
                        ? "Building complete solutions across web, mobile, APIs, databases, and cloud deployments using React, React Native, AdonisJS, and AWS."
                        : "Construindo soluções completas entre web, mobile, APIs, bancos de dados e deploy em nuvem com React, React Native, AdonisJS e AWS."}
                    </MiniCardDesc>
                  </MiniCardText>
                </MiniCard>
              </StaggerItem>

              <StaggerItem direction="left">
                <MiniCard>
                  <MiniCardIcon>
                    <Target size={22} />
                  </MiniCardIcon>
                  <MiniCardText>
                    <MiniCardTitle>
                      {isEn
                        ? "Product-Oriented Developer"
                        : "Desenvolvedor Orientado a Produto"}
                    </MiniCardTitle>
                    <MiniCardDesc>
                      {isEn
                        ? "Focused on turning technical decisions into real product value, balancing clean code, usability, performance, and business needs."
                        : "Focado em transformar decisões técnicas em valor real para o produto, equilibrando código limpo, usabilidade, performance e necessidades do negócio."}
                    </MiniCardDesc>
                  </MiniCardText>
                </MiniCard>
              </StaggerItem>

              <StaggerItem direction="left">
                <MiniCard>
                  <MiniCardIcon>
                    <Globe size={22} />
                  </MiniCardIcon>
                  <MiniCardText>
                    <MiniCardTitle>
                      {isEn
                        ? "Remote-Ready Mindset"
                        : "Mentalidade Preparada para o Remoto"}
                    </MiniCardTitle>
                    <MiniCardDesc>
                      {isEn
                        ? "Comfortable with English documentation, Git workflows, agile routines, and continuous improvement for international remote opportunities."
                        : "Confortável com documentação em inglês, fluxos com Git, rotinas ágeis e evolução constante para oportunidades remotas internacionais."}
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
