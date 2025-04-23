# `XML.Document`

## Class Functions

### `function fromData(data: `Data`, whitespaceBehavior: `XML.WhitespaceBehavior` or `null`)` → `XML.Document`

Parse the given data as an XML document.   
  


## Constructors

### `new XML.Document(rootElement: `String` or `XML.Element`, configuration: `XML.Document.Configuration` or `null`)` → `XML.Document`

Returns a new `XML.Document` with the given root element and configuration.   
  


## Instance Functions

### `function xmlData()` → `Data`

Encodes the document as XML.   
  


### `function addElement(name: `String`, function: `Function``(`‍‍`)` or `null`)`

Appends a new element with the given name. If a function is passed, it is pushed it on the current element stack, the supplied function is called, and then the element is popped off the stack.   
  


### `function appendString(string: `String`)`

Appends the given string as a child of `topElement`.   
  


### `function setAttribute(attribute: `String`, value: `String` or `null`)`

Sets the specified attribute on `topElement`.   
  


## Instance Properties

### `var dtdPublicID` → `String` or `null` _read-only_

### `var dtdSystemID` → `URL` or `null` _read-only_

### `var rootElement` → `XML.Element` _read-only_

### `var schemaID` → `URL` or `null` _read-only_

### `var schemaNamespace` → `String` or `null` _read-only_

### `var stringEncoding` → `StringEncoding` _read-only_

### `var topElement` → `XML.Element` _read-only_

Returns the element at the top of the current element stack. Intially this is the root element, but when `addElement()` is called, it is temporarily updated to the new element (possibly recursively).   
  


### `var whitespaceBehavior` → `XML.WhitespaceBehavior` _read-only_
