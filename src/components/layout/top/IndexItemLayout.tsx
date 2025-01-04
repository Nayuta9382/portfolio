import { FC } from "react";

type IndexItemLayoutProps = {
    children: React.ReactNode;
}
 
const IndexItemLayout: FC<IndexItemLayoutProps> = ({children}) => {
    return (
        <div className="pr-[35px] md:px-[45px] lg:px-[50px] ">
            {children}
        </div>
    );
}
 
export default IndexItemLayout;