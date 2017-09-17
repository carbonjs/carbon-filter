var Filter = require("../index");
var util = require("util");
var _ = require("lodash");

function Custom(options) {
    Filter.call(this, options);

    var defaultOptions = {
        function: null
    };

    this._options = _.extend(this._options, defaultOptions, options);
}

util.inherits(Custom, Filter);

Custom.prototype.filter = function(value) {
    if (_.isFunction(this.getFunction()))
        return this.getFunction()(value);
    else
        return value;
};

Custom.prototype.getFunction = function() { return this.getOptions().function; };

Custom.prototype.setFunction = function(func) { this.getOptions().function = func; };

module.exports = exports = Custom;
