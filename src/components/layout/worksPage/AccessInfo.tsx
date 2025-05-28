import H3 from "@/components/common/heading/H3";
import Text from "@/components/common/Text";
import Link from "next/link";
import { FC } from "react";
import TableLayout from "../TableLayout";
import Td from "@/components/ui/table/Td";

type OperationInfoProps = {
    children?: React.ReactNode; // 操作一覧をListコンポーネントを使用して渡す
    deployUrl:string;
    gitHubUrl:string;
    userId?:string
    userIdLabel?:string;
    password?:string;
}   

//  ◆--アクセス情報コンポーネント--◆
const AccessInfo: FC<OperationInfoProps> = ({children, deployUrl,gitHubUrl, userIdLabel = "メールアドレス",userId, password}) => {
    return (
        <div>
            <H3>アクセス情報</H3>
            <div className="pl-6 pt-3 pb-2 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <Text lavel="heading">GitHubリポジトリ</Text>
                    <Link className="w-fit max-w-[90%]  break-words ml-4 text-[#0969DA] text-base md:text-lg hover:opacity-70 active:opacity-60" href={gitHubUrl}  rel="noopener noreferrer" target="_blank">{gitHubUrl}</Link>
                </div>
                <div className="flex flex-col gap-2">
                    <Text lavel="heading">公開先URL</Text>
                    <Link className="w-fit max-w-[90%] break-words ml-4 text-[#0969DA] text-base md:text-lg hover:opacity-70 active:opacity-60" href={deployUrl}  rel="noopener noreferrer" target="_blank">{deployUrl}</Link>
                </div>
                {password && userId && (
                    <>
                    <div className="flex flex-col gap-2 md:gap-3">
                        <Text lavel="heading">テストアカウント情報</Text>
                        <div className="pl-4">
                            <TableLayout>
                                <tr>
                                    <Td>{userIdLabel}</Td>
                                    <Td last lineSize={2}>{userId}</Td>
                                </tr>
                                <tr>
                                    <Td lastBottom>パスワード</Td>
                                    <Td last lastBottom lineSize={2}>{password}</Td>
                                </tr>
                            </TableLayout>
                        </div>
                    </div>
                    {children && (
                        <div className="flex flex-col gap-2 ">
                            <Text lavel="heading">操作一覧</Text>
                            <div className="w-full pl-4">
                                {children}
                            </div>
                        </div>
                    )}
                    </>  
                )}

            </div>
        </div>
    );
}
 
export default AccessInfo;