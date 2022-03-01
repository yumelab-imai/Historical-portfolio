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
PHP
Laravel
JavaScript
Vue.js
MySQL
Nginx
Docker/Docker-compose
CircleCI CI/CD
PHPunit
Ajax API

AWS
VPC
EC2
RDS
Route53
ACM
ALB
S3



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

