import { ListItemProps, ListItems } from "../ListItems";
import { ContainerList } from "./styles";


interface LineItemsProps {
  data: ListItemProps[]
}

export function LineItems({data}: LineItemsProps) {
  return (
    <ContainerList>
      {data.map(item => 
        <ListItems
          imageUrl={item?.imageUrl}
          date={item.date}
          title={item.title}
          subText={item.subText}
          linkTo={item?.linkTo}
      />
      )}
    </ContainerList>
  )
}