/* SECTION [1]: Lecture [4]*/
const input = document.getElementById('number')! as HTMLInputElement; // Exclamation Mark (!) to ensure that the element with the "input" ID will never yield >> (null)
const button = document.getElementById('button')! as HTMLButtonElement;

function add(num: number) {
    return num + 5;
}

button.addEventListener("click", function() {
    console.log(add(+input.value));
});


/* SECTION [2]: Lecture [11]*/
function collect(n1: number, n2: number): number {
    return n1 + n2;
}

const number1 = 5.2;
const number2 = 3;

console.log(collect(number1, number2));

/* SECTION [2]: Lecture [12]*/
// > The Key difference between JS & TS is [JS uses dynamic types that are resolved at runtime], but [TS uses static types that are resolved during development mode]