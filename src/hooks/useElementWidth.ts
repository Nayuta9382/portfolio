// ◆--要素の横幅を取得--◆
import { useEffect, useRef, useState } from "react";

export const useElementWidth = <T extends HTMLElement>() => {
  const ref = useRef<T | null>(null); // 要素の参照
  const [width, setWidth] = useState<number>(0); // 横幅の状態

  useEffect(() => {
    const element = ref.current;
    
    if (!element) return;

    
    // ResizeObserver を使用してサイズ変更を監視
    const observer = new ResizeObserver(([entry]) => {
      if (entry.contentRect) {
        setWidth(entry.contentRect.width); // 横幅を更新
      }
    });

    observer.observe(element); // 要素の監視を開始

    // クリーンアップ
    return () => observer.disconnect();
  }, []);

  return { ref, width }; // ref と横幅を返す
};
export default useElementWidth;
