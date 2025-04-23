# `TreeNode`

## Instance Functions

### `function childAtIndex(childIndex: `Number`)` → `TreeNode`

Returns the child node at the given index.   
  


### `function expand(completely: `Boolean` or `null`)`

Attempts to expand the `TreeNode`. If `completely` is passed, all the child nodes will be expanded as they allow.   
  


### `function collapse(completely: `Boolean` or `null`)`

Attempts to collapse the `TreeNode`. If `completely` is passed, all the child nodes will be collapse as they allow.   
  


### `function expandNote(completely: `Boolean` or `null`)`

Attempts to expand the inline note of the `TreeNode`. If `completely` is passed, all the child node notes will be expanded.   
  


### `function collapseNote(completely: `Boolean` or `null`)`

Attempts to collapse the inline note of the `TreeNode`. If `completely` is passed, all the child node notes will be collapsed.   
  


### `function reveal()`

Expands all the   
  


### `function apply(function: `Function``(`‍node: `TreeNode`‍`)` → `ApplyResult` or `null`)` → `ApplyResult` or `null`

Calls the supplied function for each `TreeNode` in the receiver (including the receiver), passing that node as the single argument. The supplied function can optionally return a `ApplyResult` to skip enumeration of some elements.   
  


## Instance Properties

### `var canCollapse` → `Boolean` _read-only_

Returns `true` if this `TreeNode` can be collapsed.   
  


### `var canExpand` → `Boolean` _read-only_

Returns `true` if this `TreeNode` can be expanded.   
  


### `var childCount` → `Number` _read-only_

Returns the number of children directly under this node.   
  


### `var children` → `Array` of `TreeNode` _read-only_

Returns the array of children that are visible under this node, according to any filtering that is being done, and in the order specified by any sorting rules that have been established.   
  


### `var index` → `Number` _read-only_

Returns the index of this `TreeNode` among its siblings, or zero for the `rootNode`.   
  


### `var isExpanded` → `Boolean` _read-only_

Returns `true` if this `TreeNode` is currently expanded.   
  


### `var isNoteExpanded` → `Boolean` _read-only_

Returns `true` if the note of this `TreeNode` is currently expanded.   
  


### `var isRevealed` → `Boolean` _read-only_

Returns `true` if the `TreeNode` is the `rootNode` or all of its ancestor nodes are expanded.   
  


### `var isRootNode` → `Boolean` _read-only_

Returns `true` if this node is the `rootNode` of its tree.   
  


### `var isSelectable` → `Boolean` _read-only_

Returns `true` if this `TreeNode` can be selected. The `rootNode` cannot be selected, nor can nodes that aren't revealed.   
  


### `var isSelected` → `Boolean`

Set to `true` if this `TreeNode` is in the list of selected nodes for its tree. Attempting to set this to `true` will do nothing if the node is not revealed (or is the root node).   
  


### `var level` → `Number` _read-only_

Returns the nesting level of the `TreeNode`, relative to the root of the tree. The `rootNode` of an `Outline` has level zero, its children have level one, and so on. Note that if only a portion of the model is being shown, this level may not match the level of the underlying `object`.   
  


### `var object` → `Object` _read-only_

The model object which this node wraps.   
  


### `var parent` → `TreeNode` or `null` _read-only_

Returns the `TreeNode` that contains this node, or `null` if this is the `rootNode`.   
  


### `var rootNode` → `TreeNode` _read-only_

Returns the root `TreeNode` for the tree that this node belongs to.   
  

