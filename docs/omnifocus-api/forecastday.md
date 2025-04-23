# `ForecastDay`

An object representing one of the selectable days in the forecast perspective.   
  


## Class Properties

### `var badgeCountsIncludeDeferredItems` → `Boolean`

Determines whether or not badges on Forecast days include items that are not yet available.   
  


## Instance Functions

### `function badgeKind()` → `ForecastDay.Status`

The status of the badge on this forecast day.   
  


## Instance Properties

### `var badgeCount` → `Number` _read-only_

The number of available tasks on this forecast day.   
  


### `var date` → `Date` _read-only_

The date this forecast day represents. If this day's kind is `Past` or `DistantFuture` the date returned will be years from the current time.   
  


### `var deferredCount` → `Number` _read-only_

The number of remaining deferred tasks on this forecast day.   
  


### `var kind` → `ForecastDay.Kind` _read-only_

### `var name` → `String` _read-only_
