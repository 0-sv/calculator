const add = (a, b) => {
    return a + b;
};

const subtract = (a, b) => {
    return a - b;
};

const multiply = (a, b) => {
    return a * b;
};

const divide = (a, b) => {
    return a / b;
};

const operate = (op, a, b) => {
    switch (op) {
        default:
            break;
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "×":
            return multiply(a, b);
        case "÷":
            return divide(a, b);
    }
}

function myEval (expr) {
    let lhs = result = 0;
    while (Array.isArray(expr) && expr.length !== 0) {
        let top = expr.pop();
        if (!isNaN(parseInt(top))) {
            lhs = parseInt(top);
        }
        else {
            let rhs = parseInt(expr.pop());
            result = operate(top, lhs, rhs);
        }
    }
    return result;
}