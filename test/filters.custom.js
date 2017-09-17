var chai = require("chai");

var expect = chai.expect;

var Filter = require("../index");

describe("Filters", function() {
    describe("Custom", function() {
        it("should return string which equals input value if no custom function is defined", function() {
            var Custom = new Filter.Custom();

            expect(Custom.filter("abc")).to.equal("abc");
        });

        it("should return string which is an input value filtered by the custom function", function() {
            var Custom = new Filter.Custom({
                function: function(value) {
                    return value + 123;
                }
            });

            expect(Custom.filter("abc")).to.equal("abc123");
        });
    });
});
