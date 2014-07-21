webpackJsonp([1],{

/***/ 5:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * AMD Module + commonjs dependency management
	 *
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require) {
		/**
		 * static inclues
		 *
		 */
	    var $ = __webpack_require__(1);




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
	}.call(exports, __webpack_require__, exports, module)), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }

});