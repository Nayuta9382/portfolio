import { FC, useEffect } from "react";
import DbMenuItem from "./DbMenuItem";
import { dbMenuType } from "@/types/dbMenu";
import { useDbMenuContext } from "@/context/DbMenuContext";
import Image from "next/image";

// db設計書のメニューリスト部分
const DbMenuList: FC<{ dbImgData: dbMenuType[] }> = ({ dbImgData }) => {
    const { setDbMenu } = useDbMenuContext();
    useEffect(() => {
        if (dbImgData && dbImgData.length > 0) {
            setDbMenu(dbImgData[0]); // 初回のみ0番目の初期データをセット
        }
    }, [dbImgData]); // dbImgDataが更新されたときに再実行

    return (
        <div className="h-[50px] lg:h-[60px] relative shadow-all-sm overflow-hidden rounded-[10px]">
            <div className="flex ">
                {dbImgData.map((item) => (
                    <DbMenuItem key={item.id} dbImgData={item} />
                ))}
            </div>
            <div className="w-[80px]  h-[50px] lg:h-[60px] pr-5 flex  gap-x-2 absolute top-0 right-0 bg-[#FAFAFA] ">
                <button type="button" className="flex justify-center items-center w-[30px] h-[50px] lg:h-[60px] overflow-hidden hover:opacity-55"><Image src={'/img/icon/triangle-left.png'} alt="" width={50} height={50}  className=" block min-w-[70px] w-[80px] h-[80px] "/></button>
                <button type="button" className="flex justify-center items-center w-[30px] h-[50px] lg:h-[60px] overflow-hidden hover:opacity-55"><Image src={'/img/icon/triangle-right.png'} alt="" width={50} height={50}  className=" block min-w-[70px]  w-[80px] h-[80px] "/></button>
            </div>
        </div>
    );
};

export default DbMenuList;
