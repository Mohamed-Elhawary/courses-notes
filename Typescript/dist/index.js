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
// tupleArray.push("author"); >> TypeScript can't detect [push] method as it increases the array fixed length, so it allows us to use it with tuples normally, [This is an issue in the compiler itself]
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
let funcTypeLessPrecise; // This is good but not perfect, we say this should be a function, but it could also more precise to define the functions inputs and outputs type
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
/*SECTION [5]: Lecture [59, 61, 62, 66, 67, 68]*/
class Department {
    // constructor(n: string) {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        // public name: string;
        // public readonly id: string;
        this.employees = [];
        this.reports = [];
        // this.name = n;
        this.lastReport = this.reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        else {
            console.log("No report found");
        }
    }
    set mostRecentReport(report) {
        if (!report) {
            console.log("Please add a valid value");
        }
        else {
            this.addReport(report);
            this.lastReport = report;
        }
    }
    describe() {
        console.log("Department", this.name);
    }
    static addYear(year) {
        Department.fiscalYear = year;
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    addReport(report) {
        this.reports.push(report);
        this.lastReport = report;
    }
    printEmployeesInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
    printReportsInformation() {
        console.log(this.reports.length);
        console.log(this.reports);
    }
}
Department.fiscalYear = 2020;
// static methods & properties can be accessible without needing to initialize an instance of the class, you can access it from the class itself
console.log(Department.addYear(2021));
console.log(Department.fiscalYear);
const accounting = new Department("Accounting", "s2");
console.log(accounting.mostRecentReport); // DON'T add function parentheses () here to execute getter method, instead treat with it as a normal property
accounting.mostRecentReport = "Report 1";
accounting.describe(); // Department Accounting
const accountCopy1 = { describe: accounting.describe() };
// accountCopy1.describe(); // Department undefined
const accountCopy2 = { name: "Engineering", describe: accounting.describe(), id: "2" };
// accountCopy2.describe(); // Department Engineering
accounting.addEmployee("Max");
// accounting.employees[2] = "Anna"; // error can't be accessable outside the class, because the employees property has private modifier
accounting.printEmployeesInformation();
accounting.addReport("Report 2");
console.log(accounting.mostRecentReport);
// accounting.reports[1] = "report 1"; // error can't be accessable outside the class, because the reports property has protected modifier
accounting.printReportsInformation();
// accounting.id = "2"; // error
/*SECTION [5]: Lecture [65]*/
class ITDepartment extends Department {
    constructor(id, admins) {
        super("IT", id);
        this.admins = admins;
    }
    addAdmin(admin) {
        this.admins.push(admin);
    }
    /* addEmployee(employee: string): void {
        this.employees.push(employee);
    } */ // can't be accessible in the inheritance class that extends from the parent class [Department Class] because we use private modifier with the employees property
    addReport(report) {
        this.reports.push(report); // can be accessible in the inheritance class that extends from the parent class [Department Class] because we use protected modifier with the reports property
    }
}
const it = new ITDepartment("25", ["Max"]);
console.log(it);
/*SECTION [5]: Lecture [69]*/
class Human {
    constructor(name) {
        this.name = name;
    }
}
class Man extends Human {
    constructor(name) {
        super(name);
    }
    describe() {
        console.log("Hello", this.name);
    }
}
/*SECTION [5]: Lecture [70]*/
// Singletons Pattern: This pattern is used to prevent creating more than one instance of a certain singleton class, will ensure that the class has one only instance, we have to use private modifier with inherited class constructor
class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    static getInstance() {
        if (Dog.instance) {
            return this.instance;
        }
        this.instance = new Dog("Nani");
        return this.instance;
    }
}
// const dog = new Dog(); xx
const dog = Dog.getInstance();
console.log(dog);
class Person {
    constructor(n, outputName) {
        this.location = "Cairo";
        this.age = 30;
        this.name = n;
        if (outputName) {
            this.outputName = outputName;
        }
    }
    greet(word) {
        if (this.outputName) {
            console.log(word + this.name + this.outputName);
        }
        else {
            console.log(word + this.name);
        }
    }
}
let userOne;
userOne = new Person("User");
let addNumber;
addNumber = (n) => {
    return n;
};
/*
>> Another way to do the same effect using interfaces instead of types.

interface Admin {
    name: string;
    role: number;
}

interface Employee {
    age: number;
    position: string;
}

interface CompanyManagerMember extends Admin, Employee;
*/
const member = {
    name: "Admin",
    role: 0,
    age: 3,
    position: "Head Manager",
};
function concat(a, b) {
    if (typeof a === "string" || typeof b === "string") { // Type Guard
        return a.toString() + b.toString();
    }
    else {
        return a + b;
    }
}
const result = concat("Hawary", " Frontend");
result.split(" "); // We need here to add function overloads that define the return cases types of concat function. [as we add them above before the implementation of concat function]
function printComapanyMemeber(compMember) {
    console.log("name: " + compMember.name);
    if ("role" in compMember) { // Type Guard
        console.log("role: " + compMember.role);
    }
}
class Car {
    drive() {
        console.log("Driving a car...");
    }
}
class Truck {
    drive() {
        console.log("Driving a truck...");
    }
    loadCargo(amount) {
        console.log("loading cargo", amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) { // Type Guard
        vehicle.loadCargo(1000);
    }
}
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case ("bird"):
            console.log(animal.flyingSpeed);
            break;
        case ("horse"):
            console.log(animal.runningSpeed);
            break;
    }
}
/*SECTION [6]: Lecture [86]*/
// const inputElement = <HTMLInputElement>document.getElementById("user-input")!; >> Option ONE for Type Casting
const inputElement = document.getElementById("user-input"); // >> Option TWO for Type Casting
inputElement.value = "value";
//Note: we add exclamation mark above if we are sure that this element will not be equal to "null" but if we aren't sure so we have to add "if" check like below example 
const inputElement2 = document.getElementById("user-input");
if (inputElement2) {
    inputElement2.value = "value";
}
const errorObj = {
    id: "1",
    email: "invalid email",
    name: "invalid name",
};
/*SECTION [6]: Lecture [90]*/
const userInputValue = "";
const storedData = userInputValue !== null && userInputValue !== void 0 ? userInputValue : "Default"; // This is called Nullish Coalescing that checks if the variable value equals to [NULL or undefined] only, Empty string here is treated here as truthy value.
console.log(storedData);
//# sourceMappingURL=index.js.map