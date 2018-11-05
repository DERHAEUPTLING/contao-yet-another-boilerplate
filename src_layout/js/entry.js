

// require("./lib/modernizr-custom.js");

/**
 * static includes
 *
 */

require("jquery");
require("./chunk/_polyfills.js");

import {
    log,
    viewport
} from './chunk/_utils.js';



// var scrollTimer = require('./chunk/scrollTimer.js');
require("./chunk/autosize.js");
require('./chunk/offcanvas.js');







/**
 * window.load
 *
 */
$( window ).load(function() {
    $('body').removeClass(' is-loading');
});