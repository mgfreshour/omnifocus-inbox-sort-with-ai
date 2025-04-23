# `Application`

## Instance Functions

### `function openDocument(from: `Document` or `null`, url: `URL`, completed: `Function``(`‍documentOrError: `Document` or `Error`, alreadyOpen: `Boolean`‍`)`)`

Attempts to open the specified document and return a reference to it asynchronously. If the document is already open, the reference is passed along. Note that due to platform sandboxing restrictions, opening the document may fail if the application doesn't have currently permission to access the given `URL`. The document, if any, that is associated with the calling script can be passed along to help grant permission to open the new document. The passed in function will be passed two argument. The first will be either either the `Document` or an `Error`. On success, the second argument is a `Boolean` specifying whether the document was already open.   
  


## Instance Properties

### `var buildVersion` → `Version` _read-only_

The internal build version number for the app. See also `userVersion`.   
  


### `var commandKeyDown` → `Boolean` _read-only_

Whether the Command key is currently down.   
  


### `var controlKeyDown` → `Boolean` _read-only_

Whether the Control key is currently down.   
  


### `var name` → `String` _read-only_

Application name.   
  


### `var optionKeyDown` → `Boolean` _read-only_

Whether the Option key is currently down.   
  


### `var platformName` → `String` _read-only_

Returns a string describing the current platform, currently `"iOS"` or `"macOS"`.   
  


### `var shiftKeyDown` → `Boolean` _read-only_

Whether the Shift key is currently down.   
  


### `var userVersion` → `Version` _read-only_

The user-visible version number for the app. See also `buildVersion`.   
  


### `var version` → `String` _read-only_

Deprecated: Recommend using either `userVersion` or `buildVersion`.

For backwards compatibility with existing scripts, this returns the same result as `buildVersion.versionString`. We recommend using either the user-visible `userVersion` or the internal `buildVersion` instead, which are more clear about which version they're returning and provide their results as `Version` objects which can be semantically compared with other `Version` objects.   
  

