var forEach = require('mocha-each');
var fs = require("fs-extra");
var chai = require("chai");
var jimp = require("jimp");

var expect = chai.expect;

var Filter = require("../index");

describe("Filters", function() {
    describe("Images", function() {
        describe("Convert", function() {
            var sourceFile = "./test/assets/image";

            it("should convert input JPG image to JPG image with quality 50", function(done) {
                var Convert = new Filter.Image.Convert({
                    format: "jpeg",
                    quality: 50
                });

                var sourceImage = sourceFile + ".jpg";

                new jimp(640, 480, function(err, image) {
                    image.write(sourceImage, function(err) {
                        Convert.filter(sourceImage, {}, function(err, filePath) {
                            expect(err).to.equal(null);
                            expect(filePath).to.equal(sourceImage);

                            fs.remove(sourceImage);

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

                var sourceImage = sourceFile + ".png";

                new jimp(640, 480, function(err, image) {
                    image.write(sourceImage, function(err) {
                        Convert.filter(sourceImage, {}, function(err, filePath) {
                            expect(err).to.equal(null);
                            expect(filePath).to.equal(sourceImage);

                            fs.remove(sourceImage);

                            done();
                        });
                    });
                });
            });
        });
    });
});
