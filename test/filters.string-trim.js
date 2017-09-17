var chai = require("chai");

var expect = chai.expect;

var Filter = require("../index");

describe("Filters", function() {
    describe("StringTrim", function() {
        it("should return string without leading and trailing spaces", function() {
            var StringTrim = new Filter.StringTrim();

            expect(StringTrim.filter(" abc  ")).to.equal("abc");
        });
    });
});
