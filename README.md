# portfolio

# URL一覧

ポートフォリオ
http://www.laravelvueport.link/login
(/loginを上のURLでつけているので快適にポートフォリオを試すことができます、是非！)

GitHub
https://github.com/Masanarea/portfolio.git


Instagram(ポートフォリオ以外のWebアプリ作品投稿、アウトプット用)
https://instagram.com/masa_626_/


# アプリケーション概要
GoogleMap内の食べログを改良したより使いやすい食べログアプリ

# アプリケーションの制作経緯
GoogleMap内の食べログページを利用した際に昨日の不便さを感じこれ以上の昨日のWebアプリを作れないだろうか？と疑念を抱き最終的にはGoogleMap内の食べログ以上の機能を兼ね備えたものを制作できたらと思い作成しました。結果として自分の現状の技術力と割いた時間ではまだまだ及びませんが基本的な設計についてはうまくいったのではないかと考えています。現在友人に使ってもらっているのですがそこでの助言や保守・運用を内定後も続けていく中でより良いものにしていけたらと考えています。

# 使用技術とその構成

使用技術

CircleCI CI/CD
PHPunit
Ajax API





インフラ図(AWSを使用)
データベース設計(ER図)
er-chart.pdf


インフラ構成図(AWS)

技術選定経緯





# ポートフォリオ機能一覧

写真の一覧を表示する
写真を投稿する（会員のみ）
写真にいいねを付ける（会員のみ）
写真からいいねを外す（会員のみ）
写真にコメントを追加する（会員のみ）
写真に付けられたいいねの数を表示する
写真に付けられたコメントを表示する
会員登録する
ログイン
ログアウト（会員のみ）


# ローカルでの動作方法
git cloneしてから、ローカルで動作をさせるまでに必要なコマンド
$ git clone
$cd ~/portfolio
$docker-compose up -d
$docker-compose exec app bash
$conposer install
$composer install
$ php artisan config:cache & php artisan cache:clear &   php artisan migrate:refresh



使用技術
フロントエンド

Vue.js 2.6.11
jQuery 3.4.1
HTML / CSS / Sass / MDBootstrap
バックエンド

PHP 7.4.9
Laravel 6.18.36
PHPUnit 8.5.8
ZoomAPI (guzzlehttp/guzzle 7.0.1)
インフラ

CircleCi
Docker 19.03.12 / docker-compose 1.26.2
nginx 1.18
mysql 5.7.31
AWS ( EC2, ALB, ACM, S3, RDS, CodeDeploy, SNS, Chatbot, CloudFormation, Route53, VPC, EIP, IAM )




# ポートフォリオ

**食べログに特化したSNSアプリです。**

<br>
**URL：** ~http://www.laravelvueport.link/login

## アプリ概要

こちらのアプリのコンセプトは、以下の２点です。

1. 朝活仲間を作り、「コツコツ」継続できる
1. 朝活習慣の「コツ」を共有して、朝活の挫折を防ぐ

朝活を文字って、 **「AsaKotsu」** というサービスを開発しました。

基本的にはtwitterのような投稿、コメント、いいね、フォロー機能のあるSNSですが、
その他に以下のような特徴のあるアプリです。

* アプリから、朝活Zoomミーティングを作成、編集、削除できる(ZoomAPI連携)
* 目標起床時間を設定して、早起き達成日数を記録することができる
* 早起き達成日数のランキング機能（1ヶ月ごとに集計）
* 投稿にタグ付けし（カテゴリ）、「朝コツ」タグ等で朝活のコツを共有することができる

なお、各機能や使用技術を紹介した記事をQiitaにも投稿しました。<br>
https://qiita.com/nasuB7373/items/0e507abad2017976c407


## 開発した背景

1日の時間を有意義に過ごすために、<br>
**朝活を習慣化したい！** と思ったことがきっかけです。<br>
また、身近に睡眠に関する悩みを抱えている方がいたことも影響しています。

そして、いざ朝活に挑戦してみました。が、これがなかなか難しい。<br>
* 継続できない
* モチベーションが維持できない
* 眠すぎてベッドから起き上がれない<br>

などなど、様々な課題に直面しました。<br>
<br>
そんな中、対策として<br>
* Zoomを利用した朝活に参加してみる
* 朝絶対に早起きしないといけない約束や用事を作る
* 睡眠のメカニズムについて勉強してみる<br>

等していくうちに、だんだん朝活が継続できるようになってきて、60日以上連続して6時前に起床することができました。<br>
<br>
こうした経験から、朝活をサポートできるアプリを作ってみたいと考えたことが背景にあります。

## 使用画面のイメージ
![ScreenShot_Diagram (1)](https://user-images.githubusercontent.com/58071320/99262351-35885d00-2861-11eb-9562-2cde0231e4a2.png)

## 使用技術

* __フロントエンド__
  * __Vue.js 2.6.14__
  * __JavaScript__
  * __HTML / SCC / Sass / MDBootstrap__

* __バックエンド__
  * __PHP 7.4.1__
  * __Laravel 6.20.26__
  * __PHPUnit 9.5.16__

* __インフラ__
  * __CircleCi__
  * __Docker 20.10.12 / docker-compose 2.2.3__
  * __nginx 1.18__
  * __mysql 5.7.31__
  * __AWS__ ( EC2, ALB, ACM, S3, RDS, Route53, VPC, EIP, IAM )

* その他使用ツール
  * Visual Studio Code
  * 
  * 
  * 

## AWS構成図

![AWS_Diagram](https://user-images.githubusercontent.com/58071320/98756993-eed4d600-240e-11eb-8a3a-141290e77fc9.png)

## 機能一覧

* __一般ユーザー登録関連__
  * アカウント新規登録、プロフィール編集機能、アカウント削除（論理削除）
  * パスワード変更
  * ログイン、ログアウト機能
  * かんたんログイン機能（ゲストユーザーログイン）

* __管理者ユーザー関連（実装中）__
  * 管理者ユーザーでのログイン、ログアウト
 

* __ZoomAPI連携__
    * 朝活Zoomミーティング機能(CRUD)
      * ミーティングの新規作成、一覧表示、編集、削除機能

* __早起き達成の判定機能__
  * ユーザー毎に目標起床時刻を設定可能（4:00〜10:00まで）
  * 目標起床時間より前に投稿をすることができれば、早起き達成記録が１日分増えます。<br>
    * ※深夜過ぎ等に投稿した場合も早起き成功とならぬよう、<br>
   　  目標起床時間より3時間前に投稿しても無効になるよう対処しています。<br>
       （例）目標起床時間を07:00に設定した場合、04:00~07:00に投稿できたら早起き達成


* __ユーザーの早起き達成日数のランキング機能（1ヶ月毎）__

* __無限スクロール機能__ (jQuery / inview.js / ajax)
  - ユーザー投稿一覧、ミーティング一覧など

* __ページネーション機能__
  - コメント一覧、フォロー中/フォロワー一覧など

* __ユーザー投稿関連(CRUD)__
  - クイック投稿機能・・・「クイック投稿ボタン」をクリックすると、「おはようございます！」というテンプレート文を投稿できます。目標起床時間のギリギリ前に目覚めて、急いで投稿したい時に便利です。

* __コメント機能__
  - コメント一覧機能（ページネーション）

* __タグ機能__ (Vue.js / Vue Tags Input)
  - タグ毎の投稿一覧機能（無限スクロール）

* __いいね機能__ (Vue.js / ajax)
  - いいねした投稿一覧機能（無限スクロール）

* __フォロー機能__
  - フォロー中/フォロワー一覧（ページネーション）

* __検索機能__
  - 投稿の検索
  - ミーティングの検索

* __フラッシュメッセージ表示機能__ (jQuery/ Toastr)
  * 投稿、編集、削除、ログイン、ログアウト時にフラッシュメッセージを表示

* __画像アップロード機能__ (AWS S3バケット)

* __PHPUnitテスト__

* __レスポンシブWebデザイン（※徐々に追加しています）__
  * ハンバーガーメニュー(jQuery)

## DB設計

### ER図
![AsaKotsu_ERD](https://user-images.githubusercontent.com/58071320/132526765-3cf6733f-b263-4051-86e9-de32d0000602.png)


### 各テーブルについて
| テーブル名 | 説明 |
|:-:|:-:|
| users  | 一般ユーザー情報  |
| admins  | 管理者ユーザー情報  |
|  follows | フォロー中/フォロワーのユーザー情報  |
| achievement_days  | ユーザーが早起き達成した日付を、履歴として管理  |
| meetings  | ユーザーが作成したZoomミーティング情報  |
| articles  | ユーザー投稿の情報  |
| tags  | ユーザー投稿のタグ情報  |
| article_tags  | articleとtagsの中間テーブル  |
| likes  | 投稿への、いいねの情報  |
| comments  | ユーザー投稿への、コメントの情報  |


### 早起き達成機能 関連のポイント

**usersテーブル**の`wake_up_time`はユーザーの**目標起床時間**を意味しています。
この時間よりも早い時間にユーザーが投稿をできれば、その日の早起きが達成となります。
なお、
「目標起床時間が07:00で、深夜1:00に投稿した」
というように、早過ぎる時間にユーザーが投稿した
場合にも早起き達成とならないように設定しています。
その仕組みとして、**usersテーブル**の`range_of_success`の値が利用されています。
これは、
「目標起床時間より何時間前までに投稿すれば早起き達成となるのか、その範囲を表す整数値」
です。
デフォルトは`3`で、例えば目標起床時間を**07:00**に設定している場合は、その3時間前の
**04:00 〜 07:00** の間に投稿できれば早起き達成となります。

こうして早起き達成をすることができたら、**achievement_daysテーブル**の`date`に達成日の日付が履歴として記録されていきます。
`例） 2020-11-22`
この日付データを利用して、以下の機能を実現しています。

**① 　1ヶ月毎の早起き達成日数を算出** <br>
**②　①の日数を利用したランキング機能**

当初は、早起き**継続**日数のランキングにしようかとも考えていましたが、
ユーザーのモチベーション維持等の観点から**1ヶ月毎**の早起き**達成**日数を採用することにしました。

※朝活アプリなので、もともとは目標起床時間04:00~10:00の間しか設定できない仕様ですが、
現在は「早起き達成判定」機能を好きな時間にお試しいただけるよう、時間設定を自由にできるようにしています。

API
URL	メソッド	認証	内容
/api/photos	GET		写真 一覧取得
/api/photos	POST		写真 投稿
/api/photos/{写真ID}	GET		写真 詳細取得
/api/photos/{写真ID}/like	PUT		写真 いいね追加
/api/photos/{写真ID}/like	DELETE		写真 いいね解除
/api/photos/{写真ID}/comments	POST		写真 コメント追加
/api/register	POST		会員登録
/api/login	POST		ログイン
/api/logout	POST		ログアウト
/api/user	GET		認証ユーザー取得

バックエンド
API 以外のサーバサイドで用意する必要がある URL 
URL	メソッド	認証	内容
/	GET		最初に HTML を返却する
/photos/{写真ID}/download	GET		写真ダウンロード
フロントエンド
Vue Routerで実現します。
URL	内容
/	写真一覧ページ
/photos/{写真ID}	写真詳細ページ
/login	ログイン・会員登録ページ

複数のミドルウェア（今回だとNginx、MySQL、PHP）のコンテナを作成・管理する場合はDocker Composeを使います。

axios・・・Javascriptライブラリ

id => mHAoeS-GOBpf

FileReader API 

FormData API