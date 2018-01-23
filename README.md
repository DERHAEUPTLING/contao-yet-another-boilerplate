# Contao

Contao boilerplate with starter theme and build tools. <br>
Contao 3.5 LTS and 4.4 LTS are supported by correspondig GitHub Tags.

- gulp build and server push.
- some preconfiguration of tinyMCE and dcaconfig.php
- Bootrap SASS files in a minimal configuration. 
Relevant Contao content elements prepared.
- JS bundled with Webpack.
## JS
`app/js/entry.js` is used as starting point for Webpack.
Output is saved in `files/dist/js/` and uploaded to server.

## CSS
- `app/sass/styles.scss` is the starting point.
Output are saved in `files/dist/css/`
- CSS gets autoprefixed, compressed by cssnano, sourcemaped and uploaded to server.
- CSS is based on Bootstrap v4-alpha4.
- Styles for common Contao modules / elements are prepared.

## templates
Changes on any files in  `templates/` are uploaded to server.

## system
The `system/` folder contains useful presets.
- TinyMCE Custom configuration.
    + Images Shortcut is removed
    + Formats is pulled into top level
    + `paste_as_text` is enabled, to remove all formatting on copy & paste  
- `dcaconfig.php` contains presets 
    including a list of all available Conten Elements, that could be disabled, if not needed in the project.
- the module `modules/contao-boilerplate` contains some presets


## contao installation
- upload contao as usual
- upload this bundle to root.
you can skip the folders `app/` and `build`.
- install with contao install tool `contao/install.php`.
- import Template `website.spq`
- create user

## suggested Contao plugins
[contao-mobilecontent](https://github.com/derhaeuptling/contao-mobilecontent) <br>
[contao-seo-serp-preview](https://github.com/derhaeuptling/contao-seo-serp-preview) <br>
[contao-lazy-images](https://github.com/derhaeuptling/contao-lazy-images) <br>
[contao-notification_center](https://github.com/terminal42/contao-notification_center) <br>
[contao-m17StickyBEFooter](https://github.com/may17/contao-m17StickyBEFooter) <br>
<br><br>

# Build Tools

The folder `build/` contains everything necessary for build the app. 
## Prepare System 
globaly install npm & bower
- install [npm](https://github.com/npm/npm) <br>
    `curl -L https://npmjs.org/install.sh | sh`
- install [bower](https://github.com/bower/bower) <br> 
    `npm install -g bower`
- install [bower-installer](https://github.com/blittle/bower-installer) <br>
    `npm install -g bower-installer`


## Install build tools 
- goto folder `build/` and install needed node modules<br>
   `npm install`
- install app dependencies 
    `bower-installer`

## Configure FTP
Copy `secrets.json.default`  to `secrets.json` and fill in your FTP credentials. <br>
If FTPS is not supported remove the following lines from the function getFtpConnection` in the `gulpfile.js`.

```
secure  : true,
secureOptions: { rejectUnauthorized: false },
```

## Usage
start task runner Gulp
- watch for changes and deploy while developement <br>
    `gulp` 
- build and deploy only  <br>
    `make:make`

## What is inside

lib | URL
-|-
gulp | 	http://gulpjs.com/
gulp-util | https://www.npmjs.com/package/gulp-util
gulp-sourcemaps | https://www.npmjs.com/package/gulp-sourcemaps
gulp-sass |	https://www.npmjs.com/package/gulp-sass
gulp-postcss | https://github.com/postcss/gulp-postcss
autoprefixer | https://github.com/postcss/autoprefixer
cssnano | http://cssnano.co/
webpack | https://webpack.github.io/
browserSync | https://www.browsersync.io/
gulp-livereload | https://www.npmjs.com/package/gulp-livereload
vinyl-ftp | https://www.npmjs.com/package/vinyl-ftp







