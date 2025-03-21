import { Container } from "./styles";
import { CardContent } from "./components/CardContent";
import { CardFooter } from "./components/CardFooter";
import { CardHeader } from "./components/CardHeader";
import { ProjectProps } from "../../interfaces/firebaseTypes";

export function Card({ title, description, imageUrl, buttons, technologies}: ProjectProps) {
  return (
    <Container>
      <CardHeader imageUrl={imageUrl} />
      <CardContent
        title={title}
        description={description}
      />
      <CardFooter
        buttons={buttons}
        technologies={technologies}
      />
    </Container>
  )

}