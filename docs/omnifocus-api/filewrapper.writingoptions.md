# `FileWrapper.WritingOptions`

## Class Properties

### `var Atomic` → `FileWrapper.WritingOptions` _read-only_

Write the entire `FileWrapper` atomically, so that either the entire file package is replaced or none of it is.   
  


### `var UpdateNames` → `FileWrapper.WritingOptions` _read-only_

On successful writing, update the filename of each file wrapper recursively so that following writes can use performance optimizations using hard links.   
  


### `var all` → `Array` of `FileWrapper.WritingOptions` _read-only_
