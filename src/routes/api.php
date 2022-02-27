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
Route::get('/user', function () {
    Auth::user();
})->name('user');

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

// いいね解除
Route::delete('/photos/{id}/like', 'PhotoController@unlike');

// トークンリフレッシュ
Route::get('/reflesh-token', function (Illuminate\Http\Request $request) {
    $request->session()->regenerateToken();

    return response()->json();
});
