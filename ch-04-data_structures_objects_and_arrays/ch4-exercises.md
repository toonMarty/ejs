## General Requirements

* For odd number questions use the arrow function notation
  and for the even number questions use the function keyword
* Use JsDoc comments in all questions



## 1. First and foremost...
Write a function **firstElement** that takes an argument, **array**, and **returns** the first element in an array. 

#### File: 1-firstElement.js


## 2. Last but not least...
Write a function lastElement that takes an argument **array**,
and **returns** the last element in an array.


#### Example:

    let testArray = [18, 24, 67, 42]
    let testArray2 = [-20, 67, 89, -72]
    let testArray3 = ['Nemo', 'Marlin', 'Bubbles', 'Pearl']

    let sol1 = lastElement(testArray)
    let sol2 = lastElement(testArray2)
    let sol3 = lastElement(testArray3)

    console.log(sol1)
    console.log(sol2)
    console.log(sol3)

    $ node 2-lastElement.js
    42
    -72
    Pearl

#### File: 2-lastElement.js

## 3. Finders keepers
Write a function **findElement** that takes two arguments, **array** and **element**.
The function should return the element if it is found in the array otherwise it should **return undefined**

#### Example:

    let testElement = [10, -800, 99, 18]
    
    let sol1 = findElement(testElement, 10)
    let sol2 = findElement(testElement, 18)
    let sol3 = findElement(testElement, -800)
    let sol4 = findElement(testElement, 92)
    let sol5 = findElement(testElement, 'cat')

    console.log(sol1)
    console.log(sol2)
    console.log(sol3)
    console.log(sol4)
    console.log(sol5)

    $ node 3-findElement.js
    10
    18
    -800
    undefined
    undefined


#### File: 3-findElement.js

## 4. Finding Nemo

Write a function, **nemo**, that takes an argument, **nemoCast** which is an array of cast members from the movie Nemo and returns the index of the first occurrence of the string **Nemo**.
If the string **Nemo** is not in the array, the function should return -1.

Requirements:

* Do not use the ```indexOf()``` or any javascript array built-in method


#### Example

    let nemoCast1 = ['Crush', 'Marlin', 'Nemo', 'Peach', 'Bloat']
    let nemoCast2 = ['Deb', 'Darla', 'Bubbles', 'Bruce', 'Gargle', 'Nemo']
    let nemoCast3 = ['Anchor', 'Tad', 'Pearl', 'Chum', 'Coral', 'Fish School']
    let nemoCast4 = ['Marlin', 'Nemo', 'Darla', 'Nemo', 'Sheldon']

    let sol1 = nemo(nemoCast1)
    let sol2 = nemo(nemoCast2)
    let sol3 = nemo(nemoCast3)
    let sol4 = nemo(nemoCast4)

    console.log(sol1)
    console.log(sol2)
    console.log(sol3)
    console.log(sol4)

    $ node 4-nemo.js
    2
    5
    -1
    1

#### File: 4-nemo.js

## 5. I index take thee element...

Write a function mapIndexToElement that takes an array as an argument and outputs the mapping (->) of an array index to its element/item

Requirements:

 * Use template literals

#### Example

    let testArray = ['Nemo', 'Bloat', 'Darla', 'Marlin']
    mapIndexToElement(testArray)

    $ node 5-map_index_to_element.js
    [0] -> 'Nemo'
    [1] -> 'Bloat'
    [2] -> 'Darla'
    [3] -> 'Marlin'

#### File: 5-map_index_to_element.js

## 6. This index is my home

Write a function **mapIndexToElement** that takes an array as an argument and **returns an object** where the key/property of the object is the index of the array and the value of the object is the element found in that index

#### Example:

    let testArray = ['Deb', 'Darla', 'Bubbles', 'Bruce', 'Gargle', 'Nemo']
    let testArray2 = [100, 200, 30, 65, 77]

    let sol1 = mapIndexToElement(testArray)
    let sol2 = mapIndexToElement(testArray2)

    console.log(sol1)
    console.log(sol2)

    $ node 6-map_index_to_element.js
    {
    '0': 'Deb',
    '1': 'Darla',
    '2': 'Bubbles',
    '3': 'Bruce',
    '4': 'Gargle',
    '5': 'Nemo'
    }
    { '0': 100, '1': 200, '2': 30, '3': 65, '4': 77 }

#### File: 6-map_index_to_element.js

## 7. A vow to vowels

Write a function **vowelCount** that **returns the number of vowels** found in a sentence. The function should take an argument **sentence** which is a string

#### Example:

    let testSentence1 = "I don't see pound puppies or monchhichis walking around"
    let testSentence2 = "Say it dont spray it"
    let testSentence3 = "Do unto others"
    let testSentence4 = 'A cow and a dog dUg a HOle'

    let sol1 = vowelCount(testSentence1)
    let sol2 = vowelCount(testSentence2)
    let sol3 = vowelCount(testSentence3)
    let sol4 = vowelCount(testSentence4)

    console.log(sol1)
    console.log(sol2)
    console.log(sol3)
    console.log(sol4)

    $ node vowelCount.js
    18
    5
    5
    9

#### File:  7-vowelCount.js

## 8. Average Word length
Write a function ***avgWordLength** that calculates the average word length for a sentence. The function should take a string argument, **sentence**

Requirements/Hints:

* To calculate the average word length, use the formula:

        average_word_length = total number of characters in sentence / total number of words in sentence

* Consider punctuation marks to be part of the word to which it is
 attached..

* Spaces should be excluded when counting the total number of characters in the sentence.

* Display the answer to 1 decimal place / 2 significant digits.

#### Example:

    let testSentence1 = 'Trust me, I know these vents like the back of my chang'
    let testSentence2 = ' The quick  brown fox:     jumps over, the lazy dog.'
    let testSentence3 = 'When we seek to destroy others we often hurt ourselves, because it is the self that wants to be destroyed.'
    let testSentence4 = 'What in your unqualified, buzzword-bloated, little red school house of a brain is a functional alcoholic?'

    let sol1 = avgWordLength(testSentence1)
    let sol2 = avgWordLength(testSentence2)
    let sol3 = avgWordLength(testSentence3)
    let sol4 = avgWordLength(testSentence4)

    console.log(sol1)
    console.log(sol2)
    console.log(sol3)
    console.log(sol4)

    $ node 8-avgWordLength.js
    3.6
    4.2
    4.3
    5.6

#### File: 8-avgWordLength.js

# 9. Scrabble!
In the game scrabble, players form words using small tiles each containing a letter and a face value. The face value of a tile varies from one letter to another based on how rare the letter is.
The following object maps a letter to its face value


    const letterToPoint = {
        A: 1,
        B: 3,
        C: 3,
        D: 2,
        E: 1,
        F: 4,
        G: 2,
        H: 4,
        I: 1,
        J: 8,
        K: 5,
        L: 1,
        M: 3,
        N: 1,
        O: 1,
        P: 3,
        Q: 10,
        R: 1,
        S: 1,
        T: 1,
        U: 1,
        V: 4,
        W: 4,
        X: 8,
        Y: 4,
        Z: 10
    }

Write a function **scrabblePoints**, that takes a string argument, **word**, and calculates the value of the word by summing the values of its letters.

Hints:

* Use object, letterToPoint to help you calculate the value of a word
* Your program should allow any mixture of lower and uppercase letters in  the word
* You can use the ```toUpperCase()``` built-in function.
* Your function should return a value of **type number**


#### Example:

    let word1 = 'mbaqangas'
    let word2 = 'bananas'
    let word3 = 'zeitgeist'
    let word4 = 'syzygy'

    let sol1 = scrabblePoints(word1)
    let sol2 = scrabblPoints(word2)
    let sol3 = scrabblePoints(word3)
    let sol4 = scrabblePoints(word4)

    console.log(sol1)
    console.log(sol2)
    console.log(sol3)
    console.log(sol4)

    $ node 9-scrabbleWordPoint.js
    23
    9
    19
    25

#### File: 9-scrabblePoints.js
    

# 10. Intermediate Redaction ($#*!)
Write a function **bleep** that takes a string argument, **str**
and replaces every occurence of bar with **xxx**. Return the redacted string.


# 11. File Extensions

Write a function, **fileExtension** that takes an argument filename
and returns the extension of the file. The extension indicates the type of a file e.g **docx**, **txt**, **xslx**, **pdf**

If the file name does not have an extension return an empty string

Example:

    > let str = 'my-file.txt'
    > fileExtension(str)
    > 'txt'

    > let excelFile = 'inventory.xslx'
    > fileExtension(excelFile)
    > 'xslx'

    > let wordDocument = 'homework.docx'
    > fileExtension(wordDocument)
    > 'docx'

    > let eBook = 'JavaScript for Beginners.pdf'
    > fileExtension(eBook)
    > 'pdf'

    > let plainFile = 'file-1'
    > fileExtension(plainFile)
    > ''

# 12. Say My Name

Write a function invertedName that takes a string argument, **name** and displays the last name, a comma, and the first initial follwed by a period.


Example:
    let testName1 = 'Jeffrey Winger'
    let testName2 = 'Britta Perry'
    let testName3 = 'Abed Nadir'
    let testName4 = 'Troy Barnes'
    let testName5 = 'Annie Edison'
    let testName6 = 'Shirley Bennett'
    let testName7 = 'Pierce Hawthorne'

    let sol1 = invertedName(testName1)
    let sol2 = invertedName(testName2)
    let sol3 = invertedName(testName3)
    let sol4 = invertedName(testName4)
    let sol5 = invertedName(testName5)
    let sol6 = invertedName(testName6)
    let sol7 = invertedName(testName7)

    console.log(sol1)
    console.log(sol2)
    console.log(sol3)
    console.log(sol4)
    console.log(sol5)
    console.log(sol6)
    console.log(sol7)

    $ node 12-invertedName.js
    Winger, J.
    Perry, B.
    Nadir, A.
    Barnes, T.
    Edison, A.
    Bennett, S.
    Hawthorne, P.

#### File: 12-invertedName.js
