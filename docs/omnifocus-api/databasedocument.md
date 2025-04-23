# `DatabaseDocument` : `Document`

## Instance Functions

### `function newWindow()` → `Promise` of `DocumentWindow`

Returns a `Promise` that will yield either a newly created and displayed `Window` or an error. On macOS, this method respects the System Preference governing new window behavior (tab vs. window). That preference is accessible at `System Preferences` > `Dock` > `Prefer tabs when opening documents`.   
  


### `function newTabOnWindow(window: `DocumentWindow`)` → `Promise` of `DocumentWindow`

Returns a `Promise` that will yield either a new tab adjacent to `window` or an error. This is not available on iOS.   
  


### `function sync()` → `Promise` of `Boolean`

Returns a `Promise` that will yield either `true` indicating a successful sync, or an error.   
  


## Instance Properties

### `var windows` → `Array` of `DocumentWindow` _read-only_
