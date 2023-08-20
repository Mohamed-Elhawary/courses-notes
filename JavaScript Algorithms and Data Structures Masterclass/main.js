/* Section 2: BigO Notation */

// L6: Timing our Code

function addUpToSolution1(n) {
    let total = 0;
    for(i = 1; i <= n; i++) {
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
    > What does better solution mean ?
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


// L7: Counting Operations

/* 
    - In addUpToSolution1 we have:
        - 2 assignment (let total = 0; & let i = 0)
        - n comparisons (i <= n)
        - n additions and n assignments (i ++ & total += i)

    - In addUpToSolution2 we have:
        - 3 operations (*, +, /) only

    >> Depending on what we count, the number of operations can be as low as (2n) or as high as (5n + 2)
*/


// L8: Intro to Big O

/* 
    >> Big O Definition
        We say that an algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant times f(n), as n increases.
            - f(n) could be linear (f(n) = n)
            - f(n) could be quadratic (f(n) = n²)
            - f(n) could be constant (f(n) = 1)
            - f(n) could be something entirely different!

    >> addUpToSolution1: Number of operations is eventually bounded by a multiple of n (say: 10n) [O(n)]
    >> addUpToSolution2: always 3 operations [O(1)] 
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
        for (let j = 0; j< n; j++) { // [O(n)]
            console.log(i, j);
        }
    }
}

// L9: Simplifying Big O Expressions

/*
    - O(2n) >> O(n)
    - O(500) >> O(1)
    - O(15n²) >> O(n²)
    - O(n + 10) >> O(n)
    - O(1000n + 50) >> O(n)
    - O(n² + 5n + 8) >> O(n²)
*/

/*
    >> Big O Shorthands
        1. Arithmetic operations are constant
        2. Variable assignment is constant
        3. Accessing elements in an array (by index) or object (by key) is constant
        4. In a loop, the the complexity is the length of the loop times the complexity of whatever happens inside of the loop
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

// L11: Space Complexity

/* 
    >> We can use big O notation to analyze space complexity, how much additional memory do we need to allocate in order to run the code in our algorithm

        - Most primitives (booleans, numbers, undefined, null) are constant space
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

// L12: Logs & Recap

/*
    >> what's a log?
        
        - log₂(8) = 3  >>>>  2 power of (3) = 8 
        - log₂(value) = exponent >>>> 2 power of (exponent) = value

    > The logarithm of a number roughly measures the number of times you can divide that number by 2 before you get a value that's less than or equal to one.
*/

/*
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
        
        -   When you don't need any ordering,objects are an excellent choice!, because of constant time for insertion, removal and accessing data.
*/

/*
    >> Big O of Object Methods
        - Object.keys - O(N)
        - Object.values - O(N)
        - Object.entries - O(N)
        - hasOwnProperty - 0(1)
*/


// L16: When are Arrays Slow?

/*
    >> When to use Arrays ?
        - when you need order
        - when you need a fast access/insertion and removal (sort of ...)

    >> Big O of Arrays
        * Insertion - It depends [Insert at END [O(1)] >> (Push)] [Insert at Begin [O(N)] >> (Shift)]
        * Removal - It depends [Remove from END [O(1)] >> (Pop)] [Remove from Begin [O(N)] >> (unShift)]
        * Searching O(N)
        * Access - O(1)
        
        -   Inserting item at the end of the array is faster than inserting at the beginning, because inserting at the end will just require adding a new index at the end of the array after the last existing index,
            but inserting at the beginning will require re-ordering the array items and shifting their index for each item, where index (Zero) now will be related to the new inserted item, so the amount of time it takes to inserting 
            item at the beginning of array, roughly grows in proportion with the size of the array. 

        -   Same time complexity and same logic goes for removing item from the end and from the beginning of the array.
*/
