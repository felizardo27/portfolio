import { CardProps } from "../..";
import { ContainerHeader, Cover } from "./styles";

export function CardHeader({ imageUrl }: Pick<CardProps, 'imageUrl'>) {
  return (
    <ContainerHeader>
      {imageUrl && <Cover src={imageUrl} />}
    </ContainerHeader>
  )
}