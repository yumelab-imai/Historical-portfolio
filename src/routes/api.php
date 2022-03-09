<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

// 会員登録のため
Route::post('/register', 'Auth\RegisterController@register')->name('register');

// ログインのため
Route::post('/login', 'Auth\LoginController@login')->name('login');

// ログアウトのため
Route::post('/logout', 'Auth\LoginController@logout')->name('logout');

// ログインユーザーのため
Route::get('/user', fn () => Auth::user())->name('user');

// 開発中の 『コメント削除機能』
// {id}、{index}で引数を渡す
// Route::delete('/photos/{id}/comments/{index}', 'PhotoController@dump');

// 写真投稿のため
Route::post('/photos', 'PhotoController@create')->name('photo.create');

// 写真一覧のため
Route::get('/photos', 'PhotoController@index')->name('photo.index');

// 写真詳細のため
Route::get('/photos/{id}', 'PhotoController@show')->name('photo.show');

// コメントのため
Route::post('/photos/{photo}/comments', 'PhotoController@addComment')->name('photo.comment');

// いいね
Route::put('/photos/{id}/like', 'PhotoController@like')->name('photo.like');

// いいね解除のため
Route::delete('/photos/{id}/like', 'PhotoController@unlike');

// トークンリフレッシュ
Route::get('/reflesh-token', function (Illuminate\Http\Request $request) {
    // トークンを再生成
    $request->session()->regenerateToken();

    return response()->json();
});

// サンプル集
// Route::get('/posts/{post}/comments/{comment}', function ($postId, $commentId) {
//     //
// });

//  get “posts/:id” => “posts/#show”
// というルーティングがあった場合、
//  get “posts/index” => “posts/index”
//  は:idをつかっているルーティングよりも上に書く
