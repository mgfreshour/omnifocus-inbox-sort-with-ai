# `Project` : `DatabaseObject`

## Class Functions

### `function byIdentifier(identifier: `String`)` → `Project` or `null`

Returns the `Project` with the specified identifier, or `null` if no such project exists.   
  


## Constructors

### `new Project(name: `String`, position: `Folder` or `Folder.ChildInsertionLocation` or `null`)` → `Project`

## Instance Functions

### `function taskNamed(name: `String`)` → `Task` or `null`

Returns the first top-level `Task` in this project the given name, or `null`.   
  


### `function appendStringToNote(stringToAppend: `String`)`

Appends `stringToAppend` to the end of the `Project`'s root `Task`'s `note`.   
  


### `function addAttachment(attachment: `FileWrapper`)`

Adds `attachment` as an attachment to the `Project`'s root `Task`. If the attachment is large, consider using the `addLinkedFileURL` function instead. Including large attachments in the database can degrade app performance.   
  


### `function removeAttachmentAtIndex(index: `Number`)`

Removes the attachment at `index` from this `Project`'s root `Task`'s `attachments` array.   
  


### `function markComplete(date: `Date` or `null`)` → `Task`

If the project is not completed, marks it as complete with the given completion date (or the current date if no date is specified). For repeating project, this makes a clone of the project and marks that clone as completed. In either case, the project that has been marked completed is returned.   
  


### `function markIncomplete()`

If the project is completed, marks it as incomplete.   
  


### `function addNotification(info: `Number` or `Date`)` → `Task.Notification`

Add a notification to the project from the specification in `info`. Supplying a `Date` creates an absolute notification that will fire at that date. Supplying a `Double` will create a due-relative notification. Specifying a due-relative notification when this project's `task`'s effectiveDueDate is not set will result in an error.   
  


### `function removeNotification(notification: `Task.Notification`)`

Remove an active notification for this project. Supplying a notification that is not in this task's `notifications` array, or a notification that has `task` to something other than this project's `task` results in an error.   
  


### `function addTag(tag: `Tag`)`

Adds a `Tag` to this project, appending it to the end of the list of associated tags. If the tag is already present, no change is made. The `Database` function `moveTags` can be used to control the ordering of tags within the task.   
  


### `function addTags(tags: `Array` of `Tag`)`

Adds multiple `Tag`s to this project, appending them to the end of the list of associated tags. For any tags already associated with the `Task`, no change is made. The `Database` function `moveTags` can be used to control the ordering of tags within the task.   
  


### `function removeTag(tag: `Tag`)`

Removes a `Tag` from this project. If the tag is not associated with this project, no change is made.   
  


### `function removeTags(tags: `Array` of `Tag`)`

Removes multiple `Tag`s from this project. If a tag is not associated with this project, no change is made.   
  


### `function clearTags()`

Removes multiple `Tag`s from this project. If a tag is not associated with this project, no change is made.   
  


### `function addLinkedFileURL(url: `URL`)`

Links a file URL to this task. In order to be considered a file URL, `url` must have the `file` scheme. That is, `url` must be of the form `file://path-to-file`. The file at `url` will not be added to database, rather a bookmark leading to it will be added. In order to add files to a task, use the `addAttachment` function. Linking files is especially useful for large files, as including large files in the database can degrade app performance. This function throws an error if invoked on iOS.   
  


### `function removeLinkedFileWithURL(url: `URL`)`

Removes the first link to a file with the given `url`. This removes the bookmark that leads to the file at `url`. If the file itself is present in the database, use the `removeAttachmentAtIndex` function instead.   
  


## Instance Properties

### `var after` → `Folder.ChildInsertionLocation` _read-only_

Returns a location referring to the position just after this project within its containing `Folder` or `Database`.   
  


### `var attachments` → `Array` of `FileWrapper`

An array of `FileWrapper` objects representing the attachments associated with the `Project`'s root `Task`.   
  


### `var before` → `Folder.ChildInsertionLocation` _read-only_

Returns a location referring to the position just before this project within its containing `Folder` or `Database`.   
  


### `var beginning` → `Task.ChildInsertionLocation` _read-only_

Returns a location referring to the position after the last `Task` directly contained in the root `task` of this project.   
  


### `var children` → `TaskArray` _read-only_

An alias for `tasks`.   
  


### `var completed` → `Boolean` _read-only_

True if the project has been marked completed. Note that a project may be effectively considered completed if a containing project is marked completed.   
  


### `var completedByChildren` → `Boolean`

If set, the project will be automatically marked completed when its last child Task is marked completed.   
  


### `var completionDate` → `Date` or `null`

If set, the project is completed.   
  


### `var containsSingletonActions` → `Boolean`

If set to `true`, the project contains single tasks, and has no next task.   
  


### `var defaultSingletonActionHolder` → `Boolean`

If set to `true`, this is the `Project` that inbox tasks that have enough information specified (as selected by the user's preferences) will be filed into upon a clean-up.   
  


### `var deferDate` → `Date` or `null`

If set, the project is not actionable until this date.   
  


### `var dropDate` → `Date` or `null`

If set, the project is dropped.   
  


### `var dueDate` → `Date` or `null`

If set, the project should be completed by this date.   
  


### `var effectiveCompletedDate` → `Date` or `null` _read-only_

Returns the computed effective completion date for the `Project`, based on its local `completionDate` and those of its containers.   
  


### `var effectiveDeferDate` → `Date` or `null` _read-only_

Returns the computed effective defer date for the `Project`, based on its local `deferDate` and those of its containers.   
  


### `var effectiveDropDate` → `Date` or `null` _read-only_

Returns the computed effective drop date for the `Project`, based on its local `dropDate` and those of its containers.   
  


### `var effectiveDueDate` → `Date` or `null` _read-only_

Returns the computed effective due date for the `Project`, based on its local `dateDue` and those of its containers.   
  


### `var effectiveFlagged` → `Boolean` _read-only_

Returns the computed effective flagged status for the `Project`, based on its local `flagged` and those of its containers.   
  


### `var ending` → `Task.ChildInsertionLocation` _read-only_

Returns a location referring to the position before the first `Task` directly contained in the root `task` of this project.   
  


### `var estimatedMinutes` → `Number` or `null`

The estimated number of minutes this `Project` will take to finish, or `null` if no estimate has been made.   
  


### `var flagged` → `Boolean`

The flagged status of the project.   
  


### `var flattenedChildren` → `TaskArray` _read-only_

An alias for `flattenedTasks`.   
  


### `var flattenedTasks` → `TaskArray` _read-only_

Returns a flat array of all tasks contained within this `Project`'s root `Task`. Tasks are sorted by their order in the database.   
  


### `var hasChildren` → `Boolean` _read-only_

Returns `true` if this `Project`'s root `Task` has children, more efficiently than checking if `children` is empty.   
  


### `var lastReviewDate` → `Date` or `null`

The date on which the last review was performed. See also `nextReviewDate`.   
  


### `var linkedFileURLs` → `Array` of `URL` _read-only_

The list of file URLs linked to this project's root task. The files at these URLs are not present in the database, rather the database holds bookmarks leading to these files. These links can be read on iOS, but not written to.   
  


### `var name` → `String`

The name of the `Project`s root task.   
  


### `var nextReviewDate` → `Date` or `null`

The scheduled date for the next review. See also `nextReviewDate`.   
  


### `var nextTask` → `Task` or `null` _read-only_

Returns the very next task that can be completed in the project, or `null` if there is none or the project contains singleton actions.   
  


### `var note` → `String`

The `Project`'s root `Task`'s note.   
  


### `var noteText` → `Text`

The `Project`'s root `Task`'s note as a rich `Text` object.   
  


### `var notifications` → `Array` of `Task.Notification` _read-only_

An array of the notifications that are active for this project.   
  


### `var parentFolder` → `Folder` or `null` _read-only_

The `Folder` which contains this project.   
  


### `var repetitionRule` → `Task.RepetitionRule` or `null`

The object holding the repetition properties for this project, or null if it is not repeating.   
  


### `var reviewInterval` → `Project.ReviewInterval`

The object holding the review repetition properties for this project. See also `lastReviewDate and`nextReviewDate`.   
  


### `var sequential` → `Boolean`

If `true`, then children of this project form a dependency chain. For example, the first task blocks the second one until the first is completed.   
  


### `var shouldUseFloatingTimeZone` → `Boolean`

When set, the `dueDate` and `deferDate` properties will use floating time zones. (Note: if a `Project` has no due or defer dates assigned, this property will revert to the database's default setting.)   
  


### `var status` → `Project.Status`

The current status of the project as a whole. This does not reflect the status of individual tasks within the project root task - a project may be marked with the `Done` status and its individual tasks will be left with the completion state they had, in case the status is changed again to `Active`.   
  


### `var tags` → `TagArray` _read-only_

Returns the `Tag`s associated with this `Project`.   
  


### `var task` → `Task` _read-only_

Returns the root task of the project, which holds the bulk of the project information, as well as being the container for tasks within the project. If you wish to copy the project or move it to a location that requires tasks, you would use this task as the object to be copied or moved.   
  


### `var taskStatus` → `Task.Status` _read-only_

Returns the current status of the project.   
  


### `var tasks` → `TaskArray` _read-only_

Returns all the tasks contained directly in this `Project`'s root `Task`, sorted by their library order.   
  

