                                            
/**
 * global vars
 *
 */

export function viewport() {
	const e = {};
	e.width  = $(window).width();
	e.height = $(window).height();

	return e;
};




/**
 * throttle
 * run on start, than wait "delay" till next run
 */

// try this https://davidwalsh.name/javascript-debounce-function

export function throttle ( delay, fn )
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
 * shorthand for console.log
 *
 */
export function log(element) {
    console.log(element);
}



/**
 * preload images one after another 
 * images is an array with image metadata 
 * preload(images);
 */
export function preload (imageArray) {
	var imageArray = imageArray;
    var index = 0;
    
    function iterating(imageArray, index) {
    	if (imageArray && imageArray.length > index) {
            var img = new Image();
            img.src = imageArray[index];
            img.onload = function() {
                iterating(imageArray, index + 1);
                // console.log(imageArray[index]);
                index++;
            }
        }
    };
    iterating(imageArray, index);     
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
