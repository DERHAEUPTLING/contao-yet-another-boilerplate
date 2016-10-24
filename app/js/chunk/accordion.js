/**
 * AMD Module + commonjs dependency management
 *
 */

define(function(require) {
	/**
	 * static inclues
	 *
	 */
    var $ = require('jquery');
    require("../lib/jquery-ui.min.js");




    /**
	 * private functions
	 *
	 */
    var thisObject 	= this;
   
    
   


	/**
	 * public functions
	 *
	 */
    var self = {};

    self.init = function(){
        
        if ( $('.ce_accordion').length ) {
			$('.ce_accordion').accordion({
				// Put custom options here
				heightStyle: 'content',
				header: 'div.toggler',
				active: false,
				collapsible: true,
				// animate: 10000,
				create: function(event, ui) {
				  ui.header.addClass('active');
				},
				activate: function(event, ui) {
				  ui.newHeader.addClass('active');
				  ui.oldHeader.removeClass('active');
				}
			});
			// console.log(' accordion ')
		};

    };


    /**
	 * do stuff
	 *
	 */
	

    self.init();
	return self.init;
});
