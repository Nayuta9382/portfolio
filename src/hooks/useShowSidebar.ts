import { useEffect, useState } from 'react';

// サイドバーの表示のタイミングを計算しreturnする

const useShowSidebar = (targetSelector: string = '.not-show-sidebar' , visibleThreshold = 1) => {
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let isVisible = true;

      // 指定されたセレクターのすべての要素を取得
      const elements = document.querySelectorAll(targetSelector);

      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();

        // 要素の高さ
        const elementHeight = rect.height;

        // 要素が画面内に表示されている部分の高さ
        const visibleHeight = Math.max(0, Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0));

        // 表示されている割合を計算
        const visiblePercentage = (visibleHeight / elementHeight) * 100;

        // 表示されている割合が閾値を超えたら表示状態を true にする
        if (visiblePercentage >= visibleThreshold) {
          isVisible = false;
        }
      });

      setShowSidebar(isVisible);
    };

    // スクロールイベントを監視
    window.addEventListener('scroll', handleScroll);

    // 初期チェック
    handleScroll();

    // クリーンアップ
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return showSidebar;
};

export default useShowSidebar;
