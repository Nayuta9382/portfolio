import LinkHoverBorder from "@/components/common/list/LinkHoverBorder";
import List from "@/components/common/list/List";
import ListItem from "@/components/common/list/ListItem";
import ListLinkItem from "@/components/common/list/ListLinkItem";
import Ol from "@/components/common/list/Ol";
import Text from "@/components/common/Text";
import DbMenuLayout from "@/components/layout/DbMenuLayout";
import TableLayout from "@/components/layout/TableLayout";
import DesignDocumentsItemLayout from "@/components/layout/worksPage/designDocuments/DesignDocumentsItemLayout";
import DesignDocumentsLayout from "@/components/layout/worksPage/designDocuments/DesignDocumentsLayout";
import WorksPageItemLayout from "@/components/layout/worksPage/WorksPageItemLayout";
import WorskPageLayout from "@/components/layout/worksPage/WorksPageLayout";
import WorksTopView from "@/components/layout/worksPage/WorksTopView";
import Td from "@/components/ui/table/Td";
import TableOfContents from "@/components/ui/TableOfContents";

export default function Home() {
  // このページのurl
  const url = '/ideus';
  // Topと このページの情報を格納
  const navPageData = [{id:'',name:'Top',url:'/'},{id:'',name:'Ideus',url:url}];
  // ナビゲーションメニューに格納したい情報を格納
  const navData = [
    { id: 'history', name: '開発経緯', url: url },
    { id: 'overview', name: '開発概要', url: url },
    { id: 'terms', name: '利用要件', url: url },
    { id: 'features', name: '機能一覧', url: url },
    { id: 'security', name: 'セキュリティ要件', url: url },
    { id: 'docs', name: '各種設計書', url: url,},
    { id: 'test', name: 'テスト', url: url },
    { id: 'env', name: '開発環境', url: url },
  ];
  // 各種設計書データ
  const designDocuments = [
    { id: 'system', name: 'システム全体図' },
    { id: 'use-case', name: 'ユースケース図' },
    { id: 'screens', name: '画面遷移図' },
    { id: 'db', name: 'DB設計書' },
    { id: 'sequence', name: 'シーケンス図' },
  ];

  // DB設計書のデータ
  const dbData = [
    { id: 0, name: 'ER図', imgPath: '/img/ideus/ER.png', hiddenFlg: false },
    { id: 1, name: 'テーブル一覧', imgPath: '/img/ideus/table.png', hiddenFlg: false },
    { id: 2, name: 'ユーザーテーブル', imgPath: '/img/ideus/user.png', hiddenFlg: false },
    { id: 3, name: '投稿テーブル', imgPath: '/img/ideus/post.png', hiddenFlg: false },
    { id: 4, name: 'コメントテーブル', imgPath: '/img/ideus/comment.png', hiddenFlg: false },
    { id: 5, name: 'タグテーブル', imgPath: '/img/ideus/tag.png', hiddenFlg: false },
  ];

  // ナビゲーションメニューでのhtmlidをつけるところには　classに navを書く
  return (  
    <WorskPageLayout navData={navData} navPageData={navPageData} subTitle="Ideus">
      <WorksTopView title="Ideus" text="ひとり暮らしで役に立った知識、悩みや不安を共有し合うアプリ" imgPath="/img/ideus/ideus-top.png"/>


      {/* 目次 */}
      <WorksPageItemLayout htmlId="menu" title="目次" navFlg={false}>
        <TableOfContents>
        <Ol>
          <ListLinkItem url={`#${navData[0].id}`}>{navData[0].name}</ListLinkItem>
          <ListLinkItem url={`#${navData[1].id}`}>{navData[1].name}</ListLinkItem>
          <ListLinkItem url={`#${navData[2].id}`}>{navData[2].name}</ListLinkItem>
          <ListLinkItem url={`#${navData[3].id}`}>{navData[3].name}</ListLinkItem>
          <ListLinkItem url={`#${navData[4].id}`}>{navData[4].name}</ListLinkItem>
          <ListItem>
            <LinkHoverBorder url={`#${navData[5].id}`}>{navData[5].name}</LinkHoverBorder>
            <List>
              {/* 各種設計書の項目を表示 */}
              {designDocuments.map((doc, index) => (
                <ListLinkItem key={index} url={`#${doc.id}`}>
                  {doc.name}
                </ListLinkItem>
              ))}
            </List>
          </ListItem>
          <ListLinkItem url={`#${navData[6].id}`}>{navData[6].name}</ListLinkItem>
          <ListLinkItem url={`#${navData[7].id}`}>{navData[7].name}</ListLinkItem>
        </Ol>
        </TableOfContents>
      </WorksPageItemLayout>

      {/* 開発経緯 */}
    <WorksPageItemLayout htmlId={navData[0].id} title={navData[0].name}>
        <Text>
          &emsp;2・3年生による共同開発で、「一人暮らしを助け合う」をテーマにしたWebアプリケーションを開発しました。
          チームでの話し合いの中で、「生活の知恵を共有できる機能」や「一人暮らしで役に立った知識や悩み、不安を分かち合える仕組み」という案が出ました。<br/>
          &emsp;その案をもとに、ひとり暮らしの方々が知識や経験、悩みを投稿・閲覧しながら助け合えるアプリを開発しました。
        </Text>
      </WorksPageItemLayout>

      {/* 開発概要 */}
      <WorksPageItemLayout htmlId={navData[1].id} title={navData[1].name}>
        <TableLayout>
          <tr>
            <Td>開発時期</Td>
            <Td last lineSize={2}>2024年8月</Td>
          </tr>
          <tr>
            <Td>開発期間</Td>
            <Td last lineSize={2}>3週間</Td>
          </tr>
          <tr>
            <Td lastBottom>開発人数</Td>
            <Td last lastBottom lineSize={2}>4人</Td>
          </tr>
        </TableLayout>
      </WorksPageItemLayout>

      {/* 利用要件 */}
      <WorksPageItemLayout htmlId={navData[2].id} title={navData[2].name}>
        <TableLayout>
          <tr>
            <Td>ターゲットユーザー</Td>
            <Td last lineSize={2}>一人暮らしをしている若者(20代)</Td>
          </tr>
          <tr>
            <Td>利用端末</Td>
            <Td last lineSize={2}>ノートPC</Td>
          </tr>
          <tr>
            <Td lastBottom>ブラウザ</Td>
            <Td last lastBottom lineSize={2}>動作確認済みブラウザ (Chrome)</Td>
          </tr>
        </TableLayout>
      </WorksPageItemLayout>

      {/* 機能一覧 */}
      <WorksPageItemLayout htmlId={navData[3].id} title={navData[3].name}>
        <TableLayout item="機能名">
          <tr>
            <Td>ログイン・ログアウト機能</Td>
            <Td last lineSize={2}>メールアドレス・パスワードによるログインができる</Td>
          </tr>
          <tr>
            <Td>アカウント管理機能</Td>
            <Td last lineSize={2}>アカウントの追加・編集・削除ができる</Td>
          </tr>
          <tr>
            <Td>投稿管理機能</Td>
            <Td last lineSize={2}>投稿の追加・編集・削除ができる</Td>
          </tr>
          <tr>
            <Td>投稿一覧表示機能</Td>
            <Td last lineSize={2}>投稿の一覧を表示できる</Td>
          </tr>
          <tr>
            <Td>投稿詳細表示機能</Td>
            <Td last lineSize={2}>投稿の詳細情報を表示できる</Td>
          </tr>
          <tr>
            <Td>コメント機能</Td>
            <Td last lineSize={2}>投稿にコメントができる</Td>
          </tr>
          <tr>
            <Td>投稿検索機能</Td>
            <Td last lineSize={2}>投稿者・投稿名による検索ができる</Td>
          </tr>
          <tr>
            <Td>いいね機能</Td>
            <Td last lineSize={2}>投稿にいいねができる</Td>
          </tr>
          <tr>
            <Td lastBottom>画像アップロード機能</Td>
            <Td last lastBottom lineSize={2}>投稿に画像を添付し、サーバに保存できる</Td>
          </tr>
        </TableLayout>
      </WorksPageItemLayout>

      {/* セキュリティ要件 */}
      <WorksPageItemLayout htmlId={navData[4].id} title={navData[4].name}>
        <TableLayout>
          <tr>
            <Td>認証</Td>
            <Td last lineSize={2}>LaravelのAuthの利用</Td>
          </tr>
           <tr>
            <Td>認可</Td>
            <Td lineSize={2}>一部の機能はユーザーがログインした際のみ利用できる</Td>
          </tr>
          <tr>
            <Td>パスワードのハッシュ化</Td>
            <Td last lineSize={2}>パスワードをハッシュ化し保存</Td>
          </tr>
          <tr>
            <Td>XSS対策</Td>
            <Td last lineSize={2} padding={20}>HTML特殊文字をエスケープする(LaravelのBladeテンプレートエンジンを使用)</Td>
          </tr>
          <tr>
            <Td>CSRF対策</Td>
            <Td last lineSize={2}>CSRFトークンの利用(LaravelのCSRF対策機能を利用)</Td>
          </tr>
          <tr>
            <Td lastBottom>SQLインジェクション対策</Td>
            <Td last lastBottom  lineSize={2}>プレースホルダの利用(LaravelのEloquent ORMを利用)</Td>
          </tr>
        </TableLayout>
      </WorksPageItemLayout>

      {/* 各種設計書 */}
      <WorksPageItemLayout htmlId={navData[5].id} title={navData[5].name}>
        <DesignDocumentsLayout>
          {/* システム全体図 */}
          <DesignDocumentsItemLayout htmlId={designDocuments[0].id} heading={designDocuments[0].name}>
            <Text>※省略</Text>
          </DesignDocumentsItemLayout>
          {/* ユースケース図 */}
          <DesignDocumentsItemLayout htmlId={designDocuments[1].id} heading={designDocuments[1].name}>
            <Text>※省略</Text>
          </DesignDocumentsItemLayout>
          {/* 画面遷移図 */}
          <DesignDocumentsItemLayout htmlId={designDocuments[2].id} heading={designDocuments[2].name}>
            <Text>※省略</Text>
          </DesignDocumentsItemLayout>
          {/* DB設計書 */}
          <DesignDocumentsItemLayout htmlId={designDocuments[3].id} heading={designDocuments[3].name}>
             <DbMenuLayout dbImgData={dbData}></DbMenuLayout>
          </DesignDocumentsItemLayout>
          {/* シーケンス図 */}
          <DesignDocumentsItemLayout htmlId={designDocuments[4].id} heading={designDocuments[4].name}>
            <Text>※省略</Text>
          </DesignDocumentsItemLayout>
        </DesignDocumentsLayout>
      </WorksPageItemLayout>

      {/* テスト */}
      <WorksPageItemLayout htmlId={navData[6].id} title={navData[6].name}>
        <Text>※省略</Text>
      </WorksPageItemLayout>

      {/* 開発環境要件 */}
      <WorksPageItemLayout htmlId={navData[7].id} title={navData[7].name}>
        <TableLayout>
          <tr>
            <Td>OS</Td>
            <Td last lineSize={2}>Windows 11</Td>
          </tr>
          <tr>
            <Td>開発言語</Td>
            <Td last lineSize={2}>HTML・CSS・JavaScript・PHP</Td>
          </tr>
          <tr>
            <Td>フレームワーク</Td>
            <Td last lineSize={2}>Laravel</Td>
          </tr>
          <tr>
            <Td>データベース</Td>
            <Td last lineSize={2}>MariaDB</Td>
          </tr>
          <tr>
            <Td>開発ツール</Td>
            <Td last lineSize={2}>Visual Studio Code</Td>
          </tr>
          <tr>
            <Td last>バージョン管理ツール</Td>
            <Td last lastBottom lineSize={2}>Git・GitHub</Td>
          </tr>
        </TableLayout>
     </WorksPageItemLayout>

    </WorskPageLayout>
  );
}