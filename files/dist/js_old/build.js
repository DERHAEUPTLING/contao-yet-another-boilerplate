/*
 * multiple Modules to different .js files
 */

({
    appDir: './',
    baseUrl: './',
    dir: '../js_dist',
    mainConfigFile: 'main.js',
    modules: [
        { name: 'main' },
    ],
    include: 'requireLib',
    optimizeCss: false,
    removeCombined: true,
    preserveLicenseComments: false,
    findNestedDependencies: true
})