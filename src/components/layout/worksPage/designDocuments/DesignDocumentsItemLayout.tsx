import Text from "@/components/common/Text";
import { FC } from "react";

type  DesignDocumentsItemLayoutProps = {
    htmlId:string;
    heading:string;
    children: React.ReactNode;

}
// 各種設計書の各Itemのレイアウトのコンポーネント 
const DesignDocumentsItemLayout: FC<DesignDocumentsItemLayoutProps> = ({htmlId, heading, children}) => {
    return (
        <div id={htmlId} className="flex flex-col gap-2">
            <Text lavel="heading">{heading}</Text>
            <div className="pl-5">
                {children}
            </div>
        </div>
    );
}
 
export default DesignDocumentsItemLayout;