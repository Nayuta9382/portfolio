import { TableProvider } from "@/context/TableWidthContext";
import { FC } from "react";
import Table from "../ui/table/Table";
import Scroll from "../ui/table/Scroll";

type TableLayoutProps = {
    children: React.ReactNode;
}
 
const TableLayout: FC<TableLayoutProps> = ({children}) => {
  
    return (
        <TableProvider>
            <Scroll>
                <Table>
                    {children}
                </Table>
            </Scroll>
            
        </TableProvider>
    );
}
 
export default TableLayout;