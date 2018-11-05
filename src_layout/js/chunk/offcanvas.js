
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
    var button      = $('.offcanvas-toggle .menu-burger');


    /**
     * do stuff
     *
     */
    overlay.on('click', function() {
        container.removeClass('st-menu-open');
        button.removeClass('close');
    }); 


    button.on('click',  function(event) {
        event.preventDefault();
        event.stopPropagation();
        container.toggleClass('st-menu-open');
        button.toggleClass('close');

    });

    /* add Active to mene-burger, when ready */
    button.addClass('active')

