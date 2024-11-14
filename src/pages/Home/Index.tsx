import { Container, ContainerIcons, Icon, IconContainer, NameTitle, SkillsWrite } from "./styles";

import Typewriter from 'typewriter-effect';
import { useTheme } from "../../context/useTheme";
import { useLanguage } from "../../context/useLanguage";

export function Home() {
  const { icons } = useTheme();
  const { language } = useLanguage();

  const data = {
    ptBr: {
      text: "Desenvolvedor Front-end",
      deleteText: 9,
      secondText: "Mobile"
    },
    enUs: {
      text: "I'm a Front-end Developer",
      deleteText: 19,
      secondText: "Mobile Developer"
    },
  }


  return (
    <Container>
      <NameTitle>João Pedro Felizardo</NameTitle>
      <SkillsWrite>
        <Typewriter
          key={language}
          onInit={(typewriter) => {
            typewriter
              .typeString(data[language].text)
              .pauseFor(500)
              .deleteChars(data[language].deleteText)
              .typeString(data[language].secondText)
              .start();
          }}
          options={{ loop: true, autoStart: true }}
        />
      </SkillsWrite>
      <ContainerIcons>
        <IconContainer target="_blank" href="https://www.linkedin.com/in/felizardo27/">
          <Icon src={icons.linkedinIcon} />
        </IconContainer>
        <IconContainer target="_blank" href="https://github.com/felizardo27">
          <Icon src={icons.githubIcon} />
        </IconContainer>
        <IconContainer target="_blank" href="mailto:jp.felizardo27@gmail.com">
          <Icon src={icons.emailIcon} />
        </IconContainer>
      </ContainerIcons>
    </Container>
  )
}
