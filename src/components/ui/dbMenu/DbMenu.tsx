import { dbMenuType } from "@/types/dbMenu";
import { FC } from "react";
import DbMenuList from "./DbMenuList";


// db設計書のトップ部分
const DbMenu: FC<{ dbImgData: dbMenuType[] }> = ({ dbImgData }) => {

  return (
        <DbMenuList dbImgData={dbImgData} />
  );
}

export default DbMenu;
