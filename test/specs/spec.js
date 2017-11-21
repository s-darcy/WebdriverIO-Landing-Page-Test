var assert = require('assert');

var validURL = 'https://internet.frontier.com/plans-pricing.html';

describe('frontier page', function () {

    //grabs the title
    it('should get the title of the document', function () {
        browser.url('/'); 
        var title = browser.getTitle()
        console.log(title);
    });

    //tests the Zip finder
    it('should submit login form', function () {
        browser.url('/');
        browser.setValue('#zip', '22222');
        browser.click('.js-address-submit');
        browser.pause(9000);
        const newURL = browser.getUrl();
        assert.equal(newURL, validURL);
    });
});

describe('checks links', function () {    
    //making sure links direct correctly
    it('should link to cart page', function() {
        browser.url('/');
        browser.click('.js-track-nav-shop-online');
        browser.pause(3000);
        var cart = browser.getUrl();
        assert.equal(cart, 'https://internet.frontier.com/cart/address');
    });

    it('should link to services page', function() {
        browser.url('/');
        browser.pause(5000);
        browser.click('#js-track-home-hero');
        browser.pause(3000);
        var cart = browser.getUrl();
        assert.equal(cart, 'https://internet.frontier.com/services/');
    });

});
