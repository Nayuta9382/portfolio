import { FC } from "react";
import { navMenu } from "@/types/navMenu";
import MainLayout from "../MainLayout";


type WorskPageLayoutProps = {
    children: React.ReactNode;
    navPageData:navMenu[]; // navに表示するページ情報
    navData:navMenu[]; // navに表示するHtmlId情報
}
 
const WorskPageLayout: FC<WorskPageLayoutProps> = ({children, navPageData, navData}) => {
 
    return (
        <MainLayout navPageData={navPageData} navData={navData}>
            <div className="mt-5 pl-[25px] pr-[68px] md:pl-[40px]  md:pr-[75px] lg:px-[90px] flex flex-col gap-4 md:gap-5 lg:gap-6">
                {children}
            </div>
        </MainLayout>
    );
}
 
export default WorskPageLayout;