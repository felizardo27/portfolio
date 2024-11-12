import { Container, ContainerIcons, Icon, IconContainer, NameTitle, SkillsWrite } from "./styles";

import Typewriter from 'typewriter-effect';
import { useTheme } from "../../context/useTheme";

export function Home() {
  const {icons} = useTheme();

  return (
    <Container>
      <NameTitle>João Pedro Felizardo</NameTitle>
      <SkillsWrite>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("I'm a Front-end Developer")
              .pauseFor(500)
              .deleteChars(19)
              .typeString("Mobile Developer")
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
