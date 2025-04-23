# `Email`

A set of parameters for generating an email.   
  


## Constructors

### `new Email()` → `Email`

## Instance Functions

### `function generate()`

Presents the generated email to the user for them to send (or discard). On iOS, any included attachment `FileWrapper`s that are directories will be converted to Zip files.   
  


## Instance Properties

### `var blindCarbonCopy` → `String` or `Array` of `String` or `null`

### `var body` → `String` or `null`

### `var carbonCopy` → `String` or `Array` of `String` or `null`

### `var fileWrappers` → `Array` of `FileWrapper`

### `var receiver` → `String` or `Array` of `String` or `null`

### `var subject` → `String` or `null`
