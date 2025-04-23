# `FileSaver`

A `FileSaver` allows the user to save a `FileWrapper` to a `URL`s via the system-supplied file picking interface.   
  


## Constructors

### `new FileSaver()` → `FileSaver`

Returns a new `FileSaver` with default settings.   
  


## Instance Functions

### `function show(fileWrapper: `FileWrapper`)` → `Promise` of `URL`

Presents the system file saving interface to the user, allowing them to choose a location and file name to save the file wrapper. The returned `Promise` will yield the chosen `URL` on success. If the user cancels chosing, the `Promise` will be rejected.   
  


## Instance Properties

### `var message` → `String`

A message to display describing what file is being saved. This is currently only supported on macOS.   
  


### `var nameLabel` → `String`

The label shown next to the user-editable file name field. This is currently only supported on macOS.   
  


### `var prompt` → `String`

The prompt shown on the the save button. This is currently only supported on macOS.   
  


### `var types` → `Array` of `TypeIdentifier` or `null`

The file types that will be allowed. If `null`, all file types will be allowed. Defaults to `null`.   
  

