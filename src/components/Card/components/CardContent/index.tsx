import { useLanguage } from "../../../../context/useLanguage";
import { ProjectProps } from "../../../../interfaces/firebaseTypes";
import { ContainerContent, ContainerDescription, ItemDescription, Title } from "./styles";


export function CardContent({ title, description }: Pick<ProjectProps, 'title' | 'description'>) {
  const { language } = useLanguage();
  const descriptionText = language === 'enUs' ? description.en : description.pt;
  return (
    <ContainerContent>
      <Title>{title}</Title>
      <ContainerDescription>
        {Object.entries(descriptionText).map(([index, item]) => (
          <ItemDescription key={index}>
            {item}
          </ItemDescription>
        ))}
      </ContainerDescription>
    </ContainerContent>
  )
}