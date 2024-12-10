import Image from "next/image";
import { FC } from "react";

type CardImgProps =  {
    src:string;
    alt:string;

}
 
const CardImg: FC<CardImgProps> = ({src,alt}) => {
    return (
        <div className="flex items-center overflow-hidden  rounded-[20px] shadow-3xl w-[80%] ss:w-[70%] md:w-[24%]  max-h-[48vw] ss:h-[40vw]  md:h-auto   min-w-[250px]  sm:min-w-0 min-h-[180px]  ss:min-h-0 ">
            <Image className="w-full h-auto  min-w-[250px] sm:min-w-0 min-h-[250px] sm:min-h-0" src={src} alt={alt} width={100} height={100}  unoptimized={true}  quality={100} />
        </div>
    );
}
 
export default CardImg;