import { useTableWidthContext } from "@/context/TableWidthContext";
import useTableWidth from "@/hooks/useElementWidth";
import { FC, useEffect, useState } from "react";

// テーブルのスクロールバーの有無を決めるコンポーネント
type ScrollProps = {
    children: React.ReactNode;
};

const Scroll: FC<ScrollProps> = ({ children }) => {
    // スクロールバーの有無のスタイルを格納
    const [scrollStyle, setScrollStyle] = useState<React.CSSProperties>({
        overflowX: undefined,
    });

    // hooksからこの要素の横幅を保持
    const { elementRef, width } = useTableWidth<HTMLTableElement>();

    // Tableの横幅を共有するContextを受け取る (Stateで管理)
    const { tableWidth } = useTableWidthContext();

    useEffect(() => {
        if (width < tableWidth) {
            // 要素がテーブルより小さいのでスクロールバーを追加
            setScrollStyle({
                overflowX: 'scroll',
            });
        } else {
            // スクロールバーを削除
            setScrollStyle({
                overflowX: undefined,
            });
        }
    }, [tableWidth, width]); // tableWidthとwidthの両方を監視

    return (
        <div style={scrollStyle} ref={elementRef} className="">
            {children}
        </div>
    );
};

export default Scroll;
