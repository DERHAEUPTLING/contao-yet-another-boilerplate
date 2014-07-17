/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * static includes
	 *
	 */
	__webpack_require__(1);
	__webpack_require__(2);





	/**
	 * autogrow alway include
	 *
	 */




	/**
	 * offcanvas
	 *
	 */
	// if ($('#offcanvas-container').length ) {
	//     require.ensure(['app/offcanvas.js'], function(e){
	//     	e.init();
	//     });
	// }

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {



/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	

	__webpack_require__(3);


	$('textarea').autogrow();





/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * ----------------------------------------------------------------------------
	 * "THE BEER-WARE LICENSE" (Revision 42):
	 * <jevin9@gmail.com> wrote this file. As long as you retain this notice you
	 * can do whatever you want with this stuff. If we meet some day, and you think
	 * this stuff is worth it, you can buy me a beer in return. Jevin O. Sewaruth
	 * ----------------------------------------------------------------------------
	 *
	 * Autogrow Textarea Plugin Version v2.0
	 * http://www.technoreply.com/autogrow-textarea-plugin-version-2-0
	 *
	 * Date: March 13, 2011
	 */


	jQuery.fn.autogrow = function(){
	    return this.each(function(){
	        // Variables
	        var colsDefault = this.cols;
	        var rowsDefault = this.rows;

	        //Functions
	        var grow = function() {
	            growByRef(this);
	        };

	        var growByRef = function(obj) {
	            var linesCount = 0;
	            var lines = obj.value.split('\n');

	            for (var i=lines.length-1; i>=0; --i)
	            {
	                linesCount += Math.floor((lines[i].length / colsDefault) + 1);
	            }

	            if (linesCount >= rowsDefault)
	                obj.rows = linesCount + 1;
	            else
	                obj.rows = rowsDefault;
	        };

	        var characterWidth = function (obj){
	            var characterWidth = 0;
	            var temp1 = 0;
	            var temp2 = 0;
	            var tempCols = obj.cols;

	            obj.cols = 1;
	            temp1 = obj.offsetWidth;
	            obj.cols = 2;
	            temp2 = obj.offsetWidth;
	            characterWidth = temp2 - temp1;
	            obj.cols = tempCols;

	            return characterWidth;
	        };

	        // Manipulations
	        //this.style.width = "auto";
	        this.style.height = "auto";
	        this.style.overflow = "hidden";
	        //this.style.width = ((characterWidth(this) * this.cols) + 6) + "px";
	        this.onkeyup = grow;
	        this.onfocus = grow;
	        this.onblur = grow;
	        growByRef(this);
	    });
	};


/***/ }
/******/ ])row;
	        growByRef(this);
	    });
	};


/***/ }
/******/ ])