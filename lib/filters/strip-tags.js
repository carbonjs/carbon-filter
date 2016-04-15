var Filter = require("../index");
var util = require("util");
var _ = require("lodash");

var sanitizeHtml = require("sanitize-html");

function StripTags(options) {
    Filter.call(this, options);

    var defaultOptions = {
        allowedTags: [],
        allowedAttributes: {}
    };

    this._options = _.extend(this._options, defaultOptions, options);
}

util.inherits(StripTags, Filter);

StripTags.prototype.filter = function(value) {
    return sanitizeHtml(value, {
        allowedTags: this.getAllowedTags(),
        allowedAttributes: this.getAllowedAttributes(),
        textFilter: function(text) {
            text = text.replace(/&amp;/gi, "&");
            text = text.replace(/&quot;/gi, "\"");

            return text;
        }
    });
};

StripTags.prototype.getAllowedAttributes    = function() { return this._options.allowedAttributes; };
StripTags.prototype.getAllowedTags          = function() { return this._options.allowedTags; };

StripTags.prototype.setAllowedAttributes    = function(allowedAttributes) { this._options.allowedAttributes = allowedAttributes; };
StripTags.prototype.setAllowedTags          = function(allowedTags) { this._options.allowedTags = allowedTags; };

module.exports = exports = StripTags;
