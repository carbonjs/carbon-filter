var forEach = require('mocha-each');
var fs = require("fs-extra");
var chai = require("chai");

var expect = chai.expect;

var Filter = require("../index");

describe("Filters", function() {
    describe("Images", function() {
        describe("Convert", function() {
            it("should convert input JPG image to JPG image with quality 50", function(done) {
                var Convert = new Filter.Image.Convert({
                    format: "jpeg",
                    quality: 50
                });

                var sourceFile = "./test/assets/sFNP7Og.jpg";
                var destFile = "./test/assets/test.filters.images.convert-1.jpg";

                fs.remove(destFile, function() {
                    fs.copy(sourceFile, destFile, function() {
                        Convert.filter(destFile, {}, function(err, filePath) {
                            expect(err).to.equal(null);
                            expect(filePath).to.equal(destFile);
                            done();
                        });
                    });
                });
            });

            it("should convert input PNG image to JPG image with quality 80", function(done) {
                var Convert = new Filter.Image.Convert({
                    format: "jpeg",
                    quality: 80
                });

                var sourceFile = "./test/assets/sFNP7Og.png";
                var destFile = "./test/assets/test.filters.images.convert-2.jpg";

                fs.remove(destFile, function() {
                    fs.copy(sourceFile, destFile, function() {
                        Convert.filter(destFile, {}, function(err, filePath) {
                            expect(err).to.equal(null);
                            expect(filePath).to.equal(destFile);
                            done();
                        });
                    });
                });
            });
        });
    });
});
