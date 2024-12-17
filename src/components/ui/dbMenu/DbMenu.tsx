import { dbMenuType } from "@/types/dbMenu";
import { CSSProperties, FC, useEffect, useState } from "react";
import DbMenuList from "./DbMenuList";
import { dbMenuHiddenType } from "@/types/dbMenuHidden";
import { useDbMenuHiddenContext } from "@/context/DbMenuHiddenContext";
import Image from "next/image";
import { useDbMenuContext } from "@/context/DbMenuContext";
import useWindowSize from "@/hooks/useWindowSize";
import DbMenuItemMobile from "./DbMenuItemMobile";


// db設計書のトップ部分
const DbMenu: FC<{ dbImgData: dbMenuType[] ,firstHiddenData: dbMenuHiddenType[]}> = ({ dbImgData,firstHiddenData }) => {
  // 768px以下のときの画像の表示・非表示の状態を格納するstate
  const [upImgFlg, setUpImgFlg] = useState(false); 
  // 768px以下の時に表示するmenuの表示・非表示の状態を格納するstate
  const [menuShowFlg, setMenuShowFlg] = useState(false);
  // 表示する画像パスを格納
  const [imgPath, setImgPath] = useState('');
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
  
  // 768px以下でのメニューを表示する関数
  const showMenu = () => {
    if(menuShowFlg){
      setMenuShowFlg(false);
    }else{
      setMenuShowFlg(true);
    }
  }

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
    openImg();
  },[dbMenu]);

  // window幅が変化したら実行
  useEffect(() => {
      if(windowSize >= 768){
        setUpImgFlg(false);
      }
  },[windowSize]);


  // 画面幅が768px以上かでstyleを切り変える
  const ImgStyle = {
    display : windowSize >= 768 || upImgFlg ? 'block' : 'none'
  }

  
  const buttonSytle = {
    display : windowSize <= 768 ? 'block' : 'none'
  }
  const divStyle : CSSProperties = {
    boxShadow : windowSize >= 768 ? '1px 1px 3px 2.5px rgba(0, 0, 0, 0.25)' : 'none',
    backgroundColor : windowSize >= 768 ? 'rgb(244,244,244,0.8)' : '#FAF7F7'
  }

  const imgDivStyle = {
    display : windowSize < 768 && upImgFlg ? 'block' :'contents' 
  }
  const showMenuStyle = {
    display: menuShowFlg ? 'block' : 'none'
  }
  
  const closeButtonStyle = {
    display: upImgFlg ? 'block' : 'none'
  }
  return (
    <div style={divStyle} className="py-7 px-6 rounded-[10px]">
      {windowSize >= 768 ?(
        // 768px以上の画面
        <DbMenuList dbImgData={dbImgData} />
      ):(
        // 768px以下の画面
        <div className="w-2/6 relative">
          <div className="w-full  rounded-[10px] border-[#838181] border-[1.5px] border-opacity-40 bg-white">
              <button onClick={showMenu} style={buttonSytle} type="button" className=" w-full h-[45px] pl-3 font-bold text-left">画像を選択</button>
          </div>
          <div style={showMenuStyle} className="w-full pt-2 absolute  max-h-[70vh] overflow-hidden overflow-y-auto rounded-[10px] shadow-3xl bg-white">
            {dbImgData.map((item) => (
              <DbMenuItemMobile key={item.id} dbImgData={item} onClick={openImg} />
            ))}
          </div>
        </div>

      )}
      <div style={imgDivStyle} className="bg-[rgb(125,125,125,0.6)]  fixed top-0 left-0  min-w-[99vw] min-h-[100vh] z-10 ">
        <button style={closeButtonStyle} onClick={closeImg} type="button" className="block absolute top-1 right-3 w-7 h-7">
          <Image className="hover:opacity-80 active:opacity-70" src={'/img/icon/close.png'} alt="" width={28} height={28}/>
        </button>
        <Image style={ImgStyle} className="w-[90%] h-auto m-auto mt-10" src={imgPath} alt="" width={100} height={100}   unoptimized={true}  quality={100}/>
      </div>
    </div>
  );
}

export default DbMenu;
