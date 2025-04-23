# `Speech.Utterance`

## Class Properties

### `var defaultSpeechRate` → `Number` _read-only_

### `var maximumSpeechRate` → `Number` _read-only_

### `var minimumSpeechRate` → `Number` _read-only_

## Constructors

### `new Speech.Utterance(string: `String`)` → `Speech.Utterance`

## Instance Properties

### `var pitchMultiplier` → `Number`

A value between 0.5 and 2.0, controlling the picth of the utterance.   
  


### `var postUtteranceDelay` → `Number`

### `var preUtteranceDelay` → `Number`

### `var prefersAssistiveTechnologySettings` → `Boolean`

If an assistive technology is on, like VoiceOver, the user's selected voice, rate and other settings will be used for this speech utterance instead of the default values. If no assistive technologies are on, then the values of the properties on AVSpeechUtterance will be used. Note that querying the properties will not refect the user's settings.   
  


### `var rate` → `Number`

A value between `Speech.Utterance.minimumSpeechRate` and `Speech.Utterance.maximumSpeechRate` controlling the rate of speech for the utterance.   
  


### `var string` → `String` or `null` _read-only_

### `var voice` → `Speech.Voice` or `null`

The voice to use for this utterance, or `null` in which case the default voice will be used.   
  


### `var volume` → `Number`

A value between 0.0 and 1.0 controller the volume of the utterance.   
  

