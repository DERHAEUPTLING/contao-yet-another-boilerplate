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

    var container   = $('.st-container');
    var overlay     = $('.st-pusher').after();
    var button      = $('.offcanvas-toggle');


    /**
     * do stuff
     *
     */
    overlay.on('click', function() {
        container.removeClass('st-menu-open');
    });


    button.on('click',  function(event) {
        event.preventDefault();
        event.stopPropagation();
        container.toggleClass('st-menu-open');

    });

    /* add Active to mene-burger, when ready */
    $('.menu-burger').addClass('active')
    
});