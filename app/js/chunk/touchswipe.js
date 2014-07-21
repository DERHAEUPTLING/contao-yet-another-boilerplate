
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

    init.left = function(){
        $("#main h1").swipe({
	        swipe:function(event, direction, distance, duration, fingerCount){
	            $(this).text("You swiped " + direction + " for " + distance + "px" );
	            offcanvas.open();

	        },
	        threshold:100
	    });


	    //console.log("touchswipe.test done");

    };

    return init;
});
