import { FC } from "react";

type Props = {
    children: React.ReactNode;
}
const ListItem : FC<Props> = ({children}) => {
    return ( 
        <li className=" text-base w-full font-normal">{children}</li>
    );
}
 
export default ListItem;