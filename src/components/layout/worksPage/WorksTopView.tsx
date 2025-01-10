import Image from "next/image";
import { FC } from "react";

type WorksTopViewProps = {
    title:string;
    text:string;
    imgPath:string;
}
 
const WorksTopView: FC<WorksTopViewProps> = ({title,text,imgPath}) => {
    return (
        <div className=" mb-2 sm:mb-3 md:mb-5">
            <h1 className="md:mb-1 lg:mb-2 text-[26px] md:text-[28px] lg:text-[40px] font-bold">{title}</h1>
            <p className="ml-3 md:ml-7 text-lg md:text-[22px] lg:text-[26px] font-bold">{text}</p>
            <Image className="block w-full h-auto mt-4 lg:mt-7 border-[1.5px] border-[#838181] border-opacity-40 rounded-[10px]" src={imgPath} alt={imgPath} width={100} height={100}  unoptimized={true}  quality={100}   priority  />
        </div>
    );
}
 
export default WorksTopView;