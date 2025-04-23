# `Console`

The `Console` allows scripts to log debugging, warning, or error information where it can be viewed in the system console or in the console output area. A single instance of `Console` is available to scripts as the `console` global variable.   
  


## Instance Functions

### `function log(message: `Object`, additional: `Array` of `Object` or `null`)`

Appends a line to the application console formed by concatenating the given `message` (after converting it to a `String`), any additional arguments separated by spaces, and finally a newline.   
  


### `function error(message: `Object`, additional: `Array` of `Object` or `null`)`

### `function info(message: `Object`, additional: `Array` of `Object` or `null`)`

### `function warn(message: `Object`, additional: `Array` of `Object` or `null`)`

Just calls `Console.log`, currently.   
  


### `function clear()`

Clears the console in the user-visible window.   
  

