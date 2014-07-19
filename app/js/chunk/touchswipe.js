module.exports = function touchswipe() {
	// http://labs.rampinteractive.co.uk/touchSwipe/demos/
    require("../lib/jquery.touchSwipe.min.js");

    $("html").swipe({
        swipe:function(event, direction, distance, duration, fingerCount){
            $(this).text("You swiped " + direction + " for " + distance + "px" );
        },
        threshold:100
    });
    // console.log("touchswipe.js loaded");
}