# `Task` : `ActiveObject`

## Class Functions

### `function byParsingTransportText(text: `String`, singleTask: `Boolean` or `null`)` → `Array` of `Task`

Returns an array of tasks by parsing the transport text formatted input. Optionally, only the first task can be requested (but will still be returned in an array).   
  


### `function byIdentifier(identifier: `String`)` → `Task` or `null`

Returns the `Task` with the specified identifier, or `null` if no such task exists.   
  


## Constructors

### `new Task(name: `String`, position: `Project`, `Task`, or `Task.ChildInsertionLocation` or `null`)` → `Task`

Returns a new `Task` at the given location. If a project or task is given as a location, the new task is placed at the end of the children of that parent. If no location is specified, then the task is created at the end of the inbox.   
  


## Instance Functions

### `function taskNamed(name: `String`)` → `Task` or `null`

Returns the first child `Task` with the given name that is contained directly in this task, or `null`.   
  


### `function childNamed(name: `String`)` → `Task` or `null`

An alias for `taskNamed`.   
  


### `function appendStringToNote(stringToAppend: `String`)`

Appends `stringToAppend` to the end of the `Task`'s `note`.   
  


### `function addLinkedFileURL(url: `URL`)`

Links a file URL to this task. In order to be considered a file URL, `url` must have the `file` scheme. That is, `url` must be of the form `file://path-to-file`. The file at `url` will not be added to database, rather a bookmark leading to it will be added. In order to add files to a task, use the `addAttachment` function. Linking files is especially useful for large files, as including large files in the database can degrade app performance.   
  


### `function removeLinkedFileWithURL(url: `URL`)`

Removes the first link to a file with the given `url`. This removes the bookmark that leads to the file at `url`. If the file itself is present in the database, use the `removeAttachmentAtIndex` function instead.   
  


### `function addAttachment(attachment: `FileWrapper`)`

Adds `attachment` as an attachment to the task. If the attachment is large, consider using the `addLinkedFileURL` function instead. Including large attachments in the database can degrade app performance.   
  


### `function removeAttachmentAtIndex(index: `Number`)`

Removes the attachment at `index` from this task's `attachments` array.   
  


### `function beforeTag(tag: `Tag` or `null`)` → `Task.TagInsertionLocation`

Returns a location indicating the position before an existing tag in the `Task`'s tags. If no peer `Tag` is specified, or the the specified tag is not in the task's tags, this is equivalent to `beginningOfTags`.   
  


### `function afterTag(tag: `Tag` or `null`)` → `Task.TagInsertionLocation`

Returns a location indicating the position after an existing tag in the `Task`'s tags. If no peer `Tag` is specified, or the the specified tag is not in the task's tags, this is equivalent to `endingOfTags`.   
  


### `function addTag(tag: `Tag`, location: `Task.TagInsertionLocation` or `null`)`

Adds a `Tag` to this task at the specified location relative to its other tags, or at the end if no location is specified. If the tag is already present, no change is made. The `Database` function `moveTags` can be used to control the ordering of tags within the task.   
  


### `function addTags(tags: `Array` of `Tag`, location: `Task.TagInsertionLocation` or `null`)`

Adds multiple `Tag`s to this this task at the specified location relative to its other tags, or at the end if no location is specified.. For any tags already associated with the `Task`, no change is made. The `Database` function `moveTags` can be used to control the ordering of tags within the task.   
  


### `function moveTag(tag: `Tag`, location: `Task.TagInsertionLocation`)`

Moves an existing associated `Tag` within the task's list of tags. If the tag is not associated with the task, no change is made.   
  


### `function moveTags(tags: `Array` of `Tag`, location: `Task.TagInsertionLocation`)`

Moves a list of associated `Tag`s within the task's list of tags. Any tags not currently associated with the task are ignored.   
  


### `function removeTag(tag: `Tag`)`

Removes a `Tag` from this task. If the tag is not associated with this task, no change is made.   
  


### `function removeTags(tags: `Array` of `Tag`)`

Removes multiple `Tag`s from this task. If a tag is not associated with this task, no change is made.   
  


### `function clearTags()`

Removes multiple `Tag`s from this task. If a tag is not associated with this task, no change is made.   
  


### `function markComplete(date: `Date` or `null`)` → `Task`

If the task is not completed, marks it as complete with the given completion date (or the current date if no date is specified). For repeating tasks, this makes a clone of the task and marks that clone as completed. In either case, the task that has been marked completed is returned.   
  


### `function markIncomplete()`

If the task is completed, marks it as incomplete.   
  


### `function drop(allOccurrences: `Boolean`, dateDropped: `Date` or `null`)`

Drops this `Task`. If true is passed in for `allOccurrences` then this task will not repeat, even if it has a `repititionRule` set on it. If false is passed in for `allOccurrences`, this task will repeat as normal. If `dateDropped` is specified, it will be used as the drop date.   
  


### `function apply(function: `Function``(`‍task: `Task`‍`)` → `ApplyResult` or `null`)` → `ApplyResult` or `null`

Calls the given function for this `Task` and recursively into any child task. The supplied function can optionally return a `ApplyResult` to skip enumeration of some elements.   
  


### `function addNotification(info: `Number` or `Date`)` → `Task.Notification`

Add a notification from the specification in `info`. Supplying a `Date` creates an absolute notification that will fire at that date. Supplying a `Double` will create a due-relative notification. Specifying a due relative notification when this task's effectiveDueDate is not set will result in an error.   
  


### `function removeNotification(notification: `Task.Notification`)`

Remove an active notification for this task. Supplying a notification that is not in this task's `notifications` array, or a notification that has `task` to something other than this task results in an error.   
  


## Instance Properties

### `var after` → `Task.ChildInsertionLocation` _read-only_

The location after this task within its parent task's children. If this task has no parent task, then this is the position adjacent to it in its container.   
  


### `var assignedContainer` → `Project`, `Task`, or `Inbox` or `null`

For tasks in the inbox, the tentatively assigned project or parent task, which will be applied on cleanup.   
  


### `var attachments` → `Array` of `FileWrapper`

An array of `FileWrapper` objects representing the attachments associated with the task.   
  


### `var before` → `Task.ChildInsertionLocation` _read-only_

The location before this task within its parent task's children. If this task has no parent task, then this is the position adjacent to it in its container.   
  


### `var beginning` → `Task.ChildInsertionLocation` _read-only_

The location at the beginning of this task's children.   
  


### `var beginningOfTags` → `Task.TagInsertionLocation` _read-only_

Returns a location indicating the position before all of the `Task`s tags.   
  


### `var children` → `TaskArray` _read-only_

An alias for `tasks`.   
  


### `var completed` → `Boolean` _read-only_

True if the task has been marked completed. Note that a task may be effectively considered completed if a containing task is marked completed.   
  


### `var completedByChildren` → `Boolean`

If set, the Task will be automatically marked completed when its last child Task is marked completed.   
  


### `var completionDate` → `Date` or `null` _read-only_

If set, the Task is completed.   
  


### `var containingProject` → `Project` or `null` _read-only_

The `Project` that this `Task` is contained in, either as the root of the project or indirectly from a parent task. If this task is in the inbox, then this will be `null`.   
  


### `var deferDate` → `Date` or `null`

If set, the Task is not actionable until this date.   
  


### `var dropDate` → `Date` or `null` _read-only_

If set, the Task is dropped.   
  


### `var dueDate` → `Date` or `null`

If set, the Task should be completed by this date.   
  


### `var effectiveCompletedDate` → `Date` or `null` _read-only_

Deprecated: Please use the `effectiveCompletionDate` property instead.   
  


### `var effectiveCompletionDate` → `Date` or `null` _read-only_

Returns the computed effective completion date for the `Task`, based on its local `completionDate` and those of its containers.   
  


### `var effectiveDeferDate` → `Date` or `null` _read-only_

Returns the computed effective defer date for the `Task`, based on its local `deferDate` and those of its containers.   
  


### `var effectiveDropDate` → `Date` or `null` _read-only_

Returns the computed effective drop date for the `Task`, based on its local `dropDate` and those of its containers.   
  


### `var effectiveDueDate` → `Date` or `null` _read-only_

Returns the computed effective due date for the `Task`, based on its local `dateDue` and those of its containers.   
  


### `var effectiveFlagged` → `Boolean` _read-only_

Returns the computed effective flagged status for the `Task`, based on its local `flagged` and those of its containers.   
  


### `var ending` → `Task.ChildInsertionLocation` _read-only_

The location at the end of this task's children.   
  


### `var endingOfTags` → `Task.TagInsertionLocation` _read-only_

Returns a location indicating the position after all of the `Task`s tags.   
  


### `var estimatedMinutes` → `Number` or `null`

The estimated number of minutes this task will take to finish, or `null` if no estimate has been made.   
  


### `var flagged` → `Boolean`

The flagged status of the task.   
  


### `var flattenedChildren` → `TaskArray` _read-only_

An alias for `flattenedTasks`.   
  


### `var flattenedTasks` → `TaskArray` _read-only_

Returns a flat array of all tasks contained within this task. Tasks are sorted by their order in the database.   
  


### `var hasChildren` → `Boolean` _read-only_

Returns `true` if this task has children, more efficiently than checking if `children` is empty.   
  


### `var inInbox` → `Boolean` _read-only_

True if the task is a direct child of the inbox, but not if the task is contained by another task that is in the inbox.   
  


### `var linkedFileURLs` → `Array` of `URL` _read-only_

The list of file URLs linked to this task. The files at these URLs are not present in the database, rather the database holds bookmarks leading to these files. These links can be read on iOS, but not written to.   
  


### `var name` → `String`

The title of the task.   
  


### `var note` → `String`

The task's note.   
  


### `var noteText` → `Text`

The task's note as a rich `Text` object.   
  


### `var notifications` → `Array` of `Task.Notification` _read-only_

An array of the notifications that are active for this task.   
  


### `var parent` → `Task` or `null` _read-only_

The parent `Task` which contains this task.   
  


### `var project` → `Project` or `null` _read-only_

The `Project` that this `Task` is the root task of, or `null` if this task is in the inbox or contained by another task.   
  


### `var repetitionRule` → `Task.RepetitionRule` or `null`

The object holding the repetition properties for this task, or null if it is not repeating.   
  


### `var sequential` → `Boolean`

If `true`, then children of this task form a dependency chain. For example, the first task blocks the second one until the first is completed.   
  


### `var shouldUseFloatingTimeZone` → `Boolean`

When set, the `dueDate` and `deferDate` properties will use floating time zones. (Note: if a `Task` has no due or defer dates assigned, this property will revert to the database's default setting.)   
  


### `var tags` → `TagArray` _read-only_

Returns the `Tag`s associated with this `Task`.   
  


### `var taskStatus` → `Task.Status` _read-only_

Returns the current status of the task.   
  


### `var tasks` → `TaskArray` _read-only_

Returns all the tasks contained directly in this task, sorted by their library order.   
  

