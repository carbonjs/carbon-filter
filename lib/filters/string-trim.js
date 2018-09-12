/**
 * @Author: Amir Ahmetovic <choxnox>
 * @License: MIT
 */

var Filter = require("../index");
var util = require("util");
var _isString = require("lodash.isstring");

function StringTrim(options) {
    Filter.call(this, options);
}

util.inherits(StringTrim, Filter);

StringTrim.prototype.filter = function(value) {
    if (_isString(value))
        return value.trim();
    else
        return value;
};

module.exports = exports = StringTrim;
