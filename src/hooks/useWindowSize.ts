import { useEffect, useState } from "react";

// ◆--ウィンドウサイズをreturnする--◆ 
const useWindowSize = () => {
    // windowサイズを格納するState
    const [windowSize, setWindowSize] = useState<number>(0);
    useEffect(() => {
          // クライアントサイドでのみ実行
    if (typeof window !== "undefined") {
        setWindowSize(window.innerWidth); // 初期の画面幅を取得

        const resizeListener = () => {
            setWindowSize(window.innerWidth); // 画面幅を更新
        };

        window.addEventListener('resize', resizeListener);

          // クリーンアップ関数：アンマウント時にリスナーを削除
        return () => {
            window.removeEventListener('resize', resizeListener);
        };
    
    }

    },[windowSize]);
    return windowSize;
}
 
export default useWindowSize;