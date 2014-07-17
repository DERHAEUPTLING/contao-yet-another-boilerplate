// require("./content.js");






if($('textarea').length) {
    console.log("Loading touch libraries 11");

    require.ensure(['./lib/jquery.autogrow.js'], function(autogrow){

        // require.ensure creates a bundle split-point
        var Hammer = require('./app/autogrow.js');

        // Hammer loaded via XHR - ready to initialize
        // Hammer(/* ... */);
    });

} else {
    console.log("No touch features detected - skipping unneeded libraries");
}
