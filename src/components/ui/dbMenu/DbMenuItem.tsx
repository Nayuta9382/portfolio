import { useDbMenuContext } from "@/context/DbMenuContext";
import { dbMenuType } from "@/types/dbMenu";
import { FC, useEffect, useState } from "react";



// db設計書のボタン部分 
const DbMenuItem: FC<{dbImgData:dbMenuType}> = ({dbImgData}) => {
     const id = dbImgData ? dbImgData.id : 0; 
    // コンテキストから現在選択されている情報を取得
    const { dbMenu, setDbMenu } = useDbMenuContext();

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

    // onClickで選択されたボタンを更新
    const selectClick = () => {
        setDbMenu(dbImgData); 
    };


    const style = {
        'backgroundColor': selectFlg ? '#E6E6E6': '#FAFAFA',
        'font-weight': selectFlg ? 'bold' : 'normal',
    }
    return (
        <button onClick={selectClick} style={style} className=" block  h-[50px] lg:h-[60px] px-3 text-base; lg:text-lg whitespace-nowrap hover:opacity-70 ">{dbImgData.name}</button>
    );
}
 
export default DbMenuItem;