# `Form.Field.Option` : `Form.Field`

## Constructors

### `new Form.Field.Option(key: `String`, displayName: `String` or `null`, options: `Array` of `Object`, names: `Array` of `String` or `null`, selected: `Object` or `null`, nullOptionTitle: `String` or `null`)` → `Form.Field.Option`

Returns a new `Option` field, allowing the user to pick from a list of option objects. A list of names may also be given, which must have the same length as the options array if so. If no names are given, the objects are converted to strings for display. An initially selected object (which must be a member of the options array) may also be given. If the field is not configured to allow a `null` value and no initially `selected` value is specified, the user must select a value before the field is considered valid under the default form validation.   
  


## Instance Properties

### `var allowsNull` → `Boolean`

If set to `true`, an option will be added to allow selecting `null`.   
  


### `var nullOptionTitle` → `String` or `null`

If `null` is allowed, this will be used for the title of that option. Otherwise a default title will be used.   
  

