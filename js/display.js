const outputDisplay = document.getElementById("outputDisplay");

const buttons = document.querySelectorAll(".type");
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        // console.log(event.target.textContent);
        outputDisplay.innerHTML += event.target.textContent;
    });
});

const clear = document.querySelector(".clear");
clear.addEventListener('click', (event) => {
    outputDisplay.innerHTML = "";
});