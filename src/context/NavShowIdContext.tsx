import { createContext, FC, ReactNode, useContext, useState } from "react";
// ◆--現在表示されているNavの項目(実際はurl)を格納--◆
type NavShowIdContextType = {
    navShowId:string;
    setNavShowId : (navShowId: string) => void;
}

// コンテキストの生成
const NavShowIdContext = createContext<NavShowIdContextType | undefined>(undefined)

export const NavShowIdProvider:FC<{children: ReactNode}> = ({children}) => {
    const [navShowId, setNavShowId] = useState<string>('');

    return (
        // コンテキストでデータを共有
        <NavShowIdContext.Provider value={{navShowId, setNavShowId}}>
            {children}
        </NavShowIdContext.Provider>
    );
}


// カスタムフック
export const useNavShowIdContext = () : NavShowIdContextType =>{
    const context = useContext(NavShowIdContext);
    if(!context){
        throw new Error('Contextが利用できません')
    }
    return context;
}