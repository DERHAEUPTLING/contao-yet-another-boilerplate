module.exports = function fontsTracking() {

	// var MTIProjectId='07c3bc90-89a7-4086-bb04-6d949170c1da';
	// require('../lib/mtiFontTrackingCode.js');
	// require('http://fast.fonts.net/t/1.css?apiType=css&projectid=07c3bc90-89a7-4086-bb04-6d949170c1da')
	// (function() {
	//     var mtiTracking = document.createElement('script');
	//     mtiTracking.type='text/javascript';
	//     mtiTracking.async='true';
	//     mtiTracking.src='files/dist/js/lib/mtiFontTrackingCode.js';
	//     (document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild( mtiTracking );
	// })();


	// $.getScript('http://fast.fonts.net/t/1.css?apiType=css&projectid=07c3bc90-89a7-4086-bb04-6d949170c1da');
	$.get( "https://fast.fonts.net/t/1.css?apiType=css&projectid=07c3bc90-89a7-4086-bb04-6d949170c1da", function( data ) {
	  // $( ".result" ).html( data );
	  // log( "Load was performed." );
	});
}();