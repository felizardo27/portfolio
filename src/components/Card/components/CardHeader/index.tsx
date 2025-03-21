import { ProjectProps } from "../../../../interfaces/firebaseTypes";
import { ContainerHeader, Cover } from "./styles";

export function CardHeader({ imageUrl }: Pick<ProjectProps, 'imageUrl'>) {
  return (
    <ContainerHeader>
      {imageUrl && <Cover src={imageUrl} />}
    </ContainerHeader>
  )
}