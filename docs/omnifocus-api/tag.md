# `Tag` : `ActiveObject`

## Class Functions

### `function byIdentifier(identifier: `String`)` → `Tag` or `null`

Returns the `Tag` with the specified identifier, or `null` if no such tag exists.   
  


## Class Properties

### `var forecastTag` → `Tag` or `null` _read-only_

The Forecast Tag, if it is set.   
  


## Constructors

### `new Tag(name: `String`, position: `Tag` or `Tag.ChildInsertionLocation` or `null`)` → `Tag`

## Instance Functions

### `function tagNamed(name: `String`)` → `Tag` or `null`

Returns the first child `Tag` with the given name that is contained directly in this tag, or `null`.   
  


### `function childNamed(name: `String`)` → `Tag` or `null`

An alias for `tagNamed`.   
  


### `function beforeTask(task: `Task` or `null`)` → `Tag.TaskInsertionLocation`

Returns a location indicating the position before an existing task in the `Tag`'s tasks. If no peer `Task` is specified, or the the specified task is not in the tag's tasks, this is equivalent to `beginningOfTasks`.   
  


### `function afterTask(task: `Task` or `null`)` → `Tag.TaskInsertionLocation`

Returns a location indicating the position after an existing task in the `Tag`'s tasks. If no peer `Task` is specified, or the the specified task is not in the tag's tasks, this is equivalent to `endingOfTasks`.   
  


### `function moveTask(task: `Task`, location: `Tag.TaskInsertionLocation`)`

Moves an existing associated `Task` within the tag's list of tasks. If the task is not associated with the tag, no change is made.   
  


### `function moveTasks(tasks: `Array` of `Task`, location: `Tag.TaskInsertionLocation`)`

Moves a list of associated `Task`s within the tag's list of tasks. Any tasks not currently associated with the tag are ignored.   
  


### `function apply(function: `Function``(`‍tag: `Tag`‍`)` → `ApplyResult` or `null`)` → `ApplyResult` or `null`

Calls the given function for this `Tag` and recursively into any child tags. The supplied function can optionally return a `ApplyResult` to skip enumeration of some elements.   
  


## Instance Properties

### `var after` → `Tag.ChildInsertionLocation` _read-only_

Returns a location referring to the position just after this tag.   
  


### `var allowsNextAction` → `Boolean`

If set and the tag is active, tasks with this tag applied cannot be the next task of a project.   
  


### `var availableTasks` → `TaskArray` _read-only_

Returns a sorted list of the tasks associated with this tag that are currently available. Recent changes may not be reflected until a `cleanUp` is performed on the database.   
  


### `var before` → `Tag.ChildInsertionLocation` _read-only_

Returns a location referring to the position just before this tag.   
  


### `var beginning` → `Tag.ChildInsertionLocation` _read-only_

Returns a location referring to the beginning of the contained tags in this tag.   
  


### `var beginningOfTasks` → `Tag.TaskInsertionLocation` _read-only_

Returns a location indicating the position before all of the `Tag`s tasks.   
  


### `var children` → `TagArray` _read-only_

An alias for `tags`.   
  


### `var ending` → `Tag.ChildInsertionLocation` _read-only_

Returns a location referring to the ending of the contained tags in this tag.   
  


### `var endingOfTasks` → `Tag.TaskInsertionLocation` _read-only_

Returns a location indicating the position after all of the `Tag`s tasks.   
  


### `var flattenedChildren` → `TagArray` _read-only_

An alias for `flattenedTags`.   
  


### `var flattenedTags` → `TagArray` _read-only_

Returns a flat array of all tags contained within this tag. Tags are sorted by their order in the database.   
  


### `var name` → `String`

### `var parent` → `Tag` or `null` _read-only_

The parent `Tag` which contains this tag.   
  


### `var projects` → `ProjectArray` _read-only_

A convenience property that returns only `Project`s for the root tasks associated with this `Tag`.   
  


### `var remainingTasks` → `TaskArray` _read-only_

Returns a sorted list of the tasks associated with this tag that remaing to be completed. Recent changes may not be reflected until a `cleanUp` is performed on the database.   
  


### `var status` → `Tag.Status`

The current status of the tag as a whole, which is derived from `allowsNextAction` and `active`.   
  


### `var tags` → `TagArray` _read-only_

Returns a sorted list of the tags contained directly within this tag, sorted by their library order.   
  


### `var tasks` → `TaskArray` _read-only_

Returns a sorted list of the tasks associated with this tag.   
  

