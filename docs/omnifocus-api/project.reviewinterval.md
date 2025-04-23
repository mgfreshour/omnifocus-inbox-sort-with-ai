# `Project.ReviewInterval`

`Project.ReviewInterval` is a value object which represents a simple repetition interval. Because it's a value object rather than a proxy, changing its properties doesn't affect any projects directly. To change a project's review interval, update the value and assign it back to the project's `reviewInterval` property:
    
    
     let project = projectNamed("Miscellaneous");
     let reviewInterval = project.reviewInterval;
     reviewInterval.steps = 3;
     reviewInterval.unit = "months";
     project.reviewInterval = reviewInterval;
    

Note: At one time these simple repetition intervals were also used for task repetitions, but over time we replaced those with the more flexible `Task.RepetitionRule`. Eventually we expect to also replace this review interval with flexible repetition rules.   
  


## Instance Properties

### `var steps` → `Number`

The count of `units` to use for this interval (e.g. "14" days or "12" months).   
  


### `var unit` → `String`

The units to use (e.g. "days", "weeks", "months", "years").   
  

