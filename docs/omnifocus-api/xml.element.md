# `XML.Element`

## Constructors

### `new XML.Element(name: `String`)` → `XML.Element`

Returns a new `XML.Element` with the given name.   
  


## Instance Functions

### `function childAtIndex(childIndex: `Number`)` → `String` or `XML.Element` or `null`

Returns the child at the given index, or nil if the index is past the last child.   
  


### `function insertChild(child: `String` or `XML.Element`, childIndex: `Number`)`

Inserts the new child at the specified index. If the index is past the end of the current children, it is appended instead.   
  


### `function appendChild(child: `String` or `XML.Element`)`

Adds the new item to the end of the children.   
  


### `function removeChildAtIndex(childIndex: `Number`)`

Removes the child at the given index. If the index is past the end of the current children, no removal occurs.   
  


### `function removeAllChildren()`

Removes any existing children.   
  


### `function firstChildNamed(name: `String`)` → `XML.Element` or `null`

Returns the first child element with the given name, or `null` if there is no such child.   
  


### `function firstChildAtPath(path: `String`)` → `XML.Element` or `null`

Given a `path` which is a string separated by `"/"`, returns the first element at that path.   
  


### `function firstChildWithAttribute(attribute: `String`, value: `String`)` → `XML.Element` or `null`

Returns the first child with an attribute set to the given value.   
  


### `function attributeNamed(name: `String`)` → `String` or `null`

Returns the value of the the given attribute or `null` if no value has been assigned.   
  


### `function setAttribute(name: `String`, value: `String` or `null`)`

Sets the value for the specified attribute. If the element already had a value for this attribute, it is replaced in place. If there previously was no value for this attribute, the attribute is appended to `attributeNames`. If the new value is `null`, the attribute is removed.   
  


### `function apply(function: `Function``(`‍node: `String` or `XML.Element`‍`)` → `ApplyResult` or `null`)` → `ApplyResult` or `null`

Calls the supplied function for each child element or string in the receiver (including the receiver), passing that child as the single argument. The supplied function can optionally return a `ApplyResult` to skip enumeration of some elements.   
  


## Instance Properties

### `var attributeCount` → `Number` _read-only_

Returns the number of attributes assigned to this element.   
  


### `var attributeNames` → `Array` of `String` _read-only_

Returns the names of the attributes in the order they were added to the element.   
  


### `var children` → `Array` of `String` or `XML.Element`

The current child strings and elements.   
  


### `var childrenCount` → `Number` _read-only_

Returns the current count of child strings and elements.   
  


### `var lastChild` → `String` or `XML.Element` or `null` _read-only_

Returns the last child of the element, or `null` if there are no children.   
  


### `var name` → `String` _read-only_

Returns the name of the element.   
  


### `var stringContents` → `String` _read-only_

Gathers all the immediate and descendent string children and returns them concatenated them as single string.   
  

