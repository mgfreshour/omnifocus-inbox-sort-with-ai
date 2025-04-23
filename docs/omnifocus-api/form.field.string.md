# `Form.Field.String` : `Form.Field`

A field for text-based input, optionally using a `Formatter` to convert the string value into a different type.   
  


## Constructors

### `new Form.Field.String(key: `String`, displayName: `String` or `null`, value: `Object` or `null`, formatter: `Formatter` or `null`)` → `Form.Field.String`

Returns a new `String` field, optionally with an initial value and formatter. If a formatter is specified, the value should be of the output type from the formatter or null. If no formatter is specified, the value should be a string or null.   
  

