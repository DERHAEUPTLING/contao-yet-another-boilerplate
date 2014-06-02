# USAGE
## Install required Tools on OS
- install [npm](https://github.com/npm/npm) <br>
    `curl -L https://npmjs.org/install.sh | sh`
- install [bower](https://github.com/bower/bower) <br> 
    `npm install -g bower`
- install [bower-installer](https://github.com/blittle/bower-installer) <br>
    `npm install -g bower-installer`


## Install build dependencies 
- install node modules <br>
    `npm install`
- install app dependencies <br>
    `bower-installer`

## start task runner GRUNT
- watch and deploy while developement <br>
    `grunt` 
- deploy all changed source files to server <br>
    `grunt:prod`


# INFOS
## BUILD TOOLS
Grunt:
--http://zerosixthree.se/getting-started-with-grunt/
bower-installer: 	https://github.com/blittle/bower-installer

## Grunt-Plugins

watch: 		https://github.com/gruntjs/grunt-contrib-watch
sass:			https://github.com/gruntjs/grunt-contrib-sass
Autoprefixer: 	https://github.com/nDmitry/grunt-autoprefixer

modernizr: https://github.com/Modernizr/grunt-modernizr
requirejs: 	https://github.com/gruntjs/grunt-contrib-requirejs

### LIBS

reuqirejs manual build
r.js -o build.single.js


scut
http://davidtheclark.github.io/scut/



