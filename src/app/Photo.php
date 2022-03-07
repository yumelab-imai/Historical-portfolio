<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Arr;
// これ
use Illuminate\Support\Facades\Storage;

use Illuminate\Support\Facades\Auth;

class Photo extends Model
{

    protected $perPage = 5; // この値を少なくすれば動作確認しやすい

// プライマリキーの型を決定
    protected $keyType = 'string';

// IDの桁数を決定
    const ID_LENGTH = 12;

// デフォルトでは含まれないが$appends などで明示的に追加
    protected $appends = [
        'url', 'likes_count', 'liked_by_user',
    ];

    // 登録項目だけを JSON に含める
    // 逆に$hiddenはJSONに含めない
    protected $visible = [
        'id', 'owner', 'comments',
        'url', 'likes_count', 'liked_by_user',
    ];

    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);

        if (! Arr::get($this->attributes, 'id')) {
            $this->setId();
        }
    }

    /**
     * ランダムなID値をid属性に代入
     */
    private function setId()
    {
        $this->attributes['id'] = $this->getRandomId();
    }

    /**
     * ランダムなID値を生成
     * @return string
     * 例、Bi7HdiAxAL3I
     */
    private function getRandomId()
    {
        $characters = array_merge(
            range(0, 9), range('a', 'z'),
            range('A', 'Z'), ['-', '_']
        );

        $length = count($characters);

        $id = "";

        for ($i = 0; $i < self::ID_LENGTH; $i++) {
            $id .= $characters[random_int(0, $length - 1)];
        }

        return $id;
    }

        /**
     * リレーションシップ - usersテーブル
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function owner()
    {
        return $this->belongsTo('App\User', 'user_id', 'id', 'users');
    }

        /**
     * アクセサ - url
     * @return string
     */
    public function getUrlAttribute()
    {
        return Storage::cloud()->url($this->attributes['filename']);
    }

    /**
 * リレーションシップ - commentsテーブル
 * @return \Illuminate\Database\Eloquent\Relations\HasMany
 */
public function comments()
{
    return $this->hasMany('App\Comment')->orderBy('id', 'desc');
}

/**
 * リレーションシップ - usersテーブル
 * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
 */
public function likes()
{
    return $this->belongsToMany('App\User', 'likes')->withTimestamps();
}

/**
 * アクセサ - likes_count
 * @return int
 */
public function getLikesCountAttribute()
{
    // リレーションした likes() は likes で使える!
    return $this->likes->count();
}

/**
 * アクセサ - liked_by_user
 * @return boolean
 */
public function getLikedByUserAttribute()
{
    if (Auth::guest()) {
        return false;
    }

    // containsメソッドは指定したアイテムがコレクションに含まれているかどうかを判定
    return $this->likes->contains(function ($user) {
        return $user->id === Auth::user()->id;
    });
}
}


