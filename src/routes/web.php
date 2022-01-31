<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// 写真ダウンロード、下のindexより下に書いたらerrorになった
Route::get('/photos/{photo}/download', 'PhotoController@download');

// APIのURL以外のリクエストに対してはindexテンプレートを返す
// 画面遷移はフロントエンドのVueRouterで制御する
/*login という URL にアクセスがあったときでも、サーバからは上述のコードの通り index テンプレートを返却します。
{/login }というパスに対応したコンテンツを表示するのはあくまでフロントエンド（特に Vue Router）の役割
{any?} で任意のパスパラメータ any を受け入れています
*/
Route::get('/{any?}', fn() => view('index'))->where('any', '.+');
// Route::get('/', function () {
//     return view('welcome');
// });

// Route::get('/vue', function () {
//     return view('test');
// });

