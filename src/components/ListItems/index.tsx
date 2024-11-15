import { useTheme } from "../../context/useTheme";
import { ArrowIcon, Container, ContainerDate, ContainerDescription, DateText, Description, Icon, SubText, TitleText } from "./styles";

export interface ListItemProps {
  imageUrl?: string;
  date: string;
  title: string;
  subText?: string;
  description?: string;
  linkTo?: string;
}

export function ListItems({ imageUrl, date, subText, title, linkTo, description }: ListItemProps) {
  const { icons } = useTheme();

  return (
    <Container>
      {imageUrl && <Icon src={imageUrl} />}
      <ContainerDescription>
        <ContainerDate>
          <DateText>{date}</DateText>
          {linkTo && (
            <a href={linkTo} target="_blank">
              <ArrowIcon src={icons.arrowLinkDefaultIcon} alt='Link' />
            </a>
          )}
        </ContainerDate>
        <TitleText>{title}</TitleText>
        {subText && <SubText>{subText}</SubText>}
        {description && <Description>{description}</Description>}
      </ContainerDescription>
    </Container>
  )
}