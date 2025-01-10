import H3 from "@/components/common/heading/H3";
import { FC } from "react";

type WorksPageItemLayoutProps = {
    htmlId:string; // navで使うhtmlidを渡す
    title:string;
    navFlg?:boolean; // navに追加するかどうか
    children: React.ReactNode;
}
 
const WorksPageItemLayout: FC<WorksPageItemLayoutProps> = ({htmlId, title, navFlg=true, children}) => {
    const nav = navFlg ? 'nav' : '';
    return (
        <div id={htmlId} className={`${nav} w-[98%] flex flex-col pt-2 gap-2 md:gap-3 lg:gap-4`}>
            <H3>{title}</H3>
            <div className="pl-6">
                {children}
            </div>
        </div>
    );
}
 
export default WorksPageItemLayout;