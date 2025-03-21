import { useTheme } from "../../context/useTheme";
import { ListItemProps } from "../../interfaces/firebaseTypes";
import { ListItems } from "../ListItems";
import { ContainerList } from "./styles";


interface LineItemsProps {
  data: Record<number, ListItemProps>;
}

export function LineItems({ data }: LineItemsProps) {
  const { icons } = useTheme();

  return (
    <ContainerList>
      {Object.entries(data).map(([index, item]) => {
        const image = item?.type === 'college'
          ? icons.educationIcon
          : `https://github.com/${item.type}.png`;

        return (
          <ListItems
            key={index}
            imageUrl={item.type ? image : ''}
            date={item.date}
            title={item.title}
            subText={item.subTitle}
            description={item.description}
            linkTo={item?.url}
          />
        )
      })}
    </ContainerList>
  );
}