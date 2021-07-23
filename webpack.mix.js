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

mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css');
mix.styles([
    'resources/assets/plugins/fontawesome-free/css/all.css',
    'resources/assets/css/ionicons.min.css',
    'resources/assets/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.css',
    'resources/assets/plugins/icheck-bootstrap/icheck-bootstrap.css',
    'resources/assets/plugins/jqvmap/jqvmap.css',
    'resources/assets/css/adminlte.css',
    'resources/assets/plugins/overlayScrollbars/css/OverlayScrollbars.css',
    'resources/assets/plugins/daterangepicker/daterangepicker.css',
    'resources/assets/plugins/summernote/summernote-bs4.css',
    'resources/assets/css/bootstrap.min.css',
    'resources/assets/css/custom.css',
], 'public/css/all.css');

mix.scripts([
    'resources/assets/plugins/jquery/jquery.js',
    'resources/assets/plugins/jquery-ui/jquery-ui.js',
    'resources/assets/js/bootstrap.min.js',
    'resources/assets/plugins/bootstrap/js/bootstrap.bundle.js',
    'resources/assets/plugins/chart.js/Chart.js',
    'resources/assets/plugins/sparklines/sparkline.js',
    'resources/assets/plugins/jqvmap/jquery.vmap.js',
    'resources/assets/plugins/jqvmap/maps/jquery.vmap.world.js',
    'resources/assets/plugins/jquery-knob/jquery.knob.min.js',
    'resources/assets/plugins/moment/moment.min.js',
    'resources/assets/plugins/daterangepicker/daterangepicker.js',
    'resources/assets/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js',
    'resources/assets/plugins/summernote/summernote-bs4.js',
    'resources/assets/plugins/overlayScrollbars/js/jquery.overlayScrollbars.js',
    'resources/assets/js/adminlte.js',
    'resources/assets/js/dashboard.js',
    'resources/assets/js/demo.js',
],
    'public/js/all.js');
