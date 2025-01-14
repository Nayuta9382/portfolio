import useWindowSize from "@/hooks/useWindowSize";
import Image from "next/image";
import { FC } from "react";
import ImageZoom from "../imageZoom/ImageZoom";

interface DbShowImgProps {
    imgPath: string;
    upImgFlg : boolean;
    closeImg : () => void;
}

// DB設計書の画像を表示
const DbShowImg: FC<DbShowImgProps> = ({imgPath,upImgFlg,closeImg}) => {
    // 現在の画面幅を取得
  const windowSize = useWindowSize();

    return (
        <>
          {windowSize >= 768 ?(
            <Image className="w-[90%] md:w-full h-auto max-h-[500px] m-auto mt-10" src={imgPath} alt="" width={100} height={100}   unoptimized={true}  quality={100}/>
          ):(
            <ImageZoom imgPath={imgPath} showImgFlg={upImgFlg} closeImg={closeImg}/>
          )}
        </>
    );
}
 
export default DbShowImg;