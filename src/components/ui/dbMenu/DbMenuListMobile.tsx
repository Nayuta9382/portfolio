import { dbMenuType } from "@/types/dbMenu";
import { FC } from "react";
import DbMenuItemMobile from "./DbMenuItemMobile";
import useWindowSize from "@/hooks/useWindowSize";
import Image from "next/image";

type DbMenuListMobileProps = {
    dbImgData: dbMenuType[];
    // 768px以下の時に表示するmenuの表示・非表示を受け取る
    menuShowFlg: boolean;
    // menuShowFlgの値を更新
    setMenuShowFlg: (value: boolean) => void;
    //768px以下のときの画像を表示する関数
    openImg: () => void;
};

// db設計書のメニューリスト部分(768pxとのとき)
const DbMenuListMobile: FC<DbMenuListMobileProps> = ({ dbImgData, menuShowFlg, setMenuShowFlg, openImg }) => {
    // 現在の画面幅を取得
    const windowSize = useWindowSize();
    // 768px以下でのメニューを表示する関数
    const showMenu = () => {
        if(menuShowFlg){
            setMenuShowFlg(false);
        }else{
            setMenuShowFlg(true);
        }
    }
    const buttonSytle = {
        display : windowSize < 768 ? 'block' : 'none'
    }
    const showMenuStyle = {
        display: menuShowFlg ? 'block' : 'none'
    }

    return ( 
         <div className="w-full relative">
            <div className="flex relative items-center w-1/2 max-w-[230px]  rounded-[10px] border-[#838181] border-[1.5px] border-opacity-40 bg-white hover:opacity-70">
                <button onClick={showMenu} style={buttonSytle} type="button" className=" w-full h-[45px] pl-3 font-bold text-left">画像を選択</button>
                <Image className="block absolute right-1 opacity-70 w-9 h-9 pointer-events-none" src={'/img/icon/downArrow.png'} alt="arror.png" width={35} height={35}  unoptimized={true}  quality={100} />
            </div>
            <div style={showMenuStyle} className="w-4/5 sm:w-3/5  absolute  max-h-[70vh] overflow-hidden overflow-y-auto rounded-[10px] shadow-3xl bg-white ">
            {dbImgData.map((item) => (
                <DbMenuItemMobile key={item.id} dbImgData={item} onClick={openImg} />
            ))}
            </div>
        </div>
    );
}
 
export default DbMenuListMobile;