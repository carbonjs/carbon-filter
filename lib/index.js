var _ = require("lodash");

function Filter(options) {
    this._options = _.extend({

    }, options);
}

Filter.prototype.filter = function(value) {
    // Abstract function; must be implemented inside each filter  separately
};

module.exports = exports = Filter;

exports.StringTrim = require("./filters/string-trim");
exports.StripTags = require("./filters/strip-tags");
