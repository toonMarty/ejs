# 1 Maximum

Write a function **max** that takes two arguments and returns their maximum.

Requirements:

* Do not use the ```Math.max()``` function of the Math object

#### File: 0-maximum.js

# 2 Arrow Max

Write a function **max** that takes two arguments and
returns their maximum.

Requirements:

* Do not use the ```Math.max()``` function of the Math object
* Use the arrow function notation

#### File: 1-maximum.js

# 3 Finding the hypotenuse

Write a function **hypotenuse** that takes two arguments, **base** and **height** and returns the hypotenuse

Requirements:
* Do not use the ```Math.hypot()``` function of the Math object

#### File: 2-hypotenuse.js

# 4 Arrow hypotenuse
Write a function **hypotenuse** that takes two arguments, **base** and **height** and returns the hypotenuse

Requirements:

* Do not use the ```Math.hypot()``` function of the Math object
* Use the arrow function notation

#### File: 3-hypotenuse.js

# 5 Absolutely

Write a function **abs** that takes one argument, and returns the argument's absolute value.

If **x** is a negative number, abs should return a
positive number

If **x** is a positive number or zero, abs should return the positive number or zero.

**The output of abs should always be positive or zero, never negative**

Requirements:
* Do not use the ```Math.abs``` function of the Math object

Example usage:

    const solution = absolute(-40);
    console.log(solution)
    40

    const solution2 = absolute(25);
    console.log(solution2)
    25

#### File: 5-absolute.js

# 6 An Absolute Arrow

Write a function **abs** that takes one argument, **x** and returns the argument's absolute value.

If **x** is a negative number, abs should return a
positive number

If **x** is a positive number or zero, abs should return the positive number or zero.

**The output of abs should always be positive or zero, never negative**

Requirements:
* Do not use the ```Math.abs()``` function of the Math object
* Use the arrow function notation

#### File: 6-absolute.js

# 7 The difference is the same

Write a function difference that returns the difference between
two numbers passed as arguments, **num1** and **num2**

The function should return the absolute value of the difference

Requirements:
* Use the **abs** function implemented in question 5.

#### File: 7-difference.js

# 8. Capital Offence

Write a function capitalize that takes a string argument and returns a capitalized form of the string.


#### File: 8-capital.js

# 9 Introduction to Redaction
Write a function, **redact** that takes a string argument, **str** and replaces every occurrence of the characters **f** or **o** by **x**. Return the redacted string.

Example

    let str = 'Owls own feathers and fur'
    redact(str)
    output -> xwls xwn xeathers and xur


#### File 9-redacted.js


# 10. Space count

Write a function countSpace that takes a string argument, **sentence** and counts the spaces in the string. The function should return the number of spaces in the argument.

Requirements:

* Do not use the ```String.includes()``` function
* Use the arrow notation

#### Example

    > let numberOfSpaces = spaceCount('A sentence is here again')
    > numberOfSpaces
    > 4

    > let numberOfSpaces2 = spaceCount('A sentence')
    > numberOdSpaces2
    > 1

#### File: 10-space_count.js

# 11. Range
Write a function **range** that takes 3 arguments a, b, n and returns **true** if both a and b fall between 0 and n – 1,
inclusive. The function should return **false** otherwise.

#### File: 11-range.js
