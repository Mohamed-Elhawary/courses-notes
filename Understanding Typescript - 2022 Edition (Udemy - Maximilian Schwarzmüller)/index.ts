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
// tupleArray.push("author"); >> TypeScript can't detect [push] method as it increases the array fixed length, so it allows us to use it with tuples normally, [This is an issue in the compilier itself]

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