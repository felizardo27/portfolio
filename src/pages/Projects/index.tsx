import { Card } from "../../components/Card";
import { ContainerCards } from "../../components/Card/styles";
import { dataProjects } from "../../data/dataProjects";
import { Container, Title } from "./styles";

export function Projects() {
  const { data } = dataProjects();

  return (
    <Container className="page">
      <Title>{data.title}</Title>
      <ContainerCards>
        {data.data.map(item => (
          <Card
            {...item}
          />
        ))}
      </ContainerCards>
    </Container>
  )
}