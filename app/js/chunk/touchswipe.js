
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
    var offcanvas = require('../chunk/offcanvas.js');

    require("../lib/jquery.touchSwipe.min.js");



    /**
	 * private functions
	 *
	 */
    var thisObject = this;





	/**
	 * public functions
	 *
	 */
    var init = {};

    init.swipe = function(){
        $("html").swipe({
            swipeLeft:function(event, direction, distance, duration, fingerCount){
                offcanvas.open();
            },
            swipeRight:function(event, direction, distance, duration, fingerCount){
                offcanvas.close();
            },
            threshold:100,
            excludedElements:$.fn.swipe.defaults.excludedElements+", .offcanvas-page:not(.open) .content-slider"
        });
    };


    // init.swipe();
    return init.swipe();
});
