# `Folder` : `ActiveObject`

## Class Functions

### `function byIdentifier(identifier: `String`)` → `Folder` or `null`

Returns the `Folder` with the specified identifier, or `null` if no such folder exists.   
  


## Constructors

### `new Folder(name: `String`, position: `Folder` or `Folder.ChildInsertionLocation` or `null`)` → `Folder`

## Instance Functions

### `function folderNamed(name: `String`)` → `Folder` or `null`

Returns the first child `Folder` with the given name that is contained directly in this folder, or `null`.   
  


### `function projectNamed(name: `String`)` → `Project` or `null`

Returns the first child `Project` of this folder with the given name, or `null`.   
  


### `function sectionNamed(name: `String`)` → `Project` or `Folder` or `null`

Returns the first child `Folder` or `Project` in this folder with the given name, or `null`.   
  


### `function childNamed(name: `String`)` → `Project` or `Folder` or `null`

An alias for `sectionNamed`.   
  


### `function apply(function: `Function``(`‍folder: `Folder`‍`)` → `ApplyResult` or `null`)` → `ApplyResult` or `null`

Calls the given function for this `Folder` and recursively into any child folders and projects. The tasks within any projects are not included. The supplied function can optionally return a `ApplyResult` to skip enumeration of some elements.   
  


## Instance Properties

### `var after` → `Folder.ChildInsertionLocation` _read-only_

Returns a location referring to the position just after this folder within its containing `Folder` or `Database`.   
  


### `var before` → `Folder.ChildInsertionLocation` _read-only_

Returns a location referring to the position just before this folder within its containing `Folder` or `Database`.   
  


### `var beginning` → `Folder.ChildInsertionLocation` _read-only_

Returns a location referring to the the beginning of the contained projects and folders in this folder.   
  


### `var children` → `SectionArray` _read-only_

An alias for `sections`.   
  


### `var ending` → `Folder.ChildInsertionLocation` _read-only_

Returns a location referring to the the ending of the contained projects and folders in this folder.   
  


### `var flattenedChildren` → `SectionArray` _read-only_

An alias for `flattenedSections`.   
  


### `var flattenedFolders` → `FolderArray` _read-only_

Returns a flat array of all folders in this folder, sorted by their order in the database.   
  


### `var flattenedProjects` → `ProjectArray` _read-only_

Returns a flat array of all projects in this folder, sorted by their order in the database.   
  


### `var flattenedSections` → `SectionArray` _read-only_

Returns a flat array of all folders and project in this folder, sorted by their order in the database.   
  


### `var folders` → `FolderArray` _read-only_

Returns the folders contained directly as children of this folder.   
  


### `var name` → `String`

The name of the folder.   
  


### `var parent` → `Folder` or `null` _read-only_

The parent `Folder` which contains this folder.   
  


### `var projects` → `ProjectArray` _read-only_

Returns the projects contained directly as children of this folder.   
  


### `var sections` → `SectionArray` _read-only_

Returns a sorted list of the folders and projects contained directly within this folder.   
  


### `var status` → `Folder.Status`

The folder's status.   
  

