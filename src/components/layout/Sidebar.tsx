import { FC,  useEffect,  useState } from "react";
import NavButton from "../ui/navMenu/NavButton";
import NavMenuList from "../ui/navMenu/NavMenuList";
import { navMenu } from "@/types/navMenu";
import ScrollTopButton from "../ui/navMenu/ScrollTopButton";
import useShowSidebar from "@/hooks/useShowSidebar";
import useSetShowId from "@/hooks/useSetShowId";
import useWindowSize from "@/hooks/useWindowSize";

interface SidebarProps {
    titles:navMenu[];
    navInfo: navMenu[];
}
 
const Sidebar: FC<SidebarProps> = ({titles,navInfo}) => {
    // Navメニューが閉じているか開いているかを格納するState
    const [openNavFlg, setOpenNavFlg] = useState(false);
    // サイドバーの表示・非表示を受け取る
    const showSidebar = useShowSidebar();

    const windowSize = useWindowSize();

    // navメニューの表示されているのを選択するhooks関数を実行
    useSetShowId();

    // sideBarの移動処理の移動処理
    // rightの位置を格納
    const [right, setRight] = useState(-250);

    useEffect(() => {
        let animationFrameId: number;
    
        const loop = () => {
            setRight((prevRight) => {
                if (showSidebar && prevRight < 0) {
                    return prevRight + 12.5    ; // 右に移動
                } else if (!showSidebar && prevRight > -250) {
                    return prevRight - 12.5; // 左に移動 
                }
                return prevRight; // 変化なし
            });
    
            animationFrameId = requestAnimationFrame(loop);
        };
    
        loop(); // 初回ループ開始
    
        return () => cancelAnimationFrame(animationFrameId); // クリーンアップ処理
    }, [showSidebar]); 

    // Topページ以外の場合は最初から表示する
    useEffect(()=>{
        if(!showSidebar){
            setRight(0);
        }
    },[]);
    const style: React.CSSProperties = {
        position: (right < 0 || windowSize >1280) ? ('fixed' as const) : ('absolute' as const),
        right: `${right}px`, 
      };
    


    return (
        <div style={style} className="w-[75px] pb-2  right-0 top-0 h-full ">
            <div className=" sticky w-full h-[100vh] top-0 right-0 z-40 ">
                <NavButton right={right} openNavFlg={openNavFlg} setOpenNavFlg={setOpenNavFlg} />
                <ScrollTopButton/>
                <NavMenuList titles={titles} navInfo={navInfo} openNavFlg={openNavFlg} setOpenNavFlg={setOpenNavFlg}/>
            </div>
        </div>
    );
}
 
export default Sidebar;