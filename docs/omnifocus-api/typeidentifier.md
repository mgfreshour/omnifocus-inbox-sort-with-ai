# `TypeIdentifier`

## Class Functions

### `function fromPathExtension(pathExtension: `String`, isDirectory: `Boolean`)` → `TypeIdentifier`

Return a `TypeIdentifier` that matches items that have the given path extension and are (or are not) directories.   
  


## Class Properties

### `var URL` → `TypeIdentifier` _read-only_

The URL type.   
  


### `var binaryPropertyList` → `TypeIdentifier` _read-only_

The binary property list type.   
  


### `var csv` → `TypeIdentifier` _read-only_

The comma-separated text type.   
  


### `var editableTypes` → `Array` of `TypeIdentifier` _read-only_

The list of `TypeIdentifier`s that can be read and written natively by documents in this application.   
  


### `var gif` → `TypeIdentifier` _read-only_

The GIF image type.   
  


### `var image` → `TypeIdentifier` _read-only_

A generic type that all image types conform to.   
  


### `var jpeg` → `TypeIdentifier` _read-only_

The JPEG image type.   
  


### `var json` → `TypeIdentifier` _read-only_

The JSON type.   
  


### `var ofocus` → `TypeIdentifier` _read-only_

The OmniFocus document file type.   
  


### `var pdf` → `TypeIdentifier` _read-only_

The PDF type.   
  


### `var plainText` → `TypeIdentifier` _read-only_

The plain text type.   
  


### `var png` → `TypeIdentifier` _read-only_

The PNG image type.   
  


### `var propertyList` → `TypeIdentifier` _read-only_

The generic property list type.   
  


### `var readableTypes` → `Array` of `TypeIdentifier` _read-only_

The list of `TypeIdentifier`s that can be read by documents in this this application.   
  


### `var rtf` → `TypeIdentifier` _read-only_

The RTF type.   
  


### `var rtfd` → `TypeIdentifier` _read-only_

The RTFD type.   
  


### `var taskPaper` → `TypeIdentifier` _read-only_

The TaskPaper-formatted tasks pasteboard type.   
  


### `var tasks` → `TypeIdentifier` _read-only_

The pasteboard type identifier for OmniFocus tasks and projects.   
  


### `var tasksAndFolders` → `TypeIdentifier` _read-only_

The pasteboard type identifier for OmniFocus tasks, projects, and folders.   
  


### `var tiff` → `TypeIdentifier` _read-only_

The TIFF image type.   
  


### `var writableTypes` → `Array` of `TypeIdentifier` _read-only_

The list of `TypeIdentifier`s that can be written by documents in this application (though some documents may be exportable only in a subset of these types).   
  


### `var xmlPropertyList` → `TypeIdentifier` _read-only_

The XML property list type.   
  


## Constructors

### `new TypeIdentifier(identifier: `String`)` → `TypeIdentifier`

Returns a new `TypeIdentifier` with the given identifier.   
  


## Instance Functions

### `function conformsTo(other: `TypeIdentifier`)` → `Boolean`

Returns `true` if the instance is the same as the given argument or a more specific type. For example, `TypeIdentifier.png.conformsTo(TypeIdentifier.image)` will be `true`, but `TypeIdentifier.png.conformsTo(TypeIdentifier.plainText)` will be `false`.   
  


## Instance Properties

### `var displayName` → `String` _read-only_

Returns a human-readable description of the type.   
  


### `var identifier` → `String` _read-only_

Returns a unique string for a type identifier, suitable for archiving or encoding in scripts.   
  


### `var pathExtensions` → `Array` of `String` _read-only_

The list of filesystem path extensions used by this type.   
  

