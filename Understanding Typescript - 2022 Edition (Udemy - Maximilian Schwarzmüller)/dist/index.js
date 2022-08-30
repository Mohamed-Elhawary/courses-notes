"use strict";
/*SECTION [1]: Lecture [4]*/
const input = document.getElementById('number'); // Exclamation Mark (!) to ensure that the element with the "input" ID will never yield >> (null)
const button = document.getElementById('button');
function add(num) {
    return num + 5;
}
button.addEventListener("click", function () {
    console.log(add(+input.value));
});
/*SECTION [2]: Lecture [11]*/
function collect(n1, n2) {
    return n1 + n2;
}
const number1 = 5.2;
const number2 = 3;
console.log(collect(number1, number2));
/*SECTION [2]: Lecture [12]*/
// > The Key difference between JS & TS is [JS uses dynamic types that are resolved at runtime], but [TS uses static types that are resolved during development mode]
/*SECTION [2]: Lecture [15]*/
// Type Assignment
let numberAss;
numberAss = 5;
// Type Inference [Best Practice & better syntax]
let numberInf = 5; // === let numberInf: number = 5; but we don't have to assign the type explicitly here as well like the above example, cause this type now rely on type inference
/*SECTION [2]: Lecture [16]*/
// Object Type Assignment
const objectAss = {
    name: "hawary",
    age: 27,
};
// Object Type Inference [Best Practice & better syntax]
const objectInf = {
    name: "hawary",
    age: 27,
};
/*SECTION [2]: Lecture [18]*/
// Array Type Assignment
let arrAss = ["sports", "driving"];
// Array Type Inference [Best Practice & better syntax]
let arrInf = ["swim", "watch movies"];
/*SECTION [2]: Lecture [19]*/
let tupleArray = [12, "admin"]; // This is a [Tuple] type, it is a normal array but has fixed length and fixed types of elements that can't not be changed
// tupleArray[1] = 10; xx >> will catch an error
// tupleArray = [15, "author", "admin"]; xx >> will catch an error
// tupleArray.push("author"); >> TypeScript can't detect [push] method as it increases the array fixed length, so it allows us to use it with tuples normally, [This is an issue in the compilier itself]
/*SECTION [2]: Lecture [20]*/
// Automatically enumerated global constant identifiers, starting from Zero based index.
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["AUTHOR"] = 1] = "AUTHOR";
    Role[Role["USER"] = 2] = "USER";
})(Role || (Role = {}));
var Type;
(function (Type) {
    Type[Type["GAME"] = 100] = "GAME";
    Type[Type["LOGIC"] = 101] = "LOGIC";
    Type["FUN"] = "Movies";
})(Type || (Type = {}));
console.log(Role.ADMIN, Type.FUN);
/*SECTION [2]: Lecture [21]*/
const anyType = "string"; // Any kind of value, no specific type assignment, you can use it as a fallback if you have some value or some kind of data where you really can't know which kind of data will be stored in there.
/*SECTION [2]: Lecture [22]*/
const unionType = "string"; // Union Type
/*SECTION [2]: Lecture [23]*/
function literalType(result) {
    if (result === "as-number") {
        console.log("number");
    }
    else {
        console.log("string");
    }
}
const value = 15;
const u1 = { name: 'Max', age: 30 }; // this works!
// This allows you to avoid unnecessary repetition and manage types centrally. For example, you can simplify this code:
function greet1(user) {
    console.log('Hi, I am ' + user.name);
}
function isOlder1(user, checkAge) {
    return checkAge > user.age;
}
// To:
function greet2(user) {
    console.log('Hi, I am ' + user.name);
}
function isOlder2(user, checkAge) {
    return checkAge > user.age;
}
/*SECTION [2]: Lecture [26]*/
// Function Type Assignment
function funAss(n1, n2) {
    return n1 + n2;
}
// Function Type Inference [Best Practice & better syntax]
function funInf(n1, n2) {
    return n1 + n2;
}
function funReturn(num) {
    return num;
}
function funVoid(num) {
    console.log(num);
}
funVoid(3); // 3
console.log(funVoid(3)); // undefined
/*SECTION [2]: Lecture [27]*/
let funcTypeLessPrecise; // This is good but not perfect, we say this should be a function, but it could also more precise to define the funtions inputs and outputs type
funcTypeLessPrecise = funInf;
funcTypeLessPrecise = funVoid;
// funcTypeLessPrecise = 5; xx
let funcTypeMorePrecise; // Function Type define the parameters and return type of a function
funcTypeMorePrecise = funInf;
// funcTypeMorePrecise = funVoid; xx
// funcTypeMorePrecise = 5; xx
/*SECTION [2]: Lecture [28]*/
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
// Callback functions can return something, even if the argument on which they're passed does NOT expect a returned value, see below example for more details:
addAndHandle(10, 20, (result) => {
    console.log(result);
    return result;
});
/*SECTION [2]: Lecture [29]*/
let userInput;
let userName;
userInput = 5;
userInput = "Max";
// userName = userInput; xx
if (typeof userInput === "string") { // we will have to use extra check to make sure that what you want to do can be done.
    userName = userInput;
}
let userInput2;
let userName2;
userInput2 = 5;
userInput2 = "Max";
userName2 = userInput2; // No problem with [any] type, so unknown is a bit more restrict than any
/*SECTION [2]: Lecture [30]*/
function generateError(msg, code) {
    throw { message: msg, errorCode: code };
    // throw new Error()
    // while () {}
}
/*SECTION [5]: Lecture [59]*/
class Department {
    constructor(n) {
        this.name = n;
    }
}
const accounting = new Department('Accounting');
console.log(accounting);
//# sourceMappingURL=index.js.map