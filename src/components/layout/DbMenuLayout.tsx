import { DbMenuProvider } from "@/context/DbMenuContext";
import { dbMenuType } from "@/types/dbMenu";
import { FC } from "react";
import DbMenu from "../ui/dbMenu/DbMenu";


// type DbMenuLayoutProps =  {
//     children: React.ReactNode; 
// }
//  db設計書のレイアウト部分
const DbMenuLayout: FC<{ dbImgData: dbMenuType[] }> = ({ dbImgData }) => {
    // const { dbMenu, setDbmenu } = useDbMenuContext();

    return (
        <DbMenuProvider>
            <DbMenu dbImgData={dbImgData} />
        </DbMenuProvider>
    );
}
 
export default DbMenuLayout;