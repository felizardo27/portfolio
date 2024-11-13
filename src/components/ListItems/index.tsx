import { useTheme } from "../../context/useTheme";
import { ArrowIcon, Container, ContainerDate, ContainerDescription, DateText, Icon, SubText, TitleText } from "./styles";

interface ListItemProps {
  imageUrl: string;
  date: string;
  title: string;
  subText: string;
  linkTo?: string;
}

export function ListItems({ imageUrl, date, subText, title, linkTo }: ListItemProps) {
  const { icons } = useTheme();

  return (
    <Container>
      <Icon src={imageUrl} />
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
        <SubText>{subText}</SubText>
      </ContainerDescription>
    </Container>
  )
}