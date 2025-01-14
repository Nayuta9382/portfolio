import { FC, useState } from "react";
import Image from "next/image";
import ImageZoom from "./ImageZoom";


type ImageZoomViewProps = {
    imgPath:string
}
 
// 画像をclickすると拡大表示されるcomponent
const ImageZoomView: FC<ImageZoomViewProps> = ({imgPath}) => {
    const [showImgFlg, setshowImgFlg] = useState(false);
    const closeImg = () =>{
        setshowImgFlg(false)
    };
    const openImg = () =>{
        setshowImgFlg(true)
    };
    return (
        <div className="w-full">
            <Image onClick={openImg} className="block w-full h-auto cursor-pointer hover:opacity-80 active:opacity-70" src={imgPath} alt="" width={100} height={100}   unoptimized={true}  quality={100}/>
            <ImageZoom imgPath={imgPath} showImgFlg={showImgFlg} closeImg={closeImg}/>
        </div>
    );
}
 
export default ImageZoomView;