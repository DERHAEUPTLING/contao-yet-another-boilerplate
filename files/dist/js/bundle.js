(function(modules){var parentJsonpFunction=window["webpackJsonp"];window["webpackJsonp"]=function webpackJsonpCallback(chunkIds,moreModules){var moduleId,chunkId,i=0,callbacks=[];for(;i<chunkIds.length;i++){chunkId=chunkIds[i];if(installedChunks[chunkId])callbacks.push.apply(callbacks,installedChunks[chunkId]);installedChunks[chunkId]=0}for(moduleId in moreModules){modules[moduleId]=moreModules[moduleId]}if(parentJsonpFunction)parentJsonpFunction(chunkIds,moreModules);while(callbacks.length)callbacks.shift().call(null,__webpack_require__)};var installedModules={};var installedChunks={0:0};function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:false};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.loaded=true;return module.exports}__webpack_require__.e=function requireEnsure(chunkId,callback){if(installedChunks[chunkId]===0)return callback.call(null,__webpack_require__);if(installedChunks[chunkId]!==undefined){installedChunks[chunkId].push(callback)}else{installedChunks[chunkId]=[callback];var head=document.getElementsByTagName("head")[0];var script=document.createElement("script");script.type="text/javascript";script.charset="utf-8";script.src=__webpack_require__.p+""+chunkId+".bundle.js";head.appendChild(script)}};__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.p="files/dist/js/";return __webpack_require__(0)})([function(module,exports,__webpack_require__){var jQuery=__webpack_require__(1);var basic=__webpack_require__(2);var autogrow=__webpack_require__(3);var offcanvas=__webpack_require__(4);var scrollTimer=__webpack_require__(5);var imagesLoaded=__webpack_require__(6);if(Modernizr.touch){__webpack_require__.e(1,function(require){var touchswipe=__webpack_require__(7)})}$(window).load(function(){$("body").removeClass(" is-loading")})},function(module,exports,__webpack_require__){module.exports=jQuery},function(module,exports,__webpack_require__){},function(module,exports,__webpack_require__){__webpack_require__(8);$("textarea").autogrow()},function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__=function(require){var $=__webpack_require__(1);var thisObject=this;var items=$(".offcanvas-page, #offcanvas-sidebar");var content=$(".offcanvas-page");var button=$(".offcanvas-toggle");var self={};self.open=function(){$(items).removeClass("close").addClass("open");$(".menu-burger").removeClass("open").addClass("close")};self.close=function(){$(items).removeClass("open").addClass("close");$(".menu-burger").removeClass("close").addClass("open")};content.on("click",function(){if($(".offcanvas-page.open").length>0){self.close()}});button.on("click",function(event){event.preventDefault();event.stopPropagation();if(content.hasClass("open")){self.close()}else{self.open()}});return self}.call(exports,__webpack_require__,exports,module),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__))},function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__=function(require){var $=__webpack_require__(1);var thisObject=this;var scrollTimeout;var nodeCache=$(".offcanvas-navbar");var scrollHandler=function(){if($(window).scrollTop()>20){$(nodeCache).addClass("scrolledDown")}else{$(nodeCache).removeClass("scrolledDown")}};var self={};self.eventThrottler=function(){$(window).scroll(function(){if(scrollTimeout){clearTimeout(scrollTimeout);scrollTimeout=null}scrollTimeout=setTimeout(scrollHandler(),10)})};self.eventThrottler();return self}.call(exports,__webpack_require__,exports,module),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__))},function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__=function(require){var $=__webpack_require__(1);var imagesLoaded=__webpack_require__(10);var thisObject=this;var self={};self.test=function(selector){$(selector).text("hello world")};function onProgress(imgLoad,image){var $item=$(image.img).parent();$item.addClass("is-loaded");if(!image.isLoaded){$item.addClass("is-broken")}}console.log("do stuff");$("#container").imagesLoaded().progress(onProgress)}.call(exports,__webpack_require__,exports,module),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__))},,function(module,exports,__webpack_require__){/*!
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
jQuery.fn.autogrow=function(){return this.each(function(){var colsDefault=this.cols;var rowsDefault=this.rows;var grow=function(){growByRef(this)};var growByRef=function(obj){var linesCount=0;var lines=obj.value.split("\n");for(var i=lines.length-1;i>=0;--i){linesCount+=Math.floor(lines[i].length/colsDefault+1)}if(linesCount>=rowsDefault)obj.rows=linesCount+1;else obj.rows=rowsDefault};var characterWidth=function(obj){var characterWidth=0;var temp1=0;var temp2=0;var tempCols=obj.cols;obj.cols=1;temp1=obj.offsetWidth;obj.cols=2;temp2=obj.offsetWidth;characterWidth=temp2-temp1;obj.cols=tempCols;return characterWidth};this.style.height="auto";this.style.overflow="hidden";this.onkeyup=grow;this.onfocus=grow;this.onblur=grow;growByRef(this)})}},,function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__,__WEBPACK_LOCAL_MODULE_1__;var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_LOCAL_MODULE_0__;/*!
	 * imagesLoaded PACKAGED v3.1.8
	 * JavaScript is all like "You images are done yet or what?"
	 * MIT License
	 */
(function(){function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function n(e){return function(){return this[e].apply(this,arguments)}}var i=e.prototype,r=this,o=r.EventEmitter;i.getListeners=function(e){var t,n,i=this._getEvents();if("object"==typeof e){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},i.flattenListeners=function(e){var t,n=[];for(t=0;e.length>t;t+=1)n.push(e[t].listener);return n},i.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},i.addListener=function(e,n){var i,r=this.getListenersAsObject(e),o="object"==typeof n;for(i in r)r.hasOwnProperty(i)&&-1===t(r[i],n)&&r[i].push(o?n:{listener:n,once:!1});return this},i.on=n("addListener"),i.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},i.once=n("addOnceListener"),i.defineEvent=function(e){return this.getListeners(e),this},i.defineEvents=function(e){for(var t=0;e.length>t;t+=1)this.defineEvent(e[t]);return this},i.removeListener=function(e,n){var i,r,o=this.getListenersAsObject(e);for(r in o)o.hasOwnProperty(r)&&(i=t(o[r],n),-1!==i&&o[r].splice(i,1));return this},i.off=n("removeListener"),i.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},i.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},i.manipulateListeners=function(e,t,n){var i,r,o=e?this.removeListener:this.addListener,s=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)o.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?o.call(this,i,r):s.call(this,i,r));return this},i.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},i.removeAllListeners=n("removeEvent"),i.emitEvent=function(e,t){var n,i,r,o,s=this.getListenersAsObject(e);for(r in s)if(s.hasOwnProperty(r))for(i=s[r].length;i--;)n=s[r][i],n.once===!0&&this.removeListener(e,n.listener),o=n.listener.apply(this,t||[]),o===this._getOnceReturnValue()&&this.removeListener(e,n.listener);return this},i.trigger=n("emitEvent"),i.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},i.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},i._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},i._getEvents=function(){return this._events||(this._events={})},e.noConflict=function(){return r.EventEmitter=o,e},true?!(__WEBPACK_AMD_DEFINE_ARRAY__=[],__WEBPACK_LOCAL_MODULE_0__=function(){return e}.apply(null,__WEBPACK_AMD_DEFINE_ARRAY__)):"object"==typeof module&&module.exports?module.exports=e:this.EventEmitter=e}).call(this),function(e){function t(t){var n=e.event;return n.target=n.target||n.srcElement||t,n}var n=document.documentElement,i=function(){};n.addEventListener?i=function(e,t,n){e.addEventListener(t,n,!1)}:n.attachEvent&&(i=function(e,n,i){e[n+i]=i.handleEvent?function(){var n=t(e);i.handleEvent.call(i,n)}:function(){var n=t(e);i.call(e,n)},e.attachEvent("on"+n,e[n+i])});var r=function(){};n.removeEventListener?r=function(e,t,n){e.removeEventListener(t,n,!1)}:n.detachEvent&&(r=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var o={bind:i,unbind:r};true?!(__WEBPACK_AMD_DEFINE_FACTORY__=o,__WEBPACK_LOCAL_MODULE_1__=typeof __WEBPACK_AMD_DEFINE_FACTORY__==="function"?__WEBPACK_AMD_DEFINE_FACTORY__.call(exports,__webpack_require__,exports,module):__WEBPACK_AMD_DEFINE_FACTORY__):e.eventie=o}(this),function(e,t){true?!(__WEBPACK_AMD_DEFINE_ARRAY__=[__WEBPACK_LOCAL_MODULE_0__,__WEBPACK_LOCAL_MODULE_1__],__WEBPACK_AMD_DEFINE_RESULT__=function(n,i){return t(e,n,i)}.apply(null,__WEBPACK_AMD_DEFINE_ARRAY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)):"object"==typeof exports?module.exports=t(e,require("wolfy87-eventemitter"),require("eventie")):e.imagesLoaded=t(e,e.EventEmitter,e.eventie)}(window,function(e,t,n){function i(e,t){for(var n in t)e[n]=t[n];return e}function r(e){return"[object Array]"===d.call(e)}function o(e){var t=[];if(r(e))t=e;else if("number"==typeof e.length)for(var n=0,i=e.length;i>n;n++)t.push(e[n]);else t.push(e);return t}function s(e,t,n){if(!(this instanceof s))return new s(e,t);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=o(e),this.options=i({},this.options),"function"==typeof t?n=t:i(this.options,t),n&&this.on("always",n),this.getImages(),a&&(this.jqDeferred=new a.Deferred);var r=this;setTimeout(function(){r.check()})}function f(e){this.img=e}function c(e){this.src=e,v[e]=this}var a=e.jQuery,u=e.console,h=u!==void 0,d=Object.prototype.toString;s.prototype=new t,s.prototype.options={},s.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;t>e;e++){var n=this.elements[e];"IMG"===n.nodeName&&this.addImage(n);var i=n.nodeType;if(i&&(1===i||9===i||11===i))for(var r=n.querySelectorAll("img"),o=0,s=r.length;s>o;o++){var f=r[o];this.addImage(f)}}},s.prototype.addImage=function(e){var t=new f(e);this.images.push(t)},s.prototype.check=function(){function e(e,r){return t.options.debug&&h&&u.log("confirm",e,r),t.progress(e),n++,n===i&&t.complete(),!0}var t=this,n=0,i=this.images.length;if(this.hasAnyBroken=!1,!i)return this.complete(),void 0;for(var r=0;i>r;r++){var o=this.images[r];o.on("confirm",e),o.check()}},s.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded;var t=this;setTimeout(function(){t.emit("progress",t,e),t.jqDeferred&&t.jqDeferred.notify&&t.jqDeferred.notify(t,e)})},s.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var t=this;setTimeout(function(){if(t.emit(e,t),t.emit("always",t),t.jqDeferred){var n=t.hasAnyBroken?"reject":"resolve";t.jqDeferred[n](t)}})},a&&(a.fn.imagesLoaded=function(e,t){var n=new s(this,e,t);return n.jqDeferred.promise(a(this))}),f.prototype=new t,f.prototype.check=function(){var e=v[this.img.src]||new c(this.img.src);if(e.isConfirmed)return this.confirm(e.isLoaded,"cached was confirmed"),void 0;if(this.img.complete&&void 0!==this.img.naturalWidth)return this.confirm(0!==this.img.naturalWidth,"naturalWidth"),void 0;var t=this;e.on("confirm",function(e,n){return t.confirm(e.isLoaded,n),!0}),e.check()},f.prototype.confirm=function(e,t){this.isLoaded=e,this.emit("confirm",this,t)};var v={};return c.prototype=new t,c.prototype.check=function(){if(!this.isChecked){var e=new Image;n.bind(e,"load",this),n.bind(e,"error",this),e.src=this.src,this.isChecked=!0}},c.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},c.prototype.onload=function(e){this.confirm(!0,"onload"),this.unbindProxyEvents(e)},c.prototype.onerror=function(e){this.confirm(!1,"onerror"),this.unbindProxyEvents(e)},c.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},c.prototype.unbindProxyEvents=function(e){n.unbind(e.target,"load",this),n.unbind(e.target,"error",this)},s})}]);