# `Form.Field.MultipleOptions` : `Form.Field`

## Constructors

### `new Form.Field.MultipleOptions(key: `String`, displayName: `String` or `null`, options: `Array` of `Object`, names: `Array` of `String` or `null`, selected: `Array` of `Object`)` → `Form.Field.MultipleOptions`

Returns a new `MultipleOptions` field, allowing the user to pick multiple items from a list of option objects. A list of names may also be given, which must have the same length as the options array if so. If no names are given, the objects are converted to strings for display. An array of zero or more initially selected objects (which must be members of the options array) may also be given. An empty array is valid input for the initially selected items. Additionally, it is valid for `MultipleOptions` fields to have a value that is an empty array.   
  

