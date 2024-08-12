/* Section 1: Getting Started */

// L4: Installing & Using TypeScript

const input = document.getElementById('number')! as HTMLInputElement; // Exclamation Mark (!) to ensure that the element with the "input" ID will never yield >> (null)
const button = document.getElementById('button')! as HTMLButtonElement;

function add(num: number) {
    return num + 5;
}

button.addEventListener("click", function() {
    console.log(add(+input.value));
});

/*---------------------------------------------------------------------------------------------------*/

/* Section 2: TypeScript Basics & Basic Types */

// L11: Using Types

function collect(n1: number, n2: number): number {
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

let numberAss: number; // Type Assignment
numberAss = 5;

let numberInf = 5; // Type Inference [Best Practice & better syntax] === let numberInf: number = 5; but we don't have to assign the type explicitly here as well like the above example, cause this type now rely on type inference

/*---------------------------------------------------------------------------------------------------*/

// L16: Object Types

const objectAss: { // Object Type Assignment
    name: string;
    age: number;
} = {
    name: "hawary",
    age: 27,
};

const objectInf = { // Object Type Inference [Best Practice & better syntax]
    name: "hawary",
    age: 27,
};

/*---------------------------------------------------------------------------------------------------*/

// L18: Arrays Types

let arrAss: string[] = ["sports", "driving"]; // Array Type Assignment

let arrInf = ["swim", "watch movies"]; // Array Type Inference [Best Practice & better syntax]

/*---------------------------------------------------------------------------------------------------*/

// L19: Working with Tuples

let tupleArray: [number, string] = [12, "admin"]; // This is a [Tuple] type, it is a normal array but has fixed length and fixed types of elements that can't not be changed

/* 
    - tupleArray[1] = 10; // xx >> will catch an error
    - tupleArray = [15, "author", "admin"]; // xx >> will catch an error
    - tupleArray.push("author"); // xx >> TypeScript can't detect [push] method as it increases the array fixed length, so it allows us to use it with tuples normally, [This is an issue in the compiler itself]
*/

/*---------------------------------------------------------------------------------------------------*/

// L20: Working with Enums

enum Role { // Automatically enumerated global constant identifiers, starting from Zero based index.
    ADMIN,
    AUTHOR,
    USER,
}

enum Type {
    GAME = 100,
    LOGIC,
    FUN = "Movies",
}

console.log(Role.ADMIN, Type.FUN);

/*---------------------------------------------------------------------------------------------------*/

// L21: The "any" Type

const anyType: any = "string"; // Any kind of value, no specific type assignment, you can use it as a fallback if you have some value or some kind of data where you really can't know which kind of data will be stored in there.

/*---------------------------------------------------------------------------------------------------*/

// L22: Union Types

const unionType: string | number | boolean = "string"; // Union Type

/*---------------------------------------------------------------------------------------------------*/

// L23: Literal Types

function literalType(result: "as-number" | "as-string") { // This is the Literal Type combined with union type together, so (result) here has specific literal types you choose, either "as-number" or "as-string" ONLY.
    if(result === "as-number") {
        console.log("number");
    } else {
        console.log("string")
    }
}

literalType("as-number");
literalType("as-string");
// literalType("as-text"); // xx

/*---------------------------------------------------------------------------------------------------*/

// L24: Type Aliases / Custom Types

type AliasStringWithNumber = string | number; // Alias

const value: AliasStringWithNumber = 15;

/* 
    - Type aliases can be used to "create" your own types. 
    - You're not limited to storing union types though, you can also provide an alias to a (possibly complex) object type.
*/

type User = { name: string; age: number };

const u1: User = { name: 'Max', age: 30 }; // this works!

function greet1(user: { name: string; age: number }) { 
  console.log('Hi, I am ' + user.name);
}
 
function isOlder1(user: { name: string; age: number }, checkAge: number) {
  return checkAge > user.age;
}
 
function greet2(user: User) { // This allows you to avoid unnecessary repetition and manage types centrally
  console.log('Hi, I am ' + user.name);
}
 
function isOlder2(user: User, checkAge: number) { // This allows you to avoid unnecessary repetition and manage types centrally
  return checkAge > user.age;
}

/*---------------------------------------------------------------------------------------------------*/

// L26: Function Return Types & "void"

function funAss(n1: number, n2: number): number { // Function Type Assignment
    return n1 + n2;
}

function funInf(n1: number, n2: number) { // Function Type Inference [Best Practice & better syntax]
    return n1 + n2;
}

function funReturn(num: number) { // return type function
    return num;
}

function funVoid(num: number): void { // void type function, has no return statement, instead it returns "undefined" by default
    console.log(num);
}

funVoid(3); // 3

console.log(funVoid(3)); // undefined

/*---------------------------------------------------------------------------------------------------*/

// L27: Functions as Types

let funcTypeLessPrecise: Function; // This is good but not perfect, we say this should be a function, but it could also more precise to define the functions inputs and outputs type

funcTypeLessPrecise = funInf;
funcTypeLessPrecise = funVoid;
// funcTypeLessPrecise = 5; // xx

let funcTypeMorePrecise: (n1: number, n2: number) => number; // Function Type define the parameters and return type of a function

funcTypeMorePrecise = funInf;

/*
    - funcTypeMorePrecise = funVoid; // xx
    - funcTypeMorePrecise = 5; // xx
*/

/*---------------------------------------------------------------------------------------------------*/

// L28: Functions Types & Callbacks

function addAndHandle(n1: number, n2 : number, cb: (num: number) => void) { // Function Callback
    const result = n1 + n2;
    cb(result);
}

addAndHandle(10, 20, (result) => { // Callback functions can return something, even if the argument on which they're passed does NOT expect a returned value
    console.log(result);
    
    return result;
})

/*---------------------------------------------------------------------------------------------------*/

// L29: The "unknown" Type

let userInput: unknown;

let userName: string;

userInput = 5;
userInput = "Max";
// userName = userInput; // xx

if (typeof userInput === "string") { // we will have to use extra check to make sure that what you want to do can be done.
    userName = userInput;
}

let userInput2: any;

let userName2: string;

userInput2 = 5;
userInput2 = "Max";
userName2 = userInput2; // No problem with [any] type, so unknown is a bit more restrict than any

/*---------------------------------------------------------------------------------------------------*/

// L30: The "never" Type

function generateError(msg: string, code: number): never { // never type function, is a function that doesn't return anything, like functions that throw an error or function that handle an infinite loop. 
    throw { message: msg, errorCode: code };
    // throw new Error()
    // while () {}
}

/*---------------------------------------------------------------------------------------------------*/

/* Section 5: Classes & Interfaces */

// Lectures [59, 61, 62, 63, 64, 66, 67, 68]: (Classes)

class Department {
    // public name: string;
    // public readonly id: string;
    private employees: string[] = [];
    protected reports: string[] = [];
    private lastReport: string;
    static fiscalYear: number = 2020;
    // constructor(n: string) {
    constructor(public name: string, public readonly id: string) { // shorthand code
        // this.name = n;
        this.lastReport = this.reports[0]
    }
    get mostRecentReport(): any { // getter to get private property
        if(this.lastReport) {
            return this.lastReport;
        } else {
            console.log("No report found");
        }
    }
    set mostRecentReport(report: string) { // setter to set private property
        if(!report) {
            console.log("Please add a valid value");
        } else {
            this.addReport(report);
            this.lastReport = report;
        }
    }
    describe() {
        console.log("Department", this.name);
    }
    static addYear(year: number) { // static methods & properties can't be accessible with "this" keyword, you have to use the class name itself to access it >> Department.addYear(), Department.facialYear()
        Department.fiscalYear = year;
    }
    addEmployee(employee: string) {
        this.employees.push(employee); 
    }
    addReport(report: string) {
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

// static methods & properties can be accessible without needing to initialize an instance of the class, you can access it from the class itself
console.log(Department.addYear(2021)); 
console.log(Department.fiscalYear);

const accounting = new Department( "Accounting", "s2" );

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
    constructor(id: string, public admins: string[]) {
        super("IT", id);
    }
    addAdmin(admin: string ): void {
        this.admins.push(admin)
    }
    /* addEmployee(employee: string): void { // can't be accessible in the inheritance class that extends from the parent class [Department Class] because we use private modifier with the employees property
        this.employees.push(employee);
    } */ 
    addReport(report: string): void { // can be accessible in the inheritance class that extends from the parent class [Department Class] because we use protected modifier with the reports property
        this.reports.push(report); 
    }
}

const it = new ITDepartment("25", ["Max"]);

console.log(it);

/*---------------------------------------------------------------------------------------------------*/

// L69: Abstract Classes

abstract class Human { // class that has abstract modifier, can't be instantiated or take instances from its structure, should be extended only.
    constructor(public name: string) {}
    abstract describe(): void; // methods that have abstract modifier can't have an implementation in the base parent class but it MUST have implementation in the inheritance classes that extend from the base class
}

class Man extends Human {
    constructor(name: string) {
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
    constructor(public name: string) {}
}

class Dog extends Animal {
    private static instance: Dog;
    private constructor(name: string) {
        super(name);
    }
    static getInstance() {
        if(Dog.instance) {
            return this.instance;
        } 
        this.instance = new Dog("Nani");
        return this.instance;
    }
}

// const dog = new Dog(); xx
const dog = Dog.getInstance();

console.log(dog);

/*---------------------------------------------------------------------------------------------------*/

// Lectures [72, 73, 74,75, 76]: (Interfaces)

/* 
    - Interface describes the structure of an object, and how it looks like. 
    - Interface is same as (type) but type is more flexible because we can store other things like union types in the (type).
    - Interface can't own any implementation through it, it has only a structure.
    - Interface can't be used in runtime, because JS doesn't support interfaces.
*/

interface UserLocation {
    location: string;
}
interface Name {
    readonly name: string;
    outputName?: string; // optional
}

interface Greetable extends Name {
    age: number;

    greet(word: string): void;
}

class Person implements Greetable, UserLocation {
    name: string;
    outputName?: string; // optional
    location: string = "Cairo";
    age = 30;
    constructor(n: string, outputName?: string) {
        this.name = n;
        if(outputName) {
            this.outputName = outputName;
        }
    }

    greet(word: string) {
        if(this.outputName) {
            console.log(word + this.name + this.outputName);
        } else {
            console.log(word + this.name);
        }
    }
}

let userOne: Greetable;

// userOne.name = "Manu"; // xx >> because "name" is a readonly property

userOne = new Person("User");

/*---------------------------------------------------------------------------------------------------*/

// L77: Interfaces as Function Type

// type AddFn = (a: number) => number;

interface AddFn {
    (a: number): number;
}

let addNumber: AddFn;

addNumber = (n: number) => {
    return n;
}

/* Section 6: Advanced Types */

// L83: Intersection Types

type Admin = {
    name: string;
    role: number;
}

type Employee = {
    name: string;
    age: number;
    position: string;
}

type CompanyManagerMember = Admin & Employee; // Intersection Type.


// Another way to do the same effect using interfaces instead of types.
interface Admin2 {
    name: string;
    role: number;
}

interface Employee2 {
    age: number;
    position: string;
}

interface CompanyManagerMember2 extends Admin2, Employee2 {}

const member: CompanyManagerMember = {
    name: "Admin",
    role: 0,
    age: 3,
    position: "Head Manager",
}

/*---------------------------------------------------------------------------------------------------*/

// L84: Type Guards 

type Combine = number | string;
type Numeric = number;

type Universal = Combine & Numeric;

function concat1(a: Combine, b: Combine) {
    if(typeof a === "string" || typeof b === "string") { // Type Guard
        return a.toString() + b.toString();
    } else {
        return a + b;
    }
}

type UnknownMember = Admin | Employee;

function printCompanyMember(compMember: UnknownMember) {
    console.log("name: " + compMember.name);

    if("role" in compMember) { // Type Guard
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

    loadCargo(amount: number) {
        console.log("loading cargo", amount);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();

    if(vehicle instanceof Truck) { // Type Guard
        vehicle.loadCargo(1000);
    }
}

useVehicle(v1);
useVehicle(v2);

/*---------------------------------------------------------------------------------------------------*/

// L85: Discriminated Unions
interface Bird {
    type: "bird", // Discriminated Union [To avoid misspelling and typos] as we can use it to check with it in the switch case statements like below
    flyingSpeed: number,
}

interface Horse {
    type: "horse", // Discriminated Union [To avoid misspelling and typos] as we can use it to check with it in the switch case statements like below
    runningSpeed: number,
}

type BigAnimal = Bird | Horse;

function moveAnimal(animal: BigAnimal) {
    // if (animal instanceof Bird) >> will not work because "Bird" is an Interface not Class, which is not compiled to JavaScript
    switch(animal.type) {
        case("bird"):
            console.log(animal.flyingSpeed);
            break; 
        case("horse"):
            console.log(animal.runningSpeed);
            break; 
    }
}

moveAnimal({ type: "bird", flyingSpeed: 10 });

/*---------------------------------------------------------------------------------------------------*/

// L86: Type Casting

const inputElement1 = <HTMLInputElement>document.getElementById("user-input")!; // Option ONE for Type Casting

const inputElement2 = document.getElementById("user-input")! as HTMLInputElement; // Option TWO for Type Casting

inputElement2.value = "value";

/*
    -  We add exclamation mark above if we are sure that this element will not be equal to "null",
       but if we aren't sure so we have to add "if" check like the example below.
*/

const inputElement3 = document.getElementById("user-input");

if(inputElement3) {
    (inputElement3 as HTMLInputElement).value = "value";
}

/*---------------------------------------------------------------------------------------------------*/

// L87: Index Properties

/*
    -  Index Properties give us the flexibility in our interface, so we don't need to know in advance which property names
       we want to use and how many properties we need in this interface.
*/

interface ErrorContainer {
    id: string, // MUST be a string because we define that each index property in this interface has a string value.
    [prop: string]: string; // Index Property
}

const errorObj: ErrorContainer = {
    id: "1",
    email: "invalid email",
    name: "invalid name",
}

/*---------------------------------------------------------------------------------------------------*/

// L88: Function Overloads

function concat2(a: number, b: number): number; // Function Overload in case of 2 parameters are numbers
function concat2(a: string, b: string): string; // Function Overload in case of 2 parameters are strings
function concat2(a: string, b: number): string; // Function Overload in case of first parameter is string and second parameter is number
function concat2(a: number, b: string): string; // Function Overload in case of first parameter is number and second parameter is string

function concat2(a: Combine, b: Combine) {
    if(typeof a === "string" || typeof b === "string") { // Type Guard
        return a.toString() + b.toString();
    } else {
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

console.log(fetchedUserData?.job?.title);

/*---------------------------------------------------------------------------------------------------*/

// L90: Nullish Coalescing

const userInputValue1 = "";

const userInputValue2 = null;

const storedData1 = userInputValue1 || "Default"; 

const storedData2 = userInputValue1 ?? "Default"; // This is called Nullish Coalescing that checks if the variable value equals to [NULL or undefined] only, Empty string here is treated here as truthy value.

const storedData3 = userInputValue2 || "Default"; 

const storedData4 = userInputValue2 ?? "Default"; // This is called Nullish Coalescing that checks if the variable value equals to [NULL or undefined] only, Empty string here is treated here as truthy value.

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

const names: Array<string> = ['John', 'Alice']; // Built-in Generic Type === const names: string[] = ['John', 'Alice'];

const promise: Promise<string> = new Promise((resolve, reject) => { // Built-in Generic Type
    setTimeout(() => {
        resolve('This is done!');
    }, 2000);
});

promise.then(data => {
    data.split(' ');
});

/*---------------------------------------------------------------------------------------------------*/

// L95: Creating a Generic Function 

function merge<T, U>(objA: T, objB: U) { // Generic Function
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

function merge2<T extends object, U extends object>(objA: T, objB: U) { // Generic Function
    //@ts-ignore
    return Object.assign(objA, objB); 
}

// const mergedObj2 = merge2({ name: 'Max' }, 30); // xx

const mergedObj2 = merge2({ name: 'Max' }, { age: 30 });

console.log(mergedObj2.age); // 30

/*---------------------------------------------------------------------------------------------------*/

// L97: Another Generic Function

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] { // Generic Function
    let descriptionText = 'Got no value.';
    if (element.length === 1) {
        descriptionText = 'Got 1 element.';
    } else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
}

/*---------------------------------------------------------------------------------------------------*/

// L98: The "keyof" Constraint

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) { // Generic Function
    return 'Value: ' + obj[key];
}

extractAndConvert({ name: "Max" }, "name");

/*---------------------------------------------------------------------------------------------------*/

// L99: Generic Classes

class DataStorage1<T extends string | number | boolean | object> { // Generic Class
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        if (this.data.indexOf(item) === -1) {
            return;
        }

        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage1<string>();  

textStorage.addItem("Hello");
textStorage.addItem("World");
textStorage.removeItem("Hello");

console.log(textStorage.getItems());

const objectStorage = new DataStorage1<object>();

const maxObj = { name: "Max" };

objectStorage.addItem({ name: "Max" });
objectStorage.addItem(maxObj);
objectStorage.addItem({ name: "Manu" });
objectStorage.removeItem({ name: "Max" }); // will not remove Max obj, because objects are reference data type, so it has different addresses or pointers.
objectStorage.removeItem(maxObj); // will remove the Max obj, because we store the reference of the Max object in a variable so we can use this variable in removing item.

console.log(objectStorage.getItems());

/*---------------------------------------------------------------------------------------------------*/

// L101: Generic Utility Types

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {}; // Partial Utility Type, that makes all the properties in the type data are optional
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;

    return courseGoal as CourseGoal;
}

const readonlyNames: Readonly<string[]> = ["Max", "Anna"]; // Readonly Utility Type, that prevents editing in the variable

// readonlyNames.push("Manu"); // xx 

// readonlyNames.pop(); // xx

/*---------------------------------------------------------------------------------------------------*/

// L102: Generic Types vs Union Types

class DataStorage2 { 
    private data: (string | number | boolean)[] = []; // Array that can have strings, numbers and boolean mixed.

    addItem(item: string | number | boolean) {
        this.data.push(item);
    }

    removeItem(item: string | number | boolean) {
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
    private data: string[] | number[] | boolean[] = []; // Either an array of strings or array of numbers or array of booleans [Prefer to use Generic Type at this case]

    addItem(item: string | number | boolean) {
        // this.data.push(item); // xx >> can't do this because item maybe string, number or boolean and the data array should contains only one type of strings, numbers or booleans 
    }

    removeItem(item: string | number | boolean) {
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

function Logger1(constructor: Function) { // Decorator Function >> The "constructor" argument in the decorator function is the constructor function of the class that the decorator is attached to. (Default Argument) 
    console.log('Logging');

    console.log(constructor);
}

@Logger1 // Decorator

class Person2 {
    name = 'Max';

    constructor() {
        console.log('Creating person object...');
    }
}

const john1 = new Person2();

console.log(john1);

/*---------------------------------------------------------------------------------------------------*/

// L106: Working with Decorator Factories

function Logger2(logString: string) { // Factory Function >> use it if you need to pass more arguments to the decorator beside the "constructor"
    return function(constructor: Function) { // Decorator Function
        console.log(logString);
        
        console.log(constructor);
    }
}

@Logger2('Logging') // Factory Decorator 

class Person3 {
    name = 'Max';

    constructor() {
        console.log('Creating person object...');
    }
}

const john2 = new Person3();

/*---------------------------------------------------------------------------------------------------*/

// Lectures [107 & 108]: (Building More Useful Decorators & Adding Multiple Decorators)

function Logger3(logString: string) { // Factory Function
    console.log("Logger Factory");

    return function(constructor: Function) { // Decorator Function
        console.log(logString);
        
        console.log(constructor);
    }
}

function WithTemplate1(template: string, hookId: string) { // Factory Function
    console.log("Template Factory 1");

    return function(constructor: any) { // Decorator Function
        console.log("Rendering Template 1");

        const hookEl = document.getElementById(hookId);
        
        const person = new constructor();
        
        if(hookEl) {
            hookEl.innerHTML = template;

            const hookElText = hookEl.querySelector('h1')!.textContent;

            hookEl.querySelector('h1')!.textContent = hookElText + " is " + person.name;
        }
    }
}

@Logger3('Logging') // Factory Decorator
@WithTemplate1(`<h1>My Person Object 1</h1>`, 'person1') // Factory Decorator

class Person4 {
    name = 'Max';

    constructor() {
        console.log('Creating person object 1...');
    }
}

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

function Log1(target: any, propertyName: string) { // Property Decorator Function (Not Accept return types)
    console.log('Property Decorator!');

    console.log(target, propertyName); // prototype of the class {}, "title"
}

function Log2(target: any, name: string | Symbol, descriptor: PropertyDescriptor) { // Accessor Decorator Function (Accept return types)
    console.log('Accessor Decorator!');
    
    console.log(target, name, descriptor); // prototype of the class {}, "price", set price()
}

function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) { // Method Decorator Function (Accept return types)
    console.log('Method Decorator!');
    
    console.log(target, name, descriptor); // prototype of the class {}, "getPriceWithTax", getPriceWithTax()
}

function Log4(target: any, name: string | Symbol, position: number) { // Parameter Decorator Function (Not Accept return types)
    console.log('Parameter Decorator!');

    console.log(target, name, position);

}

class Product { 
    @Log1 // Property Decorator
    title: string;
    private _price: number;

    @Log2 // Accessor Decorator 
    set price(val: number) { // Accessor Method
        if(val > 0) {
            this._price = val;
        } else {
            throw new Error('Invalid price - should be positive!');
        }
    }

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }

    @Log3 // Method Decorator
    getPriceWithTax(@Log4 tax: number) { // Parameter Decorator
        return this._price * (1 + tax);
    }
}

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

function WithTemplate2(template: string, hookId: string) { // Factory Function
    console.log("Template Factory 2");

    return function<T extends { new(...args: any[]): { name: string } }>(originalConstructor: T) { // Decorator Function
        return class extends originalConstructor {
            constructor(..._: any[]) {
                super();
                console.log("Rendering Template 2");

                const hookEl = document.getElementById(hookId);
                
                if(hookEl) {
                    hookEl.innerHTML = template;

                    const hookElText = hookEl.querySelector('h1')!.textContent;

                    hookEl.querySelector('h1')!.textContent = hookElText + " is " + this.name;
                }
            }
        }
    }
}

@WithTemplate2("<h1>My Person Object 2</h1>", 'person2') // Factory Decorator
class Person5 { 
    name = 'Max';

    constructor() {
        console.log('Creating person object 2...');
    }
}

const john4 = new Person5(); // We should instantiate the class, in case we return something in the decorator function

/*---------------------------------------------------------------------------------------------------*/

// L114: Example: Creating an "Autobind" Decorator

function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) { // Decorator Function
    const originalMethod = descriptor.value;

    const adjDescriptor: PropertyDescriptor = {
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
    }

    return adjDescriptor;
}

class Printer {
    message = 'This works!';

    showMessage1() {
        console.log(this.message);
    }

    @Autobind
    showMessage2() {
        console.log(this.message);
    }
}

const printer = new Printer();

printer.showMessage1(); // This works!

const printerButton1 = document.querySelector('.button1')!;

printerButton1.addEventListener('click', printer.showMessage1); // undefined

printerButton1.addEventListener('click', printer.showMessage1.bind(printer)); // This works!


printer.showMessage2(); // This works!

const printerButton2 = document.querySelector('.button2')!;

printerButton2.addEventListener('click', printer.showMessage2); // This works!

printerButton2.addEventListener('click', printer.showMessage2.bind(printer)); // This works!

/*---------------------------------------------------------------------------------------------------*/

// Lectures [115 & 116]: (Validation with Decorators - First Steps & Validation with Decorators - Finished)

interface ValidationConfig {
    [property: string]: {
        [validatableProp: string]: string[]; // ['required', 'positive']
    }
}

const registeredValidators: ValidationConfig = {};

function Required(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'required'],
    }
}

function PositiveNumber(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: [...(registeredValidators[target.constructor.name]?.[propName] ?? []), 'positive'],
    }
}

function validate(obj: any) {
    const objValidatorConfig = registeredValidators[obj.constructor.name];

    if(!objValidatorConfig) {
        return true;
    }

    let isValid = true;

    for(const prop in objValidatorConfig) {
        for(const validator of objValidatorConfig[prop]) {
            switch(validator) {
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
    @Required
    title: string;
    @PositiveNumber
    price: number;

    constructor(t: string, p: number) {
        this.title = t;

        this.price = p;
    }
}

const courseForm = document.querySelector('form')!;

courseForm.addEventListener('submit', event => {
    event.preventDefault();

    const titleEl = document.getElementById('title') as HTMLInputElement;
    const priceEl = document.getElementById('price') as HTMLInputElement;

    const title = titleEl.value;
    const price = +priceEl.value;

    const createdCourse = new Course(title, price);

    if(!validate(createdCourse)) {
        console.log(registeredValidators)

        alert("Invalid input, please try again!");
        return;
    }

    console.log(createdCourse);
});

/*---------------------------------------------------------------------------------------------------*/
