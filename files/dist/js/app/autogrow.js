define([
    "jquery",
    "lib/jquery.autogrow"
], function($, autogrow) {
    /**
     * Initialize
     * @returns {void}
     */
    var init = function () {

        // autogrow
        $('textarea').autogrow();

    };

    return {
        init: init
    };
});