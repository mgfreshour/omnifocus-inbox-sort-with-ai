# `URL`

## Class Functions

### `function choose(types: `Array` of `String`)` → `URL` or `null`

Deprecated: Please use `FilePicker` instead.

Allows the user to choose a file `URL` if possible and returns a new instance, or `null` otherwise.   
  


### `function chooseFolder()` → `URL` or `null`

Deprecated: Please use `FilePicker` instead.

Allows the user to choose a folder `URL` if possible and returns a new instance, or `null` otherwise.   
  


### `function fromString(string: `String`, relativeToURL: `URL` or `null`)` → `URL` or `null`

Parses the string as a `URL` if possible and returns a new instance, or `null` if the string is not a valid URL. If `baseURL` is not `null`, the result is a relative URL.   
  


### `function fromPath(path: `String`, isDirectory: `Boolean`, relativeToURL: `URL` or `null`)` → `URL`

Returns a new `file` URL with the given path and assumption of whether it is a directory.   
  


### `function tellScript(app: `String`, js: `String`, arg: `Object` or `null`)` → `URL` or `null`

Creates a `URL` to invoke the given JS on the given app (url scheme) appropriate for use with the call function.   
  


### `function tellFunction(app: `String`, jsFunction: `Function`, arg: `Object` or `null`)` → `URL` or `null`

Creates a `URL` to invoke the given JS function on the given app (url scheme) appropriate for use with the call function.   
  


## Class Properties

### `var currentAppScheme` → `String` _read-only_

Returns the URL scheme for the current app.   
  


### `var documentsDirectory` → `URL` _read-only_

Returns the application's Documents directory. This is in the application's sandbox, and on the Mac is **not** the user's Documents directory. This is accessible by the application without using `access()`.   
  


## Instance Functions

### `function fetch(success: `Function``(`‍contents: `Data`‍`)`, failure: `Function``(`‍error: `Error`‍`)` or `null`)`

Get the contents at the destination of this URL.   
  


### `function call(success: `Function`, failure: `Function` or `null`)`

Invoke an [x-callback-url API](http://x-callback-url.com) end-point, with the callback functions being invoked when a reply is received. When a reply is received, the parameters of that URL are decoded as JSON, or left as String values if not valid JSON, and stored as properties of a result object. For a successful reply, if the result object has one property, its value is passed as the first argument to the success function. If there are zero or more than one parameters, the full object is passed as the first argument. In both cases, the success function is passed a second argument that is the full object of parameters. The failure callback is always passed the object will all the result parameters, typically `errorCode` and `errorMessage`.   
  


### `function open()`

Ask the system to open this URL.   
  


### `function find(types: `Array` of `TypeIdentifier`, recurse: `Boolean` or `null`)` → `Promise` of `Array` of `URL`

Scan a directory `URL` for files of the given types. If `recurse` is specified and is false, only the immediate contents of the directory will be considered. If `recurse` is not specified or is `true`, the full directory tree will be scanned.   
  


### `function toString()` → `String`

### `function appendingPathComponent(component: `String`)` → `URL`

Return a new `URL` with the given string added at the end of the path.   
  


### `function appendingPathExtension(pathExtension: `String`)` → `URL`

Returns a new `URL` with the last path component having the given path extension added, including a separating "."   
  


### `function deletingPathExtension()` → `URL`

Returns a new `URL` with the path extension (if any) of the last path component removed.   
  


### `function deletingLastPathComponent()` → `URL`

Returns a new `URL` with the last path component removed.   
  


## Instance Properties

### `var absoluteString` → `String` _read-only_

Returns the absolute string for the `URL`.   
  


### `var absoluteURL` → `URL` _read-only_

Returns the absolute `URL`.   
  


### `var baseURL` → `URL` or `null` _read-only_

Returns the base `URL` if this `URL` is relative, or `null` if it is absolute.   
  


### `var fragment` → `String` or `null` _read-only_

Returns the fragment component of the `URL`, or `null`.   
  


### `var hasDirectoryPath` → `Boolean` _read-only_

Returns `true` if the `URL`'s path represents a directory.   
  


### `var host` → `String` or `null` _read-only_

Returns the host component of the `URL` or `null`.   
  


### `var isFileURL` → `Boolean` _read-only_

Returns `true` if the scheme is `file:`.   
  


### `var lastPathComponent` → `String` _read-only_

Returns the last component of the `URL`'s path or an empty string.   
  


### `var password` → `String` or `null` _read-only_

Returns the password component of the `URL` or `null`.   
  


### `var path` → `String` or `null` _read-only_

Returns the path component of the `URL` or `null`.   
  


### `var pathComponents` → `Array` of `String` _read-only_

Returns the path of the `URL` as an array of components.   
  


### `var pathExtension` → `String` _read-only_

Returns the path extension of the last path component of the `URL` or the empty string.   
  


### `var port` → `Number` or `null` _read-only_

Returns the port component of the `URL` or `null`.   
  


### `var query` → `String` or `null` _read-only_

Returns the query component of the `URL` or `null`.   
  


### `var relativePath` → `String` or `null` _read-only_

Returns the relative path of the URL, or the absolute path if this `URL` is not relative   
  


### `var relativeString` → `String` _read-only_

Returns the relative portion of the `URL` if it is relative, otherwise this returns the absolute string.   
  


### `var scheme` → `String` or `null` _read-only_

Returns the scheme of the `URL`.   
  


### `var string` → `String` _read-only_

String absoluteString representation of this URL.   
  


### `var user` → `String` or `null` _read-only_

Returns the user component of the `URL` or `null`.   
  

