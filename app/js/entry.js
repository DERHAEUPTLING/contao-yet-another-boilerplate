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


/**
 * load swipe if touch device
 *
 */

if (Modernizr.touch) {
	console.log("has touch");

	require.ensure([], function(require) {
	    var swipe = require('./chunk/touchswipe.js');
	    new swipe();



	});
}

// if (Modernizr.touch) {
//     console.log("has touch");
//     require("./lib/jquery.touchSwipe.min.js");

//     $("html").swipe({
// 	  swipe:function(event, direction, distance, duration, fingerCount){
// 	    $(this).text("You swiped " + direction + " for " + distance + "px" );
// 	  },
// 	  threshold:100
// 	});

// }







$( window ).load(function() {
    $('body').removeClass(' is-loading');
});






// define('HelloWorldize',[], function() {

// 	var HelloWorldize = function(selector){
// 	    console.log("amd");
// 	};

// 	return HelloWorldize();
// });

//define(['HelloWorldize'], function(HelloWorldize) {});


