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

    self.test = function(selector){
        $(selector).text('hello world');
    };


    /**
	 * do stuff
	 *
	 */
	console.log("do stuff");




    return self;
});
