<?php

namespace Tests\Feature;

// 追加したよ〜
use App\User;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class RegisterApiTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @test
     */
    public function should_新しいユーザーを作成して返却する()
    {
        $data = [
            'name' => 'vuesplash user',
            'email' => 'dummy@email.com',
            'password' => 'test1234',
            'password_confirmation' => 'test1234',
        ];
        // 会員登録をroutes/api.php にルート定義
        // Route::post('/register', 'Auth\RegisterController@register')->name('register');
        // コントローラーの影響でここで @register　→　RegistersUsers トレイトの　register メソッド
        // 　→　@registeredが必要→registeredを書き込む。これによって$dataが登録用データとして送られる
        // RegisterController で registered メソッドの中身をオーバーライド
        // $dataを送る
        $response = $this->json('POST', route('register'), $data);


        $user = User::first();
        $this->assertEquals($data['name'], $user->name);

        $response
            ->assertStatus(201)
            ->assertJson(['name' => $user->name]);
    }
}
