import ListLinkItem from "@/components/common/list/ListLinkItem";
import Ol from "@/components/common/list/Ol";
import Text from "@/components/common/Text";
import TableLayout from "@/components/layout/TableLayout";
import AccessInfo from "@/components/layout/worksPage/AccessInfo";
import WorksPageItemLayout from "@/components/layout/worksPage/WorksPageItemLayout";
import WorskPageLayout from "@/components/layout/worksPage/WorksPageLayout";
import WorksTopView from "@/components/layout/worksPage/WorksTopView";
import Td from "@/components/ui/table/Td";
import TableOfContents from "@/components/ui/TableOfContents";

export default function Home() {
  // このページのurl
  const url = '/portfolio';
  // Topと このページの情報を格納
  const navPageData = [{id:'',name:'Top',url:'/'},{id:'',name:'Portfolio',url:url}];
  // ナビゲーションメニューに格納したい情報を格納
  const navData = [
    { id: 'history', name: '開発経緯', url: url },
    { id: 'overview', name: '開発概要', url: url },
    { id: 'terms', name: '利用要件', url: url },
    { id: 'env', name: '開発環境', url: url },
  ];
  // 各種設計書データ


  // ナビゲーションメニューでのhtmlidをつけるところには　classに navを書く
  return (  
    <WorskPageLayout navData={navData} navPageData={navPageData}>
      <WorksTopView title="Portfolio" text="Next.js・TypeScriptで作成した自己紹介サイト" imgPath="/img/portfolio.png"/>

      {/* アクセス情報 */}
      <AccessInfo deployUrl="https://portfolio-kohl-eight-29.vercel.app/" gitHubUrl="https://github.com/Nayuta9382/portfolio" />


      {/* 目次 */}
      <WorksPageItemLayout htmlId="menu" title="目次" navFlg={false}>
        <TableOfContents>
        <Ol>
          <ListLinkItem url={`#${navData[0].id}`}>{navData[0].name}</ListLinkItem>
          <ListLinkItem url={`#${navData[1].id}`}>{navData[1].name}</ListLinkItem>
          <ListLinkItem url={`#${navData[2].id}`}>{navData[2].name}</ListLinkItem>
          <ListLinkItem url={`#${navData[3].id}`}>{navData[3].name}</ListLinkItem>
        </Ol>
        </TableOfContents>
      </WorksPageItemLayout>

      {/* 開発経緯 */}
    <WorksPageItemLayout htmlId={navData[0].id} title={navData[0].name}>
        <Text>
          &emsp;就職活動に向けて、自分がこれまで学んできたことやスキルをまとめるために、ポートフォリオサイトを作成しました。
        </Text>
      </WorksPageItemLayout>

      {/* 開発概要 */}
      <WorksPageItemLayout htmlId={navData[1].id} title={navData[1].name}>
        <TableLayout>
          <tr>
            <Td>開発時期</Td>
            <Td last lineSize={2}>2024年10月</Td>
          </tr>
          <tr>
            <Td>開発期間</Td>
            <Td last lineSize={2}>3ヵ月</Td>
          </tr>
          <tr>
            <Td lastBottom>開発人数</Td>
            <Td last lastBottom lineSize={2}>1人</Td>
          </tr>
        </TableLayout>
      </WorksPageItemLayout>

      {/* 利用要件 */}
      <WorksPageItemLayout htmlId={navData[2].id} title={navData[2].name}>
        <TableLayout>
          <tr>
            <Td>ターゲットユーザー</Td>
            <Td last lineSize={2}>企業の採用担当者・エンジニアの方(20~60代)</Td>
          </tr>
          <tr>
            <Td>利用端末</Td>
            <Td last lineSize={2}>スマートフォン・タブレット・PC</Td>
          </tr>
          <tr>
            <Td lastBottom>ブラウザ</Td>
            <Td last lastBottom lineSize={2}>動作確認済みブラウザ (Chrome・Microsoft Edge)</Td>
          </tr>
        </TableLayout>
      </WorksPageItemLayout>
      {/* 開発環境要件 */}
      <WorksPageItemLayout htmlId={navData[3].id} title={navData[3].name}>
        <TableLayout>
          <tr>
            <Td>OS</Td>
            <Td last lineSize={2}>Windows 11</Td>
          </tr>
          <tr>
            <Td>開発言語</Td>
            <Td last lineSize={2}>HTML・CSS・TypeScript</Td>
          </tr>
          <tr>
            <Td>フレームワーク</Td>
            <Td last lineSize={2}>Next.js・Tailwind CSS</Td>
          </tr>
          <tr>
            <Td>開発ツール</Td>
            <Td last lineSize={2}>Visual Studio Code</Td>
          </tr>
          <tr>
            <Td>バージョン管理ツール</Td>
            <Td last lineSize={2}>Git・GitHub</Td>
          </tr>
          <tr>
            <Td lastBottom>デプロイ環境</Td>
            <Td last lastBottom lineSize={2}>省略(公開時に追記)</Td>
          </tr>
        </TableLayout>
     </WorksPageItemLayout>

    </WorskPageLayout>
  );
}