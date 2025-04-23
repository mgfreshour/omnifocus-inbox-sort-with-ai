# `Preferences`

## Constructors

### `new Preferences(identifier: `String` or `null`)` → `Preferences`

Creates a new `Preferences` instance. The identifier specified may be `null` to create an instance for the currently loading plug-in. If it is `null` and a plug-in is not being loaded, an error will be thrown. Key/value pairs stored in the instance will be prefixed with the identifier and a ".".   
  


## Instance Functions

### `function read(key: `String`)` → `Object` or `null`

Returns the previously stored value for the given key, or `null` if no value is stored.   
  


### `function readBoolean(key: `String`)` → `Boolean`

Returns the previously stored value as a `Boolean`, or `false` if there is no stored value or it can't be converted to a `Boolean`.   
  


### `function readString(key: `String`)` → `String` or `null`

Returns the previously stored value as a `String`, or `null` if there is no stored value or it is not a `String`.   
  


### `function readNumber(key: `String`)` → `Number`

Returns the previously stored value as a `Number`, or `null` if there is no stored value or it is not a `Number`.   
  


### `function readDate(key: `String`)` → `Date` or `null`

Returns the previously stored value as a `Date`, or `null` if there is no stored value or it is not a `Date`.   
  


### `function readData(key: `String`)` → `Data` or `null`

Returns the previously stored value as a `Data`, or `null` if there is no stored value or it is not a `Data`.   
  


### `function write(key: `String`, value: `Boolean`, `String`, `Number`, `Date`, or `Data` or `null`)`

Stores the specified key/value pair, or removes the pair if `value` is `null`.   
  


### `function remove(key: `String`)`

Removes and previously stored value for the given key.   
  


## Instance Properties

### `var identifier` → `String` _read-only_

The scoping identifier the instance given when created, or the plug-in identifier if none was given.   
  

