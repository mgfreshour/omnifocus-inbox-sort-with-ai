# `Pasteboard.Item`

## Constructors

### `new Pasteboard.Item()` → `Pasteboard.Item`

Make a new empty pasteboard item with no contents.   
  


## Instance Functions

### `function dataForType(type: `TypeIdentifier`)` → `Data` or `null`

The `Data` representation for the given type in this pasteboard item, or `null` if none is available.   
  


### `function setDataForType(data: `Data`, type: `TypeIdentifier`)`

Set the `Data` representation for the given type in this pasteboard item, replacing any previously set data.   
  


### `function stringForType(type: `TypeIdentifier`)` → `String` or `null`

The `String` representation for the given type in this pasteboard item, or `null` if none is available.   
  


### `function setStringForType(string: `String`, type: `TypeIdentifier`)`

Set the `String` representation for the given type in this pasteboard item, replacing any previously set data.   
  


## Instance Properties

### `var types` → `Array` of `TypeIdentifier` _read-only_

The list of types available for this pasteboard item.   
  

