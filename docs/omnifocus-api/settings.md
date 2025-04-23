# `Settings`

`Settings` represent the database synchronized configuration values. _NOTE:_ editing these should be done with care, as storing invalid values may corrupt your database or produce instability in the various client applications.   
  


## Instance Functions

### `function defaultObjectForKey(key: `String`)` → `Object` or `null`

### `function hasNonDefaultObjectForKey(key: `String`)` → `Boolean`

### `function objectForKey(key: `String`)` → `Object` or `null`

### `function setObjectForKey(value: `Object` or `null`, key: `String`)`

### `function boolForKey(key: `String`)` → `Boolean`

### `function setBoolForKey(value: `Boolean`, key: `String`)`

### `function integerForKey(key: `String`)` → `Number`

### `function setIntegerForKey(value: `Number`, key: `String`)`

## Instance Properties

### `var keys` → `Array` of `String` _read-only_
