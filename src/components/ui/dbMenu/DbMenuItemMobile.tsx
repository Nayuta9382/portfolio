import { useDbMenuContext } from "@/context/DbMenuContext";
import { dbMenuType } from "@/types/dbMenu";
import { FC } from "react";


// db設計書のボタン部分 
const DbMenuItemMobile: FC<{dbImgData:dbMenuType, onClick:() => void}> = ({dbImgData,onClick}) => {
    // コンテキストから現在選択されている情報を取得
    const {setDbMenu } = useDbMenuContext();

    // onClickで選択されたボタンを更新
    const selectClick = () => {
        setDbMenu(dbImgData); 
        // 768px以下のときの画像拡大表示をonにする
        onClick();
    };

  
    // windowSizeが 768以下手表示表示される
    return (
        <button onClick={selectClick} className="block  w-full  h-[50px] lg:h-[60px] pl-3 text-left text-base; lg:text-lg font-bold whitespace-nowrap hover:opacity-70 hover:bg-[rgba(40,39,39,0.02)]">{dbImgData.name}</button>
    );
}
 
export default DbMenuItemMobile;