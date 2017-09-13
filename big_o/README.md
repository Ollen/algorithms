# Big O

The Big O notation is used to describe the efficiency and complexity of an algorithm.

> Big O notation is used in Computer Science to describe the performance or complexity of an algorithm. Big O specifically describes the worst-case scenario, and can be used to describe the execution time required or the space used (e.g. in memory or on disk) by an algorithm.
>
> *- Rob Bell*



### O(1)

O(1) describes an algorithm that will always execute in the same time (or space) regardless of the size of the input data set.

### O(N)

O(N) describes an algorithm whose performance will grow linearly and in direct proportion to the size of the input data set.

### O(N^2)

O(N2) represents an algorithm whose performance is directly proportional to the square of the size of the input data set. This is common with algorithms that involve nested iterations over the data set. Deeper nested iterations will result in O(N3), O(N4) etc.



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



## Space Complexity

Time is not the only thing that matters in an algorithm. We might also care about the amount of memory- or space-required by an algorithm.

Space complexity is a parallel concept to time complexity. If we need to create an array of size `n`, this will require `O(n)` space. If we need a two-dimensional array of size `nxn`, this will require `O(n^2)` space.

***Note:*** *Not all time complexity is parallel space complexity.*



## Drop the Constants

It is very possible for `O(N)` code to run faster than `O(1)` code for specific inputs. Big O just describes the
rate of increase.

For this reason, we drop the constants in runtime. An algorithm that one might have described as `O(2N)`
is actually `O(N)`.

Many people resist doing this. They will see code that has two (non-nested) for loops and continue this
`O(2N)`. They think they're being more "precise:'They're not.



## Drop the Non-Dominant Terms

What do you do about an expression such as `O(N2 + N)`? That second N isn't exactly a constant. But it's
not especially important.

You should drop the non-dominant terms.

* `O(N^2 + N)` becomes `O(N^2)`
* `O(N + log N)` becomes `O(N)`



## Log N Runtimes

We commonly see O(log N) in runtimes. Where does this come from?
Let's look at binary search as an example. In binary search, we are looking for an example x in an N-element sorted array. 

We first compare x to the midpoint of the array. If x == middle, then we return. If x <
middle, then we search on the left side of the array. If x > middle, then we search on the right side of
the array.

We start off with an N-element array to search. Then, after a single step, we're down to `N/2` elements. One
more step, and we're down to `N/4` elements. We stop when we either find the value or we're down to just
one element.

The total runtime is then a matter of how many steps (dividing N by 2 each time) we can take until N
becomes 1.

```java
N = 16
N = 8 /* divide by 2 */
N = 4 /* divide by 2 */
N = 2 /* divide by 2 */
N = 1 /* divide by 2 */

```

We could look at this in reverse (going from 1 to 16 instead of 16 to 1 ). How many times we can multiply 1
by 2 until we get N?

```java
N = 1
N = 2 /* multiply by 2 */
N = 4 /* multiply by 2 */
N = 8 /* multiply by 2 */
N = 16 /* multiply by 2 */
```

What is kin the expression 2^k = N? This is exactly what log expresses.

#### References

[^1]: "A beginner's guide to big o notation" https://rob-bell.net/2009/06/a-beginners-guide-to-big-o-notation/ 
[^2]: "Cracking the Coding Interview 6th Edition" http://www.crackingthecodinginterview.com/