define([
    "jquery",
    "requirejs_domready"
], function($, domReady) {
    /**
     * Initialize
     * @returns {void}
     */
    var init = function () {

        // domReady
        domReady(function () {
            //This function is called once the DOM is ready.
            //It will be safe to query the DOM and manipulate
            //DOM nodes in this function.

            //('body').removeClass(' is-loading');
        });

    };

    return {
        init: init
    };
});