/* SECTION [1]: Lecture [4]*/
const input = document.getElementById('input')! as HTMLInputElement; // Exclamation Mark (!) to ensure that the element with the "input" ID will never yield >> (null)
const button = document.getElementById('button')! as HTMLButtonElement;

console.log(input.value);

function add(num: number) {
    return num + 5;
}

button.addEventListener("click", function() {
    console.log(add(+input.value));
})

