# `Task.RepetitionRule`

A `Task.RepetitionRule` describes a pattern of dates using a ICS formatted recurrence string and a `Task.RepetitionMethod` to describe how those dates are applied to a `Task`.   
  


## Constructors

### `new Task.RepetitionRule(ruleString: `String`, method: `Task.RepetitionMethod`)` → `Task.RepetitionRule`

Returns a new `Task.RepetitionRule` with the specified ICS rule string and repetition method. The the rule string is not valid, or combination with the method is not supported, an error will be thrown.   
  


## Instance Functions

### `function firstDateAfterDate(date: `Date`)` → `Date`

Returns the first date described by the repetition rule that is after the given date.   
  


## Instance Properties

### `var method` → `Task.RepetitionMethod` _read-only_

The method used to create the repetition rule.   
  


### `var ruleString` → `String` _read-only_

The ICS rule string used to create the repetition rule.   
  

