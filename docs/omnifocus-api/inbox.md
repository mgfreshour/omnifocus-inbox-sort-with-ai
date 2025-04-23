# `Inbox` : `TaskArray`

An `Array` of tasks that are in the inbox.   
  


## Instance Functions

### `function apply(function: `Function``(`‍task: `Task`‍`)` → `ApplyResult` or `null`)` → `ApplyResult` or `null`

Calls the given function for each `Task` in the `Inbox` and recursively into any child tasks. The supplied function can optionally return a `ApplyResult` to skip enumeration of some elements.   
  


## Instance Properties

### `var beginning` → `Task.ChildInsertionLocation` _read-only_

A location that can be used when adding, duplicating, or moving tasks.   
  


### `var ending` → `Task.ChildInsertionLocation` _read-only_

A location that can be used when adding, duplicating, or moving tasks.   
  

