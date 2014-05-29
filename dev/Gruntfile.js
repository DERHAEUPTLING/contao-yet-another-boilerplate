module.exports = function(grunt) {

// Project configuration.

grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),


// watch
    watch: {
        sass: {
          files: ['sass/**/*.scss'],
          tasks: ['sass:dev', 'autoprefixer:dist'],
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
            "cssclasses" : false
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
// impage optimisation
    imagemin: {
        dist: {
            files: [{
                expand: true,
                cwd: 'images_to_optimize',
                src: '**/*.{png,jpg,jpeg}',
                dest: 'images'
            }]
        }
    },

}); // end: init


  // grunt.loadNpmTasks ('grunt-contrib-uglify');
  // grunt.loadNpmTasks ('grunt-contrib-concat');
  grunt.loadNpmTasks ('grunt-contrib-sass');
  grunt.loadNpmTasks ('grunt-autoprefixer');
  grunt.loadNpmTasks ('grunt-contrib-imagemin');
  grunt.loadNpmTasks ('grunt-contrib-watch');
  grunt.loadNpmTasks ('grunt-modernizr');

  // setBase
  grunt.file.setBase('../files/public/');

  // registerTasks
  grunt.registerTask('default', ['sass:dev', 'autoprefixer:dist', 'imagemin','watch']);
  grunt.registerTask('prod', ['sass:prod', 'autoprefixer:dist', 'imagemin']);

  // test
  //grunt.registerTask('sass', ['sass:dev']);
};

