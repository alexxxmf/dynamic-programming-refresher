### fibonacci()

Generate a given a step number n, generate the corresponding number within the fibonacci sequence.

The non-memoized fibonacci solution incurs on a 2^n time complexity and n space complexity leaving aside constants. As we can see in the image attached the higher the number the more duplicated computations we incur on.

<img src="/images/fibonacci.png" width="600">

If we opt for memoization we could go from a 2^n to n time complexity as we can see in the picture

<img src="/images/fibonacci-memo.png" width="600">

### gridTravelling()

Given a grid of m \* n dimension, calculate in how many ways you can travel from the top left to the bottom right of the grid just going right or down.

As we can see in the following images we can think of the paths also as a tree where we can map all the combinations and see the duplicated computations for the paths.
We can use the base cases as the starting step (whem m and n are 1 or any of these two is 0).

<img src="/images/grid-traveler-complexity.png" width="300">
<img src="/images/grid-traveler-schema-and-complexity.png" width="300">
<img src="/images/grid-traveler-schema-step.png" width="300">
<img src="/images/grid-traveler-schema-with-highlighted-dups.png" width="300">

### Notes on memoization

As a general recipe for this type of problems we can see it's usually good to divide them into two steps. The first when we just visualize the problem as a tree and we try to solve that try with recursion.
The second one when we add the memo object and a base case where we return values from it plus some mechanism to store the freshly computated values

### canSum()

The function should take a targetSum argument plus and array of numbers as arguments. The function should return a boolean stating if it s possible to generate the targetSum using numbers from the array

All input numbers should be non-negative and from the array of numbers we can use a number as many times as we need.

<img src="/images/can-sum-dup-ops.png" width="300">
<img src="/images/can-sum-complexity.png" width="300">
<img src="/images/can-sum-complexity-improvement.png" width="300">
