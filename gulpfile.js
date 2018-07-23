'use strict';

var gulp          = require( 'gulp' );
var gutil         = require( 'gulp-util' );
var newer         = require( 'gulp-newer' );

var sourcemaps    = require( 'gulp-sourcemaps' );
var sass          = require( 'gulp-sass' );
var postcss       = require( 'gulp-postcss' );
var autoprefixer  = require( 'autoprefixer' );
var cssnano       = require( 'cssnano');

var webpack       = require( 'webpack' );

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
var styles_src  = ['src_layout/sass/styles.scss'];
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
function conn() {  
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
gulp.task('watch',['copy'], function() {
    var globs = [
        'web/layout/**', 
        'templates/**'
    ];  
   
    livereload.listen();

    gulp.watch( styles_watch, ['sass']);
    gulp.watch( js_src, ['webpack']);
    gulp.watch( src_static, ['copy']);
    
    gulp.watch(globs)
        .on('change', function(event) {
            console.log(event);
            
            
            // [event.path, event.path + "/**", '!./node_modules/**/*','!./git/**/*']

            return gulp.src( [event.path, '!.git', '!node_modules', '!src_layout'], { base: '.', buffer: false } )
                .pipe( conn().newer( secrets.servers.production.remotepath ) ) // only upload newer files 
                .pipe( conn().dest( secrets.servers.production.remotepath ) )
                .pipe(livereload() )
        });
    
    
});






/*
 * generic tasks
 */
gulp.task('default', function() {
    gulp.start('watch'); // watch or serve
});

gulp.task('build',['sass', 'webpack', 'copy']);

