<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

use App\Photo;
use App\User;

class ReplaceAddCommentApiTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();

        // テストユーザー作成
        $this->user = \App\User::factory()->create();
    }

    /**
     * @test
     */
    public function should_コメントを追加できる()
    {
        // factory(Photo::class)->create();
        \App\Photo::factory()->create();
        $photo = Photo::first();

        $content = 'sample content';

        $response = $this->actingAs($this->user)
            ->json('POST', route('photo.comment', [
                'photo' => $photo->id,
            ]), compact('content'));

        $comments = $photo->comments()->get();

        $response->assertStatus(201)
            // JSONフォーマットが期待通りであること
            ->assertJsonFragment([
                "author" => [
                    "name" => $this->user->name,
                ],
                "content" => $content,
            ]);

        // DBにコメントが1件登録されていること
        $this->assertEquals(1, $comments->count());
        // 内容がAPIでリクエストしたものであること
        $this->assertEquals($content, $comments[0]->content);
    }
}
