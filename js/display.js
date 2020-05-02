const outputDisplay = document.getElementById("outputDisplay");
let state = [];
let op = "";

const buttons = document.querySelectorAll(".type");
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        state.push(event.target.textContent);
        outputDisplay.innerHTML += event.target.textContent;
    });
});

const evaluate = document.querySelector(".evaluate");
evaluate.addEventListener('click', (event) => {
    let first = evaluation = 0;
    while (Array.isArray(state) && state.length !== 0) {
        let top = state.pop();
        if (!isNaN(parseInt(top))) {
            first = parseInt(top);
        }
        else {
            let second = parseInt(state.pop());
            evaluation = operate(top, first, second);
        }
    }
    outputDisplay.innerHTML = evaluation.toString(10);
    state.push(evaluation);
});

const clear = document.querySelector(".clear");
clear.addEventListener('click', (event) => {
    state = [];
    outputDisplay.innerHTML = "";
});