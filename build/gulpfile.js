'use strict';

var gulp          = require( 'gulp' );
var gutil         = require( 'gulp-util' );
var sass          = require( 'gulp-sass' );
var autoprefixer  = require( 'gulp-autoprefixer' );
var sourcemaps    = require( 'gulp-sourcemaps' );
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
    
var styles_src  = '../app/sass/**/*.scss';
var styles_dist = '../files/dist/css/';
var js_context  = '../app/js';
var js_entry    = '../app/js/entry.js';
var js_dist     = '../files/dist/js';

var proxy       = 'cb.derhaeuptling.com'; // browserSync
    



/*
 * SASS
 */
gulp.task('sass', function () {
  gulp.src( styles_src )
    .pipe(sourcemaps.init())
      .pipe(sass({outputStyle: 'compressed'})
        .on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest( styles_dist ))

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

            filename: "test.js",

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










/*
 * generic tasks
 */
gulp.task('default', function() {
  gulp.start('watch'); // watch or serve
});
gulp.task('make', function() {
  gulp.start('sass', 'webpack');
});









/** FTP cretentials **/
var localFilesGlob = ['../files/dist/**/*', '../templates/**/*'];  
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
 * Watch deploy task.
 * Watches the local copy for changes and copies the new files to the server whenever an update is detected
 *
 * Usage: `FTP_USER=someuser FTP_PWD=somepwd gulp ftp-deploy-watch`
 */
gulp.task('ftp-deploy-watch', function() {

    var conn = getFtpConnection();

    gulp.watch(localFilesGlob)
    .on('change', function(event) {
      console.log('Changes detected! Uploading file "' + event.path + '", ' + event.type);

      return gulp.src( [event.path], { base: '.', buffer: false } )
        .pipe( conn.newer( remoteFolder ) ) // only upload newer files 
        .pipe( conn.dest( remoteFolder ) )
      ;
    });
});







/**
 *  watch
 */
gulp.task('watch', function() {
    livereload.listen();
    gulp.watch( styles_src, ['sass']);


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

    gulp.watch( styles_src, ['sass'] );
    // gulp.watch(app + 'js/**/*', ['webpack']);

});

