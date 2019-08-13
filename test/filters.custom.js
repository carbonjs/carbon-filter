var chai = require("chai");

var expect = chai.expect;

var Filter = require("../index");

describe("Filters", function() {
    describe("Custom", function() {
        it("should return string which equals input value if no custom function is defined", function(done) {
            var Custom = new Filter.Custom();

            var promise = Custom.filter("abc");

            expect(promise).to.be.an.instanceof(Promise);
            promise.should.eventually.equal("abc").notify(done);
        });

        it("should return string which is an input value filtered by the custom function", function(done) {
            var Custom = new Filter.Custom({
                function: function(value) {
                    return value + 123;
                }
            });

            var promise = Custom.filter("abc");

            expect(promise).to.be.an.instanceof(Promise);
            promise.should.eventually.equal("abc123").notify(done);
        });
    });
});
