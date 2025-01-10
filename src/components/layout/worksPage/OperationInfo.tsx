import H3 from "@/components/common/heading/H3";
import Text from "@/components/common/Text";
import Link from "next/link";
import { FC } from "react";
import TableLayout from "../TableLayout";
import Td from "@/components/ui/table/Td";

type OperationInfoProps = {
    children: React.ReactNode; // 操作一覧をListコンポーネントを使用して渡す
    url:string;
    eMail:string;
    password:string;
}   

//  ◆--操作情報コンポーネント--◆
const OperationInfo: FC<OperationInfoProps> = ({children, url, eMail, password}) => {
    return (
        <div>
            <H3>操作情報</H3>
            <div className="pl-6 pt-3 pb-2 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <Text lavel="heading">公開先URL</Text>
                    <Link className="w-fil ml-4 text-[#0969DA] text-base md:text-lg" href={url}  rel="noopener noreferrer" target="_blank">{url}</Link>
                </div>
                <div className="flex flex-col gap-2 md:gap-3">
                    <Text lavel="heading">テストアカウント情報</Text>
                    <div className="pl-4">
                        <TableLayout>
                             <tr>
                                <Td>メールアドレス</Td>
                                <Td last lineSize={2}>{eMail}</Td>
                            </tr>
                            <tr>
                                <Td lastBottom>パスワード</Td>
                                <Td last lastBottom lineSize={2}>{password}</Td>
                            </tr>
                        </TableLayout>
                    </div>
                </div>
                <div className="flex flex-col gap-2 ">
                    <Text lavel="heading">操作一覧</Text>
                    <div className="w-full pl-4">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default OperationInfo;