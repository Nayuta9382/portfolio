import Link from "next/link";
import { FC, useEffect, useState } from "react";

type LinkHoverBorderProps = {
    children: React.ReactNode;
    url: string
} 
// Linkタグでhover時に下線をつける
const LinkHoverBorder: FC<LinkHoverBorderProps> = ({children, url}) => {
    const [hover, setHover] = useState(false);
    // styleのwidthの位置を格納
    const [width, setWidth] = useState(0);

    // widthの値を計算
    useEffect(() => {
        let animationFrameId: number;
        const loop = () => {
            setWidth((prevRight) => {
                if (hover && prevRight < 100) {
                    return prevRight + 10; 
                }else if(!hover){
                    return 0;
                }
            return prevRight
            });
            animationFrameId = requestAnimationFrame(loop);
        };
        loop(); // 初回ループ開始
    
        return () => cancelAnimationFrame(animationFrameId); // クリーンアップ処理
    }, [hover]); 
    
    const style = {
        width:`${width}%`
    }

    return (
        <Link className={`inline-block relative  hover:opacity-80 active:opacity-70 mb-[1px]`}  onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} href={url}>
            {children}
            <div style={style} className={`h-[1px] bg-black opacity-70`}></div>
        </Link>
    );
}
 
export default LinkHoverBorder;