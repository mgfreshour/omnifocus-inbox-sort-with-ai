# `Library` : `SectionArray`

An `Array` of folders and projects at the top level of the database. (This can be referenced via the top-level global variable `library`.)   
  


## Instance Functions

### `function apply(function: `Function``(`‍section: `Project` or `Folder`‍`)` → `ApplyResult` or `null`)` → `ApplyResult` or `null`

Calls the given function for each `Folder` and `Project` in the `Library` and recursively into any child folders. Note that the tasks in projects are not included. The supplied function can optionally return a `ApplyResult` to skip enumeration of some elements.   
  


## Instance Properties

### `var beginning` → `Folder.ChildInsertionLocation` _read-only_

Returns a location referring to the beginning of the top-level projects and folders in the database. (Reference this using `library.beginning`.)   
  


### `var ending` → `Folder.ChildInsertionLocation` _read-only_

Returns a location referring to the ending of the top-level projects and folders in the database. (Reference this using `library.ending`.)   
  

