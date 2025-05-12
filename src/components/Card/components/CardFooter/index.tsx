import { ProjectProps } from "../../../../interfaces/firebaseTypes";
import { ContainerFooter, ContainerButtons, Button, ContainerTechnologies, Technologies } from "./sytyles";

export function CardFooter({ buttons, technologies }: Pick<ProjectProps, 'buttons' | 'technologies'>) {

  function openUrl(url: string | undefined) {
    window.open(url, "_blank")
  }

  return (
    <ContainerFooter>
      <ContainerButtons>
        {buttons?.repository && <Button onClick={() => openUrl(buttons.repository)}>GitHub</Button>}
        {buttons?.liveUrl && <Button onClick={() => openUrl(buttons.liveUrl)}>Live</Button>}
      </ContainerButtons>
      <ContainerTechnologies>
        {Object.entries(technologies || {}).map(([index, item]) => (
          <Technologies key={index}>{item}</Technologies>
        ))}
      </ContainerTechnologies>
    </ContainerFooter>
  )
}