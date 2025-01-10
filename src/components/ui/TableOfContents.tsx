import { FC } from "react";

type TableOfContentsProps = {
    children: React.ReactNode;
}
//  ◆--目次コンポーネント--◆
const TableOfContents: FC<TableOfContentsProps> = ({children}) => {
    return (
        <div>
            <div className="w-3/5 md:w-[55%] lg:w-[45%] min-w-[250px]  py-3 pl-3  bg-[#FAFAFA] rounded-[10px] shadow-all-r">
                {/* ここにリストを挿入 */}
                {children}
            </div>
        </div>
    );
}
 
export default TableOfContents;