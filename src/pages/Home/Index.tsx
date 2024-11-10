import { Container, ContainerIcons, Icon, IconContainer, NameTitle, SkillsWrite } from "./styles";
import linkedinIcon from '../../assets/svgs/dark/linkedin.svg'
import githubIcon from '../../assets/svgs/dark/github.svg'
import emailIcon from '../../assets/svgs/dark/email.svg'

import Typewriter from 'typewriter-effect';

export function Home() {

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
        <IconContainer href="https://www.linkedin.com/in/felizardo27/">
          <Icon src={linkedinIcon} />
        </IconContainer>
        <IconContainer href="https://github.com/felizardo27">
          <Icon src={githubIcon} />
        </IconContainer>
        <IconContainer href="mailto:jp.felizardo27@gmail.com">
          <Icon src={emailIcon} />
        </IconContainer>
      </ContainerIcons>
    </Container>
  )
}
