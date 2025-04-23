# `Timer`

## Class Functions

### `function once(interval: `Number`, action: `Function``(`‍timer: `Timer`‍`)`)` → `Timer`

Makes a new `Timer` that will fire once, after the specified interval (in seconds from the current time). When the `Timer` fires, the passed in `Function` is called, passing the `Timer` as its argument.   
  


### `function repeating(interval: `Number`, action: `Function``(`‍timer: `Timer`‍`)`)` → `Timer`

Makes a new `Timer` that will fire repeatedly with the specified interval (in seconds, with the first invocation happening that interval after the current time). When the `Timer` fires, the passed in `Function` is called, passing the `Timer` as its argument.   
  


## Instance Functions

### `function cancel()`

## Instance Properties

### `var interval` → `Number` _read-only_
