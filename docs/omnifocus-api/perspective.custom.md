# `Perspective.Custom` : `DatedObject`

## Class Functions

### `function byName(name: `String`)` → `Perspective.Custom` or `null`

A custom perspective with the given name, if one exists. If there are multiple perspectives with the same name, it is not defined which will be returned.   
  


### `function byIdentifier(identifier: `String`)` → `Perspective.Custom` or `null`

Returns the custom perspective with the specified identifier, or `null` if no such perspective exists.   
  


## Class Properties

### `var all` → `Array` of `Perspective.Custom` _read-only_

Returns all the custom perspectives.   
  


## Instance Functions

### `function fileWrapper()` → `FileWrapper`

Returns an archived file wrapper for the custom perspective. The file wrapper's preferred filename will be the name of the perspective with an appropriate file extension applied. Its contents will include a plist representing the perspective's settings, along with any image attachments needed to display its icon.   
  


### `function writeFileRepresentationIntoDirectory(parentURL: `URL`)` → `URL`

Writes the perspective's `fileWrapper()` within a given parent directory URL, returning the URL of the saved FileWrapper. This function requires sandboxed access to the parent folder; it may be easier to work with the perspective's `fileWrapper()`, which can be accessed directly or saved to disk using `FileSaver`.   
  


## Instance Properties

### `var archivedFilterRules` → `Object`

For a custom perspective, `archivedFilterRules` holds a JSON archive representing the perspective's rules. These rules will be interpreted differently based on the `archivedTopLevelFilterAggregation` setting.   
  


### `var archivedTopLevelFilterAggregation` → `String` or `null`

For a custom perspective, the `archivedTopLevelFilterAggregation` indicates which aggregation method is being used to interpret the `archivedFilterRules`: "all", "any", or "none"   
  


### `var iconColor` → `Color` or `null`

The `Color` that is applied to the perspective icon symbol. (Does not apply when a perspective uses a custom icon.)   
  


### `var identifier` → `String` _read-only_

The unique identifier of the custom perspective.   
  


### `var name` → `String`

The name of the custom perspective.   
  

