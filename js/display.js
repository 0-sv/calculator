const outputDisplay = document.getElementById("outputDisplay");

const buttons = document.querySelectorAll(".type");
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        // console.log(event.target.textContent);
        outputDisplay.innerHTML += event.target.textContent;
    });
});

const ops = document.querySelectorAll(".op");
ops.forEach((button) => {
    button.addEventListener('click', function (event) {
        let op = this.id;
        let a = parseInt(outputDisplay.innerHTML);
        outputDisplay.innerHTML = "";

        const evaluate = document.querySelector(".evaluate");
        evaluate.addEventListener('click', (event) => {
            const b = parseInt(outputDisplay.innerHTML);
            outputDisplay.innerHTML = operate(op, a, b).toString(10);
        });
    });
});

const clear = document.querySelector(".clear");
clear.addEventListener('click', (event) => {
    outputDisplay.innerHTML = "";
    evaluation = 0;
});