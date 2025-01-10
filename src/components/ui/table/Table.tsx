import { FC, useEffect} from "react";
import Th from "./Th";
import useTableWidth from "@/hooks/useElementWidth";
import { useTableWidthContext } from "@/context/TableWidthContext";

type TableProps = {
  item?: string;
  description?: string;
  children: React.ReactNode;
};

const Table: FC<TableProps> = ({ item = "項目", description = "説明", children }) => {

  // hooksから要素の横幅を取得
  const { ref, width } = useTableWidth<HTMLTableElement>();

  // Tableの横幅を共有するContextを受け取る　(Stateで管理)
  const {setTableWidth} = useTableWidthContext();

  // 横幅が更新されたらContextに横幅を保存
  useEffect(() => {
    setTableWidth(width);
  }, [width]); 

  useEffect(() => {
    const a = () =>{
      console.log(width);
    }
    a();
  }, []); 
    
  return (
    <table ref={ref} className="w-full  bg-white rounded-lg border-opacity-40 border-[1.5px] border-[#838181] overflow-hidden border-separate border-spacing-0">
      <thead>
        <tr>
          <Th>{item}</Th>
          <Th last>{description}</Th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export default Table;
