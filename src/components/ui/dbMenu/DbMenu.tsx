import { dbMenuType } from "@/types/dbMenu";
import { CSSProperties, FC, useEffect, useState } from "react";
import DbMenuListPc from "./DbMenuListPc";
import { dbMenuHiddenType } from "@/types/dbMenuHidden";
import { useDbMenuHiddenContext } from "@/context/DbMenuHiddenContext";
import { useDbMenuContext } from "@/context/DbMenuContext";
import useWindowSize from "@/hooks/useWindowSize";
import DbMenuListMobile from "./DbMenuListMobile";
import DbShowImg from "./DbShowImg";


// db設計書のトップ部分
const DbMenu: FC<{ dbImgData: dbMenuType[] ,firstHiddenData: dbMenuHiddenType[]}> = ({ dbImgData,firstHiddenData }) => {
  // 768px以下のときの画像の表示・非表示の状態を格納するstate
  const [upImgFlg, setUpImgFlg] = useState(false); 
  // 768px以下の時に表示するmenuの表示・非表示の状態を格納するstate
  const [menuShowFlg, setMenuShowFlg] = useState(false);
  // 表示する画像パスを格納
  const [imgPath, setImgPath] = useState<string|null>(null);
  // コンテキストから非表示の情報を受け取る
  const {setHiddenInfo} = useDbMenuHiddenContext();
  // コンテキストから現在選択されている情報を取得
  const {dbMenu,setDbMenu} = useDbMenuContext();
  // 現在の画面幅を取得
  const windowSize = useWindowSize();

  // コンテキストに初期データを登録する
  useEffect( () =>{
    setHiddenInfo(firstHiddenData);
    setImgPath(dbImgData[0].imgPath)
    if (dbImgData && dbImgData.length > 0) {
         setDbMenu(dbImgData[0]); // 初回のみ0番目の初期データをセット
      }
  },[])
  
  // 画面幅が768以下で768以下のmenuが表示されているときのみ　画像を大きく表示
  const openImg = () => {
    if(windowSize < 768 && menuShowFlg){
      setUpImgFlg(true);
    }
  };
  // 画面幅が768以下で768以下のmenuが表示されているときのみ　の画像を非表示
  const closeImg = () => {
    // 画像を非表示にする
      setUpImgFlg(false);
      // 表示していたメニューを非表示
      setMenuShowFlg(false);
  };

  // 画像が更新されたら
  useEffect(() => {
    // 選択されているボタンが変化したら画像を更新する
    setImgPath(dbMenu.imgPath);
  },[dbMenu]);

  // window幅が変化したら実行
  useEffect(() => {
      if(windowSize >= 768){
        setUpImgFlg(false);
        setMenuShowFlg(false);
      }
  },[windowSize]);

  const divStyle : CSSProperties = {
    boxShadow : windowSize >= 768 ? '1px 1px 3px 2.5px rgba(0, 0, 0, 0.25)' : 'none',
    backgroundColor : windowSize >= 768 ? 'rgb(244,244,244,0.8)' : '#FAF7F7'
  }

  return (
    <div style={divStyle} className="mt-2 md:py-7 md:px-6 rounded-[10px]">
      {windowSize >= 768 ?(
        // 768px以上の画面
        <DbMenuListPc dbImgData={dbImgData} />
      ):(
        // 768px以下の画面
        <DbMenuListMobile dbImgData={dbImgData} menuShowFlg={menuShowFlg} setMenuShowFlg={setMenuShowFlg} openImg={openImg}/>
      )}
      {/* imgPathに値が埋め込まれてから表示 */}
      {/* DBの画像 */}
      {imgPath &&
        <DbShowImg imgPath={imgPath} upImgFlg={upImgFlg} closeImg={closeImg}/>
      }
    </div>
  );
}

export default DbMenu;
