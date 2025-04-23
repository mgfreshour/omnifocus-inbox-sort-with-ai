# `NamedStyle.List`

## Instance Functions

### `function add(name: `String` or `null`)` → `NamedStyle`

Makes a new `NamedStyle` at the end of the `NamedStyleList`, and optionally assigns it a name.   
  


### `function byName(name: `String`)` → `NamedStyle` or `null`

Returns the first named style that has the specified `name`, or `null` if none do.   
  


### `function byIdentifier(identifier: `String`)` → `NamedStyle` or `null`

Returns the single named style with the specified `identifier`, or `null` if no style has that `identifier`.   
  


### `function moveStyles(styles: `Array` of `NamedStyle`, position: `NamedStylePosition`)`

Reorders the named styles within the `NamedStyleList`. This cannot be used to move styles between documents.   
  


### `function duplicateStyles(styles: `Array` of `NamedStyle`, position: `NamedStylePosition`)` → `Array` of `NamedStyle`

## Instance Properties

### `var all` → `Array` of `NamedStyle` _read-only_

Returns the list of all `NamedStyles`. Note that the order determine which attribute values are applied if two named styles have conflicting settings.   
  


### `var beginning` → `NamedStylePosition` _read-only_

Returns a `NamedStylePosition` that indicates the position before any existing named styles.   
  


### `var end` → `NamedStylePosition` _read-only_

Returns a `NamedStylePosition` that indicates the position before after existing named styles.   
  

