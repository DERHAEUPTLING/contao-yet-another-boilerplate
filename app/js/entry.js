//require("./lib/modernizr-custom.js");

/**
 * static includes
 *
 */
var jQuery = require("jquery");

require("./chunk/basic.js");
require("./chunk/autogrow.js");

var offcanvas = require('./chunk/offcanvas.js');
new offcanvas();
//offcanvas_obj.open();


/**
 * EXAMPLE: AMD Pattern + commonjs dependencys
 * load external
 */
require.ensure([], function(require) {
    var amd = require('./chunk/example.amd-commonjs.js');
    amd.test('body');
});








/**
 * load swipe if touch device
 *
 */
if (Modernizr.touch) {
	//console.log("has touch");
	require.ensure([], function(require) {
	    var swipe = require('./chunk/touchswipe.js');
	    new swipe();
	});
}








/**
 * window.load
 *
 */
$( window ).load(function() {
    $('body').removeClass(' is-loading');
});


