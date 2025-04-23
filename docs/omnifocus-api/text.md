# `Text`

## Class Functions

### `function makeFileAttachment(fileWrapper: `FileWrapper`, style: `Style`)` → `Text`

Returns a new `Text` instance that represents a file attachment. The attachment has a single character string content with a special value.   
  


## Constructors

### `new Text(string: `String`, style: `Style`)` → `Text`

Returns a new `Text` instance with the given string contents and `Style` applied to the entire range of text.   
  


## Instance Functions

### `function textInRange(range: `Text.Range`)` → `Text`

Returns a copy of the text in the specified range.   
  


### `function styleForRange(range: `Text.Range`)` → `Style`

Returns a `Style` instance for the given range of the `Text`.   
  


### `function ranges(component: `TextComponent`, useEnclosingRange: `Boolean` or `null`)` → `Array` of `Text.Range`

Returns an array of `TextRange`s for the specified component. If `useEnclosingRange` is `true`, than any extra characters that separate follow a component will be included in its range. Any extra characters before the first found component will be included in the first range.   
  


### `function replace(range: `Text.Range`, with: `Text`)`

Replaces the sub-range of the receiving `Text` with a copy of the passed in `Text` (which remains unchanged).   
  


### `function append(text: `Text`)`

Appends the given `Text` to the receiver.   
  


### `function insert(position: `Text.Position`, text: `Text`)`

Inserts a copy of the given `Text` at the specified position in the receiver.   
  


### `function remove(range: `Text.Range`)`

Removes the indicated sub-range of the receiving `Text`.   
  


### `function find(string: `String`, options: `Array` of `Text.FindOption` or `null`, range: `Text.Range` or `null`)` → `Text.Range` or `null`

Finds an occurrence of `string` within the `Text` and returns the enclosing `Text.Range` if there is a match. If `range` is passed, only that portion of the `Text` is searched. The supplied `options`, if any, change how the search is performed based on their definition.   
  


## Instance Properties

### `var attachments` → `Array` of `Text` _read-only_

Returns an array of copies of the blocks of `Text` in the receiver that represent `Attachment`s. Note that editing these instances will not change the original.   
  


### `var attributeRuns` → `Array` of `Text` _read-only_

Returns an array of copies of the contiguous blocks of `Text` in the receiver that have the same style. Note that editing these instances will not change the original.   
  


### `var characters` → `Array` of `Text` _read-only_

Returns an array of copies of the characters in the `Text`. Note that editing these instances will not change the original.   
  


### `var end` → `Text.Position` _read-only_

Returns a `Text.Position` indicating the end of the `Text`.   
  


### `var fileWrapper` → `FileWrapper` or `null` _read-only_

Returns the attached file wrapper for the `Text` (or rather, the first character of the text), if any.   
  


### `var paragraphs` → `Array` of `Text` _read-only_

Returns an array of copies of the paragraphs in the `Text`. Note that editing these instances will not change the original. Paragraphs, if ended by a newline, will contain the newline character.   
  


### `var range` → `Text.Range` _read-only_

Returns a `Text.Range` that spans the entire `Text`.   
  


### `var sentences` → `Array` of `Text` _read-only_

Returns an array of copies of the sentences in the `Text`. Note that editing these instances will not change the original.   
  


### `var start` → `Text.Position` _read-only_

Returns a `Text.Position` indicating the beginning of the `Text`.   
  


### `var string` → `String`

Returns a plain `String` version of the characters in the `Text`. Note that since JavaScript represents Strings as Unicode code points, the length of the returned string may be different from the number of `characters` in the `Text` object.

Assigning to this property replaces the string content of the `Text` with the given string. The style applied to the updated characters is either the base style of the `Text` if it is currently empty, or the style of the first replaced character otherwise.   
  


### `var style` → `Style` _read-only_

Returns a `Style` instance for this `Text` object.   
  


### `var words` → `Array` of `Text` _read-only_

Returns an array of copies of the words in the `Text`. Note that editing these instances will not change the original.   
  

