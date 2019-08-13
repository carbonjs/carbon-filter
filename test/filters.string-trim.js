var chai = require("chai");

var expect = chai.expect;

var Filter = require("../index");

describe("Filters", function() {
    describe("StringTrim", function() {
        it("should return string without leading and trailing spaces", function(done) {
            var StringTrim = new Filter.StringTrim();

            var promise = StringTrim.filter(" abc  ");

            expect(promise).to.be.an.instanceof(Promise);
            promise.should.eventually.equal("abc").notify(done);
        });
    });
});
