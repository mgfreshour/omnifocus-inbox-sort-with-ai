# `DocumentWindow` : `Window`

## Instance Functions

### `function selectObjects(objects: `Array` of `DatabaseObject`)`

Clears the current selection and then selects the given objects in the content area, if present in the current perspective of this window.   
  


### `function forecastDayForDate(date: `Date`)` → `ForecastDay`

Returns a `ForecastDay` object that encompasses `date`. This will throw an error if Forecast is not the current perspective in this window.   
  


### `function selectForecastDays(days: `Array` of `ForecastDay`)`

Selects the days in the Forecast picker represented by `days`. This will throw an error if Forecast is not the current perspective in this window.   
  


## Instance Properties

### `var content` → `ContentTree` or `null` _read-only_

The tree of nodes representing the content area of the window.   
  


### `var focus` → `SectionArray` or `null`

The Folders and Projects that the window is focusing on, limiting the sidebar to show only these items.   
  


### `var inspectorVisible` → `Boolean`

Whether the inspector is currently visible in the window. On iOS, showing this pane may implicitly hide other panes and may be only transiently visible, depending on the available space.   
  


### `var isCompact` → `Boolean` _read-only_

Whether the window is in compact layout, where extra panes like the sidebar and inspector are shown atop the content instead of side-by-side.   
  


### `var isTab` → `Boolean` _read-only_

Whether or not this window is a tab. This only returns true on macOS.   
  


### `var perspective` → `Perspective.BuiltIn` or `Perspective.Custom` or `null`

The currently selected perspective in this `Window`.   
  


### `var selection` → `Selection` _read-only_

The current selection in the window.   
  


### `var sidebar` → `SidebarTree` or `null` _read-only_

The tree of nodes representing the sidebar of the window.   
  


### `var sidebarVisible` → `Boolean`

Whether the sidebar is currently visible in the window. On iOS, showing this pane may implicitly hide other panes and may be only transiently visible, depending on the available space.   
  


### `var tabGroupWindows` → `Array` of `DocumentWindow` _read-only_

The array of sibling `Window` objects that are in tabs alongside this `Window`. If `isTab` is false, then this will return an array that solely contains this `Window`.   
  


### `var toolbarVisible` → `Boolean`

Whether the toolbar is currently visible in the window. This only returns false on macOS; the toolbar is always visible on iOS and visionOS.   
  

