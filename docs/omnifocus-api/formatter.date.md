# `Formatter.Date` : `Formatter`

## Class Functions

### `function withStyle(dateStyle: `Formatter.Date.Style`, timeStyle: `Formatter.Date.Style` or `null`)` → `Formatter.Date`

A formatter that will display dates according to the specified date and time formats selected in system settings.   
  


### `function withFormat(format: `String`)` → `Formatter.Date`

Returns a formatter with a specific ICU date format and the user's current locale, calendar, and timeZone. See <http://userguide.icu-project.org/formatparse/datetime/> for details on date format strings.   
  


## Class Properties

### `var iso8601` → `Formatter.Date` _read-only_

Return a date formatter that produces ISO-8601 formatted dates, using the Gregorian calendar and the UTC time zone.   
  


## Instance Functions

### `function stringFromDate(date: `Date`)` → `String`

### `function dateFromString(string: `String`)` → `Date` or `null`

## Instance Properties

### `var calendar` → `Calendar`

### `var dateFormat` → `String` _read-only_

### `var locale` → `Locale`

### `var timeZone` → `TimeZone`
