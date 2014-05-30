module.exports = function(grunt) {

// Project configuration.

grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),


// watch
    watch: {
        sass: {
          files: ['sass/**/*.scss', 'js/**/*.*', 'js_dist/**/*.*', 'js/**/*.*', 'fonts/**/*.*', 'images/**/*.*'],
          tasks: ['sass:prod', 'autoprefixer:dist', 'ftpush:dev'],
          options: {
            spawn: false,
            livereload: true,
          },
        },
        imagemin: {
          files: ['images_to_optimize/**/*.{png,jpg,jpeg}'],
          tasks: 'imagemin'

        }
    },


// sass
    sass: {

      options: {
        cacheLocation: '../../dev/.sass-cache',
      },

      dev: {
        options: {
          style: 'expanded',
          sourcemap: true,
          lineNumbers: true,
        },
        files: {
          'css/styles.css': 'sass/styles.scss'
        }
      },

      prod: {
        options: {
          style: 'compressed',
          sourcemap: true,
        },
        files: {
         'css/styles.css' : 'sass/styles.scss'
        }
      }
    },


// autoprefixer
    autoprefixer: {
      dist: {
        options: {
            browsers: ['last 3 versions', '> 1%', 'ie 9', 'ie 8'],
            map: true,
            diff: true
        },
        src: 'css/styles.css',
        dest:'css/styles.prefixed.css'
      }
    },


// modernizr
    modernizr: {

        // [REQUIRED] Path to the build you're using for development.
        "devFile" : "js/",

        // [REQUIRED] Path to save out the built file.
        "outputFile" : "js/lib/modernizr-custom.js",

        // Based on default settings on http://modernizr.com/download/
        "extra" : {
            "shiv"     : false,
            "printshiv": false,
            "load"     : false,
            "mq"       : false,
            "cssclasses" : true
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
        // "files" : [],

        // When parseFiles = true, matchCommunityTests = true will attempt to
        // match user-contributed tests.
        "matchCommunityTests" : false,

        // Have custom Modernizr tests? Add paths to their location here.
        "customTests" : []
    },

// Spritesmith
    sprite:{
      all: {
        src: 'img/sprite/*.png',
        destImg: 'img/spritesheet.png',
        destCSS: 'sass/_sprite.scss',
        'algorithm': 'diagonal',
        'padding': 10,
        'cssFormat': 'scss_maps'
      }
    },



// ftpush
    ftpush: {
        dev: {
            auth: {
                host: 'schwesternliebe.de',
                port: 21,
                authKey: 'host'
              },
            src: '',
            dest: 'httpdocs/files/public',
            exclusions: ['**/.DS_Store', '**/Thumbs.db', 'dist/tmp', 'styles.css', 'styles.css.map', '*.patch',
              '.grunt','css/menatwork', 'sass'],
            keep: ['/important/images/at/server/*.jpg'],
            simple: true,
            useList: false
        },
        prod: {
            auth: {
                host: 'schwesternliebe.de',
                port: 21,
                authKey: 'host'
              },
            src: '',
            dest: 'files/public',
            exclusions: ['**/.DS_Store', '**/Thumbs.db', 'dist/tmp', 'styles.css', 'styles.css.map', '*.patch',
              '.grunt','css/menatwork'],
            keep: ['/important/images/at/server/*.jpg'],
            simple: true,
            useList: false
        }
    },

}); // end: init


  grunt.loadNpmTasks ('grunt-contrib-sass');
  grunt.loadNpmTasks ('grunt-autoprefixer');
  grunt.loadNpmTasks ('grunt-contrib-watch');
  grunt.loadNpmTasks ('grunt-modernizr');
  grunt.loadNpmTasks ('grunt-ftpush');
  grunt.loadNpmTasks ('grunt-spritesmith');

  // setBase
  grunt.file.setBase('../files/public/');

  // registerTasks
  grunt.registerTask('default', ['sass:prod', 'autoprefixer:dist', 'sprite', 'ftpush:dev', 'watch']);
  grunt.registerTask('prod', ['sass:prod', 'autoprefixer:dist', 'sprite', 'ftpush:prod']);


};

