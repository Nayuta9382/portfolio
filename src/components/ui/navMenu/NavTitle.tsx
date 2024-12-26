
import { useNavSelectInfoContext } from "@/context/NavSelectInfoContext";
import { FC } from "react";

interface NavTitleProps { 
    children: React.ReactNode;  
}
 
const NavTitle: FC<NavTitleProps> = ({children}) => {
    //現在選択されている(現在いるnavの場所)を取得
    const { setNavSelectInfo} = useNavSelectInfoContext();
    // Titleがクリックされたら選択されている要素を初期化する
    const onClick = () =>{
        setNavSelectInfo({id:-1 , url:'/'});
    }

  
    return (  
        <h4 className="text-[22px] md:text-[26px] text-white bg-white font-bold">
        <button type="button" onClick={onClick} className="block w-full py-2 pl-5 md:pl-6 text-left hover:opacity-90 active:opacity-80 bg-[#372A28]">
            {children}
        </button>
    </h4>);
}
 
export default NavTitle;