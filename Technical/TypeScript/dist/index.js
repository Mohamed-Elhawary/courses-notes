"use strict";
/* Section 1: Getting Started */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
// L4: Installing & Using TypeScript
const input = document.getElementById('number'); // Exclamation Mark (!) to ensure that the element with the "input" ID will never yield >> (null)
const button = document.getElementById('button');
function add(num) {
    return num + 5;
}
button.addEventListener("click", function () {
    console.log(add(+input.value));
});
/*---------------------------------------------------------------------------------------------------*/
/* Section 2: TypeScript Basics & Basic Types */
// L11: Using Types
function collect(n1, n2) {
    return n1 + n2;
}
const number1 = 5.2;
const number2 = 3;
console.log(collect(number1, number2));
/*---------------------------------------------------------------------------------------------------*/
// L12: TypeScript Types vs JavaScript Types
/*
    - The Key difference between JS & TS is [JS uses dynamic types that are resolved at runtime],
      but [TS uses static types that are resolved during development mode]
*/
/*---------------------------------------------------------------------------------------------------*/
// L15: Type Assignment & Type Inference
let numberAss; // Type Assignment
numberAss = 5;
let numberInf = 5; // Type Inference [Best Practice & better syntax] === let numberInf: number = 5; but we don't have to assign the type explicitly here as well like the above example, cause this type now rely on type inference
/*---------------------------------------------------------------------------------------------------*/
// L16: Object Types
const objectAss = {
    name: "hawary",
    age: 27,
};
const objectInf = {
    name: "hawary",
    age: 27,
};
/*---------------------------------------------------------------------------------------------------*/
// L18: Arrays Types
let arrAss = ["sports", "driving"]; // Array Type Assignment
let arrInf = ["swim", "watch movies"]; // Array Type Inference [Best Practice & better syntax]
/*---------------------------------------------------------------------------------------------------*/
// L19: Working with Tuples
let tupleArray = [12, "admin"]; // This is a [Tuple] type, it is a normal array but has fixed length and fixed types of elements that can't not be changed
/*
    - tupleArray[1] = 10; // xx >> will catch an error
    - tupleArray = [15, "author", "admin"]; // xx >> will catch an error
    - tupleArray.push("author"); // xx >> TypeScript can't detect [push] method as it increases the array fixed length, so it allows us to use it with tuples normally, [This is an issue in the compiler itself]
*/
/*---------------------------------------------------------------------------------------------------*/
// L20: Working with Enums
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
/*---------------------------------------------------------------------------------------------------*/
// L21: The "any" Type
const anyType = "string"; // Any kind of value, no specific type assignment, you can use it as a fallback if you have some value or some kind of data where you really can't know which kind of data will be stored in there.
/*---------------------------------------------------------------------------------------------------*/
// L22: Union Types
const unionType = "string"; // Union Type
/*---------------------------------------------------------------------------------------------------*/
// L23: Literal Types
function literalType(result) {
    if (result === "as-number") {
        console.log("number");
    }
    else {
        console.log("string");
    }
}
literalType("as-number");
literalType("as-string");
const value = 15;
const u1 = { name: 'Max', age: 30 }; // this works!
function greet1(user) {
    console.log('Hi, I am ' + user.name);
}
function isOlder1(user, checkAge) {
    return checkAge > user.age;
}
function greet2(user) {
    console.log('Hi, I am ' + user.name);
}
function isOlder2(user, checkAge) {
    return checkAge > user.age;
}
/*---------------------------------------------------------------------------------------------------*/
// L26: Function Return Types & "void"
function funAss(n1, n2) {
    return n1 + n2;
}
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
/*---------------------------------------------------------------------------------------------------*/
// L27: Functions as Types
let funcTypeLessPrecise; // This is good but not perfect, we say this should be a function, but it could also more precise to define the functions inputs and outputs type
funcTypeLessPrecise = funInf;
funcTypeLessPrecise = funVoid;
// funcTypeLessPrecise = 5; // xx
let funcTypeMorePrecise; // Function Type define the parameters and return type of a function
funcTypeMorePrecise = funInf;
/*
    - funcTypeMorePrecise = funVoid; // xx
    - funcTypeMorePrecise = 5; // xx
*/
/*---------------------------------------------------------------------------------------------------*/
// L28: Functions Types & Callbacks
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, (result) => {
    console.log(result);
    return result;
});
/*---------------------------------------------------------------------------------------------------*/
// L29: The "unknown" Type
let userInput;
let userName;
userInput = 5;
userInput = "Max";
// userName = userInput; // xx
if (typeof userInput === "string") { // we will have to use extra check to make sure that what you want to do can be done.
    userName = userInput;
}
let userInput2;
let userName2;
userInput2 = 5;
userInput2 = "Max";
userName2 = userInput2; // No problem with [any] type, so unknown is a bit more restrict than any
/*---------------------------------------------------------------------------------------------------*/
// L30: The "never" Type
function generateError(msg, code) {
    throw { message: msg, errorCode: code };
    // throw new Error()
    // while () {}
}
/*---------------------------------------------------------------------------------------------------*/
/* Section 5: Classes & Interfaces */
// Lectures [59, 61, 62, 63, 64, 66, 67, 68]: (Classes)
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
const accountCopy1 = { describe: accounting.describe };
accountCopy1.describe(); // Department undefined
const accountCopy2 = { name: "Engineering", describe: accounting.describe, id: "2" };
accountCopy2.describe(); // Department Engineering
accounting.addEmployee("Max");
accounting.printEmployeesInformation();
accounting.addReport("Report 2");
accounting.printReportsInformation();
console.log(accounting.mostRecentReport);
/*
    - accounting.employees[2] = "Anna"; // xx >> error can't be accessible outside the class, because the employees property has private modifier
    - accounting.reports[1] = "report 1"; // xx >> error can't be accessible outside the class, because the reports property has protected modifier
    - accounting.id = "2"; // xx >> error
*/
/*---------------------------------------------------------------------------------------------------*/
// L65: Inheritance
class ITDepartment extends Department {
    constructor(id, admins) {
        super("IT", id);
        this.admins = admins;
    }
    addAdmin(admin) {
        this.admins.push(admin);
    }
    /* addEmployee(employee: string): void { // can't be accessible in the inheritance class that extends from the parent class [Department Class] because we use private modifier with the employees property
        this.employees.push(employee);
    } */
    addReport(report) {
        this.reports.push(report);
    }
}
const it = new ITDepartment("25", ["Max"]);
console.log(it);
/*---------------------------------------------------------------------------------------------------*/
// L69: Abstract Classes
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
/*---------------------------------------------------------------------------------------------------*/
// L70: Singletons & Private Constructors
/*
    -  Singleton Pattern: This pattern is used to prevent creating more than one instance of a certain singleton class.
       Will ensure that the class has one only instance, we have to use private modifier with inherited class constructor.

*/
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
// userOne.name = "Manu"; // xx >> because "name" is a readonly property
userOne = new Person("User");
let addNumber;
addNumber = (n) => {
    return n;
};
const member = {
    name: "Admin",
    role: 0,
    age: 3,
    position: "Head Manager",
};
function concat1(a, b) {
    if (typeof a === "string" || typeof b === "string") { // Type Guard
        return a.toString() + b.toString();
    }
    else {
        return a + b;
    }
}
function printCompanyMember(compMember) {
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
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    // if (animal instanceof Bird) >> will not work because "Bird" is an Interface not Class, which is not compiled to JavaScript
    switch (animal.type) {
        case ("bird"):
            console.log(animal.flyingSpeed);
            break;
        case ("horse"):
            console.log(animal.runningSpeed);
            break;
    }
}
moveAnimal({ type: "bird", flyingSpeed: 10 });
/*---------------------------------------------------------------------------------------------------*/
// L86: Type Casting
const inputElement1 = document.getElementById("user-input"); // Option ONE for Type Casting
const inputElement2 = document.getElementById("user-input"); // Option TWO for Type Casting
inputElement2.value = "value";
/*
    -  We add exclamation mark above if we are sure that this element will not be equal to "null",
       but if we aren't sure so we have to add "if" check like the example below.
*/
const inputElement3 = document.getElementById("user-input");
if (inputElement3) {
    inputElement3.value = "value";
}
const errorObj = {
    id: "1",
    email: "invalid email",
    name: "invalid name",
};
function concat2(a, b) {
    if (typeof a === "string" || typeof b === "string") { // Type Guard
        return a.toString() + b.toString();
    }
    else {
        return a + b;
    }
}
const result = concat2("Hawary", " Frontend");
result.split(" "); // We need here to add function overloads that define the return cases types of "concat" function. [as we add them above before the implementation of "concat" function]
/*---------------------------------------------------------------------------------------------------*/
// L89: Optional Chaining
const fetchedUserData = {
    id: 'ul',
    name: 'Max',
    job: { title: 'CEO', description: 'My own company' }
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
/*---------------------------------------------------------------------------------------------------*/
// L90: Nullish Coalescing
const userInputValue1 = "";
const userInputValue2 = null;
const storedData1 = userInputValue1 || "Default";
const storedData2 = userInputValue1 !== null && userInputValue1 !== void 0 ? userInputValue1 : "Default"; // This is called Nullish Coalescing that checks if the variable value equals to [NULL or undefined] only, Empty string here is treated here as truthy value.
const storedData3 = userInputValue2 || "Default";
const storedData4 = userInputValue2 !== null && userInputValue2 !== void 0 ? userInputValue2 : "Default"; // This is called Nullish Coalescing that checks if the variable value equals to [NULL or undefined] only, Empty string here is treated here as truthy value.
console.log(storedData1); // Default
console.log(storedData2); // ""
console.log(storedData3); // Default
console.log(storedData4); // Default
/*---------------------------------------------------------------------------------------------------*/
/* Section 7: Generics */
// L94: Built-in Generics & What are Generics?
/*
    >> Where can we use Generics?
        - In cases where you have a type that actually works together with multiple other possible types.
*/
const names = ['John', 'Alice']; // Built-in Generic Type === const names: string[] = ['John', 'Alice'];
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is done!');
    }, 2000);
});
promise.then(data => {
    data.split(' ');
});
/*---------------------------------------------------------------------------------------------------*/
// L95: Creating a Generic Function 
function merge(objA, objB) {
    //@ts-ignore
    return Object.assign(objA, objB);
}
const mergedObj1 = merge({ name: 'Max' }, 30);
//@ts-ignore
console.log(mergedObj1.name); // Max
/*---------------------------------------------------------------------------------------------------*/
// L96: Working with Constraints
/*
    >> What are Constraints?
        - Constraints allow you to narrow down the concrete types that may be used in a generic function.
*/
function merge2(objA, objB) {
    //@ts-ignore
    return Object.assign(objA, objB);
}
// const mergedObj2 = merge2({ name: 'Max' }, 30); // xx
const mergedObj2 = merge2({ name: 'Max' }, { age: 30 });
console.log(mergedObj2.age); // 30
function countAndDescribe(element) {
    let descriptionText = 'Got no value.';
    if (element.length === 1) {
        descriptionText = 'Got 1 element.';
    }
    else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
}
/*---------------------------------------------------------------------------------------------------*/
// L98: The "keyof" Constraint
function extractAndConvert(obj, key) {
    return 'Value: ' + obj[key];
}
extractAndConvert({ name: "Max" }, "name");
/*---------------------------------------------------------------------------------------------------*/
// L99: Generic Classes
class DataStorage1 {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage1();
textStorage.addItem("Hello");
textStorage.addItem("World");
textStorage.removeItem("Hello");
console.log(textStorage.getItems());
const objectStorage = new DataStorage1();
const maxObj = { name: "Max" };
objectStorage.addItem({ name: "Max" });
objectStorage.addItem(maxObj);
objectStorage.addItem({ name: "Manu" });
objectStorage.removeItem({ name: "Max" }); // will not remove Max obj, because objects are reference data type, so it has different addresses or pointers.
objectStorage.removeItem(maxObj); // will remove the Max obj, because we store the reference of the Max object in a variable so we can use this variable in removing item.
console.log(objectStorage.getItems());
function createCourseGoal(title, description, date) {
    let courseGoal = {}; // Partial Utility Type, that makes all the properties in the type data are optional
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
const readonlyNames = ["Max", "Anna"]; // Readonly Utility Type, that prevents editing in the variable
// readonlyNames.push("Manu"); // xx 
// readonlyNames.pop(); // xx
/*---------------------------------------------------------------------------------------------------*/
// L102: Generic Types vs Union Types
class DataStorage2 {
    constructor() {
        this.data = []; // Array that can have strings, numbers and boolean mixed.
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage2 = new DataStorage2();
textStorage2.addItem("Hello");
textStorage2.addItem("World");
textStorage2.removeItem("Hello");
class DataStorage3 {
    constructor() {
        this.data = []; // Either an array of strings or array of numbers or array of booleans [Prefer to use Generic Type at this case]
    }
    addItem(item) {
        // this.data.push(item); // xx >> can't do this because item maybe string, number or boolean and the data array should contains only one type of strings, numbers or booleans 
    }
    removeItem(item) {
        /*
            if (this.data.indexOf(item) === -1) { // xx >> can't do this because item maybe string, number or boolean and the data array should contains only one type of strings, numbers or booleans
                return;
            }
        */
        // this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
/*
    - Union Types can be great if you want to have a function which you can call with one of these types every time you call it.
    - Generic Types are great if you want to lock in a certain type and use the same type throughout the entire class instance you create.
    - In Generic Types you have to choose once which kind of data yo want to store and then you are only allowed to add that exact type of data.
    - In Union Types you are flexible to have a different type with every method call.
*/
/*---------------------------------------------------------------------------------------------------*/
/* Section 8: Decorators */
// L105: A First Class Decorator
function Logger1(constructor) {
    console.log('Logging');
    console.log(constructor);
}
let Person2 = class Person2 {
    constructor() {
        this.name = 'Max';
        console.log('Creating person object...');
    }
};
Person2 = __decorate([
    Logger1 // Decorator
], Person2);
const john1 = new Person2();
console.log(john1);
/*---------------------------------------------------------------------------------------------------*/
// L106: Working with Decorator Factories
function Logger2(logString) {
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
let Person3 = class Person3 {
    constructor() {
        this.name = 'Max';
        console.log('Creating person object...');
    }
};
Person3 = __decorate([
    Logger2('Logging') // Factory Decorator 
], Person3);
const john2 = new Person3();
/*---------------------------------------------------------------------------------------------------*/
// Lectures [107 & 108]: (Building More Useful Decorators & Adding Multiple Decorators)
function Logger3(logString) {
    console.log("Logger Factory");
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
function WithTemplate1(template, hookId) {
    console.log("Template Factory 1");
    return function (constructor) {
        console.log("Rendering Template 1");
        const hookEl = document.getElementById(hookId);
        const person = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            const hookElText = hookEl.querySelector('h1').textContent;
            hookEl.querySelector('h1').textContent = hookElText + " is " + person.name;
        }
    };
}
let Person4 = class Person4 {
    constructor() {
        this.name = 'Max';
        console.log('Creating person object 1...');
    }
};
Person4 = __decorate([
    Logger3('Logging') // Factory Decorator
    ,
    WithTemplate1(`<h1>My Person Object 1</h1>`, 'person1') // Factory Decorator
], Person4);
const john3 = new Person4();
/*
    - The order of the decorators is important, because the decorators will be executed from the bottom to the top. so "WithTemplate" Decorator function will be executed before "Logger" Decorator function.
    - The execution of the Factory functions will respect the JavaScript rules so will be executed from the top to the bottom as they are ordered, so the "Logger" Factory function will be executed before the "WithTemplate" Factory function.
    - Outputs:
        > Logger Factory
        > Template Factory
        > Rendering Template
        > Creating person object...
        > Logging
        > [Function: Person4]
        > Creating person object...
*/
/*---------------------------------------------------------------------------------------------------*/
// Lectures [109, 110 & 111]: (Diving into Property Decorators, Accessor & Parameter Decorators & When Do Decorators Execute?)
function Log1(target, propertyName) {
    console.log('Property Decorator!');
    console.log(target, propertyName); // prototype of the class {}, "title"
}
function Log2(target, name, descriptor) {
    console.log('Accessor Decorator!');
    console.log(target, name, descriptor); // prototype of the class {}, "price", set price()
}
function Log3(target, name, descriptor) {
    console.log('Method Decorator!');
    console.log(target, name, descriptor); // prototype of the class {}, "getPriceWithTax", getPriceWithTax()
}
function Log4(target, name, position) {
    console.log('Parameter Decorator!');
    console.log(target, name, position);
}
class Product {
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error('Invalid price - should be positive!');
        }
    }
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log1 // Property Decorator
], Product.prototype, "title", void 0);
__decorate([
    Log2 // Accessor Decorator 
], Product.prototype, "price", null);
__decorate([
    Log3 // Method Decorator
    ,
    __param(0, Log4)
], Product.prototype, "getPriceWithTax", null);
/*
    >> Property Decorators:
        - Property decorators are used to modify properties directly within a class.
        - They are declared immediately before a property declaration.
        - They receive two parameters: the "target" which is: (the prototype of the object that was created or the constructor function if we had a static property in the class) and the "property name".
        - Property decorators are commonly used to add metadata to properties or to perform some action when the property is accessed or assigned.

    >> Accessor Decorators:
        - Accessor decorators are used to modify accessor methods (get and set) for a property.
        - They are declared immediately before an accessor declaration (get or set).
        - They receive three parameters: the "target" which is: (the prototype of the object that was created or the constructor function if we had a static property in the class), the "accessor name", and the "property descriptor".
        - Accessor decorators allow you to intercept and modify the behavior of property access and assignment.

    >> Method Decorators:
        - Method decorators are used to modify methods within a class.
        - They are declared immediately before a method declaration.
        - Method decorators receive three parameters: the "target" which is: (the prototype of the object that was created or the constructor function if we had a static property in the class), the "method name", and the "property descriptor".
        - They can be used to add metadata to methods, modify their behavior, or perform actions before or after method invocation.

    >> Parameter Decorators:
        - Parameter decorators are used to modify parameters within a method or constructor.
        - They are declared immediately before a parameter declaration within a method or constructor.
        - Parameter decorators receive three parameters: the "target" which is: (the prototype of the object that was created or the constructor function if we had a static property in the class), the "method name", and the "parameter index".
        - They are often used to add metadata to parameters or to perform actions based on the parameter values.

    . In summary, each type of the above decorators serves a specific purpose in TypeScript and it is used inside the class:
        - Property decorators modify properties.
        - Accessor decorators modify accessor methods (get and set) for properties.
        - Method decorators modify methods.
        - Parameter decorators modify parameters within methods or constructors.

    . Decorators are running without needing to instantiating the class, they are executing when you defined the class.
      These are not decorators that run at run time when you call them or when you work with a property, this is not what they do.
      Instead these decorators allow you to do additional works behind the scenes when a class is defined.
*/
/*---------------------------------------------------------------------------------------------------*/
// L112: Returning (and changing) a Class in a Class Decorator
function WithTemplate2(template, hookId) {
    console.log("Template Factory 2");
    return function (originalConstructor) {
        return class extends originalConstructor {
            constructor(..._) {
                super();
                console.log("Rendering Template 2");
                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    const hookElText = hookEl.querySelector('h1').textContent;
                    hookEl.querySelector('h1').textContent = hookElText + " is " + this.name;
                }
            }
        };
    };
}
let Person5 = class Person5 {
    constructor() {
        this.name = 'Max';
        console.log('Creating person object 2...');
    }
};
Person5 = __decorate([
    WithTemplate2("<h1>My Person Object 2</h1>", 'person2') // Factory Decorator
], Person5);
const john4 = new Person5(); // We should instantiate the class, in case we return something in the decorator function
/*---------------------------------------------------------------------------------------------------*/
// L114: Example: Creating an "Autobind" Decorator
function Autobind(_, _2, descriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
            /*
                - (this) refers to whatever is responsible for triggering this getter method,
                  and the getter method will be triggered by the concrete object to which it belongs,
                  so (this) inside of the getter method will always refer to the object on which we defined the getter.
            */
        }
    };
    return adjDescriptor;
}
class Printer {
    constructor() {
        this.message = 'This works!';
    }
    showMessage1() {
        console.log(this.message);
    }
    showMessage2() {
        console.log(this.message);
    }
}
__decorate([
    Autobind
], Printer.prototype, "showMessage2", null);
const printer = new Printer();
printer.showMessage1(); // This works!
const printerButton1 = document.querySelector('.button1');
printerButton1.addEventListener('click', printer.showMessage1); // undefined
printerButton1.addEventListener('click', printer.showMessage1.bind(printer)); // This works!
printer.showMessage2(); // This works!
const printerButton2 = document.querySelector('.button2');
printerButton2.addEventListener('click', printer.showMessage2); // This works!
printerButton2.addEventListener('click', printer.showMessage2.bind(printer)); // This works!
const registeredValidators = {};
function Required(target, propName) {
    var _a, _b;
    registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [propName]: [...((_b = (_a = registeredValidators[target.constructor.name]) === null || _a === void 0 ? void 0 : _a[propName]) !== null && _b !== void 0 ? _b : []), 'required'] });
}
function PositiveNumber(target, propName) {
    var _a, _b;
    registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [propName]: [...((_b = (_a = registeredValidators[target.constructor.name]) === null || _a === void 0 ? void 0 : _a[propName]) !== null && _b !== void 0 ? _b : []), 'positive'] });
}
function validate(obj) {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objValidatorConfig) {
        return true;
    }
    let isValid = true;
    for (const prop in objValidatorConfig) {
        for (const validator of objValidatorConfig[prop]) {
            switch (validator) {
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;
                case 'positive':
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }
    return isValid;
}
class Course {
    constructor(t, p) {
        this.title = t;
        this.price = p;
    }
}
__decorate([
    Required
], Course.prototype, "title", void 0);
__decorate([
    PositiveNumber
], Course.prototype, "price", void 0);
const courseForm = document.querySelector('form');
courseForm.addEventListener('submit', event => {
    event.preventDefault();
    const titleEl = document.getElementById('title');
    const priceEl = document.getElementById('price');
    const title = titleEl.value;
    const price = +priceEl.value;
    const createdCourse = new Course(title, price);
    if (!validate(createdCourse)) {
        console.log(registeredValidators);
        alert("Invalid input, please try again!");
        return;
    }
    console.log(createdCourse);
});
/*---------------------------------------------------------------------------------------------------*/
//# sourceMappingURL=index.js.map