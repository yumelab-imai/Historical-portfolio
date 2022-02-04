const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
// 第一引数がコンパイル対象のファイル、第二引数がコンパイル結果の配置先
mix.browserSync('vuesplash.test')
  .js('resources/js/app.js', 'public/js')
  .version()
