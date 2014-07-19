/**
 * EXAMPLE: static includes
 *
 */
require("./chunk/basic.js");



/**
 * EXAMPLE: CommonJS Pattern
 *
 */
var foobar = require('./chunk/commonjs.js');
    test   = new foobar();
test.bar(); // 'Hello bar'



/**
 * EXAMPLE: Code Splitting - CommonJS Pattern
 *
 */
require.ensure([], function(require) {
    var foobar = require('./chunk/commonjs.js');
    	   test   = new foobar();
	   test.bar(); // 'Hello bar'
});