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
    var init = {};

    init.test = function(selector){
        $(selector).text('hello world');
    };

    return init;
});
