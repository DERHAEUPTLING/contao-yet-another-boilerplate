'use strict';

var gulp          = require( 'gulp' );
var gutil         = require( 'gulp-util' );
var newer         = require( 'gulp-newer' );

var sourcemaps    = require( 'gulp-sourcemaps' );
var sass          = require( 'gulp-sass' );
var postcss       = require( 'gulp-postcss');
var post_compass  = require( 'postcss-compass');
var autoprefixer  = require( 'autoprefixer' );
var cssnano       = require( 'cssnano');

var webpack       = require( 'webpack' );

var browserSync   = require( 'browser-sync'  ).create();
var livereload    = require( 'gulp-livereload' );

var ftp           = require( 'vinyl-ftp' );
var secrets       = require( './secrets.json' );



/*
 * myVars
 */
var src         = 'src_layout/';
var src_static  = 'src_layout/static/**';
var dist        = 'web/layout/';

var styles_watch= ['src_layout/sass/**/*.scss','src_layout/static/css/_tinymce_custom.css'];    
var styles_src  = ['src_layout/sass/styles.scss','src_layout/sass/regiondo.scss'];
var styles_dist = 'web/layout/css/';

var js_context  = 'src_layout/js/';
var js_src      = 'src_layout/js/**/*.js';
var js_entry    = './entry.js';
var js_path     = 'web/layout/js/';
var js_publicPath     = '/layout/js/';



    










/*
 * SASS
 */
gulp.task('sass', function () {
    var processors = [
        post_compass({
            css: './css',
            font: '../fonts',
            image: '../images'
        }),
        autoprefixer({browsers: ['last 2 version','> 1%']}),
        cssnano({safe: true})
    ];
    return gulp.src( styles_src )
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest( styles_dist ));
});





/**
 * Webpack
 */
gulp.task('webpack', function() {
    return webpack({
        context: js_context,
        entry: {
            main: js_entry
        },
        output: {
            path: js_path,
            publicPath: js_publicPath,

            filename: "[name].js",

        },
        externals: {
            // require("jquery") is external and available on the global var jQuery
            "jquery": "jQuery",
            "$": "jQuery",
            "modernizr": "Modernizr",
        },
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
              sourceMap: true,
              mangle: true
            })
        ],
        devtool: "source-map",
    }, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        // gutil.log("[webpack]", stats.toString({}));
        browserSync.reload();        
    })
});





/**
 * Copy static files
 */
gulp.task('copy', function() {
    return gulp.src(src_static)
        .pipe(newer(dist))
        .pipe(gulp.dest(dist));
});







/** FTP cretentials **/
// helper function to build an FTP connection based on our configuration
function getFtpConnection() {  
    return ftp.create({
        host    : secrets.servers.production.serverhost,
        port    : secrets.servers.production.serverport,
        user    : secrets.servers.production.username,
        password: secrets.servers.production.password,
        parallel: 5,
        // log     : gutil.log,
        secure  : true,
        secureOptions: { rejectUnauthorized: false },
    });
}










/**
 *  watch
 */
gulp.task('watch', function() {
    var localFilesGlob = ['files/**','web/layout/**', 'templates/**'];  

    livereload.listen();
    gulp.watch( styles_watch, ['sass']);
    gulp.watch( js_src, ['webpack']);
    gulp.watch( src_static, ['copy']);

    
    gulp.watch(localFilesGlob)
        .on('change', function(event) {
            console.log('Changes detected! Uploading file "' + event.path + '", ' + event.type);
            

            return gulp.src( [event.path, event.path + "/**"], { base: '.', buffer: false } )
                .pipe( getFtpConnection().newer( secrets.servers.production.remotepath ) ) // only upload newer files 
                .pipe( getFtpConnection().dest( secrets.servers.production.remotepath ) )
                .pipe(livereload())
                .on("end", browserSync.reload);
        });
    
    
});







/*
 * generic tasks
 */
gulp.task('default', function() {
    gulp.start('watch'); // watch or serve
});

gulp.task('build',['sass', 'webpack', 'copy']);
gulp.start('copy', ['watch']);


