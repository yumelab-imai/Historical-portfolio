<!doctype html>
{{-- langはconfig/app.phpを指定している。config/app.php の中のlocaleで指定されている言語 --}}
{{-- <html lang=”{{ app()->getLocale() }}”>と同じ --}}
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
<meta charset="utf-8">
{{-- 説明： https://qiita.com/ryounagaoka/items/045b2808a5ed43f96607 --}}
<meta name="viewport" content="width=device-width, initial-scale=1">

{{-- 説明： https://qiita.com/Hidenatsu/items/708769159cdb7618e208
axiosがCookieからCSRFトークン(暗号化したもの)を自動的に取得して送信してくれる
- フロント側：ログインしてもHTMLが再読み込みされるわけではないので、headタグ内のCSRFトークンの値は更新されない
- サーバ側：ログインによってトークンが更新される(ログインとかSign Upをしない場合などはトークンの値は一緒)
優先順位はこうなっていて、
高：HTMLのheadタグに埋め込まれたX-CSRF-TOKENの値
低：Cookieから取得したX-XSRF-TOKENの値（axiosが『自動で』送信してくれる値）
なので、どちらも送られている場合はX-CSRF-TOKENの値が参照されるので、不一致エラーとなってしまう。
VerifyCsrfTokenクラスで主にやってくれている
<meta name="csrf-token" content="{{ csrf_token() }}"> --}}

<title>LaraVueApp</title>
<!-- Scripts -->
{{-- Laravel 5.5以降、deferがあるとjavascriptの読み込みは行うが、実行はHTMLのロードが完了した後に行われる --}}
<script src="{{ mix('js/app.js') }}" defer></script>
{{-- CSS --}}
{{-- あたかも「public」フォルダの直下にあるものとしてパスを指定できる(下線出てないけど問題ない) --}}
<link rel="stylesheet" href="css/app.css">

<link rel="stylesheet" href="https://masanarea.github.io/app.css">
<link rel="stylesheet" href="https://unpkg.com/ionicons@4.2.2/dist/css/ionicons.min.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
</head>

<body>
    <!-- ここにApp.vueの内容をコンパイルする -->
    <div id="app"></div>
<script src="https://kit.fontawesome.com/10c86ad558.js" crossorigin="anonymous"></script>
{{-- ここに<script   defer></script> --}}
</body>

</html>
