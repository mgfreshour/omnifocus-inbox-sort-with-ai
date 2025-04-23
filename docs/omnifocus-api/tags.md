# `Tags` : `TagArray`

An `Array` of tags at the top level of the database.   
  


## Instance Functions

### `function apply(function: `Function``(`‍tag: `Tag`‍`)` → `ApplyResult` or `null`)` → `ApplyResult` or `null`

Calls the given function for each `Tag` in the `Library` and recursively into any child tags. The supplied function can optionally return a `ApplyResult` to skip enumeration of some elements.   
  


## Instance Properties

### `var beginning` → `Tag.ChildInsertionLocation` _read-only_

Returns a location referring to the beginning of the top-level tags in the database.   
  


### `var ending` → `Tag.ChildInsertionLocation` _read-only_

Returns a location referring to the ending of the top-level tags in the database.   
  

