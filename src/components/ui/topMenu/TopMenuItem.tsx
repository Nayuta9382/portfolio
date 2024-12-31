import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

type TopMenuItemProps = {
    link:string;
    src:string;
    alt?:string;
    title:string;
}
 
const TopMenuItem: FC<TopMenuItemProps> = ({link,src, alt = '', title}) => {
    return (
        <Link href={link} className="flex items-center overflow-hidden relative  rounded-[20px] shadow-rb w-[80%] ss:w-[70%] md:w-[24%] max-h-[48vw] ss:h-[40vw]  md:h-auto  min-w-[250px]  sm:min-w-0 min-h-[180px]  ss:min-h-0 hover:opacity-90 active:opacity-80">
            <Image className="w-full h-auto  min-w-[250px] sm:min-w-0 min-h-[250px] sm:min-h-0" src={src} alt={alt} width={100} height={100}  unoptimized={true}  quality={100}   priority  />
            <p className="absolute bottom-1 lg:bottom-3 md:right-3 right-5 text-2xl lg:text-3xl text-[rgb(255,255,255,0.85)]  font-bold text-right text-shadow-md ">{title}</p>
        </Link>
    );
}
 
export default TopMenuItem;