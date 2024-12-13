import {  } from "@/types/dbMenu";
import { dbMenuHiddenType } from "@/types/dbMenuHidden";
import { createContext, FC, ReactNode, useContext, useState } from "react";
// ◆--dbMenuの選択情報を格納--◆
type dbMenuHiddenContextType = {
    hiddenInfo: dbMenuHiddenType[];
    setHiddenInfo :  React.Dispatch<React.SetStateAction<dbMenuHiddenType[]>>; 
}

// コンテキストの生成
const DbMenuHiddenContext = createContext<dbMenuHiddenContextType | undefined>(undefined)

export const DbMenuHiddenProvider:FC<{children: ReactNode}> = ({children}) => {
    const [hiddenInfo, setHiddenInfo] = useState<dbMenuHiddenType[]>([{id:0,hiddenFlg:false}]);

    return (
        // コンテキストでデータを共有
        <DbMenuHiddenContext.Provider value={{hiddenInfo, setHiddenInfo}}>
            {children}
        </DbMenuHiddenContext.Provider>
    );
}


// カスタムフック
export const useDbMenuHiddenContext = () : dbMenuHiddenContextType =>{
    const context = useContext(DbMenuHiddenContext);
    if(!context){
        throw new Error('Contextが利用できません')
    }
    return context;
}