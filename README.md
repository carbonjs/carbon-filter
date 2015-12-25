# carbon-filter
The `carbon-filter` module provides Zend-like set of commonly used data filters. This means you can run your data through a set of filters after you've received user's input or before you insert data into your database. You can use it as a stand-alone module or most commonly with `carbon-form` module which filters form data automatically for you.

If you've ever worked with any of `Zend_Filter` filters from the Zend Framework you will be familiar with it's sintax and if you haven't then scroll down to the "Usage" section and you'll be up-and-running in no time.


## Installation
```
npm install carbon-filter [--save]
```

## Usage
The `carbon-filter` module packs some of the most used filters which share the same interface. Each filter provides public access to the function `filter` which receives only one parameter and returns filtered data. Some filters have options so that you can customize it to your needs.

#### Stand-alone
```js
var Filter = require("carbon-filter");

var stripTags = new Filter.StripTags({
    allowedTags: ["div", "span", "h1", "br"] 
});

var inputValue = "...";
var filteredValue = stripTags.filter(inputValue);

```

#### With `carbon-form`
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

## Filters
#### StringTrim
Trims the beginning and the end of a string.

#### StripTags
Strips HTML tags from the input. You can specify which tags or attributes you'd like to leave (if any).

**Options**
* `allowedTags` [`Array`] - Tags from the input that you want to keep in the output.
* `allowedAttributes` [`Array`] - Attributes of HTML tags from the input that you want to keep in the output.

## Who is using it
The `carbon-filter` module is one of many that is running behind our web application: [Timelinity](https://www.timelinity.com)

## Contributing
If you're willing to contribute to this project feel free to report issues, send pull request, write tests or simply contact me - [Amir Ahmetovic](https://github.com/choxnox)
