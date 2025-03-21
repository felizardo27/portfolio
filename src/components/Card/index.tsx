import { Container } from "./styles";
import { CardContent } from "./components/CardContent";
import { CardFooter } from "./components/CardFooter";
import { CardHeader } from "./components/CardHeader";
import { ProjectProps } from "../../interfaces/firebaseTypes";
import { useLanguage } from "../../context/useLanguage";

export function Card({ title, description, imageUrl, buttons, technologies}: ProjectProps) {
  const {language} = useLanguage();
  return (
    <Container>
      <CardHeader imageUrl={imageUrl} />
      <CardContent
        titleCard={title}
        description={language === 'enUs' ? description.en : description.pt}
      />
      <CardFooter
        buttons={buttons}
        technologies={technologies}
      />
    </Container>
  )

}