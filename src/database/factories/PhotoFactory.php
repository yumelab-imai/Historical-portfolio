<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

// 追加
use Illuminate\Support\Str;
use App\Photo;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Photo>
 */
class PhotoFactory extends Factory
{
    protected $model = Photo::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'id' => Str::random(12),
            'user_id' => fn () => \App\User::factory()->create()->id,
            'filename' => Str::random(12) . '.jpg',
            'created_at' => $this->faker->dateTime(),
            'updated_at' => $this->faker->dateTime(),
        ];
    }
}
