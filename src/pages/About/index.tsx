import { Container, Description, DescriptionContainer, ImageProfile, Title } from "./styles";

export function About() {
  return (
    <Container>
      <Title>About</Title>

      <DescriptionContainer>
        <Description>
            Meu nome é João Pedro, tenho 24 anos e sou formado 
            em Ciência da Computação, com especialização em 
            desenvolvimento de software. Com três anos de
            experiência inicial em Suporte de TI, atualmente 
            focado como desenvolvedor front-end júnior, utilizando 
            ReactJs e React Native para criar interfaces interativas e 
            responsivas. Possuo compreensão intermediária do idioma inglês, 
            buscando constantemente expandir meu conhecimento e 
            habilidades técnicas.
        </Description>
        <ImageProfile src={'https://github.com/felizardo27.png'} />
      </DescriptionContainer>
    </Container>
  )
}