# CarbonJS Filters / `carbon-filter` <a id="intro"></a>
The `carbon-filter` module provides a set of commonly used data filters. This means you can run your data through a set of filters after you've received user's input or before you insert data into your database. You can use it as a stand-alone module or most commonly with `carbon-form` module which filters form data automatically for you.

If you've ever worked with any `Zend_Filter` filter from the Zend Framework you will be familiar with it's sintax and if you haven't then scroll down to the "Usage" section and you'll be up-and-running in no time.


## Installation <a id="installation"></a>
```
npm install carbon-filter [--save]
```

## Usage <a id="usage"></a>
The `carbon-filter` module packs some of the most used filters which share the same interface. Each filter provides public access to the function `filter` which receives only one parameter and returns filtered data. Some filters have options so that you can customize it to your needs.

The function `filter` has the following prototype `Filter.prototype.filter = function(value)` and it is common to all filters. It has 1 parameter:
* `value` - Input value that needs to be filtered.

#### Stand-alone <a id="stand-alone"></a>
```js
var Filter = require("carbon-filter");

var stripTags = new Filter.StripTags({
    allowedTags: ["div", "span", "h1", "br"]
});

var inputValue = "...";
var filteredValue = stripTags.filter(inputValue);

```

#### With `carbon-form` <a id="with-carbon-form"></a>
```js
var Form = require("carbon-form");
var Filter = require("carbon-filter");

var form = new Form();

form.addElements([
    new Form.Element.Text("name", {
        label: "Name",
        filters: [
            new Filter.StringTrim(),
            new Filter.StripTags({
                allowedTags: ["div", "span"],
                allowedAttributes: ["id", "class"]
            })
        ]
    });
]);
```

## Filters <a id="filters"></a>
#### StringTrim <a id="stringtrim-filter"></a>
Trims the beginning and the end of a string.

#### StripTags <a id="striptags-filter"></a>
Strips HTML tags from the input. You can specify which tags or attributes you'd like to leave (if any).

**Options**
* `allowedTags` [`Array`] - Tags from the input that you want to keep in the output.
* `allowedAttributes` [`Array`] - Attributes of HTML tags from the input that you want to keep in the output.

## Contributing <a id="contributing"></a>
If you're willing to contribute to this project feel free to report issues, send pull request, write tests or simply contact me - [Amir Ahmetovic](https://github.com/choxnox)

## Licence
This software is available under the following licenses:

  * MIT
