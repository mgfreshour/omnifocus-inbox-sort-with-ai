# `DatedObject` : `DatabaseObject`

## Instance Properties

### `var added` → `Date` or `null`

Returns the date the object was first saved. If the object is newly inserted, this will be `null`. For newly inserted objects, the `added` property may be set (but once an object is saved for the first time, the property is read-only).   
  


### `var modified` → `Date` or `null`

Returns the date the object was most recently modified. If the object is newly inserted, this will be `null`. For newly inserted objects, the `modified` property may be set (but once an object is saved for the first time, the property is read-only).   
  

