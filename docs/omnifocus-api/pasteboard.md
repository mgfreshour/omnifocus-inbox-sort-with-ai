# `Pasteboard`

A pasteboard temporarily holds representations of items of different types for transfer between different applications or different locations in the application.   
  


## Class Functions

### `function makeUnique()` → `Pasteboard`

Creates a new unique pasteboard.   
  


## Class Properties

### `var general` → `Pasteboard` _read-only_

The `Pasteboard` used for user-initiated copy/paste support.   
  


## Instance Functions

### `function availableType(types: `Array` of `TypeIdentifier`)` → `TypeIdentifier` or `null`

The first type from the provided list which is available on the pasteboard, or `null` if none are available.   
  


### `function addItems(items: `Array` of `Pasteboard.Item`)`

Appends the new items to the pasteboard.   
  


### `function clear()`

Remove all items from the pasteboard.   
  


### `function dataForType(type: `TypeIdentifier`)` → `Data` or `null`

The `Data` representation for the given type in this pasteboard, or `null` if none is available.   
  


### `function setDataForType(data: `Data`, type: `TypeIdentifier`)`

Set the `Data` representation for the given type in this pasteboard, replacing any previously set data.   
  


### `function stringForType(type: `TypeIdentifier`)` → `String` or `null`

The `String` representation for the given type in this pasteboard, or `null` if none is available.   
  


### `function setStringForType(string: `String`, type: `TypeIdentifier`)`

Set the `String` representation for the given type in this pasteboard, replacing any previously set data.   
  


## Instance Properties

### `var URL` → `URL` or `null`

Gets or sets the pasteboard content as a single URL.   
  


### `var URLs` → `Array` of `URL` or `null`

Gets or sets the pasteboard content as a list of URLs.   
  


### `var color` → `Color` or `null`

Gets or sets the pasteboard content as a single color.   
  


### `var colors` → `Array` of `Color` or `null`

Gets or sets the pasteboard content as a list of colors.   
  


### `var hasColors` → `Boolean` _read-only_

Returns `true` if the pasteboard contains one or more colors.   
  


### `var hasImages` → `Boolean` _read-only_

Returns `true` if the pasteboard contains one or more images.   
  


### `var hasStrings` → `Boolean` _read-only_

Returns `true` if the pasteboard contains one or more strings.   
  


### `var hasURLs` → `Boolean` _read-only_

Returns `true` if the pasteboard contains one or more URLs.   
  


### `var image` → `Image` or `null`

Gets or sets the pasteboard content as a single image.   
  


### `var images` → `Array` of `Image` or `null`

Gets or sets the pasteboard content as a list of images.   
  


### `var items` → `Array` of `Pasteboard.Item`

The array of individual items on the pasteboard, each potentially with their own set of types.   
  


### `var string` → `String` or `null`

Gets or sets the pasteboard content as a single plain-text string.   
  


### `var strings` → `Array` of `String` or `null`

Gets or sets the pasteboard content as a list of plain-text strings.   
  


### `var types` → `Array` of `TypeIdentifier` _read-only_

The list of pasteboard types currently available on the pasteboard.   
  

