var assert = require('assert');

var validURL = 'https://internet.frontier.com/plans-pricing.html';

describe('frontier page', function() {

    //grabs the title
    it('should get the title of the document', async function () {
        browser.url('/'); 
        var title = browser.getTitle()
        await console.log(title);
    });

    //tests the Zip finder
    it('should submit login form', async function () {
        browser.url('/');
        browser.setValue('#zip', '22222');
        await browser.click('#js-track-form-check-availability');
        var newURL = browser.getUrl();
        assert.deepEqual(newURL, validURL);
    });

    // it('should hover', function () {
    //     var url = browser.url('https://internet.frontier.com/');

    // });
});
