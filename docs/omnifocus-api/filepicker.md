# `FilePicker`

A `FilePicker` allows the user to select `URL`s for files via the system-supplied file picking interface.   
  


## Constructors

### `new FilePicker()` → `FilePicker`

Returns a new `FilePicker` with default settings.   
  


## Instance Functions

### `function show()` → `Promise` of `Array` of `URL`

Presents the system file selection interface to the user, allowing them to choose one or more files of the given types. The returned `Promise` will yield the chosen `URL`s on success. If the user cancels chosing, the `Promise` will be rejected. Note that even when picking a single file or folder, the result will be an array of `URL`s.   
  


## Instance Properties

### `var folders` → `Boolean`

If `true`, then folders may be selected, but not files. In this case, `types` is ignored. Defaults to `false`.   
  


### `var message` → `String`

A message to display describing what files are being picked. This is currently only supported on macOS.   
  


### `var multiple` → `Boolean`

If `true`, then multiple files may be selected. Defaults to `false`.   
  


### `var types` → `Array` of `TypeIdentifier` or `null`

The file types that will be allowed. If `null`, all file types will be allowed. Defaults to `null`.   
  

