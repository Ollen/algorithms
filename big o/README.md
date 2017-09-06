# Big O

The Big O notation is used to describe the efficiency and complexity of an algorithm.

> Big O notation is used in Computer Science to describe the performance or complexity of an algorithm. Big O specifically describes the worst-case scenario, and can be used to describe the execution time required or the space used (e.g. in memory or on disk) by an algorithm.
>
> *- Rob Bell*



## Big O, Big Theta, and Big Omega

- **O (big O):**  In academia, big O describes an upper bound on the time. An algorithm that prints all the
  values in an array could be described as ` O(N)`, but it could also be described as `O(N2)`, `O(N3)`, or `0(2N)`. The algorithm is at least as fast as each of these; therefore they are upper bounds on the runtime.
- **Ω (big omega):** In academia, Ω is the equivalent concept but for lower bound. Printing the values in
  an array is `Ω(N)` as well as `Ω(log N)` and `Ω(1)`. After all, you know that it won't be faster than those
  runtimes.
- **ϴ (big theta):** In academia, ϴ means both O and Ω. That is, an algorithm is `ϴ(N)` if it is both `O(N)` and
  `Ω( N)`. ϴ gives a tight bound on runtime.



***Note:***

Best, worst, and expected cases describe the big O (or big theta) time for particular inputs or scenarios.
Big 0, big omega, and big theta describe the upper, lower, and tight bounds for the runtime.

### O(1)

O(1) describes an algorithm that will always execute in the same time (or space) regardless of the size of the input data set.

### O(N)

O(N) describes an algorithm whose performance will grow linearly and in direct proportion to the size of the input data set.

### O(N^2)

O(N2) represents an algorithm whose performance is directly proportional to the square of the size of the input data set. This is common with algorithms that involve nested iterations over the data set. Deeper nested iterations will result in O(N3), O(N4) etc.

#### References

[^1]: "A beginner's guide to big o notation" https://rob-bell.net/2009/06/a-beginners-guide-to-big-o-notation/ 
[^2]: "Cracking the Coding Interview 6th Edition" http://www.crackingthecodinginterview.com/