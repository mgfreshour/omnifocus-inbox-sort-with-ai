# `Version`

## Constructors

### `new Version(versionString: `String`)` → `Version`

Parses a string representation of a `Version` and returns an instance, or throws an error if the string isn't a valid version.   
  


## Instance Functions

### `function equals(version: `Version`)` → `Boolean`

Returns true if the receiving `Version` is equal to the argument `Version`.   
  


### `function atLeast(version: `Version`)` → `Boolean`

Returns true if the receiving `Version` is at the same as or newer than the argument `Version`.   
  


### `function isAfter(version: `Version`)` → `Boolean`

Returns true if the receiving `Version` is strictly after the argument `Version`.   
  


### `function isBefore(version: `Version`)` → `Boolean`

Returns true if the receiving `Version` is strictly before the argument `Version`.   
  


## Instance Properties

### `var versionString` → `String` _read-only_

Returns as an opaque string representation of the `Version`, suitable for display or logging. This should never be used in comparisons of any sort.   
  

