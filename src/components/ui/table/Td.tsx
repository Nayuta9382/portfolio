import UseTextWidth from "@/hooks/useTextWidth";
import { FC, useEffect, useState } from "react";
// lastはテーブルの右側の要素か
// lastBootomはテーブルの一番下の要素か
// lineSize は　何行か
type TdProps = {
    children: React.ReactNode;  
    last?:boolean;
    lastBottom?:boolean;
    lineSize?: 1 | 2
}
 
const Td: FC<TdProps> = ({children,last,lastBottom, lineSize = 1}) => {
     // ラストのみボーダー取り消し
     const rightBoder = last ? '' : 'border-r-[1.5px] ';
     const bottomBoder = lastBottom ? '' : ' border-b-[1.5px] ';

     const [textWidth, setTextWidth] = useState<number>(0);


     // テキストを取得
     let textContent = '';
     if (typeof children === 'string') {
       textContent = children; // 文字列を変数に格納
     }
   //   hooksから横幅を取得
     const width = UseTextWidth(textContent, lineSize);
     useEffect( () =>{
           setTextWidth(width);
     },[width]);



    return (
        <td style={{ minWidth: `${textWidth}px`}} className={` w-2/5 text-base py-1.5 px-2 md:px-4 h-10 border-[#838181]  border-opacity-40  ${rightBoder} ${bottomBoder}`}>{children}</td>
    );
}
 
export default Td;