<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;


use App\Http\Requests\StorePhoto;
use App\Photo;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

use App\Comment;
use App\Http\Requests\StoreComment;

class PhotoController extends Controller
{
    public function __construct()
    {
        // 認証が必要
        $this->middleware('auth')->except(['index', 'download', 'show']);
    }


    /** コメント機能*/



    /**
     * PhotoForm.vue から s3 に写真を送る
     * @param StorePhoto $request
     * @return \Illuminate\Http\Response
     */
    public function create(StorePhoto $request)
    {
        // 投稿写真の拡張子を取得する
        $extension = $request->photo->extension();

        $photo = new Photo();

        // $photo->id は Photo() 生成時に既に存在
        // $photo->filename = Bi7HdiAxAL3I.jpg
        $photo->filename = $photo->id . '.' . $extension;

        /**
         * S3に出力してファイルを保存
         * 第1引数にディレクトリのパス、第２引数にファイルインスタンス、第3引数にファイル名、第4引数で'public'->ファイルを公開状態で保存するため
         * Storage::putFileAs('path', $file, 'sample.txt');
         * laravel/config/filesystems.phpの 'cloud' => 's3' を利用している
         * 'disks' => ['local' =>  ] の場合は Storage::disk('local'); のように書く
         */
        Storage::cloud()
            ->putFileAs('', $request->photo, $photo->filename, 'public');

        // トランザクション
        DB::beginTransaction();

        try {
            Auth::user()->photos()->save($photo);
            DB::commit();
        } catch (\Exception $exception) {
            DB::rollBack();
            // アップロードする予定だったファイルを削除
            Storage::cloud()->delete($photo->filename);
            throw $exception;
        }

        // 201(CREATED)を返却(成功)
        return response($photo, 201);
    }

    /**
     * 写真一覧
     */
    public function index()
    {
        $photos = Photo::with(['owner', 'likes'])
            ->orderBy(Photo::CREATED_AT, 'desc')->paginate();

        return $photos;
    }

    /**
 * 写真ダウンロード
 * @param Photo $photo
 * @return \Illuminate\Http\Response
 */
public function download(Photo $photo)
{
    // 写真の存在チェック
    if (! Storage::cloud()->exists($photo->filename)) {
        abort(404);
    }

    $disposition = 'attachment; filename="' . $photo->filename . '"';
    $headers = [
        'Content-Type' => 'application/octet-stream',
        'Content-Disposition' => $disposition,
    ];

    return response(Storage::cloud()->get($photo->filename), 200, $headers);
}

    /**
 * 写真詳細
 * @param string $id
 * @return Photo
 */
public function show(string $id)
{
    // $photo = Photo::where('id', $id)->with(['owner'])->first();

    // return $photo ?? abort(404);

    $photo = Photo::where('id', $id)
        ->with(['owner', 'comments.author', 'likes'])->first();

    return $photo ?? abort(404);
}

/**
     * コメント投稿
     * @param Photo $photo
     * @param StoreComment $request
     * @return \Illuminate\Http\Response
     */
    public function addComment(Photo $photo, StoreComment $request)
    {
        $comment = new Comment();
        $comment->content = $request->get('content');
        $comment->user_id = Auth::user()->id;
        $photo->comments()->save($comment);

        // authorリレーションをロードするためにコメントを取得しなおす
        $new_comment = Comment::where('id', $comment->id)->with('author')->first();

        return response($new_comment, 201);
    }

    // /**
    //  * コメント投稿の削除
    //  * @param Photo $photo
    //  * @param StoreComment $request
    //  * @return \Illuminate\Http\Response
    //  */
    // public function deleteComment(Photo $photo, StoreComment $request)
    // {
    //     // ここが違う
    //     $request->delete('id');
    //     $photo->comments()->save(???);

    //     // authorリレーションをロードするためにコメントを取得しなおす
    //     $new_comment = Comment::where('id', $comment->id)->with('author')->first();

    //     return response($new_comment, 201);
    // }

    /**
 * いいね
 * @param string $id
 * @return array
 */
public function like(string $id)
{
    // $photo には1つしか入らないので get() でも first() でも変わらない
    $photo = Photo::where('id', $id)->with('likes')->first();

    if (! $photo) {
        abort(404);
    }

    // ここでユーザーとその他を分ける
    // 写真の likes に Auth::user()->id を付加
    $photo->likes()->detach(Auth::user()->id);
    $photo->likes()->attach(Auth::user()->id);

    return ["photo_id" => $id];
}
    /**
 * いいね解除
 * @param string $id
 * @return array
 */
public function unlike(string $id)
{
    $photo = Photo::where('id', $id)->with('likes')->first();

    if (! $photo) {
        abort(404);
    }

    // photo モデル外なので 『likes』 ではなく、 『likes()』 でなければならない
    $photo->likes()->detach(Auth::user()->id);

    return ["photo_id" => $id];
}


}
