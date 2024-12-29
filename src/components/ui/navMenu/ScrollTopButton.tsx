import Image from "next/image";
import { useRouter } from "next/router";

const ScrollTopButton = () => {

    const router = useRouter();

    // ページのトップに遷移
    const scrollToTop = () => {
      router.push(`${router.pathname}#`);
    };
    return (
        <button onClick={scrollToTop} type="button" className=" absolute w-[50px] md:w-[55px]  lg:w-[65px] h-auto  top-[80%] left-0 text-[12px] lg:text-sm text-black font-bold bg-[#F1EFEF] rounded-[10px] shadow-md shadow-[rgb(0,0,0,25%)] hover:opacity-80 active:opacity-70">
            <Image className=" block m-auto w-[70%] " src='/img/icon/scroll-top.png' alt="top-scroll.png" width={10} height={10}  unoptimized={true}  quality={100} />
            <p className=" relative bottom-1.5 text-center">目次へ</p>
        </button>
    );
}
 
export default ScrollTopButton; 