import { CardProps } from "../..";
import { ContainerFooter, ContainerButtons, Button, ContainerTechnologies, Technologies } from "./sytyles";

export function CardFooter({ buttons, technologies }: Pick<CardProps, 'buttons' | 'technologies'>) {

  function openUrl(url: string) {
    window.open(url, "_blank")
  }

  return (
    <ContainerFooter>
      <ContainerButtons>
        {buttons?.repository && <Button onClick={() => openUrl(buttons.repository)}>GiHub</Button>}
        {buttons?.liveUrl && <Button onClick={() => openUrl(buttons.liveUrl)}>Live</Button>}
      </ContainerButtons>
      <ContainerTechnologies>
        {technologies.map((item, index) => (
          <Technologies key={index}>{item}</Technologies>
        ))}
      </ContainerTechnologies>
    </ContainerFooter>
  )
}