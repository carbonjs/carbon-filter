var forEach = require('mocha-each');
var fs = require("fs-extra");
var chai = require("chai");

var expect = chai.expect;

var Filter = require("../index");

describe("Filters", function() {
    describe("Files", function() {
        describe("Move", function() {
            it("should move the file", function(done) {
                var destFile = "./test/assets/test.filters.files.move-1-moved.jpg";

                var Move = new Filter.File.Move({
                    fullPath: destFile
                });

                var originalFile = "./test/assets/sFNP7Og.jpg";
                var sourceFile = "./test/assets/test.filters.files.move-1.jpg";

                fs.copy(originalFile, sourceFile, { overwrite: true }, function() {
                    Move.filter(sourceFile, {}, function(err, filePath) {
                        expect(err).to.equal(null);
                        expect(filePath).to.equal(destFile);
                        done();
                    });
                });
            });

            it("should add extension to the file", function(done) {
                var Move = new Filter.File.Move({
                    extension: "cpy"
                });

                var originalFile = "./test/assets/test";
                var sourceFile = "./test/assets/somefile";

                fs.copy(originalFile, sourceFile, { overwrite: true }, function() {
                    Move.filter(sourceFile, {}, function(err, filePath) {
                        expect(err).to.equal(null);
                        expect(filePath).to.equal("./test/assets/somefile.cpy");
                        done();
                    });
                });
            });

            it("should change file name", function(done) {
                var Move = new Filter.File.Move({
                    filename: "test"
                });

                var originalFile = "./test/assets/sFNP7Og.jpg";
                var sourceFile = "./test/assets/test.filters.files.move-2.jpg";

                fs.copy(originalFile, sourceFile, { overwrite: true }, function() {
                    Move.filter(sourceFile, {}, function(err, filePath) {
                        expect(err).to.equal(null);
                        expect(filePath).to.equal("./test/assets/test.jpg");
                        done();
                    });
                });
            });

            it("should change file extension", function(done) {
                var Move = new Filter.File.Move({
                    extension: "test"
                });

                var originalFile = "./test/assets/sFNP7Og.jpg";
                var sourceFile = "./test/assets/test.filters.files.move-3.jpg";

                fs.copy(originalFile, sourceFile, { overwrite: true }, function() {
                    Move.filter(sourceFile, {}, function(err, filePath) {
                        expect(err).to.equal(null);
                        expect(filePath).to.equal("./test/assets/test.filters.files.move-3.test");
                        done();
                    });
                });
            });

            it("should change file name and extension", function(done) {
                var Move = new Filter.File.Move({
                    filename: "test",
                    extension: "abc"
                });

                var originalFile = "./test/assets/sFNP7Og.jpg";
                var sourceFile = "./test/assets/test.filters.files.move-4.jpg";

                fs.copy(originalFile, sourceFile, { overwrite: true }, function() {
                    Move.filter(sourceFile, {}, function(err, filePath) {
                        expect(err).to.equal(null);
                        expect(filePath).to.equal("./test/assets/test.abc");
                        done();
                    });
                });
            });

            it("should move a file to /test directory", function(done) {
                var Move = new Filter.File.Move({
                    path: "./test/assets/move"
                });

                var originalFile = "./test/assets/sFNP7Og.jpg";
                var sourceFile = "./test/assets/test.filters.files.move-5.jpg";

                fs.copy(originalFile, sourceFile, { overwrite: true }, function() {
                    Move.filter(sourceFile, {}, function(err, filePath) {
                        expect(err).to.equal(null);
                        expect(filePath).to.equal("./test/assets/move/test.filters.files.move-5.jpg");
                        done();
                    });
                });
            });

            it("should move a file to /test directory then change it's name and extension", function(done) {
                var Move = new Filter.File.Move({
                    path: "./test/assets/move",
                    filename: "cloud",
                    extension: "def"
                });

                var originalFile = "./test/assets/sFNP7Og.jpg";
                var sourceFile = "./test/assets/test.filters.files.move-6.jpg";

                fs.copy(originalFile, sourceFile, { overwrite: true }, function() {
                    Move.filter(sourceFile, {}, function(err, filePath) {
                        expect(err).to.equal(null);
                        expect(filePath).to.equal("./test/assets/move/cloud.def");
                        done();
                    });
                });
            });
        });
    });
});
