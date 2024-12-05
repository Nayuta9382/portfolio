import Image from "next/image";
import { FC } from "react";

type CardImgProps =  {
    src:string;
    alt:string;

}
 
const CardImg: FC<CardImgProps> = ({src,alt}) => {
    return (
        <div className="w-[66%] sm:w-[24%]  max-h-[48vw] sm:h-auto flex items-center overflow-hidden  min-w-[250px] min-h-[250px] ">
            <Image className="w-full h-auto  m-1 rounded-[20px] shadow-3xl min-w-[250px] min-h-[250px]" src={src} alt={alt} width={100} height={100}  unoptimized={true}  quality={100} />
        </div>
    );
}
 
export default CardImg;