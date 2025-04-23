# `URL.Bookmark`

A `URL.Bookmark` records the permission to access a given `URL` and will restore that permission, as well as a possibly renamed file, at a later point.   
  


## Class Functions

### `function fromURL(url: `URL`)` → `URL.Bookmark`

Creates a `URL.Bookmark` from an existing `URL`, which should have been returned by `FilePicker`. This can then be stored in a `Credentials` object to persistently record the permission to access this `URL`.   
  


## Instance Functions

### `function access()` → `Promise` of `URL.Access`

Attempts to resolve the instance into a `URL` and grant access to it through the returned `Promise`. Access to the `URL` will only last as long as the `URL.Access` object exists (which should not be stored longer than necessary).   
  

