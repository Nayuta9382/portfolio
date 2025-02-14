// pages/500.tsx
import { GetServerSideProps } from 'next';
// エラーを意図的にはっせいさせる
const Custom500Page = () => {
  return <h1>サーバーに問題が発生しました。お手数ですが、再度アクセスをお試しください。</h1>;
};

export const getServerSideProps: GetServerSideProps = async () => {
  // サーバーサイドでエラーを意図的に発生させる
  throw new Error('サーバーに問題が発生しました。お手数ですが、再度アクセスをお試しください。');

  return { props: {} };
};

export default Custom500Page;
