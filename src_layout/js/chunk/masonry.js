define(function(require) {
    /**
     * static inclues
     *
     */
    var $ = require('jquery');
    require("../lib/masonry.pkgd.min.js");




    /**
     * private functions
     *
     */
    var thisObject = this;

    



    /**
     * public functions
     *
     */
    var self = {};

    self.init = function(){

        $( window ).load(function() {
            $('.newslist-wrapper').removeClass('hidden')
            $('.newslist-wrapper .row').masonry({
                itemSelector: '.newslist, .ce_fmWetter',
                // columnWidth: 660
            });
        })
        
        $('.newslist-wrapper').removeClass('hidden')
        $('.newslist-wrapper .row').masonry({
                itemSelector: '.newslist, .ce_fmWetter',
                // columnWidth: 660
        });
        console.log('masonry');
        


        
    };



    /**
     * do stuff
     *
     */
    
    
    self.init();
    return self.init;
    

});