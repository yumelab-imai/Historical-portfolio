# URL 一覧



ポートフォリオ  
https://www.laravelvueport.link/login

GitHub  
https://github.com/Masanarea/portfolio.git

Instagram(ポートフォリオ以外の Web アプリ作品投稿、アウトプット用)  
https://instagram.com/masa_626_/

# アプリケーション概要  
**食べログに特化した SNS アプリです。**



# アプリケーションの制作経緯  
前々からインスタグラムに上げられるような飲食店での食事の写真のみを集めたSNSアプリがあったらいいなという考えから制作しました。インスタグラムのような直感的にわかりやすい機能を実装したり、Google Mapのレビューのように抵抗感なく気軽にコメントを書ける機能を兼ね備えました。アプリを使用することで少しでも『この店に行ってみたい！』『写真を見ていて楽しい！』『この料理美味しそうだなぁ』と思ってもらえるようなWebアプリを作レタラと思います。
まだ途中なのですが長期的には GoogleMap やインスタグラムでの食事関連のもの以上に『この店に行ってみたい！』と思ってもらえるようなアプリを制作できたらと考えています。
現在、改良している段階なのですが、友人に使ってもらうことでかなり率直な意見をもらっています。
アプリの機能面やその数、UI部分はまだまだなのですが、その助言を生かして今後もこのアプリの保守・運用を続けて行きたいと考えています。



Docker 19.03.12 / docker-compose 1.26.2
nginx 1.18
mysql 5.7.31
AWS ( EC2, ALB, ACM, S3, RDS, CodeDeploy, SNS, Chatbot, CloudFormation, Route53, VPC, EIP, IAM )



<br>
**URL：** ~http://www.laravelvueport.link/login

## アプリ概要

こちらのアプリのコンセプトは、以下の２点です。

1. 朝活仲間を作り、「コツコツ」継続できる
1. 朝活習慣の「コツ」を共有して、朝活の挫折を防ぐ

朝活を文字って、 **「AsaKotsu」** というサービスを開発しました。

基本的には twitter のような投稿、コメント、いいね、フォロー機能のある SNS ですが、
その他に以下のような特徴のあるアプリです。

- アプリから、朝活 Zoom ミーティングを作成、編集、削除できる(ZoomAPI 連携)
- 目標起床時間を設定して、早起き達成日数を記録することができる
- 早起き達成日数のランキング機能（1 ヶ月ごとに集計）
- 投稿にタグ付けし（カテゴリ）、「朝コツ」タグ等で朝活のコツを共有することができる

なお、各機能や使用技術を紹介した記事を Qiita にも投稿しました。<br>
https://qiita.com/nasuB7373/items/0e507abad2017976c407



## 使用画面のイメージ

![ScreenShot_Diagram (1)](https://user-images.githubusercontent.com/58071320/99262351-35885d00-2861-11eb-9562-2cde0231e4a2.png)

## 使用技術

- **フロントエンド**

  - **Vue.js 2.6.14**
  - **JavaScript**
  - **HTML / SCC /**

- **バックエンド**

  - **PHP 7.4.1**
  - **Laravel 6.20.26**
  - **PHPUnit 9.5.16**

- **インフラ**

  - **CircleCi**
  - **Docker 20.10.12 / docker-compose 2.2.3**
  - **nginx 1.18**
  - **mysql 5.7.31**
  - **AWS** ( EC2, ALB, ACM, S3, RDS, Route53, VPC, EIP, IAM )

- その他使用ツール
  - Visual Studio Code
  - SourceTree(コマンドでGitを使うこともありましたが、主に SourceTree を使用)
  - Slack
  - GitHub Desktop
  - GitHub

- GitHub や CircleCi の利用において
  - master ブランチと feature ブランチの二つを用意して作業を進める
  - 機能を追加する際に Issure を利用
  - feature ブランチ でtestが通らない場合、master ブランチにマージできないように設定
  - CircleCi のテスト結果を Slack に通知
  - Notion でこれはいいと感じた記事を管理
  - Notion でこれはいいと感じた記事を管理


## AWS 構成図

![AWS_Diagram](https://user-images.githubusercontent.com/58071320/98756993-eed4d600-240e-11eb-8a3a-141290e77fc9.png)
![Uploading AWS-ER.png…]()
## 機能一覧

- **一般ユーザー登録関連**

  - アカウント新規登録、プロフィール編集機能、アカウント削除（論理削除）
  - パスワード変更
  - ログイン、ログアウト機能
  - かんたんログイン機能（ゲストユーザーログイン）

- **管理者ユーザー関連（実装中）**

  - 管理者ユーザーでのログイン、ログアウト

- **ZoomAPI 連携**

  - 朝活 Zoom ミーティング機能(CRUD)
    - ミーティングの新規作成、一覧表示、編集、削除機能

- **早起き達成の判定機能**

  - ユーザー毎に目標起床時刻を設定可能（4:00〜10:00 まで）
  - 目標起床時間より前に投稿をすることができれば、早起き達成記録が１日分増えます。<br>
    - ※深夜過ぎ等に投稿した場合も早起き成功とならぬよう、<br>
      　 目標起床時間より 3 時間前に投稿しても無効になるよう対処しています。<br>
      （例）目標起床時間を 07:00 に設定した場合、04:00~07:00 に投稿できたら早起き達成

- **ユーザーの早起き達成日数のランキング機能（1 ヶ月毎）**

- **無限スクロール機能** (jQuery / inview.js / ajax)

  - ユーザー投稿一覧、ミーティング一覧など

- **ページネーション機能**

  - コメント一覧、フォロー中/フォロワー一覧など

- **ユーザー投稿関連(CRUD)**

  - クイック投稿機能・・・「クイック投稿ボタン」をクリックすると、「おはようございます！」というテンプレート文を投稿できます。目標起床時間のギリギリ前に目覚めて、急いで投稿したい時に便利です。

- **コメント機能**

  - コメント一覧機能（ページネーション）

- **タグ機能** (Vue.js / Vue Tags Input)

  - タグ毎の投稿一覧機能（無限スクロール）

- **いいね機能** (Vue.js / ajax)

  - いいねした投稿一覧機能（無限スクロール）

- **フォロー機能**

  - フォロー中/フォロワー一覧（ページネーション）

- **検索機能**

  - 投稿の検索
  - ミーティングの検索

- **フラッシュメッセージ表示機能** (jQuery/ Toastr)

  - 投稿、編集、削除、ログイン、ログアウト時にフラッシュメッセージを表示

- **画像アップロード機能** (AWS S3 バケット)

- **PHPUnit テスト**

- **レスポンシブ Web デザイン（※徐々に追加しています）**
  - ハンバーガーメニュー(jQuery)

## DB 設計

### ER 図

![AsaKotsu_ERD](https://user-images.githubusercontent.com/58071320/132526765-3cf6733f-b263-4051-86e9-de32d0000602.png)

### 各テーブルについて

|    テーブル名    |                      説明                      |
| :--------------: | :--------------------------------------------: |
|      users       |                一般ユーザー情報                |
|      admins      |               管理者ユーザー情報               |
|     follows      |      フォロー中/フォロワーのユーザー情報       |
| achievement_days | ユーザーが早起き達成した日付を、履歴として管理 |
|     meetings     |    ユーザーが作成した Zoom ミーティング情報    |
|     articles     |               ユーザー投稿の情報               |
|       tags       |             ユーザー投稿のタグ情報             |
|   article_tags   |         article と tags の中間テーブル         |
|      likes       |             投稿への、いいねの情報             |
|     comments     |        ユーザー投稿への、コメントの情報        |

### 早起き達成機能 関連のポイント

**users テーブル**の`wake_up_time`はユーザーの**目標起床時間**を意味しています。
この時間よりも早い時間にユーザーが投稿をできれば、その日の早起きが達成となります。
なお、
「目標起床時間が 07:00 で、深夜 1:00 に投稿した」
というように、早過ぎる時間にユーザーが投稿した
場合にも早起き達成とならないように設定しています。
その仕組みとして、**users テーブル**の`range_of_success`の値が利用されています。
これは、
「目標起床時間より何時間前までに投稿すれば早起き達成となるのか、その範囲を表す整数値」
です。
デフォルトは`3`で、例えば目標起床時間を**07:00**に設定している場合は、その 3 時間前の
**04:00 〜 07:00** の間に投稿できれば早起き達成となります。

こうして早起き達成をすることができたら、**achievement_days テーブル**の`date`に達成日の日付が履歴として記録されていきます。
`例） 2020-11-22`
この日付データを利用して、以下の機能を実現しています。

**① 　 1 ヶ月毎の早起き達成日数を算出** <br>
**② 　 ① の日数を利用したランキング機能**

当初は、早起き**継続**日数のランキングにしようかとも考えていましたが、
ユーザーのモチベーション維持等の観点から**1 ヶ月毎**の早起き**達成**日数を採用することにしました。

※朝活アプリなので、もともとは目標起床時間 04:00~10:00 の間しか設定できない仕様ですが、
現在は「早起き達成判定」機能を好きな時間にお試しいただけるよう、時間設定を自由にできるようにしています。

API
URL メソッド 認証 内容
/api/photos GET 写真 一覧取得
/api/photos POST 写真 投稿
/api/photos/{写真 ID} GET 写真 詳細取得
/api/photos/{写真 ID}/like PUT 写真 いいね追加
/api/photos/{写真 ID}/like DELETE 写真 いいね解除
/api/photos/{写真 ID}/comments POST 写真 コメント追加
/api/register POST 会員登録
/api/login POST ログイン
/api/logout POST ログアウト
/api/user GET 認証ユーザー取得

バックエンド
API 以外のサーバサイドで用意する必要がある URL
URL メソッド 認証 内容
/ GET 最初に HTML を返却する
/photos/{写真 ID}/download GET 写真ダウンロード
フロントエンド
Vue Router で実現します。
URL 内容
/ 写真一覧ページ
/photos/{写真 ID} 写真詳細ページ
/login ログイン・会員登録ページ

複数のミドルウェア（今回だと Nginx、MySQL、PHP）のコンテナを作成・管理する場合は Docker Compose を使います。

axios・・・Javascript ライブラリ

id => mHAoeS-GOBpf

FileReader API

FormData API

import { OK } from '../util'

// トランザクション

フォームリクエストクラスを作成

アクセサ

ページ遷移時にページ先頭を表示

status

エラー機能
