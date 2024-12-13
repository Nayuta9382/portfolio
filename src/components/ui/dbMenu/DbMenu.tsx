import { dbMenuType } from "@/types/dbMenu";
import { FC, useEffect, useState } from "react";
import DbMenuList from "./DbMenuList";
import { dbMenuHiddenType } from "@/types/dbMenuHidden";
import { useDbMenuHiddenContext } from "@/context/DbMenuHiddenContext";
import Image from "next/image";
import { useDbMenuContext } from "@/context/DbMenuContext";


// db設計書のトップ部分
const DbMenu: FC<{ dbImgData: dbMenuType[] ,firstHiddenData: dbMenuHiddenType[]}> = ({ dbImgData,firstHiddenData }) => {
  // 表示する画像パスを格納
  const [imgPath, setImgPath] = useState('');
  // コンテキストから非表示の情報を受け取る
  const {setHiddenInfo} = useDbMenuHiddenContext();
  // コンテキストから現在選択されている情報を取得
  const {dbMenu} = useDbMenuContext();

  // コンテキストに初期データを登録する
  useEffect( () =>{
    setHiddenInfo(firstHiddenData);
    setImgPath(dbImgData[0].imgPath)
  },[])

  // 選択されているボタンが変化したら画像を更新する
  useEffect(() => {
      setImgPath(dbMenu.imgPath);
  },[dbMenu]);
  
  return (
    <div className="py-7 px-6 bg-[rgb(244,244,244,0.8)] rounded-[10px] shadow-all-sm">
      <DbMenuList dbImgData={dbImgData} />
      <Image className="w-full mt-8" src={imgPath} alt="" width={100} height={100}   unoptimized={true}  quality={100}/>
    </div>
  );
}

export default DbMenu;
