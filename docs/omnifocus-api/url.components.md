# `URL.Components`

`URL.Components` allows for correct generation and interpreation of `URL` instances, dealing with the specific different quoting rules for each specific part of the `URL`.   
  


## Class Functions

### `function fromString(string: `String`)` → `URL.Components` or `null`

Parses the string into `URL.Components`. If the string is not a valid URL, `null` is returned.   
  


### `function fromURL(url: `URL`, resolvingAgainstBaseURL: `Boolean`)` → `URL.Components` or `null`

Parses the string represenation of the `URL`. If the `URL`'s string is malformed, `null` is returned. If `resolve` is `true` and the given `url` is relative, its base URL's components are considered.   
  


## Constructors

### `new URL.Components()` → `URL.Components`

Returns a new `URL.Components`.   
  


## Instance Functions

### `function urlRelativeTo(base: `URL` or `null`)` → `URL` or `null`

Returns a `URL` relative to the base URL and the components or `null`.   
  


## Instance Properties

### `var fragment` → `String` or `null`

### `var host` → `String` or `null`

### `var password` → `String` or `null`

### `var path` → `String`

### `var port` → `Number` or `null`

### `var query` → `String` or `null`

### `var queryItems` → `Array` of `URL.QueryItem` or `null`

The query of the `URL.Components` as individual components.   
  


### `var scheme` → `String` or `null`

### `var url` → `URL` or `null` _read-only_

Returns a `URL` for the components or `null`.   
  


### `var user` → `String` or `null`
