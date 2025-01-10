import { TableProvider } from "@/context/TableWidthContext";
import { FC } from "react";
import Table from "../ui/table/Table";
import Scroll from "../ui/table/Scroll";

type TableLayoutProps = {
    item?: string;
    description?: string;
    children: React.ReactNode;
}
 
const TableLayout: FC<TableLayoutProps> = ({ item = "項目", description = "説明", children }) => {
  
    return (
        <TableProvider>
            <Scroll>
                <Table item={item} description={description}>
                    {children}
                </Table>
            </Scroll>
            
        </TableProvider>
    );
}
 
export default TableLayout;