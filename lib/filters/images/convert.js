/**
 * @Author: Amir Ahmetovic <choxnox>
 * @License: MIT
 */

var Filter = require("../../index");
var util = require("util");
var gm = require("gm");

function Convert(options) {
    Filter.call(this, options);

    var defaultOptions = {
        format: null,
        quality: null
    };

    this._options = Object.assign(this._options, defaultOptions, options);
}

util.inherits(Convert, Filter);

Convert.prototype.filter = function(value, context, callback) {
    var _gm = gm(value);

    var format = this.getOptions().format;
    var quality = this.getOptions().quality;

    if (format)
        _gm = _gm.setFormat(format);

    if (quality)
        _gm = _gm.quality(quality);

    _gm.write(value, function(err) {
        callback(err ? err : null, value);
    });
};

module.exports = exports = Convert;
