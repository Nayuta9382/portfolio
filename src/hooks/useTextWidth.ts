import { useEffect, useState } from "react";

// Tableで使用するhooks
// ◆--tdタグの横幅を計算してreturnする--◆
const UseTextWidth = (text: string, lineSize: 1 | 2,  padding = 10) => {
  const [windowWidth, setWindowWidth] = useState<number>(0); // 初期値として0
  const [textSize, setTextSize] = useState<number>(0);

  useEffect(() => {
    // クライアントサイドでのみ実行
    if (typeof window !== "undefined") {
      // 初回実行: windowWidth の設定
      setWindowWidth(window.innerWidth); // 初期の画面幅を取得

      // 画面幅が変更された時に実行される処理
      const clacWidth = () => {
        // 必要項目一覧
        const fontSize = '16px';
        const fontFamily = 'Noto Serif JP, serif';

        // Canvas要素を作成
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        let textWidth = 0;

        if (context) {
          // フォントを設定
          context.font = `${fontSize} ${fontFamily}`;
          // テキストの横幅を計測
          textWidth = context.measureText(text).width;
        } else {
          // nullの場合のみ簡易的に横幅を計算
          textWidth = text.length * 16;
        }

        // 文字サイズ以外の必要な幅の計算(padding)
        const paddingWidth = windowWidth >= 768 ? 32 : 16;

        const result = textWidth / lineSize + paddingWidth + padding; // 10は微調整
        if (result !== textSize) {
          setTextSize(result); // textSizeを更新
        }
      };

      // 初回に実行
      clacWidth();

      // リサイズイベントリスナーを追加
      const resizeListener = () => {
        setWindowWidth(window.innerWidth); // 画面幅を更新
      };

      window.addEventListener('resize', resizeListener);

      // クリーンアップ関数：アンマウント時にリスナーを削除
      return () => {
        window.removeEventListener('resize', resizeListener);
      };
    }
  }, []); // `windowWidth`を依存配列から外す

  return textSize;
};

export default UseTextWidth;
