                                            
/**
 * global vars
 *
 */

const viewport = function () {
	var e = {};
	e.width  = $(window).width();
	e.height = $(window).height();

	return e;
};




/**
 * throttle
 * run on start, than wait "delay" till next run
 */

// try this https://davidwalsh.name/javascript-debounce-function

const throttle = function( delay, fn )
{
    var last, deferTimer;
    return function()
    {
        var context = this, args = arguments, now = +new Date;
        if( last && now < last + delay )
        {
            clearTimeout( deferTimer );
            deferTimer = setTimeout( function(){ last = now; fn.apply( context, args ); }, delay );
        }
        else
        {
            last = now;
            fn.apply( context, args );
        }
    };
};



/**
 * Ensures there will be no 'console is undefined' errors
 *
 */
window.console = window.console || (function(){
    var c = {}; c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function(){};
    return c;
})();



/**
 * shorthand for console.log
 *
 */
const log = function (element) {
    console.log(element);
    return element;
}



/*
 * jQuery code snippet to get the dynamic variables stored in the url as parameters 
 * and store them as JavaScript variables 
 */

$.urlParam = function(name, url){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec( url );
    if (results==null){
       return null;
    }
    else{
       return results[1] || 0;
    }
}

/*
// example.com?param1=name&param2=&id=6
$.urlParam('param1'); // name
$.urlParam('id');        // 6
$.urlParam('param2');   // null

//example params with spaces
http://www.jquery4u.com?city=Gold Coast
console.log($.urlParam('city'));  
//output: Gold%20Coast

console.log(decodeURIComponent($.urlParam('city')));  
//output: Gold Coast
*/
