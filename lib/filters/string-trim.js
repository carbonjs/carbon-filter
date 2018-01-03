/**
 * @Author: Amir Ahmetovic <choxnox>
 * @License: MIT
 */

var Filter = require("../index");
var util = require("util");
var _ = require("lodash");

function StringTrim(options) {
    Filter.call(this, options);
}

util.inherits(StringTrim, Filter);

StringTrim.prototype.filter = function(value) {
    if (_.isString(value))
        return value.trim();
    else
        return value;
};

module.exports = exports = StringTrim;
