define('offcanvas',function(require) {
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

    var items   = $('.offcanvas-page, #offcanvas-sidebar');
    var content = $('.offcanvas-page');
    var button  = $('.offcanvas-toggle');




    /**
     * public functions
     *
     */
    var self = {};

    self.open =  function() {
        $(items).removeClass('close').addClass('open');
        $('.menu-burger').removeClass('open').addClass('close');

    };
    self.close = function() {
        $(items).removeClass('open').addClass('close');
        $('.menu-burger').removeClass('close').addClass('open');
    };



    /**
     * do stuff
     *
     */
    content.on('click', function() {
        self.close()
    });


    button.on('click',  function(event) {
        event.preventDefault();
        event.stopPropagation();
        /* Act on the event */
        if (content.hasClass('open')) {
            self.close();
        } else {
            self.open();
        }


    });



    return self;
});