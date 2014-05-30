PREPARE SYSTEM
==============
install npm: curl -L https://npmjs.org/install.sh | sh

install bower: npm install -g bower

install bower installer: npm install -g bower-installer


SETUP
=====
npm install -> Install project dependencies

bower-installer -> Install Libs

grunt -> start task runner

BUILD TOOLS
===========
Grunt: 			http://zerosixthree.se/getting-started-with-grunt/
bower-installer: 	https://github.com/blittle/bower-installer

Grunt-Plugins
-------------
watch: 		https://github.com/gruntjs/grunt-contrib-watch
sass:			https://github.com/gruntjs/grunt-contrib-sass
Autoprefixer: 	https://github.com/nDmitry/grunt-autoprefixer

modernizr: https://github.com/Modernizr/grunt-modernizr
requirejs: 	https://github.com/gruntjs/grunt-contrib-requirejs

LIBS

reuqirejs manual build
r.js -o build.single.js


scut
http://davidtheclark.github.io/scut/


GITHUB
======
npm version patch|minor|major
git add *;
git commit -m "Commit message"
git push
