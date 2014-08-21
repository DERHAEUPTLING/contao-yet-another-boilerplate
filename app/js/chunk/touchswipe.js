
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

    var target = $("html")

    var swipeGetViewport = function() {
        var viewport  = $(window).innerWidth();
        //console.log( 'initial width: ' + viewport );
        if ( viewport > 767 ) {
            //console.log( 'swipe("disable");' );
            target.swipe("disable");
        } else {
            //console.log( 'swipe("enable");' );
            target.swipe("enable");

        }
    }

    var swipeToggle = function() {
        swipeGetViewport();
        window.addEventListener('resize', function(event){
           swipeGetViewport();
        });
    }


    /**
     * public functions
     *
     */
    var init = {};
    init.swipe = function(){
        target.swipe({
            swipeLeft:function(event, direction, distance, duration, fingerCount){
                offcanvas.open();
            },
            swipeRight:function(event, direction, distance, duration, fingerCount){
                if ( $('.offcanvas-page.open').length > 0 ) {
                    offcanvas.close();
                }
            },
            threshold:100,
            fingers:1,
            //allowPageScroll:"horizontal",
            //excludedElements:$.fn.swipe.defaults.excludedElements+", .offcanvas-page:not(.open) .content-slider"
            excludedElements:" .offcanvas-page:not(.open) .content-slider"
        });

        swipeToggle();
    };

    //    target.swipe("disable");



    //init.swipe();
    return init.swipe();
});
