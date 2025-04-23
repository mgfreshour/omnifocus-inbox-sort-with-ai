# `Tree`

## Instance Functions

### `function nodeForObject(object: `Object`)` → `TreeNode` or `null`

Returns the `TreeNode` that represents the `object` in this `Tree`, or `null` if it cannot be found (possibly filtered out).   
  


### `function nodesForObjects(object: `Array` of `Object`)` → `Array` of `TreeNode`

Returns an array of `TreeNode`s for the objects that are currently in the `Tree`, according to the same filters as `nodeForObject()`. The size of the resulting node array may be smaller (even empty) than the passed in `objects` array.   
  


### `function reveal(nodes: `Array` of `TreeNode`)`

Ensures the ancestor nodes of all the specified nodes are expanded.   
  


### `function select(nodes: `Array` of `TreeNode`, extending: `Boolean` or `null`)`

Selects the specified `TreeNode`s that are visible (nodes with collapsed ancestors cannot be selected). If `extending` is `true`, the existing selection is not cleared.   
  


### `function copyNodes(nodes: `Array` of `TreeNode`, to: `Pasteboard`)`

Writes a serialized version of the `nodes` to the specified pasteboard.   
  


### `function paste(from: `Pasteboard`, parentNode: `TreeNode` or `null`, childIndex: `Number` or `null`)`

Attempts to read a serialized version of nodes from the pasteboard and create new items at the specified location in the receiver. If a parent node is not specified, then the root node of the receiver is assumed. If a `childIndex` is not specified, any new children are placed at the end of the parent's existing children.   
  


## Instance Properties

### `var rootNode` → `TreeNode` _read-only_

Returns the `rootNode` of the `Editor`.   
  


### `var selectedNodes` → `Array` of `TreeNode` _read-only_

Returns the list of selected `TreeNode`s, in the order they appear in the tree.   
  

