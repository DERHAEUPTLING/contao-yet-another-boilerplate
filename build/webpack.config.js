//var path = require("path");
var webpack = require("webpack");


//var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
module.exports = {
    context: __dirname + "/../app/js",
    entry: {
        app: "./entry.js"
    },
    output: {
        path: "../files/dist/js/",
        publicPath: "files/dist/js/",

        filename: "bundle.js",

    },
    externals: {
        // require("jquery") is external and available
        //  on the global var jQuery
        jQuery: "jQuery",
        jquery: "jQuery",
        $: "jQuery"
    },
    devtool: "source-map",

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            mangle: true,
            compress: false,
            // output: {
            //     beautify: true,
            // },
            //beautify: true,
        })

    ]
};