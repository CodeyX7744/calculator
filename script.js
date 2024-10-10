let num1 = "";
let num2 = "";
let operator = null;

let input = document.querySelector(".inputDisplay");
let btns = document.querySelectorAll(".btn");
btns.forEach(btn => btn.addEventListener("click", getBtn));

function add(num1,num2) {
    return Number(num1) + Number(num2);
}

function subtract(num1,num2) {
    return Number(num1) - Number(num2);
}

function multiply(num1,num2) {
    return Number(num1) * Number(num2);
}

function divide(num1,num2) {
    return Number(num1) / Number(num2);
}

function operate(operator, num1, num2) {
    switch (operator) {
        case "+":
            return add(num1,num2);
        case "-":
            return subtract(num1,num2);
        case "*":
            return multiply(num1,num2);
        case "/":
            return divide(num1,num2);
    }
}

function getOperator(inputValue) {
    switch (inputValue) {
        case "+":
            operator = "+";
            break;
        case "-":
            operator = "-";
            break;
        case "*":
            operator = "*";
            break;
        case "/":
            operator = "/";
            break;
    }
}

function displayResult() {
    if (operator && num1 && num2) {
        input.value = operate(operator, num1, num2);
        num1 = input.value;
        reset();
    } else input.value = num1;
}

function getBtn(e) {
    getOperator(e.target.innerText);
    getInput(e.target.innerText);
    if (e.target.innerText === "=") {
        displayResult();
    } else if (e.target.innerText === "C") {
        input.value = "";
        num1 = "";
    }
}

function getInput(inputValue) {
    if ((!isNaN(Number(inputValue))) && !operator) {
        num1 += inputValue;
        displayInput(num1);
    } else if((!isNaN(Number(inputValue))) && operator) {
        input.value = "";
        num2 += inputValue;
        displayInput(num2);
    }
}
  
function displayInput(inputValue){
    input.value = inputValue;
}
  
  
function reset() {
    num2 = "";
    operator = null;
}

