// var client = require('webdriverio').remote({ desiredCapabilities: { browserName: 'chrome' } }),
// browserevent = require('browserevent');

// // by passing the client object as argument the module enhances it with
// // the `addEventListener` and `removeEventListener` command
// browserevent.init(client);

// client
// .url('http://google.com')
// .addEventListener('dblclick','#hplogo', function(e) {
//     console.log(e.target); // -> 'id("hplogo")'
//     console.log(e.type); // -> 'dblclick'
//     console.log(e.clientX, e.clientY); // -> 239 524
// })
// .doubleClick('#hplogo') // triggers event
// .end();