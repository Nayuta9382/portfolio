import UseTextWidth from "@/hooks/useTextWidth";
import { FC,  useEffect,  useState } from "react";

type ThProps = {
    children: React.ReactNode;  
    last? : boolean;

}
 
const Th: FC<ThProps> = ({children, last}) => {
    // ラストのみボーダー取り消し
    const rightBoder = last ? '' : 'border-r-[1.5px] ';
    // テキストの横幅を保持
    const [textWidth, setTextWidth] = useState<number>(0);


      // テキストを取得
      let textContent = '';
      if (typeof children === 'string') {
        textContent = children; // 文字列を変数に格納
      }
    //   hooksから横幅を取得
      const width = UseTextWidth(textContent,1);
      useEffect( () =>{
            setTextWidth(width);
      },[width]);


  

    return (
        <th style={{ minWidth: `${textWidth}px`}} className={`w-2/5  text-base  bg-[#d9d9d9] bg-opacity-50 py-1.5 px-2 md:px-4 border-b-[1.5px]  border-[#838181] border-opacity-40 ${rightBoder}`}>{children}</th>
    );
}
 
export default Th;