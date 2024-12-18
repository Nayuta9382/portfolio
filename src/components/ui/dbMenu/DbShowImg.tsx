import useWindowSize from "@/hooks/useWindowSize";
import Image from "next/image";
import { FC } from "react";

interface DbShowImgProps {
    imgPath: string;
    upImgFlg : boolean;
    closeImg : () => void;
}

// DB設計書の画像を表示
const DbShowImg: FC<DbShowImgProps> = ({imgPath,upImgFlg,closeImg}) => {
    // 現在の画面幅を取得
  const windowSize = useWindowSize();
    
  const imgDivStyle = {
    display : windowSize < 768 && upImgFlg ? 'block' :'contents' 
  }
  
  const closeButtonStyle = {
    display: upImgFlg ? 'block' : 'none'
  }

   // 画面幅が768px以上かでstyleを切り変える
    const ImgStyle = {
      display : windowSize >= 768 || upImgFlg ? 'block' : 'none'
    }
    return (
        <div style={imgDivStyle} className="bg-[rgb(125,125,125,0.6)]  fixed top-0 left-0  min-w-[99vw] min-h-[100vh] z-10 ">
            <button style={closeButtonStyle} onClick={closeImg} type="button" className="block absolute top-1 right-3 w-7 h-7">
                <Image className="hover:opacity-80 active:opacity-70" src={'/img/icon/close.png'} alt="" width={28} height={28}/>
            </button>
            <Image style={ImgStyle} className="w-[90%] h-auto m-auto mt-10" src={imgPath} alt="" width={100} height={100}   unoptimized={true}  quality={100}/>
      </div>
    );
}
 
export default DbShowImg;