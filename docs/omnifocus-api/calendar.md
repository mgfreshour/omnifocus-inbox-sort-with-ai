# `Calendar`

## Class Properties

### `var buddhist` → `Calendar` _read-only_

### `var chinese` → `Calendar` _read-only_

### `var coptic` → `Calendar` _read-only_

### `var current` → `Calendar` _read-only_

The user's preferred calendar   
  


### `var ethiopicAmeteAlem` → `Calendar` _read-only_

### `var ethiopicAmeteMihret` → `Calendar` _read-only_

### `var gregorian` → `Calendar` _read-only_

The Gregorian calendar.   
  


### `var hebrew` → `Calendar` _read-only_

### `var indian` → `Calendar` _read-only_

### `var islamic` → `Calendar` _read-only_

### `var islamicCivil` → `Calendar` _read-only_

### `var islamicTabular` → `Calendar` _read-only_

### `var islamicUmmAlQura` → `Calendar` _read-only_

### `var iso8601` → `Calendar` _read-only_

### `var japanese` → `Calendar` _read-only_

### `var persian` → `Calendar` _read-only_

### `var republicOfChina` → `Calendar` _read-only_

## Instance Functions

### `function dateByAddingDateComponents(date: `Date`, components: `DateComponents`)` → `Date` or `null`

Returns a new `Date` by adding the given `DateComponents`, or null if no date could be calculated.   
  


### `function dateFromDateComponents(components: `DateComponents`)` → `Date` or `null`

Returns a new `Date` from the given `DateComponents`, or null if no date could be calculated.   
  


### `function dateComponentsFromDate(date: `Date`)` → `DateComponents`

Returns a new `DateComponents` for the given `Date`.   
  


### `function dateComponentsBetweenDates(start: `Date`, end: `Date`)` → `DateComponents`

Returns the difference from the start `Date` to the end `Date` as a `DateComponents`.   
  


### `function startOfDay(date: `Date`)` → `Date`

Returns a `Date` for the first moment of the day containing the given `Date` according to this `Calendar`.   
  


## Instance Properties

### `var identifier` → `String` _read-only_

The ISO identifier for the calendar.   
  


### `var locale` → `Locale` or `null` _read-only_

The locale of the calendar.   
  


### `var timeZone` → `TimeZone` _read-only_

The time zone of the calendar.   
  

