import {  useEffect } from 'react';
import { useNavShowIdContext } from '@/context/NavShowIdContext';

/**
 * 現在最も表示されている要素をnavに設定する(idをcontextに格納)
 */
const useSetShowId = () => {
  const { setNavShowId } = useNavShowIdContext();
  
  useEffect(() => {
    const handleScroll = () => {
      let maxArea = 0;
      let mostVisible: HTMLElement | null = null;

      // .navクラスのすべての要素を取得
      const elements = document.querySelectorAll('.nav');
      
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();

        // 要素が画面に表示されている部分の高さを計算
        const visibleHeight = Math.max(0, Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0));
        // 表示されている高さが最大の要素を選ぶ
        if (visibleHeight > maxArea) {
          maxArea = visibleHeight;
          mostVisible = element as HTMLElement;
        }
      });

      // 最大の表示領域の要素があれば、そのIDをcontextに設定
      if (mostVisible) {
        setNavShowId(mostVisible.id);
      }
    };

    // スクロールイベントを監視
    window.addEventListener('scroll', handleScroll);

    // クリーンアップ
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setNavShowId]);
};

export default useSetShowId;
