import { FC } from "react";
import ListItem from "./ListItem";
import LinkHoverBorder from "./LinkHoverBorder";

type ListLinkItemProps = {
    children: React.ReactNode;
    url: string
}
 
const ListLinkItem: FC<ListLinkItemProps> = ({children, url}) => {
    return (
        <ListItem>
            <LinkHoverBorder url={url} >{children}</LinkHoverBorder>
        </ListItem>
    );
}
 
export default ListLinkItem;