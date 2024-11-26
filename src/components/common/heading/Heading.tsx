import { FC } from "react";

type HeadingProps = {
    lavel: 'h2' | 'h3' | 'h4';
    className : string;
    children: React.ReactNode;  
}
 
const Heading: FC<HeadingProps> = ({lavel, className,children}) => {
    const Tag = `${lavel}` as keyof JSX.IntrinsicElements; // 動的なタグ生成
    return (
        <Tag className={`to-black font-bold ${className}`}>{children}</Tag>
    );
}
 
export default Heading;