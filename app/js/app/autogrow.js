var autogrow =  function() {
    /**
     * Initialize
     * @returns {void}
     */
    var init = function () {

        //  autogrow
        $('textarea').autogrow();

    };

    return {
        init: init
    };
};