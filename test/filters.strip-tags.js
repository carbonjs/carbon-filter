var chai = require("chai");

var expect = chai.expect;

var Filter = require("../index");

describe("Filters", function() {
    describe("StripTags", function() {
        it("should return string without any tags", function() {
            var StripTags = new Filter.StripTags();

            expect(StripTags.filter("<h1>Hello World!</h1>")).to.equal("Hello World!");
        });

        it("should return string with allowed tags only", function() {
            var StripTags = new Filter.StripTags({
                allowedTags: ["h1"]
            });

            expect(StripTags.filter("<h1>Test1</h1><h2>Test2</h2><h3>Test3</h3>")).to.equal("<h1>Test1</h1>Test2Test3");
        });

        it("should return string with allowed tags and attributes only", function() {
            var StripTags = new Filter.StripTags({
                allowedTags: ["img"],
                allowedAttributes: {
                    "img": ["src"]
                }
            });

            expect(StripTags.filter("<img src='xxx' alt='yyy' />")).to.equal("<img src=\"xxx\" />");
        });
    });
});
