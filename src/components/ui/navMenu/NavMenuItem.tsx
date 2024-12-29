
import { useNavShowIdContext } from "@/context/NavShowIdContext";
import { navMenu } from "@/types/navMenu";
import { useRouter } from "next/router";
import { FC,  useEffect,  useState } from "react";

interface NavMenuItemProps {
    navInfo:navMenu
}

const NavMenuItem: FC<NavMenuItemProps> = ({navInfo}) => {
    const router = useRouter();
    // 要素が選択されているかを格納するState
    const [selectFlg, setSelectFlg] = useState(false);
      //現在選択されている(現在いるnavの場所)を取得
      const { navShowId,setNavShowId} = useNavShowIdContext();


    useEffect(() => {
        if(navInfo.id === navShowId){
            setSelectFlg(true);
        }else{
            setSelectFlg(false);
        }
    },[navShowId])
    
    // onClickイベント時にクリックされたボタンのstyleを変更
    const clickEvent = () =>{
        // 画面遷移の処理
        setNavShowId(navInfo.id);
        router.push(`${navInfo.url}#${navInfo.id}`)
    }
    
   

    const style = {
        'fontWeight' :  selectFlg ? 'font-bold' : 'font-normal',
        'backgroundColor': selectFlg ? '#645654' : '#372A28',
    }
    return (
        <li className="w-full text-base md:text-lg  bg-white text-white">
            <button type="button" onClick={clickEvent} style={style} className={`block w-full py-2 pl-9 md:pl-10 text-left  hover:opacity-90 active:opacity-80`}>
                {navInfo.name}
            </button>
        </li>
    );
}
 
export default NavMenuItem;