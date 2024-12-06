import { FC } from "react";

type OlProps = {
    children: React.ReactNode;
}
 
const Ol: FC<OlProps> = ({children}) => {
    return ( 
        <ol type="1" className=" w-[90%] list-decimal list-outside ml-5 space-y-1.5">{children}</ol>
    );
}
 
export default Ol;