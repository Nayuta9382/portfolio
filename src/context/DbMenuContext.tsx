import { dbMenuType } from "@/types/dbMenu";
import { createContext, FC, ReactNode, useContext, useState } from "react";
// ◆--dbMenuの選択情報を格納--◆
type dbMenuContextType = {
    dbMenu:dbMenuType;
    setDbMenu : (dbMenu: dbMenuType) => void;
}

// コンテキストの生成
const DbMenuContext = createContext<dbMenuContextType | undefined>(undefined)

export const DbMenuProvider:FC<{children: ReactNode}> = ({children}) => {
    const [dbMenu, setDbMenu] = useState<dbMenuType>( { id: 0, imgPath: '', name: '', hiddenFlg: false});

    return (
        // コンテキストでデータを共有
        <DbMenuContext.Provider value={{dbMenu, setDbMenu}}>
            {children}
        </DbMenuContext.Provider>
    );
}


// カスタムフック
export const useDbMenuContext = () : dbMenuContextType =>{
    const context = useContext(DbMenuContext);
    if(!context){
        throw new Error('Contextが利用できません')
    }
    return context;
}