# `PlugIn`

## Class Functions

### `function find(identifier: `String`, minimumVersion: `Version` or `null`)` → `PlugIn` or `null`

## Class Properties

### `var all` → `Array` of `PlugIn` _read-only_

## Instance Functions

### `function library(identifier: `String`)` → `PlugIn.Library` or `null`

Looks for a `PlugIn.Library` in the receiver and returns it if found.   
  


### `function action(identifier: `String`)` → `PlugIn.Action` or `null`

### `function handler(identifier: `String`)` → `PlugIn.Handler` or `null`

### `function resourceNamed(name: `String`)` → `URL` or `null`

### `function imageNamed(name: `String`)` → `Image` or `null`

### `function localizedResourceNamed(filename: `String`)` → `FileWrapper` or `null`

## Instance Properties

### `var URL` → `URL` or `null` _read-only_

Returns the original URL from whence this `PlugIn` came, if known.   
  


### `var actions` → `Array` of `PlugIn.Action` _read-only_

### `var author` → `String` _read-only_

Returns the author for the `PlugIn`.   
  


### `var description` → `String` _read-only_

Returns the description provided for the `PlugIn`.   
  


### `var displayName` → `String` _read-only_

Returns the localized, human-readable name for the `PlugIn`.   
  


### `var handlers` → `Array` of `PlugIn.Handler` _read-only_

### `var identifier` → `String` _read-only_

The unique identifier of the `PlugIn`.   
  


### `var libraries` → `Array` of `PlugIn.Library` _read-only_

### `var version` → `Version` _read-only_

Returns the current `Version` for the `PlugIn`.   
  

