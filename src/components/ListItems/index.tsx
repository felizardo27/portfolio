import { useTheme } from "../../context/useTheme";
import { Container, ContainerDate, ContainerDescription, DateText, Icon, LinkTo, SubText, TitleText } from "./styles";

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
          {linkTo && <LinkTo href={linkTo} target="_blank" urlImage={icons.arrowLinkDefaultIcon} />}
        </ContainerDate>
        <TitleText>{title}</TitleText>
        <SubText>{subText}</SubText>
      </ContainerDescription>
    </Container>
  )
}