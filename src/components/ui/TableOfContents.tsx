import H3 from "@/components/common/heading/H3";
import { FC } from "react";

type TableOfContentsProps = {
    title:string
    children: React.ReactNode;
}
//  ◆--目次コンポーネント--◆
const TableOfContents: FC<TableOfContentsProps> = ({title, children}) => {
    return (
        <div>
            <H3>{title}</H3>
            <div className="w-3/5 md:w-[45%] lg:w-[35%] min-w-64 ml-4 mt-3 mb-32 py-3 pl-3  bg-[#FAFAFA] rounded-[10px] shadow-all-r">
                {/* ここにリストを挿入 */}
                {children}
            </div>
        </div>
    );
}
 
export default TableOfContents;