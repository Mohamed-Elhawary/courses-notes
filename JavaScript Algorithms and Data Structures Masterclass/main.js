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
