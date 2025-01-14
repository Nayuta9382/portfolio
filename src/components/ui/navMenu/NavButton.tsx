import Image from "next/image";
import { FC, useEffect, useState } from "react";

type NavButtonProps = {
    openNavFlg: boolean;  // メニューが開いているかのStateを受ける
    setOpenNavFlg: (flg:boolean) => void;  // メニューが開いているかのsetStateを受ける
}
 
const NavButton:FC<NavButtonProps> = ({openNavFlg,setOpenNavFlg}) => {
     // Navメニューのホバー情報を格納する
     const [hover, setHover] = useState(false);
    // メニューを表示・非表示を行う関数
    const menuOnClose = () => {
        if(openNavFlg){
            setOpenNavFlg(false);
        }else{
            setOpenNavFlg(true)
        }
    }
    // ホバーの状態をセットする
    useEffect(() => {
        if(hover){
            setOpenNavFlg(true);
        }else{
            setOpenNavFlg(false);
        }
    },[hover])

    return (
        <button type="button" onClick={menuOnClose}  onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className="w-9 sm:w-11 lg:w-[50px] pt-3 pb-4 sm:rounded-l-[px]5 rounded-l-[10px] bg-[#372A28] absolute top-[10%] right-0 hover:opacity-90  active:opacity-80">
            <Image  src={"/img/icon/menu.png"} alt="" width={10} height={10} className="block w-1/2 m-auto mb-1.5 "/>
            <p className="text-white">
                <span className="block h-[16px] md:h-[18px] lg:h-[22px] text-base lg:text-lg">M</span>
                <span className="block h-[18px] md:h-[20px] lg:h-[22px] text-base lg:text-lg">e</span>
                <span className="block h-[18px] md:h-[20px] lg:h-[22px] text-base lg:text-lg">n</span>
                <span className="block h-[18px] md:h-[20px] lg:h-[22px] text-base lg:text-lg">u</span>
            </p>
        </button>
    );
}
 
export default NavButton;