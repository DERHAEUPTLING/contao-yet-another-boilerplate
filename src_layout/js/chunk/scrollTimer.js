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




    /**
	 * private functions
	 *
	 */
    var thisObject = this;

    var scrollTimeout;
    var nodeCache = $('.offcanvas-navbar');
    var scrollHandler = function () {
        // Check your page position and then
        if ($(window).scrollTop() > 20) {
            $(nodeCache).addClass('scrolledDown');
        } else {
            $(nodeCache).removeClass('scrolledDown');
        }
    };



	/**
	 * public functions
	 *
	 */
    var self = {};
    self.eventThrottler = function () {
    	// body...
    	$(window).scroll(function () {
	        if (scrollTimeout) {
	                // clear the timeout, if one is pending
	                clearTimeout(scrollTimeout);
	                scrollTimeout = null;
	        }
	        scrollTimeout = setTimeout(scrollHandler(), 10);
	    });
    }



    /**
	 * do stuff
	 *
	 */
	self.eventThrottler();

    return self;
});


