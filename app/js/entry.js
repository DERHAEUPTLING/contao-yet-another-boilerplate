
/**
 * EXAMPLE: CommonJS Pattern
 *
 */
// var foobar = require('./app/commonjs.js');
//     test   = new foobar();
// test.bar(); // 'Hello bar'



/**
 * EXAMPLE: Code Splitting - CommonJS Pattern
 *
 */
// require.ensure([], function(require) {
//     var foobar = require('./app/commonjs.js');
//     	   test   = new foobar();
// 	   test.bar(); // 'Hello bar'
// });



/**
 * static includes
 *
 */
require("./app/basic.js");
require("./app/autogrow.js");

var offcanvas = require('./app/offcanvas.js');
new offcanvas();


/**
 * load swipe if touch device
 *
 */
if (Modernizr.touch) {
    console.log("has touch");
} else {
    console.log("no touch");
}






$( window ).load(function() {
    $('body').removeClass(' is-loading');
});