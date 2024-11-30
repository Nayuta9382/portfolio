import { FC } from "react";
import Th from "./Th";

type TableProps = {
    item?: string;
    description? : string
    children: React.ReactNode;  
}
 
const Table: FC<TableProps> = ({item = '項目' , description = '説明',children}) => {
    return (
        <table className="w-full bg-white rounded-lg border-opacity-40  border-[1.5px] border-[#838181] overflow-hidden border-separate border-spacing-0">
            <thead>
                <tr>
                    <Th>{item}</Th>
                    <Th last>{description}</Th>
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
        </table>
    );
}
 
export default Table;