/**
 * @Author: Amir Ahmetovic <choxnox>
 * @License: MIT
 */

var Filter = require("../index");
var util = require("util");

function StringTrim(options) {
    Filter.call(this, options);
}

util.inherits(StringTrim, Filter);

StringTrim.prototype.filter = function(value, callback) {
    return new Promise((resolve, reject) => {
        var val = value;

        if (typeof value === "string")
            val = value.trim();

        if (typeof callback === "function")
            callback(null, val);
        else
            resolve(val);
    });
};

module.exports = exports = StringTrim;
