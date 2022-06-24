<?php

namespace App\Providers;

// 追加(20220623)
use Illuminate\Support\Facades\View;

use Illuminate\Support\ServiceProvider;

class PracticeServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        // 追加(20220623)
        View::composer(
            'index',
            function ($view) {
                $view->with('view_message', "composer message!");
            }
        );
    }
}
