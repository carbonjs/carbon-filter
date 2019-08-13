/**
 * @Author: Amir Ahmetovic <choxnox>
 * @License: MIT
 */

var Filter = require("../index");
var util = require("util");

function Custom(options) {
    Filter.call(this, options);

    var defaultOptions = {
        function: null
    };

    this._options = Object.assign(this._options, defaultOptions, options);
}

util.inherits(Custom, Filter);

Custom.prototype.filter = function(value, callback) {
    return new Promise(async (resolve, reject) => {
        var val = value;

        if (typeof this.getFunction() === "function")
            val = await this.getFunction()(value);

        if (typeof callback === "function")
            callback(null, val);
        else
            resolve(val);
    });
};

Custom.prototype.getFunction = function() { return this.getOptions().function; };

Custom.prototype.setFunction = function(func) { this.getOptions().function = func; };

module.exports = exports = Custom;
