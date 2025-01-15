import { FC } from "react";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { navMenu } from "@/types/navMenu";
import Head from "next/head";

type MainLayoutProps = {
    children: React.ReactNode; 
    navPageData:navMenu[]; // navに表示するページ情報
    navData:navMenu[]; // navに表示するHtmlId情報
}
 
const MainLayout: FC<MainLayoutProps> = ({children,navPageData,navData}) => {
    return (
        <>
        <Head>
            <title>Portfolio</title>
        </Head>
        <main className="relative w-full  min-w-[355px] max-w-[1280px] m-auto mb-4">
            {children}
            <Sidebar titles={navPageData} navInfo={navData} />
        </main>
        <Footer/>
        </>
    );
}
 
export default MainLayout;