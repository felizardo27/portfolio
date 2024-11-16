import { CardProps } from "../..";
import { ContainerContent, ContainerDescription, ItemDescription, Title } from "./styles";


export function CardContent({ titleCard, description }: Pick<CardProps, 'titleCard' | 'description'>) {
  return (
    <ContainerContent>
      <Title>{titleCard}</Title>
      <ContainerDescription>
        {description.map((item, index) => (
          <ItemDescription key={index}>
            {item}
          </ItemDescription>
        ))}
      </ContainerDescription>
    </ContainerContent>
  )
}