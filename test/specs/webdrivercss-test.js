// // create a WebdriverIO instance
// var client = require('webdriverio').remote({
//     desiredCapabilities: {
//         browserName: 'phantomjs'
//     }
// }).init();

// // initialise WebdriverCSS for `client` instance
// require('webdrivercss').init(client, {
//     // example options
//     screenshotRoot: 'my-shots',
//     failedComparisonsRoot: 'diffs',
//     misMatchTolerance: 0.05,
//     screenWidth: [320,480,640,1024]
// });