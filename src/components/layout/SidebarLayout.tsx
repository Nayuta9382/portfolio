import { FC, useState } from "react";
import NavButton from "../ui/navMenu/NavButton";
import NavMenuList from "../ui/navMenu/NavMenuList";
import { navMenu } from "@/types/navMenu";

interface SidebarLayoutProps {
    titles:navMenu[];
    navInfo: navMenu[];
}
 
const SidebarLayout: FC<SidebarLayoutProps> = ({titles,navInfo}) => {
    // Navメニューが閉じているか開いているかを格納するState
    const [openNavFlg, setOpenNavFlg] = useState(false);

    return (
        <div className="fixed top-0 right-0 z-50">
            <NavButton openNavFlg={openNavFlg} setOpenNavFlg={setOpenNavFlg} />
            <NavMenuList titles={titles} navInfo={navInfo} openNavFlg={openNavFlg} setOpenNavFlg={setOpenNavFlg}/>
        </div>
    );
}
 
export default SidebarLayout;