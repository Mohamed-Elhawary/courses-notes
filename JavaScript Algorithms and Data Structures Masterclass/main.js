/* Section 2: BigO Notation */

// L6: Timing our Code

function addUpToSolution1(n) {
    let total = 0;
    for(let i = 1; i <= n; i++) {
        total += i;
    }

    return total;
} 

console.log(addUpToSolution1(6));

function addUpToSolution2(n) {

    return n * (n + 1) / 2;
} 

console.log(addUpToSolution2(6));

/*
    >> What does better solution mean?
        - Faster ? [Will focus on this]
        - Less Memory ?
        - More Readable ?
*/

let time1Solution1 = performance.now();
addUpToSolution1(1000000000);
let time2Solution1 = performance.now();
console.log(`Time Elapsed: ${(time2Solution1- time1Solution1) / 1000} seconds.`);

let time1Solution2 = performance.now();
addUpToSolution2(1000000000); // Faster than Solution1
let time2Solution2 = performance.now();
console.log(`Time Elapsed: ${(time2Solution2- time1Solution2) / 1000} seconds.`);

/*---------------------------------------------------------------------------------------------------*/

// L7: Counting Operations

/* 
    >> In addUpToSolution1 we have:
        - 2 assignment (let total = 0; & let i = 0)
        - n comparisons (i <= n)
        - n additions and n assignments (i ++ & total += i)

    >> In addUpToSolution2 we have:
        - 3 operations (*, +, /) only

    > Depending on what we count, the number of operations can be as low as (2n) or as high as (5n + 2)
*/

/*---------------------------------------------------------------------------------------------------*/

// L8: Intro to Big O

/* 
    >> Big O Definition:
        > We say that an algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant times f(n), as n increases.
            - f(n) could be linear (f(n) = n)
            - f(n) could be quadratic (f(n) = n²)
            - f(n) could be constant (f(n) = 1)
            - f(n) could be something entirely different!

    > addUpToSolution1: Number of operations is eventually bounded by a multiple of n (say: 10n) [O(n)]
    > addUpToSolution2: always 3 operations [O(1)] 
*/

function countUpAndDown (n) { // [O(n)]
    console.log("Going up!");
    for (let i = 0; i < n; i++) { // [O(n)]
        console.log(i);
    }
    console.log("At the top!\nGoing down...");
    for (let j = n - 1; j >= 0; j--) { // [O(n)]
        console.log(j);
    }
    console.log("Back down. Bye!");
}

function printAllPairs (n) { // [O(n²)] >> O(n) Operation inside of O(n) Operation
    for (let i = 0; i < n; i++) { // [O(n)]
        for (let j = 0; j < n; j++) { // [O(n)]
            console.log(i, j);
        }
    }
}

/*---------------------------------------------------------------------------------------------------*/

// L9: Simplifying Big O Expressions

/*
    - O(2n) >> O(n)
    - O(500) >> O(1)
    - O(15n²) >> O(n²)
    - O(n + 10) >> O(n)
    - O(1000n + 50) >> O(n)
    - O(n² + 5n + 8) >> O(n²)

    >> Big O Shorthands:
        1. Arithmetic operations are [constant]
        2. Variable assignment is [constant]
        3. Accessing elements in an array (by index) or object (by key) is [constant]
        4. In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop
*/

function logAtLeast5 (n) { // [O(n)]
    for (let i = 1; i <= Math.max(5, n); i++) {
       console.log(i);
    }
}

function logAtMost5 (n) { // [O(1)]
    for (let i = 1; i <= Math.min(5, n); i++) {
        console.log(i);
    }
}

/*---------------------------------------------------------------------------------------------------*/

// L11: Space Complexity

/* 
    >> We can use big O notation to analyze space complexity, how much additional memory do we need to allocate in order to run the code in our algorithm
        - Most primitives (booleans, numbers, undefined, null) are [constant] space
        - Strings require O(n) space (where n is the string length)
        - Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)
*/

function sum(arr) { // [O(1)] Space
    let total = 0; // one number
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]; // another number
    }
    return total;
}

function double (arr) { // [O(n)] Space
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i]);
    }
    return newArr; // n numbers
}

/*---------------------------------------------------------------------------------------------------*/

// L12: Logs & Recap

/*
    >> what's a log?
        - log₂(8) = 3  >>>>  2 power of (3) = 8 
        - log₂(value) = exponent >>>> 2 power of (exponent) = value

    > The Algorithm of a number roughly measures the number of times you can divide that number by 2 before you get a value that's less than or equal to one.

    >> Who uses log in complexity ??
        - Certain searching algorithms have logarithmic (time) complexity.
        - Efficient sorting algorithms involve logarithms.
        - Recursion sometimes involves logarithmic (space) complexity.
*/

/* 
    >> Recap
        - To analyze the performance of an algorithm, we use Big O Notation
        - Big O Notation can give us a high level understanding of the time or space complexity of an algorithm
        - Big O Notation doesn't care about precision, only about general trends (linear? quadratic? constant?)
        - The time or space complexity (as measured by Big O). depends only on the algorithm, not the hardware used to run the algorithm
*/

/*---------------------------------------------------------------------------------------------------*/

/* Section 3: BigO Notation */

// L15: The Big O of Objects

/*
    >> When to use Objects ?
        - when you don't need order
        - when you need a fast access/insertion and removal

    >> Big O of Objects
        * Insertion - 0(1)
        * Removal - O(1)
        * Searching - O(N)
        * Access - 0(1)
        
    > When you don't need any ordering, objects are an excellent choice!, because of constant time for insertion, removal and accessing data.

    >> Big O of Object Methods
        - Object.keys - O(N)
        - Object.values - O(N)
        - Object.entries - O(N)
        - hasOwnProperty - 0(1)
*/

/*---------------------------------------------------------------------------------------------------*/

// L16: When are Arrays Slow?

/*
    >> When to use Arrays ?
        - when you need order
        - when you need a fast access/insertion and removal (sort of ...)

    >> Big O of Arrays
        * Insertion - It depends [Insert at END [O(1)] >> (Push)] / [Insert at BEGIN [O(N)] >> (Shift)]
        * Removal - It depends [Remove from END [O(1)] >> (Pop)] / [Remove from BEGIN [O(N)] >> (unShift)]
        * Searching O(N)
        * Access - O(1)
        
    > Inserting item at the end of the array is faster than inserting at the beginning, because inserting at the end will just require adding a new index at the end of the array after the last existing index,
      but inserting at the beginning will require re-ordering the array items and shifting their index for each item, where index (Zero) now will be related to the new inserted item, so the amount of time it takes to inserting 
      item at the beginning of array, roughly grows in proportion with the size of the array. 

    > Same time complexity and same logic goes for removing item from the end and from the beginning of the array.
*/

/*---------------------------------------------------------------------------------------------------*/

// L17: Big O of Array Methods ?

/*
    >> Big O of Array Operations
        • push - 0(1)
        • pop - 0(1)
        • shift - O(N)
        • unshift - O(N) 
        • concat - O(N)
        • slice - O(N)
        • splice - O(N)
        • sort - O(N * log N)
        • forEach/map/fill/reduce/etc. - O(N)
*/

/*---------------------------------------------------------------------------------------------------*/

/* Section 4: Problem Solving Approach */

// L19: Introduction to Problem Solving

/* 
    >> What is Algorithm?
        - A process or set of steps to accomplish a certain task.

    >> How do you improve in solving problems?
        - Devise a plan for solving problems
        - Master common problem solving patterns
    
    >> Problem Solving Steps:
        - Understand the problem
        - Explore Concrete Examples
        - Break it down
        - Solve/Simplify
        - Look back and refactor
*/

/*---------------------------------------------------------------------------------------------------*/

// L20: Step 1: Understand The Problem

/*
    >> UNDERSTAND THE PROBLEM: 
        1. Can I restate the problem in my own words?
        2. What are the inputs that go into the problem?
        3. What are the outputs that should come from the solution to the problem?
        4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem? 
            (You may not be able to answer this question until you set about solving the problem. That's okay; it's still worth considering the question at this early stage.)
        5. How should I label the important pieces of data that are a part of the problem?
*/

/*---------------------------------------------------------------------------------------------------*/

// L21: Step 2: Explore Examples

/*
    >> EXPLORE EXAMPLES
        • Start with Simple Examples 
        • Progress to More Complex Examples
        • Explore Examples with Empty Inputs
        • Explore Examples with Invalid Inputs
*/

/*---------------------------------------------------------------------------------------------------*/

// L22: Step 3: Break It Down

/*
    >> BREAK IT DOWN ?
        - Explicitly write out the steps you need to take. This forces you to think about the code you'll write before you write it, 
          and helps you catch any lingering conceptual issues or misunderstandings before you dive in and have to worry about details (e.g. language syntax) as well.

    > Write a function which takes in a string and returns count of each character in the string.
        * Examples:
        ------------
            - charCount("aaaa"); // {a:4}
            - charCount("hello"); // {h:1, e:1, l:2, o:1}
            - charCount("Your PIN number is 1234!"); // {1:1, 2:1, 3:1, 4:1, b:1, e:1, i:2, m:1, n:2, o:1, p:1, r:2, s:1, u:2, y:1}
*/

    function charCount(str) { // Break the steps of the problem down
        // make object to return at end
        // loop over string, for each character...
        // if the char is a number/letter AND is a key in object, add one to count
        // if the char is a number/letter AND not in object, add it to object and set value to 1
        // if character is something else (space, period, etc. ) don't do anything
        // return object at end
    }

/*---------------------------------------------------------------------------------------------------*/

// L23: Step 4: Solve Or Simplify

/*
    >> SIMPLIFY
    - Find the core difficulty in what you're trying to do
    - Temporarily ignore that difficulty
    - Write a simplified solution
    - Then incorporate that difficulty back in
*/

function charCount(str) {
    // make object to return at end
    var result = {};
    // loop over string, for each character...
    for(var i = 0; i < str.length; i++) {
        var char = str[i].toLowerCase();
        //if the char is a number/letter AND is a key in object, add one to count
        if (result [char] > 0) {
            result [char]++;
        }
        //if the char is a number/letter AND not in object, add it to object and set value t
        else {
            result [char] = 1;
        };
    }
    //if character is something else (space, period, etc.) don't do anything [Maybe this part is difficult, I will ignore it for later but keep the comment for this part to remember it]
    // return object at end
    return result;
}

/*---------------------------------------------------------------------------------------------------*/

// L24: Step 5: Look Back and Refactor

/*
    >> REFACTORING QUESTIONS:
        • Can you check the result?
        • Can you derive the result differently?
        • Can you understand it at a glance?
        • Can you use the result or method for some other problem?
        • Can you improve the performance of your solution?
        • Can you think of other ways to refactor?
        • How have other people solved this problem?
*/

function charCount(str) {
    var obj = {};
        for (var i = 0; i < str.length; i++) {
            var char = str[i].toLowerCase();
            if (/[a-z0-9]/.test(char)) {
                if (obj [char] > 0) {
                    obj [char] ++;
                } else {
                    obj [char] = 1;
                };
            }
        }
    return obj;
}

/*
    >> Refactoring Code:
        - using "for of" loop 
        - using one line condition in obj[char] instead of "if else" condition
        - using built-in js function to check if the "char" is [number/string] instead of "Regex".
            {The used built-in method below is faster than Regex by 55%}
        - lower case any char after checking of its AlphaNumeric state, to not convert all the string chars into lowercase even if non AlphaNumeric chars.
*/

function charCount(str) { 
    var obj = {};
    for (var char of str) {
        if (isAlphaNumeric(char)) {
            char = char.toLowerCase();
            
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}

function isAlphaNumeric (char){
    var code = char.charCodeAt(0);
    if (
        !(code> 47 && code <58) && // numeric (0-9)
        ! (code> 64 && code < 91) && // upper alpha (A-Z)
        ! (code> 96 && code < 123) // lower alpha (a-z)
    ) { 
        return false;
    }

    return true;
}

/*---------------------------------------------------------------------------------------------------*/

/* Section 5: Problem Solving Patterns */

// L27: Intro to Problem Solving Patterns

/*
    >> SOME PATTERNS:
        • Frequency Counter
        • Multiple Pointers
        • Sliding Window
        • Divide and Conquer
        • Dynamic Programming
        • Greedy Algorithms
        • Backtracking
*/