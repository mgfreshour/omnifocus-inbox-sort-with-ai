# `Speech.Synthesizer`

## Constructors

### `new Speech.Synthesizer()` → `Speech.Synthesizer`

## Instance Functions

### `function speakUtterance(utterance: `Speech.Utterance`)`

Enqueues the utterance. If the utterance is already enqueued or speaking, throws an error.   
  


### `function stopSpeaking(boundary: `Speech.Boundary`)` → `Boolean`

### `function pauseSpeaking(boundary: `Speech.Boundary`)` → `Boolean`

### `function continueSpeaking()` → `Boolean`

## Instance Properties

### `var paused` → `Boolean` _read-only_

### `var speaking` → `Boolean` _read-only_
