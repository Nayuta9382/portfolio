import { FC } from "react";

type IndexItemLayoutProps = {
    children: React.ReactNode;
}
 
const IndexItemLayout: FC<IndexItemLayoutProps> = ({children}) => {
    return (
        <div className="w-full pl-6 pr-[40px] md:pl-[45px] md:pr-[75px] lg:px-[75px] ">
            {children}
        </div>
    );
}
 
export default IndexItemLayout;