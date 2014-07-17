
define([
    'jquery'
], function ($) {


    var init = function () {

        var items   = $('.offcanvas-page, #offcanvas-sidebar');
        var content = $('.offcanvas-page');
        var button  = $('.offcanvas-toggle');


        var open = function() {
                                $(items).removeClass('close').addClass('open');
                                $(content).one('click', closeEventHandler);
                            };
        var close = function() {
                                $(items).removeClass('open').addClass('close');
                            };
        var closeEventHandler = function() {
            $(close);
        };

        button.click(function(event){
            event.stopPropagation();
            if (content.hasClass('open')) {$(close);}
            else {$(open);}
        });



        // Scroll timer
        var scrollTimeout;  // global for any pending scrollTimeout
        var nodeCache = $('.offcanvas-navbar');

        $(window).scroll(function () {
                if (scrollTimeout) {
                        // clear the timeout, if one is pending
                        clearTimeout(scrollTimeout);
                        scrollTimeout = null;
                }
                scrollTimeout = setTimeout(scrollHandler, 100);
        });

        scrollHandler = function () {
                // Check your page position and then
                if ($(window).scrollTop() > 20) {
                    $(nodeCache).addClass('scrolledDown');
                } else {
                    $(nodeCache).removeClass('scrolledDown');
                }
        };
        scrollHandler();




    };

    return {
        init: init
    };
});