# `Document`

## Class Functions

### `function makeNew(resultFunction: `Function``(`‍document: `Document` or `Error`‍`)` or `null`)` → `Promise` of `Document`

Create a new document, which can be populated with data and then presented. On iOS, if the document is not presented by the time the `resultFunction` returns, it will be closed. On macOS, the document will be left around and accessible to the running script. `resultFunction` is executed before any functions tethered to the result Promise are executed. Returns a `Promise` that will yield the new document or an error.   
  


### `function makeNewAndShow(resultFunction: `Function``(`‍document: `Document` or `Error`‍`)` or `null`)` → `Promise` of `Document`

Create a new document and presents it. Returns a `Promise` that will yield the new document or an error.   
  


## Instance Functions

### `function close(didCancel: `Function``(`‍document: `Document`‍`)` or `null`)`

Close this document. If for some reason the document cannot be closed, the `didCancel` function may be called at some point in the future, with the original document as the single argument. For example, on the Mac the user may review unsaved changes and may cancel the close operation. If the document is closed, the `didCancel` function will not be called at all.   
  


### `function save()`

Save this document.   
  


### `function fileWrapper(type: `String` or `null`)` → `FileWrapper`

Deprecated: Please use `makeFileWrapper()` instead. Returns a new `FileWrapper` representing the contents of the document formatted as the specified type, or its current `fileType` if a `null` is passed for the type.   
  


### `function makeFileWrapper(baseName: `String`, type: `String` or `null`)` → `Promise` of `FileWrapper`

Generates a `FileWrapper` representing the contents of the document formatted as the specified type, or its current `fileType` if a `null` is passed for the type. Returns a `Promise` that will yield the file wrapper or an error. The returned file wrapper will have a name based off the given `baseName` and the default path extension for the requested file type.   
  


### `function undo()`

Undo the last done action.   
  


### `function redo()`

Redo the last undone action.   
  


### `function show(completed: `Function``(`‍‍`)` or `null`)`

Presents the document, ordering the window forward on macOS, and possibly closing the existing document and opening the new on on iOS. Calls the completion function once the document is shown.   
  


## Instance Properties

### `var canRedo` → `Boolean` _read-only_

Whether there are currently any actions that can be redone.   
  


### `var canUndo` → `Boolean` _read-only_

Whether there are currently any actions that can be undone.   
  


### `var fileType` → `String` or `null` _read-only_

The file type identifier the document uses when saving, if set.   
  


### `var name` → `String` or `null` _read-only_

Document name.   
  


### `var writableTypes` → `Array` of `String` _read-only_

A list of all of the file types that this document can be written as.   
  

