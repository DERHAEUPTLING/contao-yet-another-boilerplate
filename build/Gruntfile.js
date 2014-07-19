module.exports = function(grunt) {

// Project configuration.

grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),


  /**
   * WATCH
   */
  watch: {
      options: {
        spawn: false,
        livereload: false,
      },
      sass: {
        files: ['sass/**/*.scss', 'fonts/**/*.*', 'images/**/*.*'],
        tasks: ['sass:prod', 'autoprefixer:dist', 'ftpush:files'],
      },
      js: {
        files: ['js/**/*.*', '../files/dist/js/**/*.*'],
        tasks: ['clean:js', 'webpack:dev', 'ftpush:files'],
      },
      tempaltes: {
        files: ['../templates/**/*.*'],
        tasks: ['ftpush:templates'],
      }

  },


  /**
   * CLEAN Folders
   */
  clean: {
    options : {
      force: true
    },
    js: ["../files/dist/js/*.*"],
    release: ["path/to/another/dir/one", "path/to/another/dir/two"]
  },

  /**
   * SASS
   */
  sass: {

    options: {
      cacheLocation: '../build/.sass-cache',
    },

    dev: {
      options: {
        style: 'expanded',
        sourcemap: true,
        lineNumbers: true,
      },
      files: {
        '../files/dist/css/styles.css': 'sass/styles.scss'
      }
    },

    prod: {
      options: {
        style: 'compressed',
        sourcemap: true,
      },
      files: {
       '../files/dist/css/styles.css' : 'sass/styles.scss'
      }
    }
  },



  /**
   * AUTOPREFIXER
   */
  autoprefixer: {
    dist: {
      options: {
          browsers: ['last 3 versions', '> 1%', 'ie 9', 'ie 8'],
          map: true
      },
      src: '../files/dist/css/styles.css',
      dest:'../files/dist/css/styles.prefixed.css'
    }
  },


  /**
   * MODERNIZR
   */
  modernizr: {

      dist: {
          // [REQUIRED] Path to the build you're using for development.
          "devFile" : "./",

          // [REQUIRED] Path to save out the built file.
          "outputFile" : "../files/dist/js/lib/modernizr-custom.js",

          // Based on default settings on http://modernizr.com/download/
          "extra" : {
              "shiv"      : false,
              "printshiv" : false,
              "load"      : false,
              "mq"        : false,
              "cssclasses": true
          },

          // Based on default settings on http://modernizr.com/download/
          "extensibility" : {
              "addtest"     : false,
              "prefixed"    : false,
              "teststyles"  : false,
              "testprops"   : false,
              "testallprops": false,
              "hasevents"   : false,
              "prefixes"    : false,
              "domprefixes" : false
          },

          // By default, source is uglified before saving
          "uglify" : true,

          // Define any tests you want to implicitly include.
          "tests" : [],

          // By default, this task will crawl your project for references to Modernizr tests.
          // Set to false to disable.
          "parseFiles" : true,

          // When parseFiles = true, this task will crawl all *.js, *.css, *.scss files, except files that are in node_modules/.
          // You can override this by defining a "files" array below.
          "files" : {
              "src": ["../app/**/*"]
          },

          // When parseFiles = true, matchCommunityTests = true will attempt to
          // match user-contributed tests.
          "matchCommunityTests" : false,

          // Have custom Modernizr tests? Add paths to their location here.
          "customTests" : []
      }

  },

  /**
   * SPRITESMITH
   */
  sprite:{
    all: {
      src: 'sprite/*.png',
      destImg: '../files/dist/images/spritesheet.png',
      destCSS: 'sass/_sprite.scss',
      // OPTIONAL: Specify engine (auto, phantomjs, canvas, gm, pngsmith)
      'engine': 'pngsmith',
      'algorithm': 'diagonal',
      'padding': 10,
      'cssFormat': 'scss_maps'
    }
  },


  /**
   * WEBPACK
   */
  webpack: {
      dev: {
        // webpack options
        entry: "./js/entry.js",
        output: {
            path: "../files/dist/js/",
            publicPath: "files/dist/js/",
            // filename: "[name].bundle.js",
            // namedChunkFilename: "[name].bundle.js"
        },
        externals: {
            // require("jquery") is external and available
            //  on the global var jQuery
            "jquery": "jQuery"
        },

        stats: {
            // Configure the console output
            colors: true,
            modules: true,
            reasons: false
        },
        // stats: false disables the stats output

        storeStatsTo: "xyz", // writes the status to a variable named xyz
        // you may use it later in grunt i.e. <%= xyz.hash %>

        progress: false, // Don't show progress
        // Defaults to true

        failOnError: true, // don't report error to grunt if webpack find errors
        // Use this if webpack errors are tolerable and grunt should continue

        //watch: true, // use webpacks watcher
        // You need to keep the grunt process alive

        //keepalive: true, // don't finish the grunt task
        // Use this in combination with the watch option

      }
  },

  /**
   * BROWSERSYNC
   */
  browserSync: {
      dev: {
          bsFiles: {
              src :  ['../files/dist/**/*', '../templates/**/*']
          },
          options: {
              open: false,
              proxy: "cb.derhaeuptling.com",
              injectChanges: true,
              watchTask: true
          }
      }
  },

  /**
   * FTPUSH
   */
  ftpush: {
      files: {
          auth: {
              host: 'hauptwolke.de',
              port: 21,
              authKey: 'host'
          },
          src: '../files/dist/',
          dest: 'files/dist',
          exclusions: ['.DS_Store', '**/Thumbs.db', 'dist/tmp', 'styles.css', 'styles.css.map'],
          keep: ['/important/images/at/server/*.jpg'],
          simple: true,
          useList: false
      },
      templates: {
          auth: {
              host: 'hauptwolke.de',
              port: 21,
              authKey: 'host'
            },
          src: '../templates',
          dest: '../templates',
          exclusions: ['**/.DS_Store', '**/Thumbs.db'],
          simple: true,
          useList: false
      },
      app: {
          auth: {
              host: 'hauptwolke.de',
              port: 21,
              authKey: 'host'
            },
          src: '../app',
          dest: '../app',
          exclusions: ['**/.DS_Store', '**/Thumbs.db', 'dist/tmp', 'styles.css', 'styles.css.map', '.grunt'],
          simple: true,
          useList: false
      },
      build: {
          auth: {
              host: 'hauptwolke.de',
              port: 21,
              authKey: 'host'
            },
          src: '../build',
          dest: '../build',
          exclusions: ['**/.DS_Store', '**/Thumbs.db', 'dist/tmp', 'styles.css', 'styles.css.map',
            '.sass-cache', 'bower_components', 'node_modules'],
          simple: true,
          useList: false
      }
  },

}); // end: init

  grunt.loadNpmTasks ('grunt-contrib-clean');
  grunt.loadNpmTasks ('grunt-contrib-sass');
  grunt.loadNpmTasks ('grunt-autoprefixer');
  grunt.loadNpmTasks ('grunt-contrib-watch');
  grunt.loadNpmTasks ('grunt-modernizr');
  grunt.loadNpmTasks ('grunt-ftpush');
  grunt.loadNpmTasks ('grunt-spritesmith');
  grunt.loadNpmTasks ('grunt-webpack');
  grunt.loadNpmTasks ('grunt-browser-sync');

  // setBase
  grunt.file.setBase('../app/');

  // registerTasks
  grunt.registerTask('default', ['sass:prod', 'autoprefixer:dist', 'clean:js', 'webpack:dev', 'ftpush', 'browserSync', 'watch' ]);


};

