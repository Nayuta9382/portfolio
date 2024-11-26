import { FC } from "react";
import Heading from "./Heading";

interface H2Props {
    children: React.ReactNode;  
}
 
const H2: FC<H2Props> = ({children}) => {
    const className = "text-2xl md:text-[26px] lg:text-[32px]";
    return (
        <Heading lavel="h2" className={className}>{children}</Heading>
    );
}
 
export default H2;