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
  const url = '/class-room';
  // Topと このページの情報を格納
  const navPageData = [{id:'',name:'Top',url:'/'},{id:'',name:'Class-Room',url:url}];
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
    { id: 0, name: 'ER図', imgPath: '/img/class-room/db/er.svg', hiddenFlg: false },
    { id: 1, name: 'ユーザテーブル', imgPath: '/img/class-room/db/users.png', hiddenFlg: false },
    { id: 2, name: 'クラステーブル', imgPath: '/img/class-room/db/classes.png', hiddenFlg: false },
    { id: 3, name: 'クラスメンバーテーブル', imgPath: '/img/class-room/db/class-members.png', hiddenFlg: false },
    { id: 4, name: '課題テーブル', imgPath: '/img/class-room/db/class-assignments.png', hiddenFlg: false },
    { id: 5, name: '提出テーブル', imgPath: '/img/class-room/db/assignment-submissions.png', hiddenFlg: false },
    { id: 6, name: '提出アイテムテーブル', imgPath: '/img/class-room/db/assignemt-items.png', hiddenFlg: false },
    { id: 7, name: '課題メッセージテーブル', imgPath: '/img/class-room/db/assignment-messages.png', hiddenFlg: false },
    
    
  ];

  // ナビゲーションメニューでのhtmlidをつけるところには　classに navを書く
  return (  
    <WorskPageLayout navData={navData} navPageData={navPageData} subTitle="ClassRoom">
      <WorksTopView title="Class-Room" text="Spring BootとMinIOを使用した課題提出アプリ" imgPath="/img/class-room/class-room-top.png"/>


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
        <Text>&emsp;Spring Bootの授業における自由テーマの最終課題としてファイルサーバを活用したアプリケーションを開発したいとアプリケーションを開発したいと考え、本アプリケーションを開発開発しました。</Text>
      </WorksPageItemLayout>

      {/* 開発概要 */}
      <WorksPageItemLayout htmlId={navData[1].id} title={navData[1].name}>
        <TableLayout>
          <tr>
            <Td>開発時期</Td>
            <Td last lineSize={2}>2025年7月 ~ 2025年8月</Td>
          </tr>
          <tr>
            <Td>開発期間</Td>
            <Td last lineSize={2}>2週間</Td>
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
            <Td last lineSize={2}>校内の学生・教師</Td>
          </tr>
          <tr>
            <Td>利用端末</Td>
            <Td last lineSize={2}>ノートPC</Td>
          </tr>
          <tr>
            <Td lastBottom>ブラウザ</Td>
            <Td last lastBottom lineSize={2} padding={30}>動作確認済みブラウザ (Chrome)</Td>
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
            <Td>生徒グループ機能</Td>
            <Td last lineSize={2}>生徒が課題プロジェクトを一覧表示できる</Td>
          </tr>
          <tr>
            <Td>生徒課題管理機能</Td>
            <Td last lineSize={2}>生徒が課題一覧と詳細情報を表示できる</Td>
          </tr>
          <tr>
            <Td>生徒課題提出機能</Td>
            <Td last lineSize={2}>生徒がファイル・リンクを提出・削除できる</Td>
          </tr>
          <tr>
            <Td>生徒メッセージ表示機能</Td>
            <Td last lineSize={2}>生徒が教師からのメッセージを表示できる</Td>
          </tr>
          <tr>
            <Td>生徒SlackBootメッセージ通知機能</Td>
            <Td last lineSize={2}>生徒がSlackBootによるメッセージを閲覧できる</Td>
          </tr>
          <tr>
            <Td>教師グループ管理機能</Td>
            <Td last lineSize={2}>教師がグループを追加・削除できる</Td>
          </tr>
          <tr>
            <Td>教師生徒追加機能</Td>
            <Td last lineSize={2}>教師が生徒をグループに追加・削除できる</Td>
          </tr>
          <tr>
            <Td>教師課題管理機能</Td>
            <Td last lineSize={2}>教師が課題を追加・編集・削除できる</Td>
          </tr>
          <tr>
            <Td>教師課題詳細情報機能</Td>
            <Td last lineSize={2}>教師が課題詳細情報・提出状況を表示できる</Td>
          </tr>
            <tr>
            <Td>教師課題承認機能</Td>
            <Td last lineSize={2}>教師が生徒が提出した課題のステータスを変更できる</Td>
          </tr>
          <tr>
            <Td>教師課題ダウンロード機能</Td>
            <Td last lineSize={2}>教師が課題を（一括・生徒・1ファイル）を選択してダウンロードできる</Td>
          </tr>
          <tr>
            <Td lastBottom>教師メッセージ送信機能</Td>
            <Td last lastBottom lineSize={2}>教師が生徒にメッセージを送信できる</Td>
          </tr>
        </TableLayout>
      </WorksPageItemLayout>

      {/* セキュリティ要件 */}
      <WorksPageItemLayout htmlId={navData[4].id} title={navData[4].name}>
        <TableLayout>
          <tr>
            <Td>認証</Td>
            <Td last lineSize={2}>Spring Securityを使用</Td>
          </tr>
          <tr>
            <Td>パスワードのハッシュ化</Td>
            <Td last lineSize={2}>Spring Securityを使用（bcryptライブラリを使用）</Td>
          </tr>
          <tr>
            <Td>認可</Td>
            <Td last lineSize={2}>生徒・教師で表示するページを制御する・自分の参加しているグループ・課題のみ表示できる(Spring Securityを使用)</Td>
          </tr>
          <tr>
            <Td>XSS対策</Td>
            <Td padding={40} last lineSize={2}>HTML特殊文字のエスケープ処理（Thymeleafテンプレートエンジン・）</Td>
          </tr>
          <tr>
            <Td>CSRF対策</Td>
            <Td last lineSize={2}>CSRFトークンの利用（Spring Securityを使用）</Td>
          </tr>
          <tr>
            <Td lastBottom>SQLインジェクション対策</Td>
            <Td last lastBottom lineSize={2}>プレースホルダの利用（MyBatisライブラリを使用）</Td>
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
            <Td last lineSize={2}>HTML・CSS・JavaScript・Java</Td>
          </tr>
          <tr>
            <Td>フレームワーク</Td>
            <Td last lineSize={2}>Bootstrap・Spring boot</Td>
          </tr>
          <tr>
            <Td>データベース</Td>
            <Td last lineSize={2}>PostgreSQL</Td>
          </tr>
          <tr>
            <Td>開発ツール</Td>
            <Td last lineSize={2}>IntelliJ IDEA・Docker Compose</Td>
          </tr>
          <tr>
            <Td>バージョン管理ツール</Td>
            <Td last lineSize={2}>Git・GitHub</Td>
          </tr>
          <tr>
            <Td lastBottom>使用技術</Td>
            <Td last lastBottom lineSize={2}>MinIO</Td>
          </tr>
        </TableLayout>
     </WorksPageItemLayout>

    </WorskPageLayout>
  );
}