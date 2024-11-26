import { FC } from "react";
import Heading from "./Heading";

interface H3Props {
    children: React.ReactNode;  
}
 
const H3: FC<H3Props> = ({children}) => {
    const className = "text-xl lg:text-[22px]";
    return (
        <Heading lavel="h3" className={className}>{children}</Heading>
    );
}
 
export default H3;