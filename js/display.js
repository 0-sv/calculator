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
    const answer = myEval(state);
    outputDisplay.innerHTML = answer.toString(10);
    state.push(answer);
});

const clear = document.querySelector(".clear");
clear.addEventListener('click', (event) => {
    state = [];
    outputDisplay.innerHTML = "";
});