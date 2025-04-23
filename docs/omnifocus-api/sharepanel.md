# `SharePanel`

An interface that can display the system share interaction for the given items.   
  


## Constructors

### `new SharePanel(items: `Array` of `URL`, `String`, `Image`, or `FileWrapper`)` → `SharePanel`

Create a new share panel with the given items.   
  


## Instance Functions

### `function addItem(shareItem: `URL`, `String`, `Image`, or `FileWrapper`)`

Appends the item to the end of `items`.   
  


### `function addItems(shareItems: `Array` of `URL`, `String`, `Image`, or `FileWrapper`)`

Appends the contents of the given array to the end of `items`.   
  


### `function removeItem(shareItem: `URL`, `String`, `Image`, or `FileWrapper`)`

Removes the first occurrence of the item from `items` if it is present in `items`.   
  


### `function removeItems(shareItems: `Array` of `URL`, `String`, `Image`, or `FileWrapper`)`

Removes the first occurrence of each member of the given array from `items` if that member is present in `items`.   
  


### `function clearItems()`

Sets `items` to an empty array. Note: Calling `show` when `items` is empty results in an error, so be sure to add new items after calling this and before calling `show`.   
  


### `function show()`

Presents the share panel for its items. Calling this when `items` is empty will result in an error.   
  


## Instance Properties

### `var items` → `Array` of `URL`, `String`, `Image`, or `FileWrapper`

The items that will be supplied to the system share interaction upon calling `show`.   
  

