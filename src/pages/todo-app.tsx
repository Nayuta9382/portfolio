import LinkHoverBorder from "@/components/common/list/LinkHoverBorder";
import List from "@/components/common/list/List";
import ListItem from "@/components/common/list/ListItem";
import ListLinkItem from "@/components/common/list/ListLinkItem";
import Ol from "@/components/common/list/Ol";
import Text from "@/components/common/Text";
import DbMenuLayout from "@/components/layout/DbMenuLayout";
import TableLayout from "@/components/layout/TableLayout";
import AccessInfo from "@/components/layout/worksPage/AccessInfo";
import DesignDocumentsItemLayout from "@/components/layout/worksPage/designDocuments/DesignDocumentsItemLayout";
import DesignDocumentsLayout from "@/components/layout/worksPage/designDocuments/DesignDocumentsLayout";
import WorksPageItemLayout from "@/components/layout/worksPage/WorksPageItemLayout";
import WorskPageLayout from "@/components/layout/worksPage/WorksPageLayout";
import WorksTopView from "@/components/layout/worksPage/WorksTopView";
import ImageZoomView from "@/components/ui/imageZoom/ImageZoomView";
import Td from "@/components/ui/table/Td";
import TableOfContents from "@/components/ui/TableOfContents";

export default function Home() {
  // このページのurl
  const url = '/todo-app';
  // Topと このページの情報を格納
  const navPageData = [{id:'',name:'Top',url:'/'},{id:'',name:'Todo-App',url:url}];
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
    { id: 0, name: 'ER図', imgPath: '/img/todo-app/ER.svg', hiddenFlg: false },
    { id: 1, name: 'ユーザテーブル', imgPath: '/img/todo-app/users.png', hiddenFlg: false },
    { id: 2, name: 'タスクテーブル', imgPath: '/img/todo-app/tasks.png', hiddenFlg: false },
  ];

  // ナビゲーションメニューでのhtmlidをつけるところには　classに navを書く
  return (  
    <WorskPageLayout navData={navData} navPageData={navPageData}>
      <WorksTopView title="Todo-App" text="セキュリティを意識して開発したTodoアプリ" imgPath="/img/todo-app/todo-app-top.png"/>

      {/* アクセス情報 */}
      <AccessInfo deployUrl="https://todo-app-3vlg.onrender.com/" gitHubUrl="https://github.com/Nayuta9382/express-todo-app" userIdLabel="ID" userId="testUser" password="testPassword">
          <List>
            <ListItem>URLにアクセスするとログイン画面が表示されます。</ListItem>
            <ListItem>メールアドレス、パスワードを入力しログインするとトップ画面に遷移します。</ListItem>
            <ListItem>プロフィール編集機能、タスク表示・作成・編集・削除機能はログイン時のみ利用できます。</ListItem>
            <ListItem>「完了」・「未完了」ボタンを選択することで表示される表示するタスクを切り替えることができます。</ListItem>
            <ListItem>タスク一覧ページの「期限」見出しを選択することでタスクの並び替えることができます。</ListItem>
            <ListItem>タスク一覧のタイトルを選択することで投稿の詳細ページに遷移します。</ListItem>
          </List>
      </AccessInfo>


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
          &emsp;Node.jsによるバックエンド開発やセキュリティを意識したアプリ作成経験がなかったため、それらを学ぶ目的で本アプリを開発しました。        </Text>
      </WorksPageItemLayout>

      {/* 開発概要 */}
      <WorksPageItemLayout htmlId={navData[1].id} title={navData[1].name}>
        <TableLayout>
          <tr>
            <Td>開発時期</Td>
            <Td last lineSize={2}>2025年5月</Td>
          </tr>
          <tr>
            <Td>開発期間</Td>
            <Td last lineSize={2}>3週間</Td>
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
            <Td last lineSize={2}>すべての人</Td>
          </tr>
          <tr>
            <Td>利用端末</Td>
            <Td last lineSize={2}>ノートPC・タブレット・スマートフォン</Td>
          </tr>
          <tr>
            <Td lastBottom>ブラウザ</Td>
            <Td last lastBottom lineSize={2}>動作確認済みブラウザ (Chrome・Microsoft Edge)</Td>
          </tr>
        </TableLayout>
      </WorksPageItemLayout>

      {/* 機能一覧 */}
      <WorksPageItemLayout htmlId={navData[3].id} title={navData[3].name}>
        <TableLayout item="機能名">
          <tr>
            <Td>ログイン・ログアウト機能</Td>
            <Td last lineSize={2}>ID・パスワードによる又はGitHubアカウントでのログインができる</Td>
          </tr>
          <tr>
            <Td>アカウント管理機能</Td>
            <Td last lineSize={2}>アカウントの追加・編集ができる</Td>
          </tr>
          <tr>
            <Td>タスク管理機能</Td>
            <Td last lineSize={2}>タスクの追加・編集・削除ができる</Td>
          </tr>
          <tr>
            <Td>タスク一覧表示機能</Td>
            <Td last lineSize={2}>タスクの一覧を表示できる</Td>
          </tr>
          <tr>
            <Td>タスク詳細表示機能</Td>
            <Td last lineSize={2}>タスクの詳細情報を表示できる</Td>
          </tr>
          <tr>
            <Td>タスク検索機能</Td>
            <Td last lineSize={2}>タイトルによる検索ができる</Td>
          </tr>
          <tr>
            <Td>絞り込み機能</Td>
            <Td last lineSize={2}>タスクの完了・未完了による絞り込みができる</Td>
          </tr>
          <tr>
            <Td>並び替え機能</Td>
            <Td last lineSize={2}>タスク作成日時による並び替えができる</Td>
          </tr>
          <tr>
            <Td lastBottom>画像アップロード機能</Td>
            <Td last lastBottom lineSize={2}>プロフィール画像を、サーバに保存できる</Td>
          </tr>
        </TableLayout>
      </WorksPageItemLayout>

      {/* セキュリティ要件 */}
      <WorksPageItemLayout htmlId={navData[4].id} title={navData[4].name}>
        <TableLayout>
          <tr>
            <Td>認証</Td>
            <Td last lineSize={2}>passport・passport-local・passport-github2ライブラリを使用</Td>
          </tr>
          <tr>
            <Td>パスワードのハッシュ化</Td>
            <Td last lineSize={2}>パスワードをソルト付きハッシュ化し保存（bcryptライブラリを使用）</Td>
          </tr>
          <tr>
            <Td>ブルートフォース対策</Td>
            <Td last lineSize={2}>ログイン回数にしきいちを設定（express-rate-limitライブラリを使用）</Td>
          </tr>
          <tr>
            <Td>認可</Td>
            <Td last lineSize={2}>自分のタスクのみ表示・編集・削除ができる</Td>
          </tr>
          <tr>
            <Td>XSS対策</Td>
            <Td padding={40} last lineSize={2} >HTML特殊文字のエスケープ処理・Content Security Policy（CSP）を実装（ejsテンプレートエンジン・helmetライブラリを使用）</Td>
          </tr>
          <tr>
            <Td>CSRF対策</Td>
            <Td last lineSize={2}>CSRFトークンの利用（csurfライブラリを使用）</Td>
          </tr>
          <tr>
            <Td>SQLインジェクション対策</Td>
            <Td last lineSize={2}>プレースホルダの利用（pgライブラリを使用）</Td>
          </tr>
          <tr>
            <Td>バリデーションチェック</Td>
            <Td last lineSize={2}>不正な値を検証・阻止する（express-validatorライブラリを使用）</Td>
          </tr>
          <tr>
            <Td>セッション管理</Td>
            <Td last lineSize={2}>セッションIDの安全な生成・管理（express-sessionライブラリを使用）</Td>
          </tr>
          <tr>
            <Td>DoS・DDoS対策</Td>
            <Td last lineSize={2}>リクエストレート制限を実施（express-rate-limitライブラリを使用）</Td>
          </tr>
          <tr>
            <Td>HTTPヘッダーの保護</Td>
            <Td last lineSize={2}>HTTPヘッダーを保護する（helmetライブラリを使用）</Td>
          </tr>
          <tr>
            <Td>HTTPS通信</Td>
            <Td last lineSize={2}>自動的にHTTPS通信を有効化する（Vercelの標準機能）</Td>
          </tr>
          <tr>
            <Td>ファイルアップロードの制限</Td>
            <Td last lineSize={2}>ファイル形式・サイズを制限（multerライブラリを使用）</Td>
          </tr>
          <tr>
            <Td lastBottom>エラーハンドリング</Td>
            <Td last lastBottom lineSize={2}>エラー情報の漏洩を防止し適切に処理</Td>
          </tr>
        </TableLayout>
      </WorksPageItemLayout>

      {/* 各種設計書 */}
      <WorksPageItemLayout htmlId={navData[5].id} title={navData[5].name}>
        <DesignDocumentsLayout>
          {/* システム全体図 */}
          <DesignDocumentsItemLayout htmlId={designDocuments[0].id} heading={designDocuments[0].name}>
            <ImageZoomView imgPath={"/img/todo-app/system-overview.png/"} />
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
            <Td last lineSize={2}>HTML・CSS・JavaScript・Node.js（TypeScript）</Td>
          </tr>
          <tr>
            <Td>フレームワーク</Td>
            <Td last lineSize={2}>Bootstrap・Express</Td>
          </tr>
          <tr>
            <Td>データベース</Td>
            <Td last lineSize={2}>PostgreSQL</Td>
          </tr>
          <tr>
            <Td>開発ツール</Td>
            <Td last lineSize={2}>Visual Studio Code・Docker Compose</Td>
          </tr>
          <tr>
            <Td>バージョン管理ツール</Td>
            <Td last lineSize={2}>Git・GitHub</Td>
          </tr>
          <tr>
            <Td lastBottom>デプロイ環境</Td>
            <Td last lastBottom lineSize={2}>Render（APサーバ）、Aiven（DBサーバ）、Supabase（FSサーバ）</Td>
          </tr>
        </TableLayout>
     </WorksPageItemLayout>

    </WorskPageLayout>
  );
}