//VARIABLES
const grid = document.getElementById("grid");



for (let i = 1; i <= 100; i++) {

    let value = "";
    let cssClass = "";

    if (i % 3 === 0 && i % 5 === 0) {
        value = "FizzBuzz";
        cssClass = "fizzbuzz";
    } else if (i % 3 === 0) {
        value = "Fizz";
        cssClass = "fizz";
    } else if (i % 5 === 0) {
        value = "Buzz";
        cssClass = "buzz";
    } else {
        value = i;
        cssClass = "number";
    }

    const cell = document.createElement("div");
    cell.className = "cell " + cssClass;
    cell.textContent = value;

    grid.appendChild(cell);

}

