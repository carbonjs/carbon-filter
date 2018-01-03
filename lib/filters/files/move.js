/**
 * @Author: Amir Ahmetovic <choxnox>
 * @License: MIT
 */

var Filter = require("../../index");
var fs = require("fs-extra");
var path = require("path");
var util = require("util");
var _ = require("lodash");

function Move(options) {
    Filter.call(this, options);

    var defaultOptions = {
        extension: null,
        filename: null,
        fullPath: null,
        path: null
    };

    this._options = _.extend(this._options, defaultOptions, options);
}

util.inherits(Move, Filter);

Move.prototype.filter = function(value, context, callback) {
    var extension = this.getOptions().extension;
    var filename = this.getOptions().filename;
    var fullPath = this.getOptions().fullPath;
    var path_ = this.getOptions().path;

    if (!fullPath)
    {
        var parsedPath = path.win32.parse(value);

        /*console.log("#1");
        console.log(value);
        console.log(parsedPath);*/

        if (path_)
            parsedPath.dir = path_;

        if (filename)
        {
            regex = new RegExp(parsedPath.name);

            parsedPath.name = filename;
            parsedPath.base = parsedPath.base.replace(regex, filename);
        }

        if (extension)
        {
            if (extension.substr(0, 1) != ".")
                extension = "." + extension;

            if (parsedPath.ext)
            {
                regex = new RegExp(parsedPath.ext);

                parsedPath.base = parsedPath.base.replace(regex, extension);
            }
            else
                parsedPath.base += extension;

            parsedPath.ext = extension;
        }

        fullPath = path.posix.format(parsedPath);

        /*console.log("-----------------------");
        console.log("#2");
        console.log(parsedPath);
        console.log(fullPath);*/
    }

    fs.move(value, fullPath, { overwrite: true }, function(err) {
        callback(err ? err : null, fullPath);
    });
};

module.exports = exports = Move;
