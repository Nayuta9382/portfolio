
import { useNavSelectInfoContext } from "@/context/NavSelectInfoContext";
import { navMenu } from "@/types/navMenu";
import { FC,  useEffect,  useState } from "react";

interface NavMenuItemProps {
   navInfo:navMenu
}
 
const NavMenuItem: FC<NavMenuItemProps> = ({navInfo}) => {
    // 要素が選択されているかを格納するState
    const [clickFlg, setClickFlg] = useState(false);
      //現在選択されている(現在いるnavの場所)を取得
      const { navSelectInfo,setNavSelectInfo} = useNavSelectInfoContext();


    useEffect(() => {
        if(navInfo.id === navSelectInfo.id){
            setClickFlg(true);
        }else{
            setClickFlg(false);
        }
    },[navSelectInfo])
    
    // onClickイベント時にクリックされたボタンのstyleを変更
    const clickEvent = () =>{
        setNavSelectInfo(navInfo);
        // ◆--画面遷移の処理を書く--◆
    }
    
   

    const style = {
        'fontWeight' :  clickFlg ? 'font-bold' : 'font-normal',
        'backgroundColor': clickFlg ? '#645654' : '#372A28',
    }
    return (
        <li className="w-full text-base md:text-lg  bg-white text-white">
            <button type="button" onClick={clickEvent} style={style} className=" block w-full py-2 pl-9 md:pl-10 text-left  hover:opacity-90 active:opacity-80">
                {navInfo.name}
            </button>
        </li>
    );
}
 
export default NavMenuItem;