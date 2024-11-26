import { FC } from "react";

type ListProps = {
    children: React.ReactNode;
}
 
const List: FC<ListProps> = ({children}) => {
    return ( 
        <ul className="w-full list-disc list-outside ml-5 space-y-1.5">{children}</ul>
    );
}
 
export default List;