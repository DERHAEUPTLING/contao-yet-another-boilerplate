

// require("./lib/modernizr-custom.js");

/**
 * static includes
 *
 */

var jQuery 		= require("jquery");

var basic 		= require("./chunk/basic.js");
var autogrow 	= require("./chunk/autogrow.js");



var offcanvas  	= require('./chunk/offcanvas.js');
var scrollTimer = require('./chunk/scrollTimer.js');
var imagesLoaded= require('./chunk/imagesloaded.js');


/**
 * load swipe if touch device
 *
 */
if (Modernizr.touch) {
	//console.log("has touch");
	require.ensure([], function(require) {
        var touchswipe = require('./chunk/touchswipe.js');
	});
}




// /**
//  * imagesLoaded
//  * http://imagesloaded.desandro.com/
//  */
// var imagesLoaded = require("./bower/imagesloaded.pkgd.min.js");

// // triggered after each item is loaded
// function onProgress( imgLoad, image ) {
//   // change class if the image is loaded or broken
//   var $item = $( image.img ).parent();
//   $item.addClass('is-loaded');
//   if ( !image.isLoaded ) {
//     $item.addClass('is-broken');
//   }
// }

// $('#container').imagesLoaded()
// 	// .always( function( instance ) {
// 	// 	console.log('all images loaded');
// 	// })
// 	.progress( onProgress );



/**
 * window.load
 *
 */
$( window ).load(function() {
    $('body').removeClass(' is-loading');
});


