# `Style`

## Instance Functions

### `function set(attribute: `Style.Attribute`, value: `Object` or `null`)` → `Boolean`

Sets (or clears) the value for the given style attribute. Styles that cascade from this one will inherit this value, if they don't define their own value or have a closer ancestor style that does. Returns true if a change was actually made, false otherwise. Throws an error if the key does not map to a known attribute, or if the value is of the wrong type for the specified attribute.   
  


### `function get(attribute: `Style.Attribute`)` → `Object` or `null`

Looks up the value for the specified style attribute locally, in the cascading and inherited styles, and finally falling back to the default value for the style attribute.   
  


### `function localValueForAttribute(attribute: `Style.Attribute`)` → `Object` or `null`

Looks up the value for the specified style attribute locally, returning null if it is not set.   
  


### `function addNamedStyle(namedStyle: `NamedStyle`)`

Adds the specified `NamedStyle` to the set of named styles to include in this `Style`. If the style is already present, or if this would create a loop (adding two `NamedStyles` to each other's list of named styles), an error will be thrown.   
  


### `function removeNamedStyle(namedStyle: `NamedStyle`)`

Removes the specified `NamedStyle` from the set of named styles to include in this `Style`. If the style is not present, an error will be thrown.   
  


### `function influencedBy(otherStyle: `Style`)` → `Boolean`

Returns `true` if the receiver is influenced, directly or indirectly from the passed `Style`.   
  


### `function setStyle(style: `Style`)`

Updates all the attributes and inherited styles on the receiver to be the same as the argument `Style`.   
  


### `function clear()`

Removes all the locally applied style attribute values for this `Style`.   
  


## Instance Properties

### `var fontFillColor` → `Color`

The color used to fill text. Setting the color to `null` will remove the setting for this style.   
  


### `var link` → `URL` or `null` _read-only_

Returns the `URL` link for a style, or `null` if there is no link applied. Note that `get(Style.Attribute.Link)` on the same style will return the default `URL` with an empty `toString()` value when there is no URL applied. If the style represents a file attachment and there is no specific link attribute set, the `URL` for the file attachment will be returned. If the style represents an file attachment that is embedded in the document, `null` will be returned.   
  


### `var locallyDefinedAttributes` → `Array` of `Style.Attribute` _read-only_

Returns an array of the `Style.Attribute`s defined on this `Style`.   
  


### `var namedStyles` → `Array` of `NamedStyle` _read-only_

Returns the `NamedStyle`s that are directly associated with this `Style`. If a style attribute lookup doesn't find a value in the local style, then the named styles will be searched.   
  

