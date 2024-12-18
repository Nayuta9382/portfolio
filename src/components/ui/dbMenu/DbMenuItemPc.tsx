import { useDbMenuContext } from "@/context/DbMenuContext";
import { useDbMenuHiddenContext } from "@/context/DbMenuHiddenContext";
import useWindowSize from "@/hooks/useWindowSize";
import { dbMenuType } from "@/types/dbMenu";
import { FC, useEffect, useState } from "react";


// db設計書のボタン部分 (768px以上)
const DbMenuItemPc: FC<{dbImgData:dbMenuType}> = ({dbImgData}) => {
    const windowSize = useWindowSize();

     const id = dbImgData ? dbImgData.id : 0; 
    // コンテキストから現在選択されている情報を取得
    const { dbMenu, setDbMenu } = useDbMenuContext();
    // コンテキストから非表示の情報を受け取る
    const {hiddenInfo} = useDbMenuHiddenContext();


    // 選択さえているかの情報を格納するState
    const [selectFlg, setSelectFlg] = useState<boolean>(false);

    // dbMenuが更新されたら実行(選択さえているかを確認)
    useEffect( () => {
        if(id === dbMenu.id){
            setSelectFlg(true)
        }else{
           setSelectFlg(false);
        }
    },[dbMenu]) 

    
    const hiddenFlg = hiddenInfo[2] !== undefined ? hiddenInfo[id].hiddenFlg : 0;

    // onClickで選択されたボタンを更新
    const selectClick = () => {
        setDbMenu(dbImgData); 
    };

    const windowSizeFlg = windowSize < 768 ? false : true;
    // windowSizeが 768以上で　選択されいる場合のみ　背景色を変更
    const style = {
        'backgroundColor': selectFlg &&  windowSizeFlg ? '#E6E6E6': '#FAFAFA',
        'fontWeight': selectFlg ? 'bold' : 'normal',
        'display': hiddenFlg ? 'none' : 'block',
    }
    return (
        <button onClick={selectClick} style={style} className=" h-[50px] lg:h-[60px] px-3 text-base; lg:text-lg whitespace-nowrap hover:opacity-70 bg-[#FAFAFA]">{dbImgData.name}</button>
    );
}
 
export default DbMenuItemPc;