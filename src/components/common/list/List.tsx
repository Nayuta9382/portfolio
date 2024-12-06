import { FC } from "react";

type ListProps = {
    // マージントップをつける場合に利用
    marginTopFlg?: boolean
    children: React.ReactNode;
}
 
const List: FC<ListProps> = ({marginTopFlg = false,children}) => {
    const margin = marginTopFlg ? 'mt-1' : ''
    return ( 
        <ul className={`${margin} w-[85%]  list-disc list-outside ml-5 space-y-1.5`}>{children}</ul>
    );
}
 
export default List;