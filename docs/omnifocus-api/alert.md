# `Alert`

An alert interface for displaying information to the user, blocking further interaction until the alert is dismissed.   
  


## Constructors

### `new Alert(title: `String`, message: `String`)` → `Alert`

Create a new alert panel with the given title and text contents.   
  


## Instance Functions

### `function show(callback: `Function``(`‍option: `Number`‍`)` or `null`)` → `Promise` of `Number`

Displays the alert. If no options have yet been added, a default "OK" option is added. Once the user selects an option, the alert is dismissed. If a callback function was supplied, it is invoked with the zero-based index of the selected option as its argument. A `Promise` is returned as well, which may also be used to collect the result of the `Alert`.   
  


### `function addOption(string: `String`)`

Adds an option button to the alert.   
  

