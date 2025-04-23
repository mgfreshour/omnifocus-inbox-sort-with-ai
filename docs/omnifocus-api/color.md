# `Color`

## Class Functions

### `function RGB(r: `Number`, g: `Number`, b: `Number`, a: `Number` or `null`)` → `Color`

Makes a new color in the `RGB` colorspace, with the given components. If the alpha component is not given, 1.0 is used.   
  


### `function HSB(h: `Number`, s: `Number`, b: `Number`, a: `Number` or `null`)` → `Color`

Makes a new color in the `HSB` colorspace, with the given components. If the alpha component is not given, 1.0 is used.   
  


### `function White(w: `Number`, a: `Number` or `null`)` → `Color`

Makes a new color in the `White` colorspace, with the given components. If the alpha component is not given, 1.0 is used.   
  


## Class Properties

### `var black` → `Color` _read-only_

A color in the `White` colorspace with white component of 0.0.   
  


### `var blue` → `Color` _read-only_

A color in the `RGB` colorspace with components (0, 0, 1, 1).   
  


### `var brown` → `Color` _read-only_

A color in the `RGB` colorspace with components (0.6, 0.4, 0.2, 1).   
  


### `var clear` → `Color` _read-only_

A color in the `White` colorspace with white component of 0.0 and alpha of 0.0 ("transparent black").   
  


### `var cyan` → `Color` _read-only_

A color in the `RGB` colorspace with components (0, 1, 1, 1).   
  


### `var darkGray` → `Color` _read-only_

A color in the `White` colorspace with white component of 0.333.   
  


### `var gray` → `Color` _read-only_

A color in the `White` colorspace with white component of 0.5.   
  


### `var green` → `Color` _read-only_

A color in the `RGB` colorspace with components (0, 1, 0, 1).   
  


### `var lightGray` → `Color` _read-only_

A color in the `White` colorspace with white component of 0.667.   
  


### `var magenta` → `Color` _read-only_

A color in the `RGB` colorspace with components (1, 0, 1, 1).   
  


### `var orange` → `Color` _read-only_

A color in the `RGB` colorspace with components (1, 0.5, 0, 1).   
  


### `var purple` → `Color` _read-only_

A color in the `RGB` colorspace with components (1, 0, 1, 1).   
  


### `var red` → `Color` _read-only_

A color in the `RGB` colorspace with components (1, 0, 0, 1).   
  


### `var white` → `Color` _read-only_

A color in the `White` colorspace with white component of 1.0.   
  


### `var yellow` → `Color` _read-only_

A color in the `RGB` colorspace with components (1, 1, 0, 1).   
  


## Instance Functions

### `function blend(otherColor: `Color`, fraction: `Number`)` → `Color` or `null`

Returns a new color that is a linear combination of the receiver and `fraction` of the other color (so, a fraction of 1.0 would just return the `otherColor`. If the colors cannot be blended (for example, if they cannot be converted to the same colorspace), then `null` is returned.   
  


## Instance Properties

### `var alpha` → `Number` _read-only_

Returns the alpha component of the color.   
  


### `var blue` → `Number` _read-only_

Returns the blue component of the color, after converting to a `RGB` colorspace.   
  


### `var brightness` → `Number` _read-only_

Returns the brightness component of the color, after converting to a `HSB` colorspace.   
  


### `var colorSpace` → `ColorSpace` _read-only_

Returns the colorspace of the instance.   
  


### `var green` → `Number` _read-only_

Returns the green component of the color, after converting to a `RGB` colorspace.   
  


### `var hue` → `Number` _read-only_

Returns the hue component of the color, after converting to a `HSB` colorspace.   
  


### `var red` → `Number` _read-only_

Returns the red component of the color, after converting to a `RGB` colorspace.   
  


### `var saturation` → `Number` _read-only_

Returns the saturation component of the color, after converting to a `HSB` colorspace.   
  


### `var white` → `Number` _read-only_

Returns the white component of the color, after converting to a `White` colorspace.   
  

