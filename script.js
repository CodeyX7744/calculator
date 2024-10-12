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

function modulo(num1,num2) {
    return Number(num1) % Number(num2);
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
        case "%":
            return modulo(num1,num2);
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
        case "%":
            operator = "%";
            break;
            
    }
}

function displayResult() {
    if (operator && num1 && num2) {
        input.value = Math.round((operate(operator, num1, num2))*10000000000000)/10000000000000;
        num1 = input.value;
        reset();
    } else input.value = num1;
    if (input.value === 'Infinity') {
        input.value = "You are  not dumb :)"
    }
}

function getBtn(e) {
    getOperator(e.target.innerText);
    getInput(e.target.innerText);
    if (e.target.innerText === "=") {
        displayResult();
    } else if (e.target.innerText === "C") {
        input.value = "";
        num1 = "";
        reset();
    }
}

function getInput(inputValue) {
    if(inputValue === "." && !operator ) {
        console.log("level1");
        if (input.value === "") {
            num1 += "0" + inputValue;
            displayInput(num1);
        } else if(!(input.value.indexOf(".")>-1)) {
            console.log("level2");
            num1 += inputValue;
            displayInput(num1);
        }
    } else if(inputValue === "." && operator) {
        console.log("level3");
        if(num2 === "") {
            num2 += "0" + inputValue;
            displayInput(num2);
        } else if(!(num2.indexOf(".")>-1)) {
            console.log("level4");
            num2 += inputValue;
            displayInput(num2);
        }
    } else if ((!isNaN(Number(inputValue))) && !operator) {
        num1 += inputValue;
        displayInput(num1);
    } else if((!isNaN(Number(inputValue))) && operator) {
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

