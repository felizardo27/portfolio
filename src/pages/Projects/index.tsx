import { Card } from "../../components/Card";
import { ContainerCards } from "../../components/Card/styles";
import { useLanguage } from "../../context/useLanguage";
import { dataProjects } from "../../data/dataProjects";
import { Container, Title } from "./styles";

export function Projects() {
  const { data } = dataProjects();
  const { language } = useLanguage();

  return (
    <Container className="page">
      {data && (
        <>
          <Title>{language === 'enUs' ? data?.title.en : data?.title.pt}</Title>
          <ContainerCards>
            {Object.entries(data?.data || {}).map(([index, item]) => (
              <Card
                key={index}
                {...item}
              />
            ))}
          </ContainerCards>
        </>
      )}
    </Container>
  )
}