/**
 * @Author: Amir Ahmetovic <choxnox>
 * @License: MIT
 */

function Filter(options) {
    this._options = Object.assign({}, options);
}

Filter.prototype.filter = function(value) {
    // Abstract function; must be implemented inside each filter  separately
};

Filter.prototype.getOptions   = function() { return this._options; };

module.exports = exports = Filter;

exports.Custom = require("./filters/custom");
exports.StringTrim = require("./filters/string-trim");
exports.StripTags = require("./filters/strip-tags");

exports.File = require("./filters/files");
exports.Image = require("./filters/images");
