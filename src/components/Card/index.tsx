import { Container } from "./styles";
import { CardContent } from "./components/CardContent";
import { CardFooter } from "./components/CardFooter";
import { CardHeader } from "./components/CardHeader";


export interface CardProps {
  imageUrl?: string;
  titleCard: string;
  description: string[];
  buttons: {
    repository?: string;
    liveUrl?: string;
  },
  technologies: string[]
}

export function Card({ imageUrl, titleCard, description, buttons, technologies }: CardProps) {

  return (
    <Container>
      <CardHeader imageUrl={imageUrl} />
      <CardContent
        titleCard={titleCard}
        description={description}
      />
      <CardFooter
        buttons={buttons}
        technologies={technologies}
      />
    </Container>
  )

}