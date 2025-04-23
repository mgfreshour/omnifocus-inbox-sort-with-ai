# `Task.Notification` : `DatedObject`

## Instance Properties

### `var absoluteFireDate` → `Date`

The absolute date at which this notification will fire, if its `kind` is `absolute`. Getting or setting this property throws an error if this notification's `kind` is not `absolute`.   
  


### `var initialFireDate` → `Date` _read-only_

The time at which this notification will fire. For due or defer-relative notifications, this date will change with its `task` object's due and defer dates.   
  


### `var isSnoozed` → `Boolean` _read-only_

Whether or not this notification has been snoozed.   
  


### `var kind` → `Task.Notification.Kind` _read-only_

This notification's kind. A `kind` of `unknown` indicates that the notification is in an invalid state.   
  


### `var nextFireDate` → `Date` or `null` _read-only_

The next time at which this notification will fire. This will only have a value if the `initialFireDate` is not yet reached, or this notification's `repeatInterval` is greater than 0.   
  


### `var relativeFireOffset` → `Number`

The relative offset in minutes at which this notification will fire from the specified date on its `task`. Getting or setting this property throws an error if this notification's `kind` is not either `dueRelative` or `deferRelative`.   
  


### `var repeatInterval` → `Number`

How often in seconds this notification will fire once its `initialFireDate` is reached. Setting this to 0 or any negative number will cease repetition of this notification.   
  


### `var task` → `Task` or `null` _read-only_

The `Task` object this notification will fire for.   
  


### `var usesFloatingTimeZone` → `Boolean` _read-only_

Whether or not the notification's fire date uses floating time zones. This can only return true if the notification's `kind` is absolute`. This can be changed by setting`shouldUseFloatingTimeZone`on this notification's`task`   
  

