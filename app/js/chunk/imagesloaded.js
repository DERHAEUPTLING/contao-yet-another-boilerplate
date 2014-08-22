/**
 * AMD Module + commonjs dependency management
 *
 */

define(function(require) {
	/**
	 * static inclues
	 *
	 */
    var $ = require('jquery');
    var imagesLoaded = require("../bower/imagesloaded.pkgd.min.js");



    /**
	 * private functions
	 *
	 */
    var thisObject = this;






	/**
	 * public functions
	 *
	 */
    var self = {};

    self.test = function(selector){
        $(selector).text('hello world');
    };







	// triggered after each item is loaded
	function onProgress( imgLoad, image ) {
	  // change class if the image is loaded or broken
	  var $item = $( image.img ).parent();
	  $item.addClass('is-loaded');
	  if ( !image.isLoaded ) {
	    $item.addClass('is-broken');
	  }
	}


    /**
	 * do stuff
	 *
	 */
	console.log("do stuff");

	$('#container').imagesLoaded()
		// .always( function( instance ) {
		// 	console.log('all images loaded');
		// })
		.progress( onProgress );




    //return self;
});
