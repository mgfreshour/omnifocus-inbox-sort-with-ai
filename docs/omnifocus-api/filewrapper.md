# `FileWrapper`

## Class Functions

### `function withContents(name: `String` or `null`, contents: `Data`)` → `FileWrapper`

Returns a new `FileWrapper` that represents a flat file containing the given data.   
  


### `function withChildren(name: `String` or `null`, children: `Array` of `FileWrapper`)` → `FileWrapper`

Returns a new `FileWrapper` that represents a directory with the given child file wrappers. Each child file wrapper must have a unique name specified.   
  


### `function fromURL(url: `URL`, options: `Array` of `FileWrapper.ReadingOptions` or `null`)` → `FileWrapper`

Reads a `FileWrapper` from an existing URL.   
  


## Instance Functions

### `function childNamed(name: `String`)` → `FileWrapper` or `null`

Returns the child file wrapper with the specified name, or `null` if the receiver is not a directory or doesn't have a child with that name.   
  


### `function filenameForChild(child: `FileWrapper`)` → `String` or `null`

Returns the unique file name that will be used for the given child `FileWrapper`, or `null` if this file wrapper is not a child of the receiver.   
  


### `function write(url: `URL`, options: `Array` of `FileWrapper.WritingOptions` or `null`, originalContentsURL: `URL` or `null`)`

Writes the `FileWrapper` to the given `URL`. NOTE: Any existing file or folder at the desination `URL` will be replaced. Care must be taken when developing scripts to avoid unintended data loss.   
  


## Instance Properties

### `var children` → `Array` of `FileWrapper` _read-only_

Returns an `Array` of child `FileWrappers`, if this represents a directory. Otherwise, an empty array is returned.   
  


### `var contents` → `Data` or `null` _read-only_

Returns the regular file contents of the wrapper, if this represents a regular file. Otherwise, `null` is returned.   
  


### `var destination` → `URL` or `null` _read-only_

Returns the destination if this represents a symbolic link. Otherwise, `null` is returned.   
  


### `var filename` → `String` or `null`

Returns the actual file name that was last read for this file wrapper. Depending on the names of other sibling wrappers, this may not be what file name will be written.   
  


### `var preferredFilename` → `String` or `null`

Returns the preferred file name that should be used when writing the file wrapper if no other file in the same parent directory wrapper is in use.   
  


### `var type` → `FileWrapper.Type` _read-only_

Returns the type of this `FileWrapper`.   
  

