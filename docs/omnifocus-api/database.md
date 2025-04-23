# `Database`

## Instance Functions

### `function objectForURL(url: `URL`)` → `DatabaseObject` or `null`

Returns the `DatabaseObject` for the given URL, if it exists.   
  


### `function tagNamed(name: `String`)` → `Tag` or `null`

Returns the first top-level `Tag` with the given name, or `null`.   
  


### `function folderNamed(name: `String`)` → `Folder` or `null`

Returns the first top-level `Folder` with the given name, or `null`.   
  


### `function projectNamed(name: `String`)` → `Project` or `null`

Returns the first top-level `Project` with the given name, or `null`.   
  


### `function projectsMatching(search: `String`)` → `Array` of `Project`

Returns each existing `Project` that Smart Matches the given `search`. The result will be in the same order and have the same projects as would be found when searching this string in the Quick Open window.   
  


### `function foldersMatching(search: `String`)` → `Array` of `Folder`

Returns each existing `Folder` that Smart Matches the given `search`. The result will be in the same order and have the same folders as would be found when searching this string in the Quick Open window.   
  


### `function tagsMatching(search: `String`)` → `Array` of `Tag`

Returns each existing `Tag` that Smart Matches the `search`. The result will be in the same order and have the same tags as would be found when searching this string in the Quick Open window.   
  


### `function taskNamed(name: `String`)` → `Task` or `null`

Returns the first top-level `Task` in the inbox with the given name, or `null`.   
  


### `function save()`

Saves any unsaved changes to disk. If sync is enabled and there were unsaved changes, this also triggers a sync request.   
  


### `function moveTasks(tasks: `Array` of `Task`, position: `Project`, `Task`, or `Task.ChildInsertionLocation`)`

Moves tasks to a different location.   
  


### `function duplicateTasks(tasks: `Array` of `Task`, position: `Project`, `Task`, or `Task.ChildInsertionLocation`)` → `TaskArray`

Makes copies of the tasks and returns the new copies. The order of the inputs is not considered and the copies are returned in library order of the originals.   
  


### `function convertTasksToProjects(tasks: `Array` of `Task`, position: `Folder` or `Folder.ChildInsertionLocation`)` → `Array` of `Project`

Converts tasks to new projects at the specified location.

For example, to convert each top-level inbox item into a new project at the end of your library and capture the resulting projects:
    
    
     const newProjects = convertTasksToProjects(inbox, library.ending);
    

  
  


### `function moveSections(sections: `Array` of `Project` or `Folder`, position: `Folder` or `Folder.ChildInsertionLocation`)`

Moves sections to a different location.   
  


### `function duplicateSections(sections: `Array` of `Project` or `Folder`, position: `Folder` or `Folder.ChildInsertionLocation`)` → `SectionArray`

Makes copies of the sections and returns the new copies. The order of the inputs is not considered and the copies are returned in library order of the originals.   
  


### `function moveTags(tags: `Array` of `Tag`, position: `Tag` or `Tag.ChildInsertionLocation`)`

Moves tags to a different location.   
  


### `function duplicateTags(tags: `Array` of `Tag`, position: `Tag` or `Tag.ChildInsertionLocation`)` → `TagArray`

Makes copies of the tags and returns the new copies. The order of the inputs is not considered and the copies are returned in library order of the originals.   
  


### `function cleanUp()`

Processes inbox items that have the required information to move into their proposed containers, performs any delayed filtering, and deletes empty items.   
  


### `function undo()`

Undoes the last undoable action, or throws an error if there are no undoable actions.   
  


### `function redo()`

Redoes the next redoable action, or throws an error if there are no redoable actions.   
  


### `function deleteObject(object: `DatabaseObject`)`

Removes the object from the Database.   
  


### `function copyTasksToPasteboard(tasks: `Array` of `Task`, pasteboard: `Pasteboard`)`

Copies the given tasks to the pasteboard in a variety of formats.   
  


### `function canPasteTasks(pasteboard: `Pasteboard`)` → `Boolean`

Returns true if the pasteboard contains a type that can be imported as tasks.   
  


### `function pasteTasksFromPasteboard(pasteboard: `Pasteboard`)` → `Array` of `Task`

Reads the most relevant pasteboard type and imports them as tasks. The tasks should then be moved to the desired destination.   
  


## Instance Properties

### `var app` → `Application` _read-only_

Returns the shared `Application`.   
  


### `var baseStyle` → `Style` _read-only_

Returns a base `Style` suitable for creating new `Text` instances.   
  


### `var canRedo` → `Boolean` _read-only_

Returns true if there are redoable actions.   
  


### `var canUndo` → `Boolean` _read-only_

Returns true if there are undoable actions.   
  


### `var console` → `Console` _read-only_

Returns the shared `Console`.   
  


### `var document` → `DatabaseDocument` or `null` _read-only_

### `var flattenedFolders` → `FolderArray` _read-only_

Returns a flat array of all folders in the database, sorted by their order in the database.   
  


### `var flattenedProjects` → `ProjectArray` _read-only_

Returns a flat array of all projects in the database, sorted by their order in the database.   
  


### `var flattenedSections` → `SectionArray` _read-only_

Returns a flat array of all folders and project in the database, sorted by their order in the database.   
  


### `var flattenedTags` → `TagArray` _read-only_

Returns a flat array of all tags in the database, sorted by their order in the database.   
  


### `var flattenedTasks` → `TaskArray` _read-only_

Returns a flat array of all tasks in the database, including inbox items, root tasks for projects, task groups and individual tasks. Tasks are sorted by their order in the database, with the inbox preceeding the library.   
  


### `var folders` → `FolderArray` _read-only_

Returns the top-level folders in the database.   
  


### `var inbox` → `Inbox` _read-only_

Returns a copy of the `Task`s currently in the inbox.   
  


### `var library` → `Library` _read-only_

Returns the top-level folders and projects in the database.   
  


### `var projects` → `ProjectArray` _read-only_

Returns the top-level folders in the database.   
  


### `var settings` → `Settings` _read-only_

### `var tags` → `Tags` _read-only_

Returns the top-level tags in the database.   
  

