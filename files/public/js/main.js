requirejs.config({
    "baseUrl": "files/public/js/",
    "paths": {
        // loads jQuery if not already there -> see [1]
        jquery: "//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min",
        requirejs_domready    : '../bower/requirejs-domready/domReady',
        basic       : 'app/basic',
        cron        : 'app/cron',
        autogrow    : 'app/autogrow',
        modernizr   : 'lib/modernizr-custom',
    }
});

// [1]
// define jQuery, so it not required while dev
// if (typeof jQuery === 'function') {
//     define('jquery', function () { return jQuery; });
// }

// Load the main app module to start the app
require([
    'jquery',
    'modernizr'
], function($, modernizr) {

    /**
     * basic
     *
     */
    // require(['basic'],
    //     function(e){ e.init(); }
    // );

    /**
     * facebook
     *
     */
    // if ($('.fb-like-box').length && !($('.mobile').length)) {
    //     require(['app/facebook'],
    //         function(e){ e.init(); }
    //     );
    // }


    /**
     * autogrow
     *
     */
    if($('textarea').length) {
        require(['app/autogrow'],
            function(e){ e.init(); }
        );
    }


    /**
     * domready
     *
     */
    // require(['app/domready'],
    //     function(e){ e.init(); }
    // );

    /**
     * !Modernizr.svg
     *
     */
    if (!Modernizr.svg) {
        $('img[src$="svgz"]').attr('src', function() {
            return $(this).attr('src').replace('.svgz', '.png');
        });
        $('img[src$="svg"]').attr('src', function() {
            return $(this).attr('src').replace('.svg', '.png');
        });
    }


    /**
     * offcanvas
     *
     */
    if ($('#offcanvas-container').length ) {
        require(['app/offcanvas'],
            function(e){ e.init(); }
        );
    }

});