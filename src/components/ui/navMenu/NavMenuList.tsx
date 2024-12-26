import {  FC,  useEffect, useState} from "react";
import NavMenuItem from "./NavMenuItem";
import NavTitle from "./NavTitle";
import { navMenu } from "@/types/navMenu";
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from "next/router";
import { useNavSelectInfoContext } from "@/context/NavSelectInfoContext";
import Image from "next/image";

interface NavMenuListProps {
    titles: navMenu[];
    navInfo: navMenu[];
    openNavFlg: boolean; // メニューが開いているかのStateを受ける
    setOpenNavFlg:  (flg:boolean) => void
}
 
const NavMenuList: FC<NavMenuListProps> = ({titles, navInfo,openNavFlg,setOpenNavFlg}) => {
     // Navメニューのホバー情報を格納する
    const [hover, setHover] = useState(false);
    const router = useRouter();
    //現在選択されている(現在いるnavの場所)を取得
    const {navSelectInfo} = useNavSelectInfoContext();

    //   画面遷移の処理
     useEffect( () =>{
        router.push(navSelectInfo.url)
    },[navSelectInfo])

    // メニューを閉じる関数
    const closeMenu = () => {
        // hoverをfalseにした下のuseEfectでメニューを非表示にする
        setHover(false)
    }

    useEffect(() => { 
        if(hover){
            setOpenNavFlg(true);
            // setAnimationClass('sidebar-on');
        }else{
            setOpenNavFlg(false);
            // setAnimationClass('sidebar-off');
        }
    },[hover])
    
    // useEffect(()=>{
    //     // if(openNavFlg){
    //     //     // setAnimationClass('sidebar-on');
    //     // }else{
    //     //     // setAnimationClass('sidebar-off');
    //     // }
        
    // },[openNavFlg])
    // メニューの移動処理
    // rightの位置を格納
    const [right, setRight] = useState(-250);

    useEffect(() => {
        let animationFrameId: number;
    
        const loop = () => {
            setRight((prevRight) => {
                if (openNavFlg && prevRight < 0) {
                    return prevRight + 12.5    ; // 右に移動
                } else if (!openNavFlg && prevRight > -250) {
                    return prevRight - 12.5; // 左に移動
                }
                return prevRight; // 変化なし
            });
    
            animationFrameId = requestAnimationFrame(loop);
        };
    
        loop(); // 初回ループ開始
    
        return () => cancelAnimationFrame(animationFrameId); // クリーンアップ処理
    }, [openNavFlg]); 

    const style = {
        // display : openNavFlg ? 'block' : 'none',
        display : openNavFlg ? 'block' : 'block',
        right: `${right}px`
    };
    // const animationClass = openNavFlg ? 'sidebar-on' : 'sidebar-off';

    return (
        // <nav style={style}  onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className="sidebar  h-[100vh] w-[200px] md:w-[250px] pt-14 bg-[#372A28] ">
        <nav style={style}  onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className={` fixed top-0 h-[100vh] w-[200px] md:w-[250px] pt-14 bg-[#372A28]`}>
            <button onClick={closeMenu} className="block hover:opacity-70 active:opacity-60" type="button">
                <Image className=" absolute top-4 right-4 w-7 h-7" src='/img/icon/close.png' alt="closeImg" width={10} height={10}  unoptimized={true}  quality={100} />
            </button>
            {titles.map((title)=>(
                <NavTitle key={uuidv4()} >{title.name}</NavTitle>
            ))}
            <ul>
            {navInfo.map((item) => (
                    <NavMenuItem key={item.id} navInfo={item}  />
                ))}
            </ul>
        </nav>
    );
}
 
export default NavMenuList;