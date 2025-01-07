import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type WorksItemProps = {
    title:string;
    text:string;
    imgPath:string
    link:string
    openFlg?:boolean // アプリが公開しているかを渡す
}
 
const WorksItem: FC<WorksItemProps> = ({title,text,link, imgPath,openFlg=false}) => {
    return (
        <div className="m-auto sm:m-0 relative w-[83%] pb-9 ss:w-[75%] sm:w-[40%] md:w-[30%] lg:w-[26%]">
            <h3 className="font-black mb-1 text-[22px] lg:text-[26px] ">{title}</h3>
            <p className="ml-1 mb-2 whitespace-nowrap">{text}</p>
            <Link href={link} className="flex items-center overflow-hidden  rounded-[20px] shadow-rb w-full md:w-[90%] lg:w-full  max-h-[48vw] ss:h-[40vw]  sm:h-auto  min-h-[180px]  ss:min-h-0   hover:opacity-80 active:opacity-70">
                <Image className="w-full  aspect-square object-cover" src={imgPath} alt={title} width={100} height={100}  unoptimized={true}  quality={100}   priority  />
            </Link>
            {openFlg &&         
                <p className="absolute bottom-2 right-3 md:right-6  lg:right-3 text-sm text-[#FA2323] text-right">アプリ公開中</p>
            }
        </div>  
    );
}
 
export default WorksItem;