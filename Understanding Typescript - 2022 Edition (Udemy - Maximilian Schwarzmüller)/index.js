/* SECTION [1]: Lecture [4]*/
var input = document.getElementById('number'); // Exclamation Mark (!) to ensure that the element with the "input" ID will never yield >> (null)
var button = document.getElementById('button');
function add(num) {
    return num + 5;
}
console.log("sds");
button.addEventListener("click", function () {
    console.log(add(+input.value));
});
