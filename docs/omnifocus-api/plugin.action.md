# `PlugIn.Action`

## Constructors

### `new PlugIn.Action(perform: `Function`)` → `PlugIn.Action`

Returns a new `PlugIn.Action`. Only used within an action JavaScript file embedded within a PlugIn.   
  


## Instance Properties

### `var description` → `String` _read-only_

### `var label` → `String` _read-only_

Returns the default label to use for interface controls that invoke the action.   
  


### `var longLabel` → `String` _read-only_

Returns the label to use for interface controls that invoke the action, when a long amount of space is available.   
  


### `var mediumLabel` → `String` _read-only_

Returns the label to use for interface controls that invoke the action, when a medium amount of space is available.   
  


### `var name` → `String` _read-only_

Returns the name of the `PlugIn.Action`.   
  


### `var paletteLabel` → `String` _read-only_

Returns the label to use for interface controls that show a prototype of the action control, such as on a macOS toolbar configuration sheet.   
  


### `var perform` → `Function` _read-only_

### `var plugIn` → `PlugIn` _read-only_

Returns the `PlugIn` that contains this object.   
  


### `var shortLabel` → `String` _read-only_

Returns the label to use for interface controls that invoke the action, when a short amount of space is available.   
  


### `var validate` → `Function` or `null`

A function to check whether the action is supported, given the current application state, as determined by the arguments passed (typically including the selection). This optional Function may be configured while the `Action` is being loaded, but after that the `Action` will be frozen.   
  

