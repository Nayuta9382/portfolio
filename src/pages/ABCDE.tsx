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
  const url = '/ABCDE';
  // Topと このページの情報を格納
  const navPageData = [{id:'',name:'Top',url:'/'},{id:'',name:'ABCDE',url:url}];
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
    <WorskPageLayout navData={navData} navPageData={navPageData}>
      <WorksTopView title="ABCDE" text="授業情報を共有する掲示板アプリ" imgPath="/img/ideus/ideus-top.png"/>


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
          &emsp;2・3年生でのハッカソンで「履修登録を支援するシステム」をテーマにWEBアプリケーションを開発することになりました。
          チームでの話し合いの中で授業についての掲示板機能の他、連絡機能・時間割りを一つのアプリケーションで実装するという案が出ました。<br/>
          &emsp;その案をもとに、「授業情報を共有する掲示板アプリ」を開発しました。
          このアプリケーションを利用することで履修登録だけでなく日常生活でも便利に活用できると考えました。
        </Text>
      </WorksPageItemLayout>

      {/* 開発概要 */}
      <WorksPageItemLayout htmlId={navData[1].id} title={navData[1].name}>
        <TableLayout>
          <tr>
            <Td>開発時期</Td>
            <Td last lineSize={2}>2025年4月</Td>
          </tr>
          <tr>
            <Td>開発期間</Td>
            <Td last lineSize={2}>3週間</Td>
          </tr>
          <tr>
            <Td lastBottom>開発人数</Td>
            <Td last lastBottom lineSize={2}>5人</Td>
          </tr>
        </TableLayout>
      </WorksPageItemLayout>

      {/* 利用要件 */}
      <WorksPageItemLayout htmlId={navData[2].id} title={navData[2].name}>
        <TableLayout>
          <tr>
            <Td>ターゲットユーザー</Td>
            <Td last lineSize={2}>盛岡情報ビジネス＆デザイン専門学校に所属する学生</Td>
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
            <Td last lineSize={2}>メールアドレス又はid・パスワードによるログインができる</Td>
          </tr>
          <tr>
            <Td>アカウント管理機能</Td>
            <Td last lineSize={2}>アカウントの追加・編集・削除ができる</Td>
          </tr>
          <tr>
            <Td>生徒・教師アカウント一括追加機能</Td>
            <Td last lineSize={2}>csvファイルによる生徒・教師のアカウント情報を一括追加できる</Td>
          </tr>
          <tr>
            <Td>授業情報管理機能</Td>
            <Td last lineSize={2}>授業情報の追加・編集・削除ができる</Td>
          </tr>
          <tr>
            <Td>授業情報閲覧機能</Td>
            <Td last lineSize={2}>各ユーザが授業情報を閲覧できる</Td>
          </tr>
          <tr>
            <Td>授業ページ検索機能</Td>
            <Td last lineSize={2}>授業ページの検索ができる</Td>
          </tr>
          <tr>
            <Td>教師コメント機能</Td>
            <Td last lineSize={2}>教師が授業の進捗情報をコメントできる</Td>
          </tr>
          <tr>
            <Td>生徒コメント機能</Td>
            <Td last lineSize={2}>生徒が授業ページにコメントができる</Td>
          </tr>
          <tr>
            <Td>時間割情報管理機能</Td>
            <Td last lineSize={2}>管理者が時間割情報を追加・編集削除できる</Td>
          </tr>
          <tr>
            <Td lastBottom>お気に入り機能</Td>
            <Td last lastBottom lineSize={2}>生徒・教師が授業ページをお気に入り登録できる</Td>
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
            <Td>パスワードのハッシュ化</Td>
            <Td last lineSize={2}>ユーザーが登録するパスワードをハッシュ化し保存</Td>
          </tr>
          <tr>
            <Td>CSRF対策</Td>
            <Td last lineSize={2}>CSRFトークンの利用(LaravelのCSRF対策機能を利用)</Td>
          </tr>
          <tr>
            <Td>エスケープ処理</Td>
            <Td last lineSize={2} padding={20}>HTML特殊文字をエスケープする(LaravelのBladeテンプレートエンジンを使用)</Td>
          </tr>
          <tr>
            <Td>SQLインジェクション対策</Td>
            <Td last lineSize={2}>プレースホルダの利用(LaravelのEloquent ORMを利用)</Td>
          </tr>
          <tr>
            <Td lastBottom>認可</Td>
            <Td last lastBottom lineSize={2}>各ユーザごとにページへのアクセス・機能の利用を制御する</Td>
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
            <Td last lineSize={2}>PHP・HTML・CSS・JavaScript</Td>
          </tr>
          <tr>
            <Td>フレームワーク</Td>
            <Td last lineSize={2}>Laravel</Td>
          </tr>
          <tr>
            <Td>データベース</Td>
            <Td last lineSize={2}>MySQL</Td>
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
            <Td>テスト環境</Td>
            <Td last lineSize={2}>省略(テストした場合のみ記述)</Td>
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