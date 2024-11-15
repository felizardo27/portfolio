import { LineItems } from "../../components/LineItems";
import { dataExperience } from "../../data/dataExperience";
import { Container, Title } from "./styles";

export function Experience() {
  const {data} = dataExperience();

  return (
    <Container>
      <Title>{data.title}</Title>
      <LineItems data={data.data} />
    </Container>
  )
}