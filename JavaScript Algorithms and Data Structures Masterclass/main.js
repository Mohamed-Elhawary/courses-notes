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

    function charCount1(str) { // Break the steps of the problem down
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

function charCount2(str) {
    // make object to return at end
    let result = {};
    // loop over string, for each character...
    for(let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
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

function charCount3(str) {
    let obj = {};
        for (let i = 0; i < str.length; i++) {
            let char = str[i].toLowerCase();

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
            > The used built-in method below is faster than Regex by 55%
        - lower case any char after checking of its AlphaNumeric state, to not convert all the string chars into lowercase even if non AlphaNumeric chars.
*/

function charCount4(str) { 
    let obj = {};

    for (let char of str) {
        if (isAlphaNumeric(char)) {
            char = char.toLowerCase();
            
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}

function isAlphaNumeric (char){
    let code = char.charCodeAt(0);

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

/*---------------------------------------------------------------------------------------------------*/

// L28: Frequency Counter Pattern

/*
    >> Frequency Counter Pattern:
        - This pattern uses objects or sets to collect values/frequencies of values.
        - This can often avoid the need for nested loops or O(N²) operations with arrays / strings.

    > Write a function called same, which accepts two arrays. The function should return true if every value in the
      array has it's corresponding value squared in the second array. The frequency of values must be the same.
        * Examples:
        ------------
            - same([1,2,3], [4,1,9]) // true 
            - same([1,2,3], [1,9]) // false
            - same([1,2,1], [4,4,1]) // false (must be same frequency)
*/

function same1(arr1, arr2) { // This is a NAIVE solution, means [Not the best possible solution in this case] >> Time Complexity is [O(n^2)]
    if(arr1. length !== arr2.length) {
        return false;
    }
    
    for(let i = 0; i < arr1.length; i++) { // [O(n)]
        let correctIndex = arr2.indexOf(arr1[i] ** 2); // [O(n)]
        if (correctIndex -1){
            return false;
        }
        arr2.splice (correctIndex, 1)
    }
    
    return true;
}

function same2(arr1, arr2) { // [O(n)]
    if(arr1. length !== arr2. length) {
        return false;
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for(let val of arr1) { // [O(n)]
        frequencyCounter1[val] = (frequencyCounter1 [val] || 0) + 1; // === ++frequencyCounter1 [val] || 1
    }
    
    for(let val of arr2) { // [O(n)]
        frequencyCounter2 [val] = (frequencyCounter2 [val] || 0) + 1; // === ++frequencyCounter2 [val] || 1
    }
    
    for(let key in frequencyCounter1) { // [O(n)]
        if(!(key ** 2 in frequencyCounter2)) {
            return false
        }

        if(frequencyCounter2 [key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }

    return true;
}

/*---------------------------------------------------------------------------------------------------*/

// L29: Frequency Counter: Anagram Challenge

/* 
    >> ANAGRAMS: 
        - An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

        > Write a function to determine if the second string is an anagram of the first. 
            * Examples:
            ------------
            - validAnagram ( '') // true
            - validAnagram ('aaz', 'zza') // false
            - validAnagram('anagram', 'nagaram') // true
            - validAnagram ("rat", "car") // false) // false
            - validAnagram('awesome', 'awesom') // false
            - validAnagram('qwerty', 'qeywrt') // true
            - validAnagram('texttwisttime', 'timetwisttext') // true
*/

/*---------------------------------------------------------------------------------------------------*/

// L30: Anagram Challenge Solution

function validAnagram1(first, second) { // [O(n)]
    if (first.length !== second.length) {
        return false;
    }

    const lookup = {};

    for (let i = 0; i < first.length; i++) {
        let letter = first[i];
        // if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup [letter] = 1;
    }

    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        // can't find letter or letter is zero then it's not an anagram
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }

    return true;
}

function validAnagram2(str1, str2){ // [O(n)]
    if(str1.length !== str2.length) {
        return false;
    }
    
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    
    for(let char of str1) { // [O(n)]
        frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1; // === ++frequencyCounter1[char] || 1
    }
        
    for(let char of str2) { // [O(n)]
        frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1; // === ++frequencyCounter2[char] || 1
    }
        
    for(let key in frequencyCounter1) { // [O(n)]
        if(!(key in frequencyCounter2)) {
            return false
        }

        if(frequencyCounter2[key] !== frequencyCounter1[key]){
            return false
        }
    }
    
    return true;
    
}

/*---------------------------------------------------------------------------------------------------*/

// L31: Multiple Pointers Pattern

/*
    >> Multiple Pointers Pattern:
        - Creating pointers that correspond to an index or position towards the beginning, end or middle base a certain condition.
        - Very efficient for solving problems with minimal space complexity as well
        
        > Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair
          where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.
            * Examples:
            ------------
            - sumZero([-3, -2,-1,0,1,2,3]) // [-3,3]
            - sumZero([-2,0,1,3]) // undefined
            - sumZero([1,2,3]) // undefined
*/

function sumZero1(arr) { // This is a NAIVE solution, means [Not the best possible solution in this case] >> Time Complexity is [O(n^2)]
    for(let i = 0; i < arr.length; i++){
        for(let j =i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}

function sumZero2(arr) { // [O(n)]
    let left = 0;
    let right = arr.length - 1;
    
    while(left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

/*---------------------------------------------------------------------------------------------------*/

// L32: Multiple Pointers: Count Unique Values Challenge

/*
    > Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. 
      There can be negative numbers in the array, but it will always be sorted.
        * Examples:
        ------------
        - countUniqueValues ([1,1,1,1,1,2]) // 2 
        - countUniqueValues ([1,2,3,4,4,4,7,7,12,12,13]) // 7
        - countUniqueValues ([]) // 0
        - countUniqueValues ( [-2,-1,-1,0,1]) // 4
*/

/*---------------------------------------------------------------------------------------------------*/

// L33: Count Unique Values Solution

function countUniqueValues (arr) {
    if(arr.length === 0) return 0;

    var i = 0;

    for (var j = 1; j < arr.length; j++) {
        if(arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }

    return i + 1;
}

/*---------------------------------------------------------------------------------------------------*/

// L34: Sliding Window Pattern

/*
    >> Sliding Window Pattern:
        - This pattern involves creating a window which can either be an array or number from one position to another
          Depending on a certain condition, the window either increases or closes (and a new window is created).
          Very useful for keeping track of a subset of data in an array/string.

        > Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function
          should calculate the maximum sum of n consecutive elements in the array.
            * Examples:
            ------------
            - maxSubarray Sum([1,2,5,2,8,1,5], 2) // 10
            - maxSubarray Sum ([1,2,5,2,8,1,5],4) // 17
            - maxSubarraySum ( [4,2,1,6], 1) // 6
            - maxSubarraySum( [4,2,1,6,2],4) // 13
            - maxSubarraySum( [],4) // null
*/

function maxSubarraySum1(arr, num) { // This is a NAIVE solution, means [Not the best possible solution in this case] >> Time Complexity is [O(n^2)]
    if (num > arr.length) {
        return null;
    }

    var max = -Infinity;
    
    for (let i = 0; i < arr.length - num + 1; i++) {
        let temp = 0;
        
        for (let j = 0; j < num; j++) { 
            temp += arr[i + j];
        }

        if (temp > max) {
            max = temp;
        }
    }

    return max;
}

function maxSubarraySum2(arr, num) { // [O(n)]
    let maxSum = 0;
    let tempSum = 0;
    
    if (arr.length < num) return null;
    
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }

    tempSum = maxSum;
    
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];

        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}

/*---------------------------------------------------------------------------------------------------*/

// L35: Divide And Conquer Pattern

/*
    >> Divide And Conquer Pattern:
        - This pattern involves dividing a data set into smaller chunks and then repeating
          a process with a subset of data. This pattern can tremendously decrease time complexity.

        > Given a sorted array of integers, write a function called binarySearch, that accepts a value and returns the
          index where the value passed to the function is located. If the value is not found, return -1
            * Examples:
            ------------
            - binarySearch([1,2,3,4,5,6],4) // 3 
            - binarySearch([1,2,3,4,5,6],6) // 5
            - binarySearch([1,2,3,4,5,6¹],11) // -1
*/

function linearSearch(arr, val) { // This is a NAIVE solution, means [Not the best possible solution in this case] >> Time Complexity is [O(n)] {Linear Search}
    for (let i = 0; i < arr.length; i++) {
    
        if(arr[i] === val) {
            return i;
        }
    }

    return -1;
}

function binarySearch (array, val) { // [O(log(n))]
    let min = 0;
    let max = array.length - 1;

    while (min <= max) {
        let middle = Math.floor((min + max) / 2);

        let currentElement = array[middle];

        if (currentElement < val) {
            min = middle + 1;
        } else if (currentElement > val) {
            max = middle - 1;
        } else {
            return middle;
        }
    }

    return -1;
}

/*---------------------------------------------------------------------------------------------------*/

/* Section 7: Recursion */

// L42: Why Use Recursion?

/*
    >> What is Recursion?
        - A process (a function in our case) that calls itself.

    >> Where can we use Recursion?
        - JSON.parse / JSON.stringify
        - document.getElementById and DOM traversal algorithms
        - Object traversal
        - We will see it with more complex data structures
        - It's sometimes a cleaner alternative to iteration
*/

/*---------------------------------------------------------------------------------------------------*/

// L43: The Call Stack

/*
    >> The Call Stack:
        - It's a stack data structure.
        - Any time a function is invoked it is placed (pushed) on the top of the call stack.
        - When JavaScript sees the return keyword or when the function ends, the compiler will remove (pop).

    >> What is the relation between Call Stack and Recursion?
        - You're used to functions being pushed on the call stack and popped off when they are done.
        - When we write recursive functions, we keep pushing new functions onto the call stack!
*/

/*---------------------------------------------------------------------------------------------------*/

// L44: Our First Recursive Function

/*
    >> How Recursive Functions Work?
        - Invoke the same function with a different input until you reach your base case!
        - The Base Case is The condition when the recursion ends. This is the most important concept to understand.

    >> Two Essential parts of recursive function:
        - Base Case
        - Different Input
*/

function countDown(num) {
    if (num <= 0) { // Base Case
        console.log("All Done!!");

        return;
    }

    console.log(num);

    num--;

    countDown(num); // Recursion
}

countDown(5);

/*---------------------------------------------------------------------------------------------------*/

// L45: Our Second Recursive Function

function sumRange(num) {
    if (num === 1) return 1; // Base Case

    return num + sumRange(num - 1);
}

sumRange(4); // 10
// 4 + sumRange(3) >> (10)
    // 3 + sumRange(2) >> (6)
        // 2 + sumRange(1) >> (3)
            // 1

/*---------------------------------------------------------------------------------------------------*/

// L46: Writing Factorial Iteratively

function factorial1(num) { // Iteratively
    let total = 1;

    for (let i = num; i > 0; i--) {
        total *= i;
    }

    return total;
}

/*---------------------------------------------------------------------------------------------------*/

// L47: Writing Factorial Recursively

function factorial2(num) { // Recursively
    if (num === 1) return 1;
    
    return num * factorial2(num - 1);
}

factorial2(5); // 5 * 4 * 3 * 2 * 1
/*  5 * factorial(4)
        4 * factorial(3)
            3 * factorial(2)
                2 * factorial(1)
                    1
*/

/*---------------------------------------------------------------------------------------------------*/

// L48: Common Recursion Pitfalls

/* 
    >> Where things go wrong?
        • No base case
        • Forgetting to return or returning the wrong thing!
        • Stack Overflow! [Stack Exceeded]

        * Examples:
        ------------
        -   function factorial (num) {
                if (num === 1) return 1;
                return num* factorial (num);
            }

        -   function factorial (num) {
                if (num === 1) console.log(1) ;
                return num * factorial (num-1);
            }
*/

/*---------------------------------------------------------------------------------------------------*/

// L49: Helper Method Recursion

/*  
    >> Helper Method Recursion Pattern
        - It is just a pattern where we have an outer function that is not recursive, which calls an inner function, which is recursive.
*/

function outer(input) {
    let outerScopedVar = [];

    function helper(helperInput) {
        // modify the outerScopedVar

        helper(helperInput--);
    }

    helper(input);

    return outerScopedVar;
}

function collectOddValues1(arr) {
    let result = [];
    
    function helper (helperInput) { // we use helper method recursion here, because if we use [collectOddValues] itself as the recursive function, we will reset [result] array to empty array, every time we call [collectOddValues].
        if (helperInput. length === 0) {
            return;
        }

        if(helperInput [0] % 2 !== 0) {
            result.push(helperInput[0])
        }

        helper (helperInput.slice (1));
    }

    helper (arr)

    return result;
}

/*---------------------------------------------------------------------------------------------------*/

// L50: Pure Recursion

/*
    >> Pure Recursion:
        - It means the function itself is totally self contained and it is recursive, we don't have some external data structure like
          we had in the previous example at the previous lecture, we don't need a nested function helper method recursion,  
          we can do it with pure recursion, this is more challenging.

    >> Pure Recursion Tips:
        • For arrays, use methods like slice, the spread operator, and concat that make copies of arrays so you do not mutate them.
        • Remember that strings are immutable so you will need to use methods like slice, substr, or substring to make copies of strings.
        • To make copies of objects use Object.assign, or the spread operator.
*/

function collectOddValues2(arr) {
    let newArr = [];
    
    if(arr.length === 0) {
        return newArr;
    }
    
    if(arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }
    
    newArr = newArr.concat(collectOddValues2(arr.slice(1)));

    return newArr;
}

collectOddValues2([1, 2, 3, 4, 5]);
/*
[1].concat(collectOddValues ([2,3,4,5]))
            [].concat(collectOddValues([3,4,5]))
                        [3].concat(collectOddValues([4,5]))
                                    [].concat(collectOddValues([5]))
                                                [5].concat(collectOddValues([]))
                                                            []
*/

/*---------------------------------------------------------------------------------------------------*/

/* Section 10: Searching Algorithms */

// L57: Intro to Searching

/*
    >> Searching Algorithms:
        - Linear Search in arrays
        - Binary Search in sorted arrays
        - Naive String Search
        - KMP String Search
*/

/*---------------------------------------------------------------------------------------------------*/

// L58: Intro to Linear Search

/*
    >> How do we Search? [Linear Search]
        - Given an array, the simplest way to search for a value is to look at every element in the array and check if it's the value we want.
        - JavaScript built-in search methods:-
            • indexOf
            • includes
            • find
            • findIndex
*/

/*---------------------------------------------------------------------------------------------------*/

// L59: Linear Search Solution

function linearSearch(arr, val) { // [O(n)]
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === val) {
            return i;
        }
    }

    return -1;
}

/*---------------------------------------------------------------------------------------------------*/

// L60: Linear Search BIG O

/*
    >> Linear Search Big O:
        - Best Case: O(1)
        - Worst Case: O(n)
        - Average Case: O(n)
*/

/*---------------------------------------------------------------------------------------------------*/

// L61: Intro to Binary Search

/*
    >> Binary Search:
        - Binary search is a much faster form of search.
        - Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time.
        - Binary search only works on sorted arrays!
*/

/*---------------------------------------------------------------------------------------------------*/

// L63: Binary Search Solution

function binarySearch(arr, elem) { // [O(log(n))]
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);

    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }

        middle = Math.floor((start + end) / 2);
    }

    return arr[middle] === elem ? middle : -1;
}

/*---------------------------------------------------------------------------------------------------*/

// L64: Binary Search BIG O

/*
    >> Binary Search Big O:
        - Best Case: O(1)
        - Worst Case: O(log(n))
        - Average Case: O(log(n))

    >> Suppose we are searching for 13 in this array: [2,4,5,9,11,14,15,19,21,25,28,30,50,52,60,63]
        - [2,4,5,9,11,14,15,19,21,25,28,30,50,52,60,63]
        - [2,4,5,9,11,14,15] (step 1)
        - [14,15] (step 2)
        - [14] (step 3)
        - Not Exist > return -1 (step 4)

        > Array of [16] elements will take [4] steps to check if [13] exists or not. (log₂16 > 4)
        
    >> To add another step, we need to double the number of elements in the array, Suppose we are searching for 32 in this array: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,32,35]
        - [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,32,35]
        - [17,18,19,20,21,22,23,24,25,26,27,28,29,30,32,35] (step 1)
        - [25,26,27,28,29,30,32,35] (step 2)
        - [29,30,32,35] (step 3)
        - [32,35] (step 4)
        - [32] (step 5)

        > Array of [32] elements will take [5] steps to check if [32] exists or not. (log₂32 > 5)
*/

/*---------------------------------------------------------------------------------------------------*/

// L65: Naive String Search

/*
    >> Write a function that counts how many times a short string exists in a long string (e.g: "omg" in "wowomgzomg").
        - Steps:-
            • Loop over the longer string
            • Loop over the shorter string
            • If the characters don't match, break out of the inner loop
            • If the characters do match, keep going
            • If you complete the inner loop and find a match, increment the count of matches
            • Return the count
*/

/*---------------------------------------------------------------------------------------------------*/

// L66: Naive String Search Implementation

function naiveSearch(long, short) {
    let count = 0;

    for (let i = 0; i < long.length; i++) {
        for(let j = 0; j < short.length; j++) {
            if(short[j] !== long[i + j]) {
                break;
            }

            if(j === short.length - 1) {
                count++;
            }
        }
    }

    return count;
}

/*---------------------------------------------------------------------------------------------------*/

/* Section 11: Bubble Sort */

// L68: Introduction to Sorting Algorithms

/*
    >> What is Sorting ?
        - The process of rearranging the items in a collection (e.g. an array) so that the items are in some kind of order.
       
        * Examples:
        -----------
            • Sorting numbers from smallest to largest
            • Sorting names alphabetically
            • Sorting movies based on release year
            • Sorting movies based on revenue

    >> Sort Types: 
        - Selection Sort
        - Bubble Sort
        - Insertion Sort
        - Merge Sort
        - Quick Sort
        - Radix Sort
        - Heap Sort
        - Shell Sort

    >> Why do we need to learn this ?
        - Sorting is an incredibly common task, so it's good to know how it works.
        - There are many different ways to sort things, and different techniques have their own advantages and disadvantages.
*/

/*---------------------------------------------------------------------------------------------------*/

// L69: Built-In Javascript Sorting

/*
    >> How Javascript sorts ?
        - The built-in sort method accepts an optional comparator function.
        - You can use this comparator function to tell Javascript how you want it to sort.
        - The comparator looks at pairs of elements (a and b), determines their sort order based on the return value:-
            • If it returns a negative number, (a) should come before (b).
            • If it returns a positive number, (a) should come after b.
            • If it returns 0, (a) and (b) are the same as far as the sort is concerned.
*/

function numberCompare(num1, num2) {
    return num1 - num2;
}

[6,4,15,10].sort(numberCompare); // [4, 6, 10, 15]

function compareByLen(str1, str2) {
    return str1.length - str2.length;
}

["Steele", "Colt", "Data Structures", "Algorithms"].sort(compareByLen); // ["Colt", "Steele", "Algorithms", "Data Structures"]

function compareByLen2(str1, str2) {
    return str2.length - str1.length;
}

["Steele", "Colt", "Data Structures", "Algorithms"].sort(compareByLen2); // ["Data Structures", "Algorithms", "Steele", "Colt"]

/*---------------------------------------------------------------------------------------------------*/

// L70: Bubble Sort: Overview

/*
    >> Bubble Sort:
        - A sorting algorithm where the largest values bubble up to the top!

        * Example:
        ------------
        [5, 3, 4, 1, 2] >> swap 5 with 3
        [3, 5, 4, 1, 2] >> swap 5 with 4
        [3, 4, 5, 1, 2] >> swap 5 with 1
        [3, 4, 1, 5, 2] >> swap 5 with 2
        [3, 4, 1, 2, 5] >> swap 4 with 1
        [3, 1, 4, 2, 5] >> swap 4 with 2
        [3, 1, 2, 4, 5] >> swap 3 with 1
        [1, 3, 2, 4, 5] >> swap 3 with 2
        [1, 2, 3, 4, 5]

    >> Before we sort using bubble sort, we must swap!
        - Many sorting algorithms involve some type of swapping functionality (e.g. swapping to numbers to put them in order).
*/

// ES2015 Version (ES6)
const swap1 = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

// ES5 Version
function swap2(arr, idx1, idx2) {
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
} 

/*
    >> Bubble Sort Pseudocode:
        - Start looping from with a variable called (i) the end of the array towards the beginning.
        - Start an inner loop with a variable called (j) from the beginning until (i - 1)
        - If arr[j] is greater than arr[j+1], swap those two values!.
        - Return the sorted array
*/

/*---------------------------------------------------------------------------------------------------*/

// L71: Bubble Sort: Implementation

function bubbleSort1(arr) { // NAIVE Solution
    for (let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(arr[j] > arr[j + 1]) {
                // Swap!
                let temp = arr[j];

                arr[j] = arr[j + 1];

                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

function bubbleSort2(arr) { // Optimized Solution using Pseudocode mentioned last lecture. [Removes useless "undefined" Iterations]
    for (let i = arr.length; i > 0; i--) {
        for(let j = 0; j < i - 1; j++) {
            if(arr[j] > arr[j + 1]) {
                // Swap!
                let temp = arr[j];

                arr[j] = arr[j + 1];

                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

function bubbleSort3(arr) { // Optimized Solution using Pseudocode mentioned last lecture. [Swap with ES6 Way]
    const swap = (arr, ind1, ind2) => {
        [arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]];
    }

    for (let i = arr.length; i > 0; i--) {
        for(let j = 0; j < i - 1; j++) {
            if(arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }

    return arr;
}

/*---------------------------------------------------------------------------------------------------*/

// L72: Bubble Sort: Optimization

// Optimized with "noSwaps" flag
function bubbleSort4(arr) { // Optimized Solution using "noSwaps" flag. [Removes useless iterations that didn't make swaps anymore]
    var noSwaps;

    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;

        for(let j = 0; j < i - 1; j++) {
            if(arr[j] > arr[j + 1]) {
                // Swap!
                let temp = arr[j];

                arr[j] = arr[j + 1];

                arr[j + 1] = temp;
                
                noSwaps = false;
            }
        }

        if (noSwaps) break;
    }

    return arr;
}

/*---------------------------------------------------------------------------------------------------*/

// L73: Bubble Sort: BIG O Complexity

/*
    - [O(n²)] >> IF the data is randomly and not sorted any way from the beginning.
    - Almost [O(n)] or Linear Time >> If the data is nearly sorted or already sorted from the beginning. [Best case to use bubble sort here]
*/

/*---------------------------------------------------------------------------------------------------*/

/* Section 12: Selection Sort */

// L75: Selection Sort Introduction

/*
    >> Selection Sort:
        - Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position.
        - We find the minimum swap at the end and put it at the beginning.
        - We are going through and selecting the smallest element, and then putting it at the beginning.

        * Example:
        ----------
        [5, (3), 4, 1, 2] >> compare from 5 to 3 (min is 3)
        [5, (3), 4, 1, 2] >> compare from 5 to 4 (min is 3)
        [5, 3, 4, (1), 2] >> compare from 5 to 1 (min is 1)
        [5, 3, 4, (1), 2] >> compare from 5 to 2 (min is 1) [reach to the end so swap 5 with 1]
        [1, (3), 4, 5, 2] >> compare from 3 to 4 (min is 3)
        [1, (3), 4, 5, 2] >> compare from 3 to 5 (min is 3)
        [1, 3, 4, 5, (2)] >> compare from 3 to 2 (min is 2) [reach to the end so swap 3 with 2]
        [1, 2, (4), 5, 3] >> compare from 4 to 5 (min is 4)
        [1, 2, 4, 5, (3)] >> compare from 4 to 3 (min is 3) [reach to the end so swap 4 with 3]
        [1, 2, 3, (4), 5] >> compare from 4 to 5 (min is 4) [reach to the end but no swap here]
        [1, 2, 3, 4, 5]

        * Example:
        ----------
        [(19), 44, 38, 5, 47, 15] >> compare from 19 to 44 (min is 19)
        [(19), 44, 38, 5, 47, 15] >> compare from 19 to 38 (min is 19)
        [19, 44, 38, (5), 47, 15] >> compare from 19 to 5 (min is 5)
        [19, 44, 38, (5), 47, 15] >> compare from 19 to 47 (min is 5)
        [19, 44, 38, (5), 47, 15] >> compare from 19 to 15 (min is 5) [reach to the end so swap 19 with 5]
        [5, 44, (38), 19, 47, 15] >> compare from 44 to 38 (min is 38)
        [5, 44, 38, (19), 47, 15] >> compare from 44 to 19 (min is 19)
        [5, 44, 38, (19), 47, 15] >> compare from 44 to 47 (min is 19)
        [5, 44, 38, 19, 47, (15)] >> compare from 44 to 15 (min is 15) [reach to the end so swap 44 with 15]
        [5, 15, 38, (19), 47, 44] >> compare from 38 to 19 (min is 19)
        [5, 15, 38, (19), 47, 44] >> compare from 38 to 47 (min is 19)
        [5, 15, 38, (19), 47, 44] >> compare from 38 to 44 (min is 19) [reach to the end so swap 38 with 19]
        [5, 15, 19, (38), 47, 44] >> compare from 38 to 47 (min is 38)
        [5, 15, 19, (38), 47, 44] >> compare from 38 to 44 (min is 18) [reach to the end but no swap here]
        [5, 15, 19, 38, 47, (44)] >> compare from 47 to 44 (min is 44) [reach to the end so swap 47 with 44]
        [5, 15, 19, 38, 44, 47]

    >> Selection Sort Pseudocode:
        - Store the first element as the smallest value you've seen so far.
        - Compare this item to the next item in the array until you find a smaller number.
        - If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
        - If the "minimum" is not the value (index) you initially began with, swap the two values, otherwise do nothing.
        - Repeat this with the next element until the array is sorted.
*/

/*---------------------------------------------------------------------------------------------------*/

// L76: Selection Sort: Implementation

function selectionSort(arr) {
    for (i = 0; i < arr.length; i++) {
        let min = i;

        for (j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[min]) {
                min = j;
            }
        }

        if (i !== min) {
            let temp = arr[i];

            arr[i] = arr[min];

            arr[min] = temp;
        }
    }

    return arr;
}

/*---------------------------------------------------------------------------------------------------*/

// L77: Selection Sort: Big O Complexity

/*
    - Big O Complexity is: [O(n²)] 
    - Selection Sort potentially is better than bubble sort, if you want to minimize the number of swaps that you are making & minimize the number of writing to the memory.
    - In Bubble sort we are basically swapping over and and over and over to get the largest item to the end. 
    - In Selection sort, we iterate, we compare that, but we only make a swap at the end of each loop.
*/

/*---------------------------------------------------------------------------------------------------*/

/* Section 13: Insertion Sort */

// L79: Insertion Sort: Introduction

/*
    >> Insertion Sort:
        - Builds up the sort by gradually creating a larger left half which is always sorted.
        - We are sorting the left side of the array.
        - We are taking one element at a time and inserting it in the correct position in the left side of the array.

        * Example:
        ----------
        [5, 3, 4, 1, 2] >> start with [3]: insert 3 @ index 0 and shift others
        [3, 5, 4, 1, 2] >> start with [4]: insert 4 @ index 1 and shift others
        [3, 4, 5, 1, 2] >> start with [1]: insert 1 @ index 0 and shift others
        [1, 3, 4, 5, 2] >> start with [2]: insert 2 @ index 1 and shift others
        [1, 2, 3, 4, 5]

        * Example:
        ----------
        [3, 44, 38, 5, 47, 15] >> start with [44]
        [3, 44, 38, 5, 47, 15] >> start with [38]: insert 38 @ index 1 and shift others
        [3, 38, 44, 5, 47, 15] >> start with [5]: insert 5 @ index 1 and shift others
        [3, 5, 38, 44, 47, 15] >> start with [47]
        [3, 5, 38, 44, 47, 15] >> start with [15]: insert 15 @ index 2 and shift others
        [3, 5, 15, 38, 44, 47]

    >> Insertion Sort Pseudocode:
        - Start by picking the second element in the array.
        - Now compare the second element with the one before it and swap if necessary.
        - Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place.
        - Repeat until the array is sorted.
*/

/*---------------------------------------------------------------------------------------------------*/

// L80: Insertion Sort: Implementation

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];

        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) { // The place we're looking is still too big
            // Copy value to the right to make a room for the currentVal
            arr[j + 1] = arr[j];

            console.log(arr);
        }

        console.log("Break Loop");

        console.log("j Index > ", j);

        console.log("j Value > ", arr[j]);

        // Put our currentVal in the spot we created for it
        arr[j + 1] = currentVal; // We can access (j) here, because it is declared using "var" keyword, so its scope is "global scope"

        console.log("Insertion Sort Array", arr);
    }

    return arr;
}

insertionSort([2, 1, 9, 76, 4]);

/*---------------------------------------------------------------------------------------------------*/

// L81: Insertion Sort: BIG O Complexity

/*
    - [O(n²)] >> IF the data is randomly and not sorted any way from the beginning.
    - Almost [O(n)] or Linear Time >> If the data is nearly sorted or already sorted from the beginning. [Best case to use Insertion sort here]
    - Best Scenario to use Insertion sort and it is good at it, if your data is online data (data is coming in like a stream), so we receive new data, 
      it doesn't have to have the entire array at once, for example, if we have some code where people are submitting numbers to use online live.
      We are getting them and want to sort them, so we can use Insertion sort here, because we can keep one side of the array sorted and we are inserting
      items one at a time, it doesn't matter what the number is that comes in, we can place it where it needs to go. We keep one side sorted and we insert 
      things in the appropriate place.
*/