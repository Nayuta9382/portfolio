import { useEffect } from 'react';
import { useNavShowIdContext } from '@/context/NavShowIdContext';

/**
 * 現在最も表示されている要素をnavに設定する(idをcontextに格納)
 */
const useSetShowId = () => {
  const { setNavShowId } = useNavShowIdContext();
  
  useEffect(() => {
    const handleScroll = () => {      
      let maxVisiblePercentage = 0;
      let mostVisible: HTMLElement | null = null;

      // .navクラスのすべての要素を取得
      const elements = document.querySelectorAll('.nav');
      
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();        
        
        // 要素の高さ
        const elementHeight = rect.height;

        // 要素が画面内に表示されている部分の高さ
        const visibleHeight = Math.max(0, Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0));

        // 表示されている割合を計算
        const visiblePercentage = (visibleHeight / elementHeight) * 100;

        // 表示されている割合が最大の要素を選ぶ
        if (visiblePercentage > 30 && visiblePercentage > maxVisiblePercentage) {
          maxVisiblePercentage = visiblePercentage;
          mostVisible = element as HTMLElement;
        }else if (maxVisiblePercentage === 0) {
          // 全てが表示されていないなら空のidを設定
          setNavShowId('');
          return;
        }
      });

      // 最大の表示割合の要素があれば、そのIDをcontextに設定
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
