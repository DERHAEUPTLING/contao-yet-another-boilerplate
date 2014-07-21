/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		0:0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);
/******/
/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.src = __webpack_require__.p + "" + chunkId + ".bundle.js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "files/dist/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	//require("./lib/modernizr-custom.js");

	/**
	 * static includes
	 *
	 */
	var jQuery = __webpack_require__(1);

	var basic = __webpack_require__(2);
	var autogrow = __webpack_require__(3);



	var offcanvas = __webpack_require__(4);
	var scrollTimer = __webpack_require__(5);




	/**
	 * load swipe if touch device
	 *
	 */
	if (Modernizr.touch) {
		//console.log("has touch");
		__webpack_require__.e/*nsure*/(1, function(require) {

		    var touchswipe = __webpack_require__(6);

		});
	}








	/**
	 * window.load
	 *
	 */
	$( window ).load(function() {
	    $('body').removeClass(' is-loading');
	});




/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = jQuery;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {



/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	
	__webpack_require__(7);
	$('textarea').autogrow();


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require) {
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
	        if ($('.offcanvas-page.open').length > 0) {
	            self.close()
	        };

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


	    // onLoad
	    $(items).addClass('close');

	    return self;
	}.call(exports, __webpack_require__, exports, module)), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 5 */
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

	    var scrollTimeout;
	    var nodeCache = $('.offcanvas-navbar');
	    var scrollHandler = function () {
	        // Check your page position and then
	        if ($(window).scrollTop() > 20) {
	            $(nodeCache).addClass('scrolledDown');
	        } else {
	            $(nodeCache).removeClass('scrolledDown');
	        }
	    };



		/**
		 * public functions
		 *
		 */
	    var self = {};
	    self.eventThrottler = function () {
	    	// body...
	    	$(window).scroll(function () {
		        if (scrollTimeout) {
		                // clear the timeout, if one is pending
		                clearTimeout(scrollTimeout);
		                scrollTimeout = null;
		        }
		        scrollTimeout = setTimeout(scrollHandler(), 10);
		    });
	    }



	    /**
		 * do stuff
		 *
		 */
		self.eventThrottler();

	    return self;
	}.call(exports, __webpack_require__, exports, module)), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));




/***/ },
/* 6 */,
/* 7 */
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
/******/ ])