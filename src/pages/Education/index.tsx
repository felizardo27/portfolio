import { LineItems } from "../../components/LineItems";
import { dataEducation } from "../../data/dataEducation";
import { Container, Title } from "./styles";

export function Education() {
  const { data } = dataEducation();


  return (
    <Container>
      <Title>{data.title}</Title>
      <LineItems data={data.data} />
    </Container>
  )
}