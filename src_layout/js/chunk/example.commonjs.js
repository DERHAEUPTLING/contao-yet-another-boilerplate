module.exports = function foobar() {



    // extend object
	this.foo = function(){
        console.log('Hello foo');
	}

	this.bar = function(){
        console.log('Hello bar');
	}



	// execute on load
	var byLoad = console.log("byLoad");



	// execute on call
	var byCall = function () {
		// body...
		console.log("byCall");
	};
	byCall();

}