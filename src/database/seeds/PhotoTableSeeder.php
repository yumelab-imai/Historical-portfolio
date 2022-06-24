<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;


// 追加
use Illuminate\Support\Str;
use App\User;


// 追加（20220623）
use Illuminate\Support\Facades\DB;

class PhotoTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // 追加（20220623）
        $param = [
            // 'user_id' => fn () => \App\User::factory()->create()->id,
            'id' => 1,
            'user_id' => 4,
            'filename' => Str::random(12) . '.jpg',
            'created_at' => now(),
            'updated_at' => now(),
        ];
        DB::table('photos')->insert($param);
    }
}
