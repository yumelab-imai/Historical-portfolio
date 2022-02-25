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
// Route::get('/', function () {
//     return env('APP_NAME');
// });

// 写真ダウンロード、下のindexより下に書いたらerrorになったので順番大事！
Route::get('/photos/{photo}/download', 'PhotoController@download');


/*
サーバーサイド：    APIのURL以外のリクエストに対しては{any?}でindexテンプレートを返す
フロントエンド側：  画面遷移をフロントエンドのVueRouterで制御する
{/login }などのパスに対応したコンテンツを表示するのはフロントエンド（Vue Router）の役割
*/
Route::get('/{any?}', fn() => view('index'))->where('any', '.+');

