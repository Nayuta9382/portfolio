import { DbMenuProvider } from "@/context/DbMenuContext";
import { dbMenuType } from "@/types/dbMenu";
import { FC } from "react";
import DbMenu from "../ui/dbMenu/DbMenu";
import { DbMenuHiddenProvider } from "@/context/DbMenuHiddenContext";
import { dbMenuHiddenType } from "@/types/dbMenuHidden";


//  db設計書のレイアウト部分
const DbMenuLayout: FC<{ dbImgData: dbMenuType[] }> = ({ dbImgData }) => {
    // const { dbMenu, setDbmenu } = useDbMenuContext();
    // hidden用の初期のデータを格納
    const heddinData:dbMenuHiddenType[] = [{id:0,hiddenFlg:false}];
    for(let i = 1; i < dbImgData.length; i++){
        heddinData[i] = {id:dbImgData[i].id,hiddenFlg:false}
    }
    return (
        <DbMenuProvider>
            <DbMenuHiddenProvider>
               <DbMenu dbImgData={dbImgData} firstHiddenData={heddinData} />
            </DbMenuHiddenProvider>
        </DbMenuProvider>
    );
}
 
export default DbMenuLayout;