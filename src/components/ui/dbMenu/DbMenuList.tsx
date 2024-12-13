import { FC, useEffect, useState } from "react";
import DbMenuItem from "./DbMenuItem";
import { dbMenuType } from "@/types/dbMenu";
import { useDbMenuContext } from "@/context/DbMenuContext";
import Image from "next/image";
import { useDbMenuHiddenContext } from "@/context/DbMenuHiddenContext";
import { dbMenuHiddenType } from "@/types/dbMenuHidden";

// db設計書のメニューリスト部分
const DbMenuList: FC<{ dbImgData: dbMenuType[] }> = ({ dbImgData }) => {
    const maxCount = Math.ceil(dbImgData.length / 4);
    
     // コンテキストから非表示の情報を受け取る
     const {hiddenInfo, setHiddenInfo} = useDbMenuHiddenContext();
    
    // コンテキストから現在選択されている情報を取得
    const { setDbMenu } = useDbMenuContext();
    // 現在メニューを移動させたかを格納0は初期位置　
    const [clickCount, setClickCount] = useState(0);

    useEffect(() => {
        if (dbImgData && dbImgData.length > 0) {
            setDbMenu(dbImgData[0]); // 初回のみ0番目の初期データをセット
        }
    }, [dbImgData]); // dbImgDataが更新されたときに再実行
    
    // clickCountが変更したら非表示の値を変更する
    useEffect( () => {
        const heddinData:dbMenuHiddenType[] = [{id:0,hiddenFlg:false}];
        // すべてを表示する
        for(let i = 1; i < dbImgData.length; i++){
            heddinData[i] = {id:dbImgData[i].id,hiddenFlg:false}
        }
        //指定の分を表示にする
        for(let i = 0; i < clickCount * 4; i++){
            heddinData[i].hiddenFlg = true;
        }
        
        setHiddenInfo(heddinData);
       
        
    },[clickCount])

    useEffect(() =>{
        console.log(hiddenInfo);
    },[hiddenInfo])

    // 移動ボタンクリック時にCountを減少させる
    const reduceCount = () => {
        if(clickCount > 0){
            setClickCount(clickCount - 1);
        }
    }
    // 移動ボタンクリック時にCountを増加させる
    const addCount = () => {
        if(maxCount > clickCount + 1 ){
            setClickCount(clickCount + 1);
        }
    }



    return (
        <div className="h-[50px] lg:h-[60px] relative shadow-all-sm overflow-hidden rounded-[10px] bg-[#FAFAFA]">
            <div className="flex ">
                {dbImgData.map((item) => (
                    <DbMenuItem key={item.id} dbImgData={item} />
                ))}
            </div>
            <div className="w-[88px]  h-[50px] lg:h-[60px] pl-2 pr-5 flex  gap-x-2 absolute top-0 right-0 bg-[#FAFAFA] ">
                <button type="button" onClick={reduceCount} className="flex justify-center items-center w-[30px] h-[50px] lg:h-[60px] overflow-hidden hover:opacity-55  bg-[#FAFAFA]"><Image src={'/img/icon/triangle-left.png'} alt="" width={50} height={50}  className=" block min-w-[70px] w-[80px] h-[80px]  bg-[#FAFAFA] "/></button>
                <button type="button" onClick={addCount} className="flex justify-center items-center w-[30px] h-[50px] lg:h-[60px] overflow-hidden hover:opacity-55  bg-[#FAFAFA]"><Image src={'/img/icon/triangle-right.png'} alt="" width={50} height={50}  className=" block min-w-[70px]  w-[80px] h-[80px]  bg-[#FAFAFA] "/></button>
            </div>
        </div>
    );
};

export default DbMenuList;
