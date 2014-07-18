$(document).ready(function(){
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

}); // End: $().ready()


