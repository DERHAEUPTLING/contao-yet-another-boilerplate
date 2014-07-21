/**
 * EXAMPLE: static includes
 *
 */
require("./chunk/basic.js");






/**
 * EXAMPLE: CommonJS Pattern
 *
 */
var foobar = require('./chunk/example.commonjs.js');
test   = new foobar();
test.bar(); // 'Hello bar'



/**
 * EXAMPLE: Code Splitting - CommonJS Pattern
 *
 */
require.ensure([], function(require) {
    var foobar = require('./chunk/example.commonjs.js');
    test   = new foobar();
	test.bar(); // 'Hello bar'
});







/**
 * EXAMPLE: AMD Pattern + commonjs dependencys
 *
 */
var amd = require('./chunk/example.amd-commonjs.js');
amd.test('body');



/**
 * EXAMPLE: AMD Pattern + commonjs dependencys
 * with code splitting
 */
require.ensure([], function(require) {
    var amd = require('./chunk/example.amd-commonjs.js');
    amd.test('body');
});