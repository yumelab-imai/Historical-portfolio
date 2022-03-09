<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    /** JSONに含める属性 */
    protected $visible = [
        'author', 'content', self::UPDATED_AT,
        //  'comment_num',
    ];

    /**
     * リレーションシップ - usersテーブル
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function author()
    {
        return $this->belongsTo('App\User', 'user_id', 'id', 'users');
    }

    // 開発中
    // public function comment_num()
    // {
    //     return $this->belongsTo('App\Photo', 'id', 'id', 'photos');
    // }


    /**
     * アクセサ - comment_num
     * @return int
     */
    // 開発中
    // public function getCommentNumAttribute(): int
    // {

    //     return function ($comment) {
    //         return $comment->where(photo_id)->orderBy()->value();
    //     };
    // }
}
