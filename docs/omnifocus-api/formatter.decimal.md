# `Formatter.Decimal` : `Formatter`

This formatter class formats and parses `Decimal`-valued strings (note, _not_ `Number` values).   
  


## Class Functions

### `function currency(code: `String` or `null`)` → `Formatter.Decimal`

Returns a new formatter that will display the value as a currency value. An ISO currency code may be specified to pick a specific currency, or null may be passed to use the default currency for the user's locale. If the argument is not a valid currency code, an error will be thrown.   
  


## Class Properties

### `var currencyCodes` → `Array` of `String` _read-only_

Deprecated: Please use the `currencyCode` property on `Locale` instead. Returns the list of known ISO currency codes   
  


### `var custom` → `Formatter.Decimal` _read-only_

Returns a new formatter that can be configured with custom settings.   
  


### `var decimal` → `Formatter.Decimal` _read-only_

Returns a new number formatter that will use both a decimal separator.   
  


### `var percent` → `Formatter.Decimal` _read-only_

Returns a new number formatter that will display the value as a percentage.   
  


### `var percentWithDecimal` → `Formatter.Decimal` _read-only_

Returns a new number formatter that will display the value as a percentage with a decimal separator.   
  


### `var plain` → `Formatter.Decimal` _read-only_

Returns a new number formatter that will not use any separators.   
  


### `var thousandsAndDecimal` → `Formatter.Decimal` _read-only_

Returns a new number formatter that will use both a thousands and decimal separator.   
  


## Instance Functions

### `function stringFromDecimal(number: `Decimal`)` → `String` or `null`

Format a `Decimal` as a string, based on the rules set on the formatter.   
  


### `function decimalFromString(string: `String`)` → `Decimal` or `null`

Parses a `Decimal` from a string, based on the rules set on the formatter. Returns `null` if the value was not recognized.   
  


## Instance Properties

### `var decimalSeparator` → `String`

The string to display between the whole portion of a number and the decimal portion.   
  


### `var negativeFormat` → `String`

A format string to use for negative values.   
  


### `var positiveFormat` → `String`

A format string to use for positive values.   
  


### `var thousandsSeparator` → `String` or `null`

The string to display between groups of digits representing powers of a thousand.   
  


### `var zeroSymbol` → `String` or `null`

The string to use when displaying a zero value. If this is `null`, the `positiveFormat` is used.   
  

