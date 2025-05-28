import Image from "next/image";
import { FC } from "react";

type ImageZoomProps = {
    imgPath:string;
    // 親から画像の表示・非表示のflgと閉じるonClickの関数を受け取る
    showImgFlg:boolean;
    closeImg : () => void;
}

// 画像を拡大表示する
const ImageZoom: FC<ImageZoomProps> = ({imgPath, showImgFlg, closeImg}) => {

    const style  = {
       display : showImgFlg ? 'block' : 'none'
      }
    return (
        <div style={style} className="bg-[rgb(125,125,125,0.6)]  fixed top-0 left-0  min-w-[100vw] min-h-[100vh] z-50 ">
            <button onClick={closeImg}  type="button" className="block absolute top-1 right-5 w-7 h-7">
                <Image className="hover:opacity-80 active:opacity-70" src={'/img/icon/close.png'} alt="" width={28} height={28}/>
            </button>
            <Image className="max-w-[90%] max-h-[500px] lg:max-h-[800px] min-w-[60%] h-auto m-auto mt-10" src={imgPath} alt="" width={100} height={100}   unoptimized={true}  quality={100}/>
        </div>
    );
}
 
export default ImageZoom;