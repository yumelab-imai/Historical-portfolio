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
Route::get('/user', fn() => Auth::user())->name('user');

// 写真投稿のため
Route::post('/photos', 'PhotoController@create')->name('photo.create');
