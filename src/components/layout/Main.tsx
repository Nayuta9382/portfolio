import { FC } from "react";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { navMenu } from "@/types/navMenu";

type MainProps = {
    children: React.ReactNode;  
    navData:navMenu[];
}
 
const Main: FC<MainProps> = ({children,navData}) => {
    return (
        <main className="relative min-w-[375px] max-w-[1280px]">
            {children}
            <Sidebar titles={[{id:'',name:'Top',url:'/'},{id:'',name:'Top',url:'/'}]} navInfo={navData} />
            <Footer/>
        </main>
    );
}
 
export default Main;