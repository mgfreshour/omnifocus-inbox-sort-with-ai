# `Data`

A generic bag of bytes. Mainly useful to be interpreted / converted to some other type.   
  


## Class Functions

### `function fromString(string: `String`, encoding: `StringEncoding` or `null`)` → `Data`

Convert the string to a `Data` using the given encoding, or UTF8 if none is specified.   
  


### `function fromBase64(string: `String`)` → `Data`

## Instance Functions

### `function toString(encoding: `StringEncoding` or `null`)` → `String`

Convert to a `String`, assuming that this `Data` using the specified encoding, or UTF8 if none is given.   
  


### `function toBase64()` → `String`

Convert to a Base-64 encoded string.   
  


## Instance Properties

### `var length` → `Number` _read-only_

Number of bytes in this data.   
  


### `var toObject` → `Object` or `null` _read-only_
