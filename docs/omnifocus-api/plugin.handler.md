# `PlugIn.Handler`

## Constructors

### `new PlugIn.Handler(invoke: `Function`)` → `PlugIn.Handler`

Returns a new `PlugIn.Handler`. Only used within an handler JavaScript file embedded within a PlugIn.   
  


## Instance Properties

### `var invoke` → `Function` _read-only_

The `Function` that will be executed for each handler registered for an event posted by an application object.   
  


### `var name` → `String` _read-only_

Returns the name of the `PlugIn.Handler`.   
  


### `var plugIn` → `PlugIn` _read-only_

Returns the `PlugIn` that contains this object.   
  


### `var willAttach` → `Function` or `null`

An optional `Function` that can be set on `PlugIn.Handler` as it is being loaded (but not after). This function is passed the application object that post events to trigger the handler. The return value should be a state object that is JSON archivable (or `undefined` if the handler has no state to maintain across invocations).   
  


### `var willDetach` → `Function` or `null`

An optional `Function` that can be set on `PlugIn.Handler` as it is being loaded (but not after). Called when a previously attached `PlugIn.Handler` is being detached from an application object. Any return value or thrown error are ignored.   
  

