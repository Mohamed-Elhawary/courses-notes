/*SECTION [1]: Lecture [4]*/
var input = document.getElementById('number'); // Exclamation Mark (!) to ensure that the element with the "input" ID will never yield >> (null)
var button = document.getElementById('button');
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
var number1 = 5.2;
var number2 = 3;
console.log(collect(number1, number2));
/*SECTION [2]: Lecture [12]*/
// > The Key difference between JS & TS is [JS uses dynamic types that are resolved at runtime], but [TS uses static types that are resolved during development mode]
/*SECTION [2]: Lecture [15]*/
// Type Assignment
var numberAss;
numberAss = 5;
// Type Inference [Best Practice & better syntax]
var numberInf = 5; // === let numberInf: number = 5; but we don't have to assign the type explicitly here as well like the above example, cause this type now rely on type inference
/*SECTION [2]: Lecture [16]*/
// Object Type Assignment
var person1 = {
    name: "hawary",
    age: 27
};
// Object Type Inference [Best Practice & better syntax]
var person2 = {
    name: "hawary",
    age: 27
};
/*SECTION [2]: Lecture [18]*/
// Array Type Assignment
var hobbies = ["sports", "driving"];
// Array Type Inference [Best Practice & better syntax]
var hobbies2 = ["swim", "watch movies"];
/*SECTION [2]: Lecture [19]*/
var tupleArray = [12, "admin"]; // This is a [Tuple] type, it is a normal array but has fixed length and fixed types of elements that can't not be changed
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
var anyType = "string"; // Any kind of value, no specific type assignment, you can use it as a fallback if you have some value or some kind of data where you really can't know which kind of data will be stored in there.
/*SECTION [2]: Lecture [22]*/
var unionType = "string"; // Union Type
/*SECTION [2]: Lecture [23]*/
function (result) {
    if (result === "number") {
        console.log("number");
    }
    else {
        console.log("string");
    }
}
