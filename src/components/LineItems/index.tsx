import { ListItemProps, ListItems } from "../ListItems";
import { ContainerList } from "./styles";


interface LineItemsProps {
  data: ListItemProps[]
}

export function LineItems({ data }: LineItemsProps) {
  return (
    <ContainerList>
      {data.map((item, index) =>
        <ListItems
          key={index}
          imageUrl={item?.imageUrl}
          date={item.date}
          title={item.title}
          subText={item.subText}
          description={item.description}
          linkTo={item?.linkTo}
        />
      )}
    </ContainerList>
  )
}