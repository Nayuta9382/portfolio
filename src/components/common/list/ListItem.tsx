import { FC } from "react";

type ListItemProps = {
    children: React.ReactNode;
}
const ListItem : FC<ListItemProps> = ({children}) => {
    return ( 
        <li className="text-base w-full font-normal">{children}</li>
    );
}
 
export default ListItem;