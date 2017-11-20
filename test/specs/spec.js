var assert = require('assert');
var expect = require('chai').expect;

//tests the Title
describe('frontier page', function() {
    it('should have the right title - Frontier Internet Plans | 1-855-860-9937 | Frontier Communications', function () {
        browser.url('https://internet.frontier.com/plans-pricing.html');
        var title = browser.getTitle();
        assert.equal(title, 'Frontier Internet Plans | 1-855-860-9937 | Frontier Communications');
    });
});
