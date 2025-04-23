# `TimeZone`

## Class Properties

### `var abbreviations` → `Array` of `String` _read-only_

The list of known time zone abbreviations.   
  


## Constructors

### `new TimeZone(abbreviation: `String`)` → `TimeZone` or `null`

Make a new `TimeZone` with the given abbreviation. Note that the returned `TimeZone` may have a different abbreviation than the passed argument. For example, if one of "PST" or "PDT" is requested that doens't match the current use of daylight savings time, the one that does match will be returned.   
  


## Instance Properties

### `var abbreviation` → `String` or `null` _read-only_

The abbreviation for the `TimeZone`.   
  


### `var daylightSavingTime` → `Boolean` _read-only_

Returns `true` if the `TimeZone` is currently using daylight savings time.   
  


### `var secondsFromGMT` → `Number` _read-only_

The current difference in seconds between this `TimeZone` and GMT.   
  

