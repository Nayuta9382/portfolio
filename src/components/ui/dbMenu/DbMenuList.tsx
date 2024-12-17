import { FC, useEffect, useState } from "react";
import DbMenuItemPc from "./DbMenuItemPc";
import { dbMenuType } from "@/types/dbMenu";
import Image from "next/image";
import { useDbMenuHiddenContext } from "@/context/DbMenuHiddenContext";
import { dbMenuHiddenType } from "@/types/dbMenuHidden";
import useElementWidth from "@/hooks/useElementWidth";
import useWindowSize from "@/hooks/useWindowSize";


// db設計書のメニューリスト部分
const DbMenuList: FC<{ dbImgData: dbMenuType[] }> = ({ dbImgData }) => {
    const maxCount = Math.ceil(dbImgData.length / 2);
    
    const windowSize = useWindowSize();

    // 外枠の要素の幅を取得する
    const {ref:menuRef,width: menuWidth} = useElementWidth<HTMLDivElement>();
    // 内枠の要素の幅を取得する(div)
    const {ref:itemListDivRef,width: itemListDivWidth} = useElementWidth<HTMLDivElement>();


    
    // コンテキストから非表示の情報を受け取る
    const {setHiddenInfo} = useDbMenuHiddenContext();
 
    // 現在メニューを移動させたかを格納0は初期位置　
    const [clickCount, setClickCount] = useState(0);

    
    // Window幅が更新されるたびに矢印ボタンの表示・非表示を切り替える
    const buttonDivSytle = {
        'display' : clickCount === 0  && (menuWidth - itemListDivWidth) >= 90  || windowSize < 768 ? 'none' : 'flex'
    }

    // 左ボタンのstyle(ボタンを押しても動作がない場合とのstyleを変更する)
    const leftButtonStyle: React.CSSProperties  = {
        pointerEvents: clickCount === 0 ? 'none' : 'auto',
        opacity: clickCount === 0 ? '40%' : '100%'
    }
    // 右ボタンのstyle(ボタンを押しても動作がない場合とのstyleを変更する)
    const rightButtonStyle : React.CSSProperties  = {
        pointerEvents: clickCount === maxCount - 1 ? 'none' : 'auto',
        opacity: clickCount=== maxCount - 1 ? '40%' : '100%'
    }

    // useEffect(() => {
    //     if (dbImgData && dbImgData.length > 0) {
    //         setDbMenu(dbImgData[0]); // 初回のみ0番目の初期データをセット
    //     }
    // }, []); 
    
    // clickCountが変更したら非表示の値を変更する
    useEffect( () => {
        const heddinData:dbMenuHiddenType[] = [{id:0,hiddenFlg:false}];
        // すべてを表示する
        for(let i = 1; i < dbImgData.length; i++){
            heddinData[i] = {id:dbImgData[i].id,hiddenFlg:false}
        }
        //指定の分を非表示にする
        for(let i = 0; i < clickCount * 2 ; i++){
            heddinData[i].hiddenFlg = true;
        }
        setHiddenInfo(heddinData);
        
    },[clickCount])


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

    const mostListStyle = {
       'display' : windowSize > 768 ?  'block' : 'none'
    }

    const menuListStyle = {
        'display' : windowSize > 768 ?  'flex' : 'block'
    }
   

    return (
        <div style={mostListStyle} ref={menuRef} className="h-[50px] lg:h-[60px] relative shadow-all-sm overflow-hidden rounded-[10px] bg-[#FAFAFA]">
                <div  style={menuListStyle} ref={itemListDivRef} className=" w-fit">
                {dbImgData.map((item) => (
                    <DbMenuItemPc key={item.id} dbImgData={item}  />
                ))}
            </div>
            <div style={buttonDivSytle} className="w-[88px]  h-[50px] lg:h-[60px] pl-2 pr-5 flex  gap-x-2 absolute top-0 right-0 bg-[#FAFAFA] ">
                <button style={leftButtonStyle} type="button" onClick={reduceCount} className="flex justify-center items-center w-[30px] h-[50px] lg:h-[60px] overflow-hidden hover:opacity-55  bg-[#FAFAFA]"><Image src={'/img/icon/triangle-left.png'} alt="" width={50} height={50}  className=" block min-w-[70px] w-[80px] h-[80px]  bg-[#FAFAFA] "/></button>
                <button style={rightButtonStyle} type="button" onClick={addCount} className="flex justify-center items-center w-[30px] h-[50px] lg:h-[60px] overflow-hidden hover:opacity-55  bg-[#FAFAFA]"><Image src={'/img/icon/triangle-right.png'} alt="" width={50} height={50}  className=" block min-w-[70px]  w-[80px] h-[80px]  bg-[#FAFAFA] "/></button>
            </div>
        </div>
    );
};

export default DbMenuList;
