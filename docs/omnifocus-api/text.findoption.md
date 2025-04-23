# `Text.FindOption`

## Class Properties

### `var Anchored` → `Text.FindOption` _read-only_

Matches must be anchored to the beginning (or end if Backwards is include) of the string or search range.   
  


### `var Backwards` → `Text.FindOption` _read-only_

Search starting from the end of the string or range.   
  


### `var CaseInsensitive` → `Text.FindOption` _read-only_

Compare upper and lower case characters as equal.   
  


### `var DiacriticInsensitive` → `Text.FindOption` _read-only_

Ignore diacritics. For example, "ö" is considered the same as "o".   
  


### `var ForcedOrdering` → `Text.FindOption` _read-only_

Force an ordering between strings that aren't strictly equal.   
  


### `var Literal` → `Text.FindOption` _read-only_

Perform exact character-by-character matching.   
  


### `var Numeric` → `Text.FindOption` _read-only_

Order numbers by numeric value, not lexigraphically. Only applies to ordered comparisons, not find operations.   
  


### `var RegularExpression` → `Text.FindOption` _read-only_

For find operations, the string is treated as an ICU-compatible regular expression. If set, no other options can be used except for `CaseInsensitive` and `Anchored`.   
  


### `var WidthInsensitive` → `Text.FindOption` _read-only_

Ignore width differences. For example, "a" is considered the same as 'FULLWIDTH LATIN SMALL LETTER A' (U+FF41).   
  


### `var all` → `Array` of `Text.FindOption` _read-only_
