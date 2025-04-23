# `Task.Status`

## Class Properties

### `var Available` → `Task.Status` _read-only_

The task is available to work on.   
  


### `var Blocked` → `Task.Status` _read-only_

The task is not available to work on currently, due to a future defer date, a preceeding task in a sequential project, or having an on-hold tag associated.   
  


### `var Completed` → `Task.Status` _read-only_

The task is already completed.   
  


### `var Dropped` → `Task.Status` _read-only_

The task will not be worked on.   
  


### `var DueSoon` → `Task.Status` _read-only_

The task is incomplete and due soon.   
  


### `var Next` → `Task.Status` _read-only_

The task is the first available task in a project.   
  


### `var Overdue` → `Task.Status` _read-only_

The task is incomplete overdue.   
  


### `var all` → `Array` of `Task.Status` _read-only_
