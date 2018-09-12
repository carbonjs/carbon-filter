var forEach = require('mocha-each');
var fs = require("fs-extra");
var chai = require("chai");

var expect = chai.expect;

var Filter = require("../index");

describe("Filters", function() {
    describe("Files", function() {
        describe("Move", function() {
            var sourceFile = "./test/assets/somefile";

            beforeEach(function() {
                fs.outputFileSync(sourceFile, Math.random().toString());
            })

            afterEach(function() {
                fs.removeSync(sourceFile);
            })

            it("should move the file", function(done) {
                var destFile = "./test/assets/somefile2";

                var Move = new Filter.File.Move({
                    fullPath: destFile
                });

                Move.filter(sourceFile, {}, function(err, filePath) {
                    expect(err).to.equal(null);
                    expect(filePath).to.equal(destFile);

                    fs.remove(filePath);

                    done();
                });
            });

            it("should add extension to the file", function(done) {
                var Move = new Filter.File.Move({
                    extension: "cpy"
                });

                Move.filter(sourceFile, {}, function(err, filePath) {
                    expect(err).to.equal(null);
                    expect(filePath).to.equal(sourceFile + ".cpy");

                    fs.remove(filePath);

                    done();
                });
            });

            it("should change file name", function(done) {
                var Move = new Filter.File.Move({
                    filename: "somefile2"
                });

                Move.filter(sourceFile, {}, function(err, filePath) {
                    var newFileName = sourceFile.replace(/\/somefile/, "/somefile2");

                    expect(err).to.equal(null);
                    expect(filePath).to.equal(newFileName);

                    fs.remove(filePath);

                    done();
                });
            });

            it("should change file extension", function(done) {
                var Move = new Filter.File.Move({
                    extension: "test"
                });

                Move.filter(sourceFile, {}, function(err, filePath) {
                    expect(err).to.equal(null);
                    expect(filePath).to.equal(sourceFile + ".test");

                    fs.remove(filePath);

                    done();
                });
            });

            it("should change file name and extension", function(done) {
                var Move = new Filter.File.Move({
                    filename: "somefile2",
                    extension: "abc"
                });

                Move.filter(sourceFile, {}, function(err, filePath) {
                    var newFileName = sourceFile.replace(/\/somefile/, "/somefile2.abc");

                    expect(err).to.equal(null);
                    expect(filePath).to.equal(newFileName);

                    fs.remove(filePath);

                    done();
                });
            });

            it("should move a file to /move directory", function(done) {
                var Move = new Filter.File.Move({
                    path: "./test/assets/output/move"
                });

                Move.filter(sourceFile, {}, function(err, filePath) {
                    var newFileName = sourceFile.replace(/.\/test\/assets\//, "./test/assets/output/move/");

                    expect(err).to.equal(null);
                    expect(filePath).to.equal(newFileName);

                    fs.remove(filePath);

                    done();
                });
            });

            it("should move a file to /move directory then change it's name and extension", function(done) {
                var Move = new Filter.File.Move({
                    path: "./test/assets/output/move",
                    filename: "somefile2",
                    extension: "def"
                });

                Move.filter(sourceFile, {}, function(err, filePath) {
                    var newFileName = sourceFile.replace(/.\/test\/assets\/somefile/, "./test/assets/output/move/somefile2.def");

                    expect(err).to.equal(null);
                    expect(filePath).to.equal(newFileName);

                    fs.remove(filePath);

                    done();
                });
            });
        });
    });
});
