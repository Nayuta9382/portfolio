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
            <Image onClick={openImg} className="block w-[85%] h-auto mt-1 cursor-pointer hover:opacity-80 active:opacity-70 border-[1.5px] border-[#838181] border-opacity-40 rounded-[10px]" src={imgPath} alt="" width={100} height={100}   unoptimized={true}  quality={100}/>
            <ImageZoom imgPath={imgPath} showImgFlg={showImgFlg} closeImg={closeImg}/>
        </div>
    );
}
 
export default ImageZoomView;