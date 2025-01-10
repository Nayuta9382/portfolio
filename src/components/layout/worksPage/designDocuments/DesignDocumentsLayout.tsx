import { FC } from "react";

type DesignDocumentsLayoutProps = {
    children: React.ReactNode; 

}

// 各種設計書レイアウトコンポーネント
const DesignDocumentsLayout: FC<DesignDocumentsLayoutProps> = ({children}) => {
    return (
        <div className="flex flex-col gap-3 lg:gap-4">
            {children}
        </div>
    );
}
 
export default DesignDocumentsLayout;