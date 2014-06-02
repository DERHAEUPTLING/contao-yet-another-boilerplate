define([
    "plugins/jquery.mailchimp"
], function() {
    /**
     * Initialize
     * @returns {void}
     */
    var init = function () {
        // mailchimp submit
        $('#mc_embed_signup form').ajaxChimp();
    };

    return {
        init: init
    };
});