/*
 * ALL Dependencies into one .js file
 */

({
    baseUrl: "./",
    mainConfigFile: 'main.js',
    name: "main",
    out: "../js_dist/main.single.js",
    paths: {
        requireLib: '../bower/requirejs/require'
    },
    include: 'requireLib',
    optimizeCss: false,
    preserveLicenseComments: false,
    findNestedDependencies: true
})