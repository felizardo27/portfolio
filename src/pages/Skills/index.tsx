import { useLanguage } from "../../context/useLanguage";
import { skillsItem, dataSkills } from "./dataSkills";
import { Container, Icon, SkillIcon, SkillsContainer, ContainerIcon, SkillTitle, Title, SkillItem } from "./styles";


export function Skills() {
  const {language} = useLanguage();

  function RenderSkills({ title, icons }: skillsItem) {
    return (
      <SkillItem>
        <SkillTitle>{title[language]}</SkillTitle>
        <ContainerIcon>
          {icons.map(icon =>
            <SkillIcon>
              <Icon src={icon.url} />
              <p>{icon.name}</p>
            </SkillIcon>
          )}
        </ContainerIcon>
      </SkillItem>
    )
  }

  return (
    <Container className="page">
      <Title>{dataSkills.title[language]}</Title>
      <SkillsContainer>
        {dataSkills.data.map(item =>
          <RenderSkills
            title={item.title}
            icons={item.icons}
          />
        )}
      </SkillsContainer>
    </Container>
  )
}