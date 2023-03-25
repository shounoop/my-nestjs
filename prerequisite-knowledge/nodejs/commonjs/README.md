# CommonJS

CommonJS modules are a type of module system used in Node.js. Understanding CommonJS modules is important when learning NestJS, as NestJS uses CommonJS modules to organize and modularize its code.

### Here are some key concepts related to CommonJS modules:

##### 1. Exporting a module:

To make a module available for use in other files, you need to export it using the module.exports object. For example, to export a function that calculates the square of a number:

```javascript
function square(num) {
  return num * num;
}

module.exports = square;
```

This will make the square function available to other files that require this module.

##### 2. Importing a module:

To use a module in another file, you can import it using the require function. For example, to use the square function from the previous example:

```javascript
const square = require('./square');

console.log(square(4)); // outputs 16
```

Here, we use the require function to import the square module, which we defined in a separate file. We can then use the square function as if it were defined in the current file.

##### 3. Exporting multiple values from a module:

You can also export multiple values from a module using an object literal:

```javascript
const utils = {
  square: function (num) {
    return num * num;
  },
  cube: function (num) {
    return num * num * num;
  },
};

module.exports = utils;
```

Here, we define an object literal containing two functions, square and cube, and export it using module.exports. This allows us to use both functions in other files that import this module.

##### 4. Importing a module from a Node.js package:

In addition to importing your own modules, you can also import modules from Node.js packages using require. For example, to use the built-in fs module to read a file:

```javascript
const fs = require('fs');

fs.readFile('file.txt', 'utf-8', function (err, data) {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});
```

Here, we use the require function to import the fs module, which is a built-in Node.js module for working with the file system. We can then use the readFile function to read the contents of a file.
