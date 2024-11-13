import { ListItems } from "../../components/ListItems";
import { useTheme } from "../../context/useTheme";
import { Container, ContainerList, Title } from "./styles";

export function Education() {
  const { icons } = useTheme();

  return (
    <Container>
      <Title>Education</Title>
      <ContainerList>
        <ListItems
          imageUrl="https://github.com/alura.png"
          date="October 01, 2022"
          title="Degree React with TypeScript"
          subText="Alura"
          linkTo="https://cursos.alura.com.br/degree/certificate/f0b4f097-a4da-41b0-b0bc-cebd1c825e65?lang=en"
        />
        <ListItems
          imageUrl="https://github.com/alura.png"
          date="July 27, 2022"
          title="Degree Computer network"
          subText="Alura"
          linkTo="https://cursos.alura.com.br/degree/certificate/2cde5fe5-ca7f-484d-adf5-22f823d86b22?lang=en"
        />
        <ListItems
          imageUrl="https://github.com/alura.png"
          date="June 27, 2022"
          title="Degree Front-end"
          subText="Alura"
          linkTo="https://cursos.alura.com.br/degree/certificate/be0d634b-feb7-4951-a1f2-b4b2fa6cc355?lang=en"
        />
        <ListItems
          imageUrl={icons.educationIcon}
          date="2018-2022"
          title="Computer Science"
          subText="UNIFAI - Adamantina"
        />

      </ContainerList>
    </Container>
  )
}