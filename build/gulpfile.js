'use strict';

var gulp          = require( 'gulp' );
var gutil         = require( 'gulp-util' );

var sourcemaps    = require( 'gulp-sourcemaps' );
var sass          = require( 'gulp-sass' );
var postcss       = require( 'gulp-postcss');
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
var app         = '../app/';
var dist        = '../files/dist/';

var styles_watch= ['../app/sass/**/*.scss','../files/_tinymce_custom.css'];    
var styles_src  = ['../app/sass/styles.scss'];
var styles_dist = '../files/dist/css/';

var js_context  = '../app/js/';
var js_src      = '../app/js/**/*.js';
var js_entry    = './entry.js';
var js_dist     = '../files/dist/js/';


var proxy       = 'cb.derhaeuptling.com'; // for browserSync only
    


/*
 * generic tasks
 */
gulp.task('default', function() {
  gulp.start('watch'); // watch or serve
});
gulp.task('make', function() {
  gulp.start('sass', 'webpack');
});






/*
 * SASS
 */
// gulp.task('sass', function () {
//   gulp.src( styles_src )
//     .pipe(sourcemaps.init())
//     .pipe(sass(
//         {
//             outputStyle: 'compressed'
//         }
//     ).on('error', sass.logError))
//     .pipe(sourcemaps.init({loadMaps: true}))
//     .pipe(autoprefixer(
//         {
//             browsers: [
//                 '> 1%',
//                 'last 2 versions'
//             ],
//         }
//     ))
//     .pipe(sourcemaps.write('.', {includeContent: false}))
//     .pipe(gulp.dest( styles_dist ))
// });




gulp.task('sass', function () {
    var processors = [
        autoprefixer({browsers: ['last 2 version','> 1%']}),
        cssnano
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
            path: js_dist,
            publicPath: js_dist,

            filename: "[name].js",

        },
        externals: {
            // require("jquery") is external and available on the global var jQuery
            "jquery": "jQuery",
            "$": "jQuery",
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




















/** FTP cretentials **/
var localFilesGlob = ['../files/**/*', '../templates/**/*', '../system/**/*'];  
var remoteFolder = secrets.servers.production.remotepath;

// helper function to build an FTP connection based on our configuration
function getFtpConnection() {  
    return ftp.create({
        host    : secrets.servers.production.serverhost,
        port    : secrets.servers.production.serverport,
        user    : secrets.servers.production.username,
        password: secrets.servers.production.password,
        parallel: 5,
        log     : gutil.log
    });
}


/**
 * Deploy task.
 * Copies the new files to the server
 *
 * Usage: `FTP_USER=someuser FTP_PWD=somepwd gulp ftp-deploy`
 */
gulp.task('ftp-deploy', function() {

    var conn = getFtpConnection();

    return gulp.src(localFilesGlob, { base: '.', buffer: false })
        .pipe( conn.newer( remoteFolder ) ) // only upload newer files 
        .pipe( conn.dest( remoteFolder ) )
        .pipe(livereload())
        .on("end", browserSync.reload);
    ;
});





/**
 *  watch
 */
gulp.task('watch', function() {
    livereload.listen();
    gulp.watch( styles_watch, ['sass']);
    gulp.watch( js_src, ['webpack']);


    var conn = getFtpConnection();

    gulp.watch(localFilesGlob)
    .on('change', function(event) {
      console.log('Changes detected! Uploading file "' + event.path + '", ' + event.type);

      return gulp.src( [event.path], { base: '.', buffer: false } )
        .pipe( conn.newer( remoteFolder ) ) // only upload newer files 
        .pipe( conn.dest( remoteFolder ) )
        .pipe(livereload())
        .on("end", browserSync.reload)
      ;
    });
});



/**
 *  watch + browserSync
 */

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        // server: dist,
        proxy: proxy,
        open: false,
        reloadOnRestart: true,
        notify: false,
    });

    gulp.watch( styles_watch, ['sass'] );
    // gulp.watch(app + 'js/**/*', ['webpack']);

});








