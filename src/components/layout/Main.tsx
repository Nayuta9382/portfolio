import { FC } from "react";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { navMenu } from "@/types/navMenu";

type MainProps = {
    children: React.ReactNode; 
    navPageData:navMenu[]; // navに表示するページ情報
    navData:navMenu[]; // navに表示するHtmlId情報
}
 
const Main: FC<MainProps> = ({children,navPageData,navData}) => {
    return (
        <>
        <main className="relative w-full min-w-[355px] max-w-[1280px] mb-4">
            {children}
            <Sidebar titles={navPageData} navInfo={navData} />
        </main>
        <Footer/>
        </>
    );
}
 
export default Main;