<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

// 追加(20220623)
use Illuminate\Support\Facades\View;

class PracticeServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        // 追加(20220623)
        View::composer(
            'index',
            function ($view) {
                $view->with('view_message', "composer message!");
            }
        );
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
