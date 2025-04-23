# `Form`

`Form` provides a mechanism to collect input from the user. Each form contains one or more instances of subclasses of `Field`, which are given a key. As the form is filled out, `values` object is populated with the values from the user interface.   
  


## Constructors

### `new Form()` → `Form`

## Instance Functions

### `function addField(field: `Form.Field`, index: `Number` or `null`)`

Adds the new `Field` to the `Form`, at the indicated position, or at the end if no position is specified. If the field has a default value, it will be added to the `values` result object immediately.   
  


### `function removeField(field: `Form.Field`)`

Removes the `Field from the`Form`. Any entry in the`values` for this field will be removed as well.   
  


### `function show(title: `String`, confirmTitle: `String`)` → `Promise` of `Form`

Present the `Form` to the user, and return a `Promise` to be fullfilled or rejected when the user commits or cancels the form.   
  


## Instance Properties

### `var fields` → `Array` of `Form.Field` _read-only_

The current `Field` instances in the form, which will be visible to the user entering input.   
  


### `var validate` → `Function``(`‍Form: `Form`‍`)` → `Boolean` or `null`

A function to check whether the entered values are acceptable. The form to validate is passed as the argument and the function is expected to return a boolean result or null to perform default validation. If an `Error` is thrown, it's message will be displayed in the form as the reason for validation failure. Note that the validation function may add or remove fields and update entries in the `values` object (which will cause the interface to be updated). This is called any time the user edits values, or a field is added or removed. If no `validate` function is specified or it returns `null`, some per-field default validation will be performed (see `Form.Field.Option`. If the `validate` function returns a boolean result, no default validation will be performed.   
  


### `var values` → `Object` _read-only_

An object with the collected values for each field, stored under the key for that field.   
  

