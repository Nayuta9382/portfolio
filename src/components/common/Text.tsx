import React from 'react';
type Props = {
    lavel?: 'main' | 'heading';   // sizeプロパティはsmall, medium, largeのいずれか                      // colorプロパティは任意の文字列（色）
    children: React.ReactNode;             // childrenはReactの任意のコンテンツ
  };
const Text :React.FC<Props> = ({lavel = 'main', children}) => {
    // フォントサイズの定義(デフォルトはメインテキスト)
    let fontSize:string = '';
    let  weight:string = '';
    let  color:string = '';
    switch (lavel) {
        case 'main':
          fontSize = 'text-base'
          weight = 'font-normal';
          color = 'to-black';
          break;
        case 'heading':
            fontSize = 'text-lg'// 'PC'の場合のフォントサイズ
            weight = 'font-bold';
            color = 'to-black';
          break;
      }
    

    return (
        <p className={`${fontSize}  ${weight} ${color}`}>{children}</p>
    );
}
 
export default Text;