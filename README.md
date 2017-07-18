# Installation
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
If FTPS is not supported remove the following lines
```
secure  : true,
secureOptions: { rejectUnauthorized: false },
```

from the function `getFtpConnection` in the `gulpfile.js`.

<br><br>

# Usage
start task runner Gulp
- watch for changes and deploy while developement <br>
    `gulp` 
- build and deploy only  <br>
    `make:make`



# What is inside


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




