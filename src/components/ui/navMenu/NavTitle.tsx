
import { useNavShowIdContext } from "@/context/NavShowIdContext";
import { navMenu } from "@/types/navMenu";
import { useRouter } from "next/router";
import { FC } from "react";

type NavTitleProps = { 
    navInfo:navMenu 
}
 
const NavTitle: FC<NavTitleProps> = ({navInfo}) => {
    const router = useRouter();
    //現在選択されている(現在いるnavの場所)を取得
    const { setNavShowId} = useNavShowIdContext();
    const onClick  =  () =>{
        // 現在選択されている値を初期化
        setNavShowId('no');
        //画面遷移の処理 
        router.push(`${navInfo.url}`)
    }

  
    return (  
        <h4 className="text-[22px] md:text-[26px] text-white bg-white font-bold">
        <button type="button" onClick={onClick} className="block w-full py-2 pl-5 md:pl-6 text-left hover:opacity-90 active:opacity-80 bg-[#372A28]">
            {navInfo.name}
        </button>
    </h4>);
}
 
export default NavTitle;