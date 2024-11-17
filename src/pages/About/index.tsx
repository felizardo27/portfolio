import { dataAbout } from "../../data/dataAbout";
import { Container, Description, DescriptionContainer, ImageProfile, Title } from "./styles";

export function About() {
  const { data } = dataAbout();

  return (
    <Container className="page">
      <Title>{data.title}</Title>
      <DescriptionContainer>
        <Description>
          {data.description}
        </Description>
        <ImageProfile src={'https://github.com/felizardo27.png'} />
      </DescriptionContainer>
    </Container>
  )
}