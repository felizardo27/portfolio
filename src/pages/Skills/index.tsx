import { useFirebaseStore } from "../../context/useFirebaseData";
import { useLanguage } from "../../context/useLanguage";
import { SkillCategoryProps, SkillIconProps } from "../../interfaces/firebaseTypes";
import { Container, Icon, SkillIcon, SkillsContainer, ContainerIcon, SkillTitle, Title, SkillItem } from "./styles";

export function Skills() {
  const { language } = useLanguage();
  const { database } = useFirebaseStore();
  const dataSkills = database?.skills;

  function RenderSkills({ title, icons }: SkillCategoryProps) {
    return (
      <SkillItem>
        <SkillTitle>{title[language]}</SkillTitle>
        <ContainerIcon>
          {Object.values(icons).map((icon: SkillIconProps, index: number) => (
            <SkillIcon key={index}>
              <Icon src={icon.url} alt={icon.name} />
              <p>{icon.name}</p>
            </SkillIcon>
          ))}
        </ContainerIcon>
      </SkillItem>
    );
  }

  return (
    <Container className="page">
      <Title>{dataSkills?.title[language]}</Title>
      <SkillsContainer>
        {Object.values(dataSkills?.data || {}).map((item, index) => (
          <RenderSkills
            key={index}
            title={item.title}
            icons={item.icons}
          />
        ))}
      </SkillsContainer>
    </Container>
  );
}
