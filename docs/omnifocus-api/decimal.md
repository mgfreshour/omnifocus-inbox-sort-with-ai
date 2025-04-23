# `Decimal`

The `Decimal` class provides support for operating on base-10 numbers, which may not be exactly representable by types like the built-in JavaScript `Number` class. Note that `Decimal` does not use the built-in arithmetic operations; for example, to add two `Decimal` instances, you must use the `add()` function.   
  


## Class Functions

### `function fromString(string: `String`)` → `Decimal`

Parses the given string into a `Decimal`. If the string cannot be parsed, `notANumber` is returned.   
  


## Class Properties

### `var maximum` → `Decimal` _read-only_

Returns the maximum representable `Decimal` value.   
  


### `var minimum` → `Decimal` _read-only_

Returns the minimum representable `Decimal` value.   
  


### `var notANumber` → `Decimal` _read-only_

Returns a `Decimal` that represents a non-number value. Any arithmetic operations involving non-number values will return `notANumber`.   
  


### `var one` → `Decimal` _read-only_

Returns a `Decimal` representing one.   
  


### `var zero` → `Decimal` _read-only_

Returns a `Decimal` representing zero.   
  


## Instance Functions

### `function toString()` → `String`

Converts the `Decimal` to a `String` representation.   
  


### `function add(number: `Decimal`)` → `Decimal`

Generates a new `Decimal` by adding the argument and the receiver.   
  


### `function subtract(number: `Decimal`)` → `Decimal`

Generates a new `Decimal` by subtracting the argument from the receiver.   
  


### `function multiply(number: `Decimal`)` → `Decimal`

Generates a new `Decimal` by multiplying the argument and the receiver.   
  


### `function divide(number: `Decimal`)` → `Decimal`

Generates a new `Decimal` by dividing the receiver by the argument.   
  


### `function compare(number: `Decimal`)` → `Number`

Compares the receiver and argument. If the receiver is less than the argument, -1 is returned. If the receiver is greater than the argument, 1 is returned. Otherwise, 0 is returned. `notANumber` is considered less than any valid number, and equal to itself.   
  


### `function equals(number: `Decimal`)` → `Boolean`

Returns `true` if the receiver and argument represent the same number (or both are `notANumber`), and `false` otherwise.   
  

