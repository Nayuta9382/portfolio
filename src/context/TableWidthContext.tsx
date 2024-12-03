import { createContext, FC, ReactNode, useContext, useState } from "react";
// ◆--テーブルの横幅を格納--◆
type TableScrollContextType = {
    // スクロールバーの表示の状態を保持
    tableWidth:number;
    setTableWidth : (TableTableWidth: number) => void;
}

// コンテキストの生成
const TableContext = createContext<TableScrollContextType | undefined>(undefined)

export const TableProvider:FC<{children: ReactNode}> = ({children}) => {
    const [tableWidth, setTableWidth] = useState(0);

    return (
        // コンテキストでデータを共有
        <TableContext.Provider value={{tableWidth, setTableWidth}}>
            {children}
        </TableContext.Provider>
    );
}


// カスタムフック
export const useTableWidthContext = () : TableScrollContextType =>{
    const context = useContext(TableContext);
    if(!context){
        throw new Error('Contextが利用できません')
    }
    return context;
}