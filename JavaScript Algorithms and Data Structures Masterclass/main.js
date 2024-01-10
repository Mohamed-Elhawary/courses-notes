/* Section 2: Big O Notation */

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
    > addUpToSolution2: Always 3 operations [O(1)] 
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
    >> We can use big O notation to analyze space complexity, how much additional memory do we need to allocate in order to run the code in our algorithm.
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
    >> Recap:
        - To analyze the performance of an algorithm, we use Big O Notation
        - Big O Notation can give us a high level understanding of the time or space complexity of an algorithm
        - Big O Notation doesn't care about precision, only about general trends (linear? quadratic? constant?)
        - The time or space complexity (as measured by Big O). depends only on the algorithm, not the hardware used to run the algorithm
*/

/*---------------------------------------------------------------------------------------------------*/

/* Section 3: Big O Notation */

// L15: The Big O of Objects

/*
    >> When to use Objects ?
        - when you don't need order
        - when you need a fast access/insertion and removal

    >> Big O of Objects:
        * Insertion > 0(1)
        * Removal > O(1)
        * Searching > O(n)
        * Access > 0(1)
        
    > When you don't need any ordering, objects are an excellent choice!, because of constant time for insertion, removal and accessing data.

    >> Big O of Object Methods:
        - Object.keys > O(n)
        - Object.values > O(n)
        - Object.entries > O(n)
        - hasOwnProperty > 0(1)
*/

/*---------------------------------------------------------------------------------------------------*/

// L16: When are Arrays Slow?

/*
    >> When to use Arrays ?
        - when you need order.
        - when you need a fast access/insertion and removal (sort of ...).

    >> Big O of Arrays:
        * Insertion > It depends [Insert at END [O(1)] >> (Push)] / [Insert at BEGIN [O(n)] >> (Shift)]
        * Removal > It depends [Remove from END [O(1)] >> (Pop)] / [Remove from BEGIN [O(n)] >> (unShift)]
        * Searching > O(n)
        * Access > O(1)
        
    > Inserting item at the end of the array is faster than inserting at the beginning, because inserting at the end will just require adding a new index at the end of the array after the last existing index,
      but inserting at the beginning will require re-ordering the array items and shifting their index for each item, where index (Zero) now will be related to the new inserted item, so the amount of time it takes to inserting 
      item at the beginning of array, roughly grows in proportion with the size of the array. 

    > Same time complexity and same logic goes for removing item from the end and from the beginning of the array.
*/

/*---------------------------------------------------------------------------------------------------*/

// L17: Big O of Array Methods ?

/*
    >> Big O of Array Operations
        • push > 0(1)
        • pop > 0(1)
        • shift >  O(n)
        • unshift > O(n) 
        • concat > O(n)
        • slice > O(n)
        • splice > O(n)
        • sort > O(n log n)
        • forEach/map/fill/reduce/etc. > O(n)
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
    >> EXPLORE EXAMPLES:
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
        - This can often avoid the need for nested loops or [O(n²)] operations with arrays / strings.

    > Write a function called same, which accepts two arrays. The function should return true if every value in the
      array has it's corresponding value squared in the second array. The frequency of values must be the same.
        * Examples:
        ------------
            - same([1,2,3], [4,1,9]) // true 
            - same([1,2,3], [1,9]) // false
            - same([1,2,1], [4,4,1]) // false (must be same frequency)
*/

function same1(arr1, arr2) { // This is a NAIVE solution, means [Not the best possible solution in this case] >> Time Complexity is [O(n²)]
    if(arr1.length !== arr2.length) {
        return false;
    }
    
    for(let i = 0; i < arr1.length; i++) { // [O(n)]
        let correctIndex = arr2.indexOf(arr1[i] ** 2); // [O(n)]
        if (correctIndex === -1){
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
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1; // === ++frequencyCounter1[val] || 1
    }
    
    for(let val of arr2) { // [O(n)]
        frequencyCounter2 [val] = (frequencyCounter2[val] || 0) + 1; // === ++frequencyCounter2[val] || 1
    }
    
    for(let key in frequencyCounter1) { // [O(n)]
        if(!(key ** 2 in frequencyCounter2)) {
            return false
        }

        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
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
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
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
        - Very efficient for solving problems with minimal space complexity as well.
        
        > Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair
          where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.
            * Examples:
            ------------
            - sumZero([-3, -2,-1,0,1,2,3]) // [-3,3]
            - sumZero([-2,0,1,3]) // undefined
            - sumZero([1,2,3]) // undefined
*/

function sumZero1(arr) { // This is a NAIVE solution, means [Not the best possible solution in this case] >> Time Complexity is [O(n²)]
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
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
        - countUniqueValues([1,1,1,1,1,2]) // 2 
        - countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
        - countUniqueValues([]) // 0
        - countUniqueValues([-2,-1,-1,0,1]) // 4
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
          depending on a certain condition, the window either increases or closes (and a new window is created).
          Very useful for keeping track of a subset of data in an array/string.

        > Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function
          should calculate the maximum sum of n consecutive elements in the array.
            * Examples:
            ------------
            - maxSubarraySum([1,2,5,2,8,1,5], 2) // 10
            - maxSubarraySum([1,2,5,2,8,1,5],4) // 17
            - maxSubarraySum ([4,2,1,6], 1) // 6
            - maxSubarraySum([4,2,1,6,2],4) // 13
            - maxSubarraySum([],4) // null
*/

function maxSubarraySum1(arr, num) { // This is a NAIVE solution, means [Not the best possible solution in this case] >> Time Complexity is [O(n²)]
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
                return num * factorial (num);
            }

        -   function factorial (num) {
                if (num === 1) console.log(1) ;
                return num * factorial (num-1);
            }
*/

/*---------------------------------------------------------------------------------------------------*/

// L49: Helper Method Recursion

/*  
    >> Helper Method Recursion Pattern:
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
        if (helperInput.length === 0) {
            return;
        }

        if(helperInput[0] % 2 !== 0) {
            result.push(helperInput[0])
        }

        helper (helperInput.slice(1));
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

        > Array of [16] elements will take [4] steps to check if [13] exists or not. (log₂16 >> 4)
        
    >> To add another step, we need to double the number of elements in the array, Suppose we are searching for 32 in this array: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,32,35]
        - [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,32,35]
        - [17,18,19,20,21,22,23,24,25,26,27,28,29,30,32,35] (step 1)
        - [25,26,27,28,29,30,32,35] (step 2)
        - [29,30,32,35] (step 3)
        - [32,35] (step 4)
        - [32] (step 5)

        > Array of [32] elements will take [5] steps to check if [32] exists or not. (log₂32 >> 5)
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
        - Start an inner loop with a variable called (j) from the beginning until (i - 1).
        - If arr[j] is greater than arr[j+1], swap those two values!.
        - Return the sorted array.
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
    - [O(n²)] >> If the data is randomly and not sorted any way from the beginning.
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
    - [O(n²)] >> If the data is randomly and not sorted any way from the beginning.
    - Almost [O(n)] or Linear Time >> If the data is nearly sorted or already sorted from the beginning. [Best case to use Insertion sort here]
    - Best Scenario to use Insertion sort and it is good at it, if your data is online data (data is coming in like a stream), so we receive new data, 
      it doesn't have to have the entire array at once, for example, if we have some code where people are submitting numbers to use online live.
      We are getting them and want to sort them, so we can use Insertion sort here, because we can keep one side of the array sorted and we are inserting
      items one at a time, it doesn't matter what the number is that comes in, we can place it where it needs to go. We keep one side sorted and we insert 
      things in the appropriate place.
*/

/*---------------------------------------------------------------------------------------------------*/

/* Section 14: Comparing Bubble, Selection, and Insertion Sort */

// L82: Comparing Bubble, Selection, and Insertion Sort

/*
    >> Big O of Sorting Algorithms:
        - Bubble Sort: 
            • Time Complexity [Best]: [O(n)]
            • Time Complexity [Worst]: [O(n²)] 
            • Time Complexity [Average]: [O(n²)]

            • Space Complexity: [O(1)]

        - Insertion Sort: 
            • Time Complexity [Best]: [O(n)]
            • Time Complexity [Worst]: [O(n²)] 
            • Time Complexity [Average]: [O(n²)]
            
            • Space Complexity: [O(1)]

        - Selection Sort: [Doesn't matter if the array is sorted already from the beginning or not]
            • Time Complexity [Best]: [O(n²)]
            • Time Complexity [Worst]: [O(n²)] 
            • Time Complexity [Average]: [O(n²)]
            
            • Space Complexity: [O(1)]
*/

/*---------------------------------------------------------------------------------------------------*/

/* Section 15: Merge Sort */

// L84: Intro to the "Crazier" Sorts

/*
    >> Faster Sorts:
        - There is a family of sorting algorithms that can improve time complexity from [O(n²)] to [O(n log n)].
        - There's a tradeoff between efficiency and simplicity.
        - The more efficient algorithms are much less simple, and generally take longer to understand.
*/

/*---------------------------------------------------------------------------------------------------*/

// L85: Merge Sort: Introduction

/*
    >> Merge Sort:
        - It's a combination of two things - merging and sorting!
        - Exploits the fact that arrays of 0 or 1 element are always sorted.
        - Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array.

    >> How does it work?
        - It decomposes the array into smaller arrays of 0 or 1 elements, then builds up a newly sorted array.

        * Example:
        ----------
        [8, 3, 5, 4, 7, 6, 1, 2] >> [1 Array] / Split at the middle for each array to be 2 arrays
        [8, 3, 5, 4] [7, 6, 1, 2] >> [2 Arrays] / Split at the middle for each array to be 2 arrays
        [8, 3] [5, 4] [7, 6] [1, 2] >> [4 Arrays] / Split at the middle for each array to be 2 arrays 
        [8] [3] [5] [4] [7] [6] [1] [2] >> [8 Arrays] / Merge each 2 array together
        [3, 8] [4, 5] [6, 7] [1, 2] >> [4 Arrays] / Merge each 2 array together
        [3, 4, 5, 8] [1, 2, 6, 7] >> [2 Arrays] / Merge each 2 array together
        [1, 2, 3, 4, 5, 6, 7, 8] >> [1 Array]
*/

/*---------------------------------------------------------------------------------------------------*/

// L86: Merging Arrays Intro

/* 
    >> Merging Arrays:
        - In order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays.
        - Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all of the elements in the two input arrays.
        - This function should run in [O(n + m)] time and [O(n + m)] space and should not modify the parameters passed to it.

    >> Merging Arrays Pseudocode:
        - Create an empty array, take a look at the smallest values in each input array.
        - While there are still values we haven't looked at...
            • If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array.
            • If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array.
            • Once we exhaust one array, push in all remaining values from the other array.

        * Example:
        ----------
        merge([1, 10, 50] [2, 14, 99, 100]) >> compare 1 with 2 >> [1]
        merge([1, 10, 50] [2, 14, 99, 100]) >> compare 10 with 2 >> [1, 2]
        merge([1, 10, 50] [2, 14, 99, 100]) >> compare 10 with 14 >> [1, 2, 10]
        merge([1, 10, 50] [2, 14, 99, 100]) >> compare 50 with 14 >> [1, 2, 10, 14]
        merge([1, 10, 50] [2, 14, 99, 100]) >> compare 50 with 99 >> [1, 2, 10, 14, 50]
        merge([1, 10, 50] [2, 14, 99, 100]) >> first array is exhausted, so push all remaining values from the other array >> [1, 2, 10, 14, 50, 99, 100]
*/

/*---------------------------------------------------------------------------------------------------*/

// L87: Merging Arrays Implementation

function merge2Arrays(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;

    while(i < arr1.length && j < arr2.length) {
        if(arr2[j] > arr1[i]) {
            results.push(arr1[i]);

            i++;
        } else {
            results.push(arr2[j]);

            j++;
        }
    }

    while(i < arr1.length) {
        results.push(arr1[i]);

        i++;
    }

    while(j < arr2.length) {
        results.push(arr2[j]);

        j++;
    }

    return results;
}

/*---------------------------------------------------------------------------------------------------*/

// L88: Writing Merge Sort Part 1

/*
    >> Merge Sort Pseudocode:
        - Break up the array into halves until you have arrays that are empty or have one element.
        - Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array.
        - Once the array has been merged back together, return the merged (and sorted!) array.
*/

/*---------------------------------------------------------------------------------------------------*/

// L89: Writing Merge Sort Part 2

function mergeSort(arr) {
    if(arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);

    let left = mergeSort(arr.slice(0, mid));

    let right = mergeSort(arr.slice(mid));

    return merge2Arrays(left, right);
}

mergeSort([10, 24, 76, 73]);

/*---------------------------------------------------------------------------------------------------*/

// L90: Merge Sort BIG O Complexity

/*
    >> Big O of Merge Sort:

        • Time Complexity [Best]: [O(n log n)]
        • Time Complexity [Average]: [O(n log n)]
        • Time Complexity [Worst]: [O(n log n)]

        • Space Complexity: [O(n)]

    >> Best, Average & Worst Cases:
        - O(log n):
            • Is the number of decompositions. As (n) grows, the number of times we split the array grows at the rate of log(n).
            • If we have 32 items in the array, we will have 5 splits [log₂(32) = 5  >>>>  2 power of (5) = 32 ].
            • If we have 8 items in the array, we will have 3 splits [log₂(8) = 3  >>>>  2 power of (3) = 8 ].
        
        - O(n):
            • Each time we do split (decomposition), we have O(n) comparison to actually perform the merging.
            • If we have eight items in the array, so we need eight comparisons that need to be merged at each decomposition.

        - So in total we end up with Time Complexity: [O(n log n)]
*/

/*---------------------------------------------------------------------------------------------------*/

/* Section 16: Quick Sort */

// L92: Introduction to Quick Sort

/*
    >> Quick Sort:
        - Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted.
        - Works by selecting one element (called the "pivot") and finding the index where the pivot should end up in the sorted array.
        - Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot.
*/

/*---------------------------------------------------------------------------------------------------*/

// L93: Pivot Helper Introduction

/*
    >> Pivot Helper:
        - In order to implement merge sort, it's useful to first implement a function responsible arranging elements in an array on either side of a pivot.
        - Given an array, this helper function should designate an element as the pivot.
        - It should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot, and all values greater than the pivot are moved to the right of the pivot.
        - The order of elements on either side of the pivot doesn't matter!
        - The helper should do this in place, that is, it should not create a new array.
        - When complete, the helper should return the index of the pivot.

    >> Picking a Pivot:
        - The runtime of quick sort depends in part on how one selects the pivot.
        - Ideally, the pivot should be chosen so that it's roughly the median value in the data set you're sorting.
        - For simplicity, we'll always choose the pivot to be the first element (we'll talk about consequences of this later).

    >> Pivot Helper Pseudocode:
        - It will help to accept three arguments: an array, a start index, and an end index (these can default to 0 and the array length minus 1, respectively).
        - Grab the pivot from the start of the array.
        - Store the current pivot index in a variable (this will keep track of where the pivot should end up).
        - Loop through the array from the start until the end:
            • If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index.
        - Swap the starting element (i.e. the pivot) with the pivot index.
        - Return the pivot index.    
*/

/*---------------------------------------------------------------------------------------------------*/

// L94: Pivot Helper Implementation

function swap(arr, i, j) {
    let temp = arr[i];

    arr[i] = arr[j];

    arr[j] = temp;
}

function pivot(arr, start = 0, end = arr.length - 1) {
    let pivot = arr[start];

    let swapIndx = start;

    for (let i = start + 1; i < arr.length; i++) {
        if(pivot > arr[i]) {
            swapIndx++;

            swap(arr, swapIndx, i);
        }
    }

    swap(arr, start, swapIndx);

    return swapIndx;
}

/*---------------------------------------------------------------------------------------------------*/

// L95: Quick Sort Implementation

/*
    >> Quick Sort Implementation:
        - Call the pivot helper on the array.
        - When the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and the subarray to the right of that index.
        - Your base case occurs when you consider a subarray with less than 2 elements.
*/

function quickSort(arr, left = 0, right = arr.length - 1) {
    if(left < right) {
        let pivotIndex = pivot(arr, left, right);

        // Left
        quickSort(arr, left, pivotIndex - 1);

        // Right
        quickSort(arr, pivotIndex + 1, right);

        return arr;
    }

    return arr;
}

quickSort([4, 6, 9, 1, 2, 5]);

/*---------------------------------------------------------------------------------------------------*/

// L97: Quick Sort Big O Complexity

/*
    >> Big O of Quick Sort:

        • Time Complexity [Best]: [O(n log n)] >> If the data is randomly and not sorted any way from the beginning. 
        • Time Complexity [Average]: [O(n log n)]
        • Time Complexity [Worst]: [O(n²)] >> If the data is already sorted from the beginning, and this is because we take the (pivot) always as the first element in the array, which is always the minimum element in the array.

        • Space Complexity: [O(log n)]

    >> Best & Average Case:
        - O(log n): The number of decompositions.
        - O(n): The number of comparisons per decomposition.
        - So in total we end up with Time Complexity: [O(n log n)] in Best case Scenario.

    >> Worst Case:
        - O(n): The number of decompositions.
        - O(n): The number of comparisons per decomposition.
        - To enhance the case time complexity, we can choose the (pivot) randomly from the array, or pick the middle element of the array at every time we do decomposition, 
          but of course there is still a chance that if we pick the middle element every time it is possible that the array is unsorted and it is supposed to be in random order,
          but somehow we are always picking the minimum every time, so we can never avoid that worst case entirely because the way the algorithm works, is that if you are pivoting around the 
          minimum or the maximum repeatedly, that's going to be quadratic time.
        - So in total we end up with Time Complexity: [O(n²)] in Worst case Scenario.
*/

/*---------------------------------------------------------------------------------------------------*/

/* Section 17: Radix Sort */

// L99: Radix Sort: Introduction [You have to see this Lecture for better understanding]

/*
    >> Comparisons Sorting Algorithms:
        - Bubble Sort
        - Selection Sort
        - Insertion Sort
        - Quick Sort
        - Merge Sort
    
    >> Integer Sorting Algorithms: [Only work with integers and has no direct comparisons] "Better in Time Complexity"
        - Radix Sort

    >> Radix Sort:
        - It's a special sorting algorithm that works on lists of numbers.
        - It never makes comparisons between elements!
        - It exploits the fact that information about the size of a number is encoded in the number of digits.
        - More digits means a bigger number!
*/

/*---------------------------------------------------------------------------------------------------*/

// L100: Radix Sort: Helper Methods

function getDigit(num, place) { // returns the digit in num at the given place value
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num) { // returns the number of digits in num
    if(num === 0) return 1;

    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) { // given an array of numbers, returns the number of digits in the largest numbers in the list
    let maxDigits = 0;

    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }

    return maxDigits;
}

/*---------------------------------------------------------------------------------------------------*/

// L101: Radix Sort: Pseudocode

/*
    >> Radix Sort Pseudocode:
        - Define a function that accepts list of numbers.
        - Figure out how many digits the largest number has.
        - Loop from k = 0 up to this largest number of digits.
        - For each iteration of the loop:
            • Create buckets for each digit (0 to 9).
            • Place each number in the corresponding bucket based on its (kth) digit.
        - Replace our existing array with values in our buckets, starting with 0 and going up to 9.
        - Return list at the end!
*/

/*---------------------------------------------------------------------------------------------------*/

// L102: Radix Sort: Implementation

function radixSort(nums) {
    let maxDigitCount = mostDigits(nums);

    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({length: 10}, () => []);

        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k);

            digitBuckets[digit].push(nums[i]);
        }

        nums = [].concat(...digitBuckets);
    }

    return nums;
}

radixSort([23, 345, 5467, 12, 2345, 9852]);

/*---------------------------------------------------------------------------------------------------*/

// L103: Radix Sort: BIG O Complexity

/*
    >> Big O of Radix Sort:

        • Time Complexity [Best]: [O(nk)]
        • Time Complexity [Average]: [O(nk)]
        • Time Complexity [Worst]: [O(nk)]

        • Space Complexity: [O(n + k)]

        - (n) >> is the length of the array
        - (k) >> is the number of digits (the word size for a number)
        - Theoretically, Radix Sort can be faster than any of the comparison sorts.
*/

/*---------------------------------------------------------------------------------------------------*/

/* Section 18: Data Structure Introduction */

// L104: Which Data Structure Is The Best?

/*
    >> What do they do ?
        - Data Structure are collections of values, the relationships among them, and the functions or operations that can be applied to the data.

    >> Why so many ?
        - Different data structures excel at different things, some are highly specialized, while others (like arrays) are more generally used.

    >> Usage:
        - Working with map/location data: Use (Graph)
        - Need an ordered list with fast inserts/removals at the beginning and end: Use (Linked List)
        - Web scraping nested HTML: Use (Tree)
        - Need to write a scheduler: Use (Binary Heap)
*/

/*---------------------------------------------------------------------------------------------------*/

// L105: ES2015 Class Syntax Overview

/*
    >> Objectives:
        - Explain what a (class) is.
        - Understand how JS implements the idea of classes.
        - Define terms like (abstraction), (encapsulation), and (inheritance).
        - Use ES2015 classes to implement data structures.

    >> What is a class ?
        - A blueprint for creating objects with pre-defined properties and methods.

    >> Why do we need to learn this ?
        - We are going to implement data structure as classes.
*/

/*---------------------------------------------------------------------------------------------------*/

// L106: Data Structure: The Class Keyword

class Student1 { // The class keyword creates a constant, so you can not redefine it.
    constructor(firstName, lastName, year) { // The method to create new objects must be called (constructor)
        this.firstName = firstName; // (this) refers to the individual instance of the class (so the individual student)

        this.lastName = lastName;

        this.grade = year;
    }
}


let firstStudent = new Student1("Colt", "Steele", 3); // Creating object (Instance) from class (we can use the "new" keyword)


let secondStudent = new Student1("Blue", "Steele", 4); // Creating object (Instance) from class (we can use the "new" keyword)

/*---------------------------------------------------------------------------------------------------*/

// L107: Data Structure: Adding Instance Methods

class Student2 { 
    constructor(firstName, lastName, year) {
        this.firstName = firstName;

        this.lastName = lastName;

        this.grade = year;

        this.tardies = 0;

        this.scores = [];
    }

    fullName() { // This is Individual Instance Method
        return `Your Full Name is ${this.firstName} ${this.lastName}`;
    }

    markLate() { // This is Individual Instance Method
        this.tardies += 1;

        if (this.tardies >= 3) return "You are expelled";

        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
    }

    addScores(score) { // This is Individual Instance Method
        this.scores.push(score);

        return this.scores;
    }

    calculateAverage() { // This is Individual Instance Method
        let sum = this.scores.reduce((a, b ) => a + b);

        return sum/this.scores.length;
    }
}

let thirdStudent = new Student2("Colt", "Steele");

thirdStudent.fullName(); // Your Full Name is Colt Steele

thirdStudent.markLate(); // Colt Steele has been late 1 times

thirdStudent.markLate(); // Colt Steele has been late 2 times

thirdStudent.markLate(); // You are expelled

thirdStudent.addScores(30); // [30]

thirdStudent.addScores(40); // [30, 40]

thirdStudent.calculateAverage(); // 35

let data = [1, 2, 3, 4];  // data is an instance object of Array Data Structure

data.push(80); // push is the individual instance method

/*---------------------------------------------------------------------------------------------------*/

// L108: Data Structure: Adding Class Methods

class Student3 { 
    constructor(firstName, lastName, year) {
        this.firstName = firstName;

        this.lastName = lastName;

        this.grade = year;

        this.tardies = 0;

        this.scores = [];
    }

    fullName() { // This is Individual Instance Method
        return `Your Full Name is ${this.firstName} ${this.lastName}`;
    }

    static enrollStudents() { // This is a Class Method that is pertinent to classes but not necessarily to individual instances of a class (not related to a particular instance), we use (static) keyword to define these methods.
        return "Enrolling Students";
    }
}

let fourthStudent = new Student3("Colt", "Steele");

Student3.enrollStudents(); // we call class method directly from the class itself

// fourthStudent.enrollStudents(); >> we can't call class method from a class instance

class Point {
    constructor(x, y) {
        this.x = x;

        this.y = y;
    }

    static distance(a, b) {
        const dx = a.x - b.x;

        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}

const p1 = new Point(5, 5); // { x: 5, y: 5 }

const p2 = new Point(10, 10); // { x: 10, y: 10 }

Point.distance(p1, p2);

/*
    >> Recap:
        - Classes are blueprints that when created make objects known as "instances".
        - Classes are created with the (new) keyword.
        - The "constructor" function is a special function that get run when the class is instantiated.
        - Instance methods can be added to classes similar to methods in objects.
        - Class methods can be added using the (static) keyword.
*/

/*---------------------------------------------------------------------------------------------------*/

/* Section 19: Singly Linked Lists */

// L110: Intro to Singly Linked Lists 

/*
    >> Objectives:
        - Define what a singly linked list is.
        - Compare and contrast linked lists with arrays.
        - Implement insertion, removal and traversal methods on singly linked lists.

    >> What is a singly linked list?
        - A data structure that contains a head, tail and length property.
        - Linked Lists consist of nodes, and each node has a value and a pointer to another node or null, each node is only connected one directionally to the next node.
        - You can think of Arrays like skyscraper with elevators, you could say, take me to the fifth floor and it takes you right there.
        - You can think of Linked Lists like skyscraper with no elevators, there is only stairs, and each set of each floor is connected to 
          the next one by a set of stairs, so to get to the fifth floor, we have to start at the first one, take the stairs to the second,
          then go up to the third, then to the fourth and then we get to the fifth.

    >> Comparisons with Arrays:
        - Linked Lists:
            • Do not have indexes!
            • Connected via nodes with a next pointer.
            • Insertion and deletion can be very easy.
            • Random access is not allowed.

        - Arrays:
            • Indexed in order!
            • Insertion and deletion can be expensive.
            • Can quickly be accessed at a specific index.
*/

/*---------------------------------------------------------------------------------------------------*/

// L111: Starter Code and Push Intro

class SinglyNode {
    constructor(val){
        this.val = val; // piece of data >> val

        this.next = null; // reference to next node >> next
    }
}

let singlyNode = new SinglyNode("Hi");

singlyNode.next = new SinglyNode("There"); 

singlyNode.next.next = new SinglyNode("How"); 

singlyNode.next.next.next = new SinglyNode("Are");

singlyNode.next.next.next.next = new SinglyNode("You"); 

console.log(singlyNode); 
/* 
    { 
        val: "Hi", 
        next: { 
            val: "There", 
            next: { 
                val: "How", 
                next: { 
                    val: "Are", 
                    next: { 
                        val: "You", 
                        next: null 
                    } 
                } 
            } 
        } 
    }
*/

/*
    >> Pushing Pseudocode:
        - This function should accept a value.
        - Create a new node using the value passed to the function.
        - If there is no head property on the list, set the head and tail to be the newly created node.
        - Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node.
        - Increment the length by one.
        - Return the linked list.
*/

/*---------------------------------------------------------------------------------------------------*/

// L112: Singly Linked List: Push Solution

class SinglyLinkedList1 {
    constructor(){
        this.head = null;

        this.tail = null;

        this.length = 0;
    }

    push(val) {
        const newNode = new SinglyNode(val);

        if (!this.head) {
            this.head = newNode;

            this.tail = this.head;
        } else {
            this.tail.next = newNode;

            this.tail = newNode;
        }

        this.length++;

        return this; // return "this" to be allowed to chain methods on the instance
    }
}

let singlyList1 = new SinglyLinkedList1();

singlyList1.push("Hello");

singlyList1.push("Goodbye");

singlyList1.push("!");

console.log(singlyList1);

/* 
    { 
        val: "Hello", 
        next: { 
            val: "Goodbye", 
            next: { 
                val: "!", 
                next: null 
            } 
        } 
    }
*/

// Note: to understand well the concept of the SinglyLinkedList "push" method, and how it works, I recommend review the sketch diagram in this link: https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/8344200#questions/17934544

/*---------------------------------------------------------------------------------------------------*/

// L113: Singly Linked List: Pop Intro

/*
    >> Popping Pseudocode:
        - If there are no nodes in the list, return undefined.
        - Loop through the list until you reach the tail.
        - Set the next property of the 2nd to last node to be null.
        - Set the tail to be the 2nd to last node.
        - Decrement the length of the list by 1.
        - Return the value of the node removed.
*/

/*---------------------------------------------------------------------------------------------------*/

// L114: Singly Linked List: Pop Solution

class SinglyLinkedList2 {
    constructor(){
        this.head = null;

        this.tail = null;

        this.length = 0;
    }

    push(val) {
        const newNode = new SinglyNode(val);

        if (!this.head) {
            this.head = newNode;

            this.tail = this.head;
        } else {
            this.tail.next = newNode;

            this.tail = newNode;
        }

        this.length++;

        return this; // return "this" to be allowed to chain methods on the instance
    }

    pop() {
        if(!this.head) return undefined;

        let current = this.head;

        let newTail = current;

        while(current.next) {
            newTail = current;

            current = current.next;
        }

        this.tail = newTail;

        this.tail.next = null;

        this.length--;

        if(this.length === 0) {
            this.head = null;

            this.tail = null;
        }

        return current; // This is the Popped value that we removed from the list
    }
}

let singlyList2 = new SinglyLinkedList2();

singlyList2.push("Hello");

singlyList2.push("Goodbye");

singlyList2.push("!");

singlyList2.pop(); // { val: "!", next: null }

/*---------------------------------------------------------------------------------------------------*/

// L115: Singly Linked List: Shift Intro

/*
    >> Shifting Pseudocode:
        - If there are no nodes, return undefined.
        - Store the current head property in a variable.
        - Set the head property to be the current head's next property.
        - Decrement the length by 1.
        - Return the value of the node removed.
*/

/*---------------------------------------------------------------------------------------------------*/

// L116: Singly Linked List: Shift Solution

class SinglyLinkedList3 {
    constructor(){
        this.head = null;

        this.tail = null;

        this.length = 0;
    }

    push(val) {
        const newNode = new SinglyNode(val);

        if (!this.head) {
            this.head = newNode;

            this.tail = this.head;
        } else {
            this.tail.next = newNode;

            this.tail = newNode;
        }

        this.length++;

        return this; // return "this" to be allowed to chain methods on the instance
    }

    shift() {
        if(!this.head) return undefined;

        let removed = this.head;

        this.head = removed.next;

        this.length--;

        if(this.length === 0) {
            this.head = null;

            this.tail = null;
        }

        return removed; // This is the Shifted value that we removed from the list
    }
}

let singlyList3 = new SinglyLinkedList3();

singlyList3.push("Hello");

singlyList3.push("Goodbye");

singlyList3.push("!");

singlyList3.shift(); // { val: "Hello", next: { val: "Goodbye", next: { val: "!", next: null } } }

/*---------------------------------------------------------------------------------------------------*/

// L117: Singly Linked List: Unshift Intro

/*
    >> Unshifting Pseudocode:
        - This function should accept a value.
        - Create a new node using the value passed to the function.
        - If there is no head property on the list, set the head and tail to be the newly created node.
        - Otherwise set the newly created node's next property to be the current head property on the list.
        - Set the head property on the list to be that newly created node.
        - Increment the length of the list by 1.
        - Return the linked list.
*/

/*---------------------------------------------------------------------------------------------------*/

// L118: Singly Linked List: Unshift Solution


class SinglyLinkedList4 {
    constructor(){
        this.head = null;

        this.tail = null;

        this.length = 0;
    }

    push(val) {
        const newNode = new SinglyNode(val);

        if (!this.head) {
            this.head = newNode;

            this.tail = this.head;
        } else {
            this.tail.next = newNode;

            this.tail = newNode;
        }

        this.length++;

        return this; // return "this" to be allowed to chain methods on the instance
    }

    unshift(val) {
        const newNode = new SinglyNode(val);

        if(!this.head) {
            this.head = newNode;

            this.tail = this.head;
        } else {
            newNode.next = this.head;

            this.head = newNode;
        }

        this.length++;

        return this;
    }
}

let singlyList4 = new SinglyLinkedList4();

singlyList4.push("Hello");

singlyList4.push("Goodbye");

singlyList4.push("!");

singlyList4.unshift("Colt"); 

console.log(singlyList4); 

/* 
    { 
        val: "Colt",
        next: {
            val: "Hello", 
            next: { 
                val: "Goodbye", 
                next: { 
                    val: "!", 
                    next: null 
                } 
            } 
        }
    }
*/

/*---------------------------------------------------------------------------------------------------*/

// L119: Singly Linked List: Get Intro

/*
    >> Get Pseudocode:
        - This function should accept an index.
        - If the index is less than zero or greater than or equal to the length of the list, return null.
        - Loop through the list until you reach the index and return the node at that specific index.
*/

/*---------------------------------------------------------------------------------------------------*/

// L120: Singly Linked List: Get Solution

class SinglyLinkedList5 {
    constructor(){
        this.head = null;

        this.tail = null;

        this.length = 0;
    }

    push(val) {
        const newNode = new SinglyNode(val);

        if (!this.head) {
            this.head = newNode;

            this.tail = this.head;
        } else {
            this.tail.next = newNode;

            this.tail = newNode;
        }

        this.length++;

        return this; // return "this" to be allowed to chain methods on the instance
    }

    get(index) {
        if(index < 0 || index >= this.length) return null;

        let counter = 0;

        let current = this.head;

        while(counter !== index) {
            current = current.next;

            counter++;
        }

        return current;
    }
}

let singlyList5 = new SinglyLinkedList5();

singlyList5.push("Hello");

singlyList5.push("Goodbye");

singlyList5.push("!");

singlyList5.get(1); // { val: "Goodbye", next: { val: "!", next: null } }

/*---------------------------------------------------------------------------------------------------*/

// L121: Singly Linked List: Set Intro

/*
    >> Set Pseudocode:
        - This function should accept a value and an index.
        - Use your get function to find the specific node.
        - If the node is not found, return false.
        - If the node is found, set the value of that node to be the value passed to the function and return true.
*/

/*---------------------------------------------------------------------------------------------------*/

// L122: Singly Linked List: Set Solution

class SinglyLinkedList6 {
    constructor(){
        this.head = null;

        this.tail = null;

        this.length = 0;
    }

    push(val) {
        const newNode = new SinglyNode(val);

        if (!this.head) {
            this.head = newNode;

            this.tail = this.head;
        } else {
            this.tail.next = newNode;

            this.tail = newNode;
        }

        this.length++;

        return this; // return "this" to be allowed to chain methods on the instance
    }

    get(index) {
        if(index < 0 || index >= this.length) return null;

        let counter = 0;

        let current = this.head;

        while(counter !== index) {
            current = current.next;

            counter++;
        }

        return current;
    }

    set(index, val) {
        let foundNode = this.get(index);

        if(foundNode) {
            foundNode.val = val;

            return true;
        }

        return false;
    }
}

let singlyList6 = new SinglyLinkedList6();

singlyList6.push("Hello");

singlyList6.push("Goodbye");

singlyList6.push("!");

singlyList6.push("Colt");

singlyList6.set(2, "!!!"); // true

singlyList6.set(7, "???"); // false

console.log(singlyList6);

/*
    { 
        val: "Hello", 
        next: { 
            val: "Goodbye", 
            next: { 
                val: "!!!", 
                next: { 
                    val: "Colt", 
                    next: null 
                } 
            } 
        } 
    }
*/

/*---------------------------------------------------------------------------------------------------*/

// L123: Singly Linked List: Insert Intro

/*
    >> Insert Pseudocode:
        - If the index is less than zero or greater than the length, return false.
        - If the index is the same as the length, push a new node to the end of the list.
        - If the index is 0, unshift a new node to the start of the list.
        - Otherwise, using the get method, access the node at the (index - 1).
        - Set the next property on that node to be the new node.
        - Set the next property on the new node to be the previous next.
        - Increment the length.
        - Return true.
*/

/*---------------------------------------------------------------------------------------------------*/

// L124: Singly Linked List: Insert Solution

class SinglyLinkedList7 {
    constructor(){
        this.head = null;

        this.tail = null;

        this.length = 0;
    }

    push(val) {
        const newNode = new SinglyNode(val);

        if (!this.head) {
            this.head = newNode;

            this.tail = this.head;
        } else {
            this.tail.next = newNode;

            this.tail = newNode;
        }

        this.length++;

        return this; // return "this" to be allowed to chain methods on the instance
    }

    get(index) {
        if(index < 0 || index >= this.length) return null;

        let counter = 0;

        let current = this.head;

        while(counter !== index) {
            current = current.next;

            counter++;
        }

        return current;
    }

    insert(index, val) {
        if(index < 0 || index > this.length) return false;

        if(index === this.length) return !!this.push(val);

        if(index === 0) return !!this.unshift(val);

        let newNode = new SinglyNode(val);

        let prev = this.get(index - 1);

        let prevNext = prev.next;

        prev.next = newNode;

        newNode.next = prevNext;

        this.length++;

        return true;
    }
}


let singlyList7 = new SinglyLinkedList7();

singlyList7.push("Hello");

singlyList7.push("Goodbye");

singlyList7.push("!");

singlyList7.insert(1, "Colt"); // true

console.log(singlyList7);

/*
    { 
        val: "Hello", 
        next: { 
            val: "Colt", 
            next: { 
                val: "Goodbye", 
                next: { 
                    val: "!", 
                    next: null 
                } 
            } 
        } 
    }
*/

/*---------------------------------------------------------------------------------------------------*/

// L125: Singly Linked List: Remove Intro

/*
    >> Remove Pseudocode:
        - If the index is less than zero or greater than the length, return undefined.
        - If the index is the same as the (length - 1), pop.
        - If the index is 0, shift.
        - Otherwise, using the get method, access the node at the index - 1.
        - Set the next property on that node to be the next of the next node.
        - Decrement the length.
        - Return the value of the node removed.
*/

/*---------------------------------------------------------------------------------------------------*/

// L126: Singly Linked List: Remove Solution

class SinglyLinkedList8 {
    constructor(){
        this.head = null;

        this.tail = null;

        this.length = 0;
    }

    push(val) {
        const newNode = new SinglyNode(val);

        if (!this.head) {
            this.head = newNode;

            this.tail = this.head;
        } else {
            this.tail.next = newNode;

            this.tail = newNode;
        }

        this.length++;

        return this; // return "this" to be allowed to chain methods on the instance
    }

    pop() {
        if(!this.head) return undefined;

        let current = this.head;

        let newTail = current;

        while(current.next) {
            newTail = current;

            current = current.next;
        }

        this.tail = newTail;

        this.tail.next = null;

        this.length--;

        if(this.length === 0) {
            this.head = null;

            this.tail = null;
        }

        return current; // This is the Popped value that we removed from the list
    }

    shift() {
        if(!this.head) return undefined;

        let removed = this.head;

        this.head = removed.next;

        this.length--;

        if(this.length === 0) {
            this.head = null;

            this.tail = null;
        }

        return removed; // This is the Shifted value that we removed from the list
    }

    get(index) {
        if(index < 0 || index >= this.length) return null;

        let counter = 0;

        let current = this.head;

        while(counter !== index) {
            current = current.next;

            counter++;
        }

        return current;
    }
    
    remove(index) {
        if(index < 0 || index >= this.length) return undefined;

        if(index === 0) return this.shift();

        if(index === this.length - 1) return this.pop();

        let prev = this.get(index - 1);

        let removed = prev.next;

        prev.next = removed.next;

        this.length--;

        return removed;
    }
}

let singlyList8 = new SinglyLinkedList8();

singlyList8.push("Hello");

singlyList8.push("Goodbye");

singlyList8.push("!");

singlyList8.remove(1); // { val: "Goodbye", next: { val: "!", next: null } }

console.log(singlyList8);

/*
    { 
        val: "Hello", 
        next: { 
            val: "!", 
            next: null 
        } 
    }
*/

/*---------------------------------------------------------------------------------------------------*/

// L127: Singly Linked List: Reverse Intro

/*
    >> Reverse Pseudocode:
        - Swap the head and tail.
        - Create a variable called next.
        - Create a variable called prev.
        - Create a variable called node and initialize it to the head property.
        - Loop through the list.
        - Set next to be the next property on whatever node is.
        - Set the next property on the node to be whatever prev is.
        - Set prev to be the value of the node variable.
        - Set the node variable to be the value of the next variable.
        - Once you have finished looping, return the list. 

    * Example:
    ----------
    - [Before Reverse] 13(head) > 27 > 32 > 71(tail) 
    - [After Reverse] 13(tail) < 27 < 32 < 71 (head)
*/

/*---------------------------------------------------------------------------------------------------*/

// L128: Singly Linked List: Reverse Solution

class SinglyLinkedList9 {
    constructor(){
        this.head = null;

        this.tail = null;

        this.length = 0;
    }

    push(val) {
        const newNode = new SinglyNode(val);

        if (!this.head) {
            this.head = newNode;

            this.tail = this.head;
        } else {
            this.tail.next = newNode;

            this.tail = newNode;
        }

        this.length++;

        return this; // return "this" to be allowed to chain methods on the instance
    }

    print() {
        let arr = [];

        let current = this.head;

        while(current) {
            arr.push(current.val);

            current = current.next;
        }

        console.log(arr);
    }

    reverse() {
        let node = this.head;

        this.head = this.tail;

        this.tail = node;

        let next;

        let prev = null;

        for(let i = 0; i < this.length; i++) {
            next = node.next;

            node.next = prev;

            prev = node;

            node = next;
        }

        return this;
    }
}

let singlyList9 = new SinglyLinkedList9();

singlyList9.push(100);

singlyList9.push(200);

singlyList9.push(300);

singlyList9.push(400);

singlyList9.print(); // [100, 200, 300, 400]

singlyList9.reverse();

singlyList9.print(); // [400, 300, 200, 100]

/*---------------------------------------------------------------------------------------------------*/

// L129: Singly Linked List: BIG O Complexity

/*
    >> Big O of Singly Linked List:
        • Insertion: [O(1)]
        • Removal: [O(1)] >> if removing from the beginning or [O(n)] >> if removing from the end
        • Searching: [O(n)]
        • Access: [O(n)]
    
        - Singly Linked Lists are excel at Insertion and Deletion compared to Arrays, but Arrays are excel at Accessing than Singly Linked Lists.

    >> Recap:
        - Singly Linked Lists are an excellent alternative to arrays when insertion and deletion at the beginning are frequently required.
        - Arrays contain a built in index whereas Linked Lists do not.
        - The idea of a list data structure that consists of nodes is the foundation for other data structures like Stacks and Queues.
*/

/*---------------------------------------------------------------------------------------------------*/

/* Section 20: Doubly Linked Lists */

// L131: Doubly Linked Lists Introduction

/*
    >> Objectives:
        - Compare and contrast Doubly and Singly Linked Lists.
        - Implement basic operations on a Doubly Linked List.

    >> Intro:
        - Almost identical to Singly Linked Lists, except every node has another pointer, to the previous node!
        - Better than Singly Linked Lists for finding nodes and can be done in half the time! [More Flexibility]
        - However, they do take up more memory considering the extra pointer. [More Memory]
*/

/*---------------------------------------------------------------------------------------------------*/

// L132: Setting Up Our Node Class

class DoublyNode {
    constructor(val) {
        this.val = val;

        this.next = null;

        this.prev = null;
    }
}

const doublyNode = new DoublyNode(12);

doublyNode.next = new DoublyNode(13);

doublyNode.next.prev = doublyNode;

console.log(doublyNode); 

/*
    { 
        val: 12, 
        next: { 
            val: 13, 
            next: null, 
            prev: { 
                val: 12, 
                next: [Circular], 
                prev: null 
            }, 
        }, 
        prev: null 
    }
*/

/*---------------------------------------------------------------------------------------------------*/

// L133: Push 

/*
    >> Pushing Pseudocode:
        - Create a new node with the value passed to the function.
        - If the head property is null set the head and tail to be the newly created node.
        - If not, set the next property on the tail to be that node.
        - Set the previous property on the newly created node to be the tail.
        - Set the tail to be the newly created node.
        - Increment the length.
        - Return the Doubly Linked List.
*/

/*---------------------------------------------------------------------------------------------------*/

// L134: Push Solution

class DoublyLinkedList1 {
    constructor() {
        this.head = null;

        this.tail = null;

        this.length = 0;
    }

    push(val) {
        const newNode = new DoublyNode(val);

        if (this.length === 0) {
            this.head = newNode;

            this.tail = newNode;
        } else {
            this.tail.next = newNode;

            newNode.prev = this.tail;

            this.tail = newNode;
        }

        this.length++;

        return this;
    }
}

let doublyList1 = new DoublyLinkedList1();

doublyList1.push("Hello");

doublyList1.push("Goodbye");

doublyList1.push("!");

console.log(doublyList1);

/* 
    { 
        val: "Hello", 
        next: { 
            val: "Goodbye", 
            next: { 
                val: "!", 
                next: null, 
                prev: { 
                    val: "Goodbye", 
                    next: [Circular], 
                    prev: [Circular], 
                } 
            }, 
            prev: { 
                val: "Hello", 
                next: [Circular], 
                prev: null 
            } 
        }, 
        prev: null 
    }
*/

/*---------------------------------------------------------------------------------------------------*/

// L135: Pop

/*
    >> Popping Pseudocode:
        - If there is no head, return undefined.
        - Store the current tail in a variable to return later.
        - If the length is 1, set the head and tail to be null.
        - Update the tail to be the previous Node.
        - Set the newTail's next to null.
        - Decrement the length.
        - Return the value removed.
*/

/*---------------------------------------------------------------------------------------------------*/

// L136: Pop Solution

class DoublyLinkedList2 {
    constructor() {
        this.head = null;

        this.tail = null;

        this.length = 0;
    }

    push(val) {
        const newNode = new DoublyNode(val);

        if (this.length === 0) {
            this.head = newNode;

            this.tail = newNode;
        } else {
            this.tail.next = newNode;

            newNode.prev = this.tail;

            this.tail = newNode;
        }

        this.length++;

        return this;
    }

    pop() {
        if (this.length === 0) return undefined;

        const poppedNode = this.tail;

        if (this.length === 1) {
            this.head = null;

            this.tail = null;
        } else {
            this.tail = poppedNode.prev;

            this.tail.next = null;
        }

        poppedNode.prev = null;

        this.length--;

        return poppedNode;
    }
}

let doublyList2 = new DoublyLinkedList2();

doublyList2.push("Hello");

doublyList2.push("Goodbye");

doublyList2.push("!");

doublyList2.pop(); // { val: "!", next: null, prev: null }

/*---------------------------------------------------------------------------------------------------*/

// L137: Shift

/*
    >> Shifting Pseudocode:
        - If length is 0, return undefined.
        - Store the current head property in a variable (we'll call it old head).
        - If the length is one:
            • Set the head to be null.
            • Set the tail to be null.
        - Update the head to be the next of the old head.
        - Set the head's prev property to null.
        - Set the old head's next to null.
        - Decrement the length.
        - Return old head.
*/

/*---------------------------------------------------------------------------------------------------*/

// L138: Shift Solution

class DoublyLinkedList3 {
    constructor() {
        this.head = null;

        this.tail = null;

        this.length = 0;
    }

    push(val) {
        const newNode = new DoublyNode(val);

        if (this.length === 0) {
            this.head = newNode;

            this.tail = newNode;
        } else {
            this.tail.next = newNode;

            newNode.prev = this.tail;

            this.tail = newNode;
        }

        this.length++;

        return this;
    }

    shift() {
        if (this.length === 0) return undefined;

        const oldHead = this.head;

        if (this.length === 1) {
            this.head = null;

            this.tail = null;
        } else {
            this.head = oldHead.next;

            this.head.prev = null;
        }

        oldHead.next = null;

        this.length--;

        return oldHead;
    }
}

let doublyList3 = new DoublyLinkedList3();

doublyList3.push("Hello");

doublyList3.push("Goodbye");

doublyList3.push("!");

doublyList3.shift(); // { val: "Hello", next: null, prev: null }

/*---------------------------------------------------------------------------------------------------*/

// L139: Unshift

/*
    >> Unshift Pseudocode:
        - Create a new node with the value passed to the function.
        - If the length is 0:
            • Set the head to be the new node.
            • Set the tail to be the new node.
        - Otherwise:
            • Set the prev property on the head of the list to be the new node.
            • Set the next property on the new node to be the head property.
            • Update the head to be the new node.
        - Increment the length.
        - Return the list.
*/

/*---------------------------------------------------------------------------------------------------*/

// L140: Unshift Solution

class DoublyLinkedList4 {
    constructor() {
        this.head = null;

        this.tail = null;

        this.length = 0;
    }

    push(val) {
        const newNode = new DoublyNode(val);

        if (this.length === 0) {
            this.head = newNode;

            this.tail = newNode;
        } else {
            this.tail.next = newNode;

            newNode.prev = this.tail;

            this.tail = newNode;
        }

        this.length++;

        return this;
    }

    unshift(val) {
        const newNode = new DoublyNode(val);

        if (this.length === 0) {
            this.head = newNode;

            this.tail = newNode;
        } else {
            this.head.prev = newNode;

            newNode.next = this.head;

            this.head = newNode;
        }

        this.length++;

        return this;
    }
}

let doublyList4 = new DoublyLinkedList4();

doublyList4.push("Hello");

doublyList4.push("Goodbye");

doublyList4.push("!");

doublyList4.unshift("Colt");

console.log(doublyList4);

/*
    { 
        val: "Colt", 
        next: { 
            val: "Hello", 
            next: { 
                val: "Goodbye", 
                next: { 
                    val: "!", 
                    next: null, 
                    prev: {
                        val: "Goodbye",
                        next: [Circular],
                        prev: [Circular],
                    },
                }, 
                prev: {
                    val: "Hello",
                    next: [Circular],
                    prev: [Circular],
                },
            }, 
            prev: { 
                val: "Colt", 
                next: [Circular], 
                prev: null 
            } 
        }, 
        prev: null 
    }
*/

/*---------------------------------------------------------------------------------------------------*/

// L141: Get

/*
    >> Get Pseudocode:
        - If the index is less than 0 or greater or equal to the length, return null.
        - If the index is less than or equal to half the length of the list:
            • Loop through the list starting from the head and loop towards the middle.
            • Return the node once it is found.
        - If the index is greater than half the length of the list:
            • Loop through the list starting from the tail and loop towards the middle.
            • Return the node once it is found.
*/

/*---------------------------------------------------------------------------------------------------*/

// L142: Get Solution

class DoublyLinkedList5 {
    constructor() {
        this.head = null;

        this.tail = null;

        this.length = 0;
    }

    push(val) {
        const newNode = new DoublyNode(val);

        if (this.length === 0) {
            this.head = newNode;

            this.tail = newNode;
        } else {
            this.tail.next = newNode;

            newNode.prev = this.tail;

            this.tail = newNode;
        }

        this.length++;

        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;

        let counter, current;

        if (index <= this.length / 2) {
            counter = 0;

            current = this.head;

            while (counter !== index) {
                current = current.next;

                counter++;
            }
        } else {
            counter = this.length - 1;

            current = this.tail;

            while (counter !== index) {
                current = current.prev;

                counter--;
            }
        }

        return current;
    }
}

let doublyList5 = new DoublyLinkedList5();

doublyList5.push("Hello");

doublyList5.push("Goodbye");

doublyList5.push("!");

doublyList5.push("Colt");

doublyList5.push("How");

doublyList5.push("Are");

doublyList5.push("You");

doublyList5.push("?");

doublyList5.get(3);

/*
    { 
        val: "Colt", 
        next: { 
            val: "How", 
            next: { 
                val: "Are", 
                next: { 
                    val: "You", 
                    next: { 
                        val: "?", 
                        next: null,
                        prev: {
                            val: "You",
                            next: [Circular],
                            prev: [Circular],
                        },
                    },    
                    prev: {
                        val: "Are",
                        next: [Circular],
                        prev: [Circular],
                    }  
                }, 
                prev: {
                    val: "How",
                    next: [Circular],
                    prev: [Circular],
                },
            }, 
            prev: {
                val: "Colt",
                next: [Circular],
                prev: [Circular],
            }, 
        }, 
        prev: {
            val: "!",
            next: [Circular],
            prev: [Circular],
        }
    }
*/

/*---------------------------------------------------------------------------------------------------*/

// L143: Set

/*
    >> Set Pseudocode:
        - Create a variable which is the result of the get method at the index passed to the function.
            • If the get method returns a valid node, set the value of that node to be the value passed to the function.
            • Return true.
        - Otherwise, return false.
*/

/*---------------------------------------------------------------------------------------------------*/

// L144: Set Solution

class DoublyLinkedList6 {
    constructor() {
        this.head = null;

        this.tail = null;

        this.length = 0;
    }

    push(val) {
        const newNode = new DoublyNode(val);

        if (this.length === 0) {
            this.head = newNode;

            this.tail = newNode;
        } else {
            this.tail.next = newNode;

            newNode.prev = this.tail;

            this.tail = newNode;
        }

        this.length++;

        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;

        let counter, current;

        if (index <= this.length / 2) {
            counter = 0;

            current = this.head;

            while (counter !== index) {
                current = current.next;

                counter++;
            }
        } else {
            counter = this.length - 1;

            current = this.tail;

            while (counter !== index) {
                current = current.prev;

                counter--;
            }
        }

        return current;
    }

    set(index, val) {
        let foundNode = this.get(index);

        if (foundNode) {
            foundNode.val = val;

            return true;
        }

        return false;
    }
}

const doublyList6 = new DoublyLinkedList6();

doublyList6.push("Hello");

doublyList6.push("Goodbye");

doublyList6.push("!");

doublyList6.push("Colt");

doublyList6.set(2, "!!!"); // true

doublyList6.set(7, "???"); // false

console.log(doublyList6);

/*
    { 
        val: "Hello", 
        next: { 
            val: "Goodbye", 
            next: { 
                val: "!!!", 
                next: { 
                    val: "Colt", 
                    next: null,
                    prev: {
                        val: "!!!",
                        next: [Circular],
                        prev: [Circular],
                    } 
                },
                prev: {
                    val: "Goodbye",
                    next: [Circular],
                    prev: [Circular],
                }
            },
            prev: {
                val: "Hello",
                next: [Circular],
                prev: null,
            }
        } 
        prev: null,
    }
*/

/*---------------------------------------------------------------------------------------------------*/

// L145: Insert

/*
    >> Insert Pseudocode:
        - If the index is less than zero or greater than or equal to the length return false.
        - If the index is 0, unshift.
        - If the index is the same as the length, push.
        - Use the get method to access the (index - 1).
        - Set the next and prev properties on the correct nodes to link everything together.
        - Increment the length.
        - Return true.
*/

/*---------------------------------------------------------------------------------------------------*/

// L146: Insert Solution

class DoublyLinkedList7 {
    constructor() {
        this.head = null;

        this.tail = null;

        this.length = 0;
    }

    push(val) {
        const newNode = new DoublyNode(val);

        if (this.length === 0) {
            this.head = newNode;

            this.tail = newNode;
        } else {
            this.tail.next = newNode;

            newNode.prev = this.tail;

            this.tail = newNode;
        }

        this.length++;

        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;

        let counter, current;

        if (index <= this.length / 2) {
            counter = 0;

            current = this.head;

            while (counter !== index) {
                current = current.next;

                counter++;
            }
        } else {
            counter = this.length - 1;

            current = this.tail;

            while (counter !== index) {
                current = current.prev;

                counter--;
            }
        }

        return current;
    }

    unshift(val) {
        const newNode = new DoublyNode(val);

        if (this.length === 0) {
            this.head = newNode;

            this.tail = newNode;
        } else {
            this.head.prev = newNode;

            newNode.next = this.head;

            this.head = newNode;
        }

        this.length++;

        return this;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;

        if (index === 0) return !!this.unshift(val);

        if (index === this.length) return !!this.push(val);

        let newNode = new DoublyNode(val);

        let beforeNode = this.get(index - 1);

        let afterNode = beforeNode.next;

        beforeNode.next = newNode;
        
        newNode.prev = beforeNode;

        newNode.next = afterNode;
        
        afterNode.prev = newNode;

        this.length++;

        return true;
    }
}

const doublyList7 = new DoublyLinkedList7();

doublyList7.push("Hello");

doublyList7.push("Goodbye");

doublyList7.push("!");

doublyList7.insert(1, "Colt"); // true

console.log(doublyList7);

/*
    { 
        val: "Hello", 
        next: { 
            val: "Colt", 
            next: { 
                val: "Goodbye", 
                next: { 
                    val: "!", 
                    next: null,
                    prev: {
                        val: "Goodbye",
                        next: [Circular],
                        prev: [Circular],
                    } 
                },
                prev: {
                    val: "Colt",
                    next: [Circular],
                    prev: [Circular],
                }
            },
            prev: {
                val: "Hello",
                next: [Circular],
                prev: null,
            }
        } 
        prev: null,
    }
*/

/*---------------------------------------------------------------------------------------------------*/

// L147: Remove

/*
    >> Remove Pseudocode:
        - If the index is less than zero or greater than or equal to the length return undefined.
        - If the index is 0, shift.
        - If the index is the same as the (length - 1), pop.
        - Use the get method to retrieve the item to be removed.
        - Update the next and prev properties to remove the found node from the list.
        - Set next and prev to null on the found node.
        - Decrement the length.
        - Return the removed node.
*/

/*---------------------------------------------------------------------------------------------------*/

// L148: Remove Solution

class DoublyLinkedList8 {
    constructor() {
        this.head = null;

        this.tail = null;

        this.length = 0;
    }

    push(val) {
        const newNode = new DoublyNode(val);

        if (this.length === 0) {
            this.head = newNode;

            this.tail = newNode;
        } else {
            this.tail.next = newNode;

            newNode.prev = this.tail;

            this.tail = newNode;
        }

        this.length++;

        return this;
    }

    pop() {
        if (this.length === 0) return undefined;

        const poppedNode = this.tail;

        if (this.length === 1) {
            this.head = null;

            this.tail = null;
        } else {
            this.tail = poppedNode.prev;

            this.tail.next = null;
        }

        poppedNode.prev = null;

        this.length--;

        return poppedNode;
    }

    shift() {
        if (this.length === 0) return undefined;

        const oldHead = this.head;

        if (this.length === 1) {
            this.head = null;

            this.tail = null;
        } else {
            this.head = oldHead.next;

            this.head.prev = null;
        }

        oldHead.next = null;

        this.length--;

        return oldHead;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;

        let counter, current;

        if (index <= this.length / 2) {
            counter = 0;

            current = this.head;

            while (counter !== index) {
                current = current.next;

                counter++;
            }
        } else {
            counter = this.length - 1;

            current = this.tail;

            while (counter !== index) {
                current = current.prev;

                counter--;
            }
        }

        return current;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;

        if (index === 0) return this.shift();

        if (index === this.length - 1) return this.pop();

        let removedNode = this.get(index);

        removedNode.prev.next = removedNode.next;

        removedNode.next.prev = removedNode.prev;

        removedNode.next = null;

        removedNode.prev = null;

        this.length--;

        return removedNode;
    }
}

let doublyList8 = new DoublyLinkedList8();

doublyList8.push("Hello");

doublyList8.push("Goodbye");

doublyList8.push("!");

doublyList8.remove(1); // { val: "Goodbye", next: null, prev: null }

/*---------------------------------------------------------------------------------------------------*/

// L149: Comparing Singly and Doubly Linked Lists

/*
    >> Big O of Doubly Linked Lists:
        • Insertion: [O(1)]
        • Removal: [O(1)] >> if removing from the beginning or [O(n)] >> if removing from the end
        • Searching: [O(n)] >> technically [O(n/2)] but that's still [O(n)]
        • Access: [O(n)]

    >> Recap:
        - Doubly Linked Lists are almost identical to Singly Linked Lists except there is an additional pointer to previous nodes.
        - Better than Singly Linked Lists for finding nodes and can be done in half the time!
        - However, they do take up more memory considering the extra pointer.
*/

/*---------------------------------------------------------------------------------------------------*/

/* Section 21 */

// L151: Intro Stacks

/*
    >> Objectives:
        - Define what a stack is.
        - Understand use cases for a stack.
        - Implement operations on a stack data structure.

    >> What is Stack?
        - A LIFO data structure! [Last element In, First element Out]
        - The last element added to the stack will be the first element removed from the stack.
        - This is used for:
            • Managing function invocations.
            • Undo / Redo. (Command + Z)
            • Routing (the history object in the browser) is treated like a stack!
        - Example of Stacks: the JS built-in "Call Stack"
        - There is more than one way of implementing a stack:
            • Array implementation.
            • Linked List implementation.
*/

function factorial(x) { // Call Stack example
    if (x === 0) return 1;

    return x * factorial(x - 1);
}

factorial(4);

/*---------------------------------------------------------------------------------------------------*/

// L152: Creating a Stack with an Array [LIFO === FILO]

// push() & pop() >> Last element In, First element Out using [Adding & Removing from the end] (LIFO)

let stack1 = [];

stack1.push("google");

stack1.push("facebook");

stack1.push("youtube");

console.log(stack1); // ["google", "facebook", "youtube"]

stack1.pop(); // youtube

stack1.pop(); // facebook

stack1.push("amazon");

stack1.pop(); // amazon

stack1.pop(); // google

// unshift() & shift() >> Last element In, First element Out using [Adding & Removing from the beginning] (LIFO)

let stack2 = []; 

stack2.unshift("google");

stack2.unshift("facebook");

stack2.unshift("youtube");

console.log(stack2); // ["youtube", "facebook", "google"]

stack2.shift(); // youtube

stack2.shift(); // facebook

stack2.unshift("amazon");

stack2.shift(); // amazon

stack2.shift(); // google

/*
    >> What is better & What's more efficient in Arrays ?
        - Adding & Removing from the beginning, is not good for big O time complexity, we have to re-index all other items.
        - Adding & Removing from the end, is good for big O time complexity, we don't have to re-index all other items.
        - If you are going to have a ton of data in there, so all you need is [push() & pop()] implementation.
        - If you are using the length of list only and there is no reason to have the indices of the items and we are not accessing information based off an index, so all you need is [unshift() & shift()] implementation.
*/

/*---------------------------------------------------------------------------------------------------*/

// L153: Writing Our Own Stack From Scratch

/* 
    >> Pushing Pseudocode: (Add a value to the top of stack) === "unshift" in singly linked list
        - The function should accept a value.
        - Create a new node with that value.
        - If there are no nodes in the stack, set the first and last property to be the newly created node.
        - If there is at least one node, create a variable that stores the current first property on the stack.
        - Reset the first property to be the newly created node.
        - Set the next property on the node to be the previously created variable.
        - Increment the size of the stack by 1.


    >> Popping Pseudocode: (Remove a value from the top of stack) === "shift" in singly linked list
        - If there are no nodes in the stack, return null.
        - Create a temporary variable to store the first property on the stack.
        - If there is only 1 node, set the first and last property to be null.
        - If there is more than one node, set the first property to be the next property on the current first.
        - Decrement the size by 1.
        - Return the value of the node removed.
*/

class StackNode {
    constructor(val) {
        this.val = val;
        
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;

        this.last = null;

        this.size = 0;
    }

    push(val) {
        let newNode = new StackNode(val);

        if (!this.first) {
            this.first = newNode;

            this.last = newNode;
        } else {
            let temp = this.first;

            this.first = newNode;

            this.first.next = temp;
        }

        return ++this.size;
    }

    pop () {
        if (!this.first) return null;

        let temp = this.first;

        if (this.first === this.last) {
            this.last = null;
        }

        this.first = this.first.next;

        this.size--;

        return temp.val; 
    }
}

/*
    >> Why we do "push" & "pop" at this way like we do "unshift" & "shift" in Singly Linked List?
        - Because we want to have a constant time complexity, but removing from the end is not constant time because we have to 
          iterate through the entire list to get to the item before the last item and set it to be the new tail, and Stack is supposed 
          to be constant time at removing and adding, so we are adding and removing from beginning of our list, but we are calling it 
          "push" and "pop" because it is a Stack.
*/

/*---------------------------------------------------------------------------------------------------*/

// L154: BIG O of Stacks

/*
    >> BIG O of Stacks:
        • Insertion: [O(1)]
        • Removal: [O(1)]
        • Searching: [O(n)]
        • Access: [O(n)]

    >> Recap:
        - Stacks are a LIFO data structure where the last value in is always the first one out.
        - Stacks are used to handle function invocations (the call stack), for operations like undo/redo, and for routing (remember pages you have visited and go back/forward) and much more!
        - They are not a built in data structure in JavaScript, but are relatively simple to implement.
        - Insertion and removal can be done in O(1).
        - Searching and Access are not strengths of stacks.
*/

/*---------------------------------------------------------------------------------------------------*/

// L155: Intro to Queues

/*
    >> Objectives:
        - Define what a queue is.
        - Understand use cases for a queue.
        - Implement operations on a queue data structure.

    >> What is a Queue ?
        - A FIFO data structure! [First element In, First element Out]
        - This is used for:
            • Background tasks.
            • Uploading resources.
            • Printing / Task processing.
        - Example of Queues: the JS built-in "Message Queue"
        - There is more than one way of implementing a queue:
            • Array implementation.
            • Linked List implementation.
*/

/*---------------------------------------------------------------------------------------------------*/

// L156: Creating Queues Using Arrays

// push() & shift() >> First element In, First element Out using [Adding from the end & Removing from the beginning] (FIFO)

let queue1 = [];

queue1.push("FIRST");

queue1.push("SECOND");

queue1.push("THIRD");

console.log(queue1); // ["FIRST", "SECOND", "THIRD"]

queue1.shift(); // FIRST

queue1.shift(); // SECOND

queue1.shift(); // THIRD

// unshift() & pop() >> First element In, First element Out using [Adding from the beginning & Removing from the end] (FIFO)

let queue2 = [];

queue2.unshift("FIRST");

queue2.unshift("SECOND");

queue2.unshift("THIRD");

console.log(queue2); // ["THIRD", "SECOND", "FIRST"]

queue2.pop(); // FIRST

queue2.pop(); // SECOND

queue2.pop(); // THIRD

/*
    >> What is better & What's more efficient in Arrays ?
        - Adding from the end & Removing from the beginning, is not good for big O time complexity, we have to re-index all other items during removing from the beginning.
        - Adding from the beginning & Removing from the end, is not good for big O time complexity, we have to re-index all other items during adding from the beginning.
        - If you are going to have a ton of data in there, so you can't use both implementations here, because unlike Stacks, you could use [push() & pop()] to make a stack and you would never need to re-index the entire array, 
          unlike that, when we do a queue, there is no way around it using an Array, so we have to create our own queue class if you are concerned about performance.  .
        - If you are using the length of list only and there is no reason to have the indices of the items and we are not accessing information based off an index, so you can use both implementations [push() & shift()] or [unshift() & pop()].
*/

/*---------------------------------------------------------------------------------------------------*/

// L157: Writing Our Own Queue From Scratch

/*
    >> Enqueue Pseudocode:
        - This function accepts some value.
        - Create a new node using that value passed to the function.
        - If there are no nodes in the queue, set this node to be the first and last property of the queue.
        - Otherwise, set the next property on the current last to be that node, and then set the last property of the queue to be that node.
        - Increment the size of the queue by 1.

    >> Dequeue Pseudocode:
        - If there is no first property, just return null.
        - Store the first property in a variable.
        - See if the first is the same as the last (check if there is only 1 node). If so, set the first and last to be null.
        - If there is more than 1 node, set the first property to be the next property of first.
        - Decrement the size by 1.
        - Return the value of the node dequeued.
*/

class QueueNode {
    constructor(val) {
        this.val = val;

        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;

        this.last = null;

        this.size = 0;
    }

    enqueue(val) {
        let newNode = new QueueNode(val);

        if (!this.first) {
            this.first = newNode;

            this.last = newNode;
        } else {
            this.last.next = newNode;

            this.last = newNode;
        }

        return ++this.size;
    }

    dequeue() {
        if (!this.first) return null;

        let temp = this.first;

        if (this.first === this.last) {
            this.last = null;
        }

        this.first = this.first.next;

        this.size--;

        return temp.val;
    }
}

/*
    >> Why we do "enqueue" & "dequeue" at this way like we do "push" & "shift" in Singly Linked List?
        - Because we want to have a constant time complexity, but removing from the end is not constant time because we have to 
          iterate through the entire list to get to the item before the last item and set it to be the new last, and Queue is supposed 
          to be constant time at removing and adding, so we are adding from the end and removing from beginning of our list, but we are calling it 
          "enqueue" and "dequeue" because it is a Queue.
*/

/*---------------------------------------------------------------------------------------------------*/

// L158: BIG O of Queues

/*
    >> BIG O of Queues:
        • Insertion: [O(1)]
        • Removal: [O(1)]
        • Searching: [O(n)]
        • Access: [O(n)]

    >> Recap:
        - Queues are a LIFO data structure where the first value in is always the first one out.
        - Queues are useful for processing tasks and are foundational for more complex data structures.
        - They are not a built in data structure in JavaScript, but are relatively simple to implement.
        - Insertion and removal can be done in O(1).
        - Searching and Access are not strengths of queues.
*/

/*---------------------------------------------------------------------------------------------------*/