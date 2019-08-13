var chai = require("chai");

var expect = chai.expect;

var Filter = require("../index");

describe("Filters", function() {
    describe("StripTags", function() {
        it("should return string without any tags", function(done) {
            var StripTags = new Filter.StripTags();

            var promise = StripTags.filter("<h1>Hello World!</h1>");

            expect(promise).to.be.an.instanceof(Promise);
            promise.should.eventually.equal("Hello World!").notify(done);
        });

        it("should return string with allowed tags only", function(done) {
            var StripTags = new Filter.StripTags({
                allowedTags: ["h1"]
            });

            var promise = StripTags.filter("<h1>Test1</h1><h2>Test2</h2><h3>Test3</h3>");

            expect(promise).to.be.an.instanceof(Promise);
            promise.should.eventually.equal("<h1>Test1</h1>Test2Test3").notify(done);
        });

        it("should return string with allowed tags and attributes only", function(done) {
            var StripTags = new Filter.StripTags({
                allowedTags: ["img"],
                allowedAttributes: {
                    "img": ["src"]
                }
            });

            var promise = StripTags.filter("<img src='xxx' alt='yyy' />");

            expect(promise).to.be.an.instanceof(Promise);
            promise.should.eventually.equal("<img src=\"xxx\" />").notify(done);
        });
    });
});
