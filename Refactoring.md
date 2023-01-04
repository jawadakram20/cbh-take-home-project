# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

I made the following changes to make the function more readable:

1. I combined the if statements that checked for the presence of event and event.partitionKey into a single if statement to reduce the nesting.
2. I moved the candidate assignment From event to a new method and removed the unnecessary else statement after the if (event.partitionKey) block because the candidate variable will only be set if event and event.partitionKey are both truthy.
3. I removed the unnecessary if (candidate) block because the candidate variable will only be set if event and event.partitionKey are both truthy, or if event is truthy and event.partitionKey is falsy or will be deault to TRIVIAL_PARTITION_KEY.
