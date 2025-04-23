# `Speech.Voice`

## Class Functions

### `function withLanguage(code: `String` or `null`)` → `Speech.Voice` or `null`

Returns a voice for the given BCP-47 language code (such as `en-US` or `fr-CA`), or the default voice if passed `null`. Returns `null` for an invalid langauge code.   
  


### `function withIdentifier(identifier: `String`)` → `Speech.Voice` or `null`

Returns the voice with the given identifier, or `null` if not found.   
  


## Class Properties

### `var allVoices` → `Array` of `Speech.Voice` _read-only_

### `var currentLanguageCode` → `String` _read-only_

## Instance Properties

### `var gender` → `Speech.Voice.Gender` _read-only_

### `var identifier` → `String` _read-only_

### `var language` → `String` _read-only_

### `var name` → `String` _read-only_
