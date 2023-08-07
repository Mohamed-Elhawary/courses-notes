/*SECTION [1]: Lecture [4]*/
const input = document.getElementById('number')! as HTMLInputElement; // Exclamation Mark (!) to ensure that the element with the "input" ID will never yield >> (null)
const button = document.getElementById('button')! as HTMLButtonElement;

function add(num: number) {
    return num + 5;
}

button.addEventListener("click", function() {
    console.log(add(+input.value));
});


/*SECTION [2]: Lecture [11]*/
function collect(n1: number, n2: number): number {
    return n1 + n2;
}

const number1 = 5.2;
const number2 = 3;

console.log(collect(number1, number2));

/*SECTION [2]: Lecture [12]*/
// > The Key difference between JS & TS is [JS uses dynamic types that are resolved at runtime], but [TS uses static types that are resolved during development mode]

/*SECTION [2]: Lecture [15]*/
// Type Assignment
let numberAss: number;
numberAss = 5;

// Type Inference [Best Practice & better syntax]
let numberInf = 5; // === let numberInf: number = 5; but we don't have to assign the type explicitly here as well like the above example, cause this type now rely on type inference

/*SECTION [2]: Lecture [16]*/
// Object Type Assignment
const objectAss: {
    name: string;
    age: number;
} = {
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
let arrAss: string[] = ["sports", "driving"];

// Array Type Inference [Best Practice & better syntax]
let arrInf = ["swim", "watch movies"];

/*SECTION [2]: Lecture [19]*/
let tupleArray: [number, string] = [12, "admin"]; // This is a [Tuple] type, it is a normal array but has fixed length and fixed types of elements that can't not be changed

// tupleArray[1] = 10; xx >> will catch an error
// tupleArray = [15, "author", "admin"]; xx >> will catch an error
// tupleArray.push("author"); >> TypeScript can't detect [push] method as it increases the array fixed length, so it allows us to use it with tuples normally, [This is an issue in the compiler itself]

/*SECTION [2]: Lecture [20]*/
// Automatically enumerated global constant identifiers, starting from Zero based index.
enum Role {
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

/*SECTION [2]: Lecture [21]*/
const anyType: any = "string"; // Any kind of value, no specific type assignment, you can use it as a fallback if you have some value or some kind of data where you really can't know which kind of data will be stored in there.

/*SECTION [2]: Lecture [22]*/
const unionType: string | number | boolean = "string"; // Union Type

/*SECTION [2]: Lecture [23]*/
function literalType(result: "as-number" | "as-string") { // This is the Literal Type combined with union type together, so (result) here has specific literal types you choose, either "as-number" or "as-string" ONLY.
    if(result === "as-number") {
        console.log("number");
    } else {
        console.log("string")
    }
}

/*SECTION [2]: Lecture [24]*/
type AliasStringWithNumber = string | number; // Alias

const value: AliasStringWithNumber = 15;

// Type aliases can be used to "create" your own types. You're not limited to storing union types though - you can also provide an alias to a (possibly complex) object type. For example:

type User = { name: string; age: number };

const u1: User = { name: 'Max', age: 30 }; // this works!

// This allows you to avoid unnecessary repetition and manage types centrally. For example, you can simplify this code:

function greet1(user: { name: string; age: number }) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder1(user: { name: string; age: number }, checkAge: number) {
  return checkAge > user.age;
}

// To:
 
function greet2(user: User) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder2(user: User, checkAge: number) {
  return checkAge > user.age;
}

/*SECTION [2]: Lecture [26]*/
// Function Type Assignment
function funAss(n1: number, n2: number): number {
    return n1 + n2;
}

// Function Type Inference [Best Practice & better syntax]
function funInf(n1: number, n2: number) {
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

/*SECTION [2]: Lecture [27]*/
let funcTypeLessPrecise: Function; // This is good but not perfect, we say this should be a function, but it could also more precise to define the functions inputs and outputs type

funcTypeLessPrecise = funInf;
funcTypeLessPrecise = funVoid;
// funcTypeLessPrecise = 5; xx

let funcTypeMorePrecise: (n1: number, n2: number) => number; // Function Type define the parameters and return type of a function

funcTypeMorePrecise = funInf;
// funcTypeMorePrecise = funVoid; xx
// funcTypeMorePrecise = 5; xx

/*SECTION [2]: Lecture [28]*/
function addAndHandle(n1: number, n2 : number, cb: (num: number) => void) { // Function Callback
    const result = n1 + n2;
    cb(result);
}

// Callback functions can return something, even if the argument on which they're passed does NOT expect a returned value, see below example for more details:

addAndHandle(10, 20, (result) => {
    console.log(result);
    return result;
})

/*SECTION [2]: Lecture [29]*/
let userInput: unknown;

let userName: string;

userInput = 5;
userInput = "Max";

// userName = userInput; xx

if (typeof userInput === "string") { // we will have to use extra check to make sure that what you want to do can be done.
    userName = userInput;
}

let userInput2: any;

let userName2: string;

userInput2 = 5;
userInput2 = "Max";

userName2 = userInput2; // No problem with [any] type, so unknown is a bit more restrict than any

/*SECTION [2]: Lecture [30]*/
function generateError(msg: string, code: number): never { // never type function, is a function that doesn't return anything, like functions that throw an error or function that handle an infinite loop. 
    throw { message: msg, errorCode: code };
    // throw new Error()
    // while () {}
}

/*SECTION [5]: Lecture [59, 61, 62, 66, 67, 68]*/
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
    get mostRecentReport(): any { //getter to get private property
        if(this.lastReport) {
            return this.lastReport;
        } else {
            console.log("No report found");
        }
    }
    set mostRecentReport(report: string) { //setter to set private property
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
    constructor(id: string, public admins: string[]) {
        super("IT", id);
    }
    addAdmin(admin: string ): void {
        this.admins.push(admin)
    }
    /* addEmployee(employee: string): void {
        this.employees.push(employee);
    } */ // can't be accessible in the inheritance class that extends from the parent class [Department Class] because we use private modifier with the employees property
    addReport(report: string): void {
        this.reports.push(report); // can be accessible in the inheritance class that extends from the parent class [Department Class] because we use protected modifier with the reports property
    }
}

const it = new ITDepartment("25", ["Max"]);

console.log(it);

/*SECTION [5]: Lecture [69]*/
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

/*SECTION [5]: Lecture [70]*/
// Singletons Pattern: This pattern is used to prevent creating more than one instance of a certain singleton class, will ensure that the class has one only instance, we have to use private modifier with inherited class constructor
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

/*SECTION [5]: Lecture [72, 73, 75, 76]*/
// Interface describes the structure of an object, and how it looks like. 
// Interface is same as (type) but type is more flexible because we can store other things like union types in the (type).
// Interface can't own any implementation through it, it has only a structure.
// Interface can't be used in runtime, because JS doesn't support interfaces.
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

userOne = new Person("User");

// userOne.name = "Manu";

/*SECTION [5]: Lecture [77]*/
//type AddFn = (a: number) => number;

interface AddFn {
    (a: number): number;
}

let addNumber: AddFn;

addNumber = (n: number) => {
    return n;
}

/*SECTION [6]: Lecture [83]*/
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

const member: CompanyManagerMember = {
    name: "Admin",
    role: 0,
    age: 3,
    position: "Head Manager",
}

/*SECTION [6]: Lecture [84, 88]*/
type Combine = number | string;
type Numeric = number;

type Universal = Combine & Numeric;

function concat(a: number, b: number): number; // Function Overload in case of 2 parameters are numbers
function concat(a: string, b: string): string; // Function Overload in case of 2 parameters are strings
function concat(a: string, b: number): string; // Function Overload in case of first parameter is string and second parameter is number
function concat(a: number, b: string): string; // Function Overload in case of first parameter is number and second parameter is string

function concat(a: Combine, b: Combine) {
    if(typeof a === "string" || typeof b === "string") { // Type Guard
        return a.toString() + b.toString();
    } else {
        return a + b;
    }
}

const result = concat("Hawary", " Frontend");

result.split(" "); // We need here to add function overloads that define the return cases types of concat function. [as we add them above before the implementation of concat function]

type UnknownMember = Admin | Employee;

function printComapanyMemeber(compMember: UnknownMember) {
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

/*SECTION [6]: Lecture [85]*/
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
    let speed;
    switch(animal.type) {
        case("bird"):
            console.log(animal.flyingSpeed);
            break; 
        case("horse"):
            console.log(animal.runningSpeed);
            break; 
    }
}

/*SECTION [6]: Lecture [86]*/
// const inputElement = <HTMLInputElement>document.getElementById("user-input")!; >> Option ONE for Type Casting
const inputElement = document.getElementById("user-input")! as HTMLInputElement; // >> Option TWO for Type Casting
inputElement.value = "value";

//Note: we add exclamation mark above if we are sure that this element will not be equal to "null" but if we aren't sure so we have to add "if" check like below example 
const inputElement2 = document.getElementById("user-input");

if(inputElement2) {
    (inputElement2 as HTMLInputElement).value = "value";
}

/*SECTION [6]: Lecture [87]*/

/*
    >> Index Properties give us the flexibility in our interface, so we don't need to know in advance which property names
    we want to use and how many properties we need in this interface, see below example for more information:
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

/*SECTION [6]: Lecture [90]*/
const userInputValue = "";

const storedData = userInputValue ?? "Default"; // This is called Nullish Coalescing that checks if the variable value equals to [NULL or undefined] only, Empty string here is treated here as truthy value.

console.log(storedData);