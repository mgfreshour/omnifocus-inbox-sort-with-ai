# `ForecastDay.Status`

## Class Properties

### `var Available` → `ForecastDay.Status` _read-only_

There is at least one available task on the node's day, but no task is due soon or overdue. The node's badgeCount is the number of available tasks.   
  


### `var DueSoon` → `ForecastDay.Status` _read-only_

There is at least one available task on the node's day, and at least one task due that day is due soon, but no tasks due that day are overdue. The node's badgeCount is the number of available tasks.   
  


### `var NoneAvailable` → `ForecastDay.Status` _read-only_

There are no available tasks on the node's day. The node's badgeCount is guaranteed to be zero.   
  


### `var Overdue` → `ForecastDay.Status` _read-only_

There is at least one available task on the node's day, and at least one task due that day is overdue. The node's badgeCount is the number of available tasks.   
  


### `var all` → `Array` of `ForecastDay.Status` _read-only_
