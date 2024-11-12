import { skillsItem, dataSkills } from "./dataSkills";
import { Container, Icon, SkillIcon, SkillsContainer, ContainerIcon, SkillTitle, Title, SkillItem } from "./styles";


export function Skills() {


  function RenderSkills({ title, icons }: skillsItem) {
    return (
      <SkillItem>
        <SkillTitle>{title}</SkillTitle>
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
    <Container>
      <Title>Skills</Title>
      <SkillsContainer>
        {dataSkills.map(item =>
          <RenderSkills
            title={item.title}
            icons={item.icons}
          />
        )}
      </SkillsContainer>
    </Container>
  )
}