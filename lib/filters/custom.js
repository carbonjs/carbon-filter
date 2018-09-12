/**
 * @Author: Amir Ahmetovic <choxnox>
 * @License: MIT
 */

var Filter = require("../index");
var util = require("util");
var _isFunction = require("lodash.isfunction");

function Custom(options) {
    Filter.call(this, options);

    var defaultOptions = {
        function: null
    };

    this._options = Object.assign(this._options, defaultOptions, options);
}

util.inherits(Custom, Filter);

Custom.prototype.filter = function(value) {
    if (_isFunction(this.getFunction()))
        return this.getFunction()(value);
    else
        return value;
};

Custom.prototype.getFunction = function() { return this.getOptions().function; };

Custom.prototype.setFunction = function(func) { this.getOptions().function = func; };

module.exports = exports = Custom;
