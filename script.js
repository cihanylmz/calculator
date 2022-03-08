const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const operate = function(operandA, operandB, operator) {
    if (operator === '+') return add(operandA, operandB);
    if (operator === '-') return subtract(operandA, operandB);
    if (operator === '*') return multiply(operandA, operandB);
    if (operator === '/') return divide(operandA, operandB);
}

const displayNums = function(digit) {
    if(isOp) {
        display.textContent = "";
        isOp = false;
        isCalculating = true;
    }
    display.textContent += digit;
    if (isCalculating)
    {
        nextNum = +display.textContent;
    }
        
    else 
        currentNum = +display.textContent;
}

const operatorClick = function(operator) {
    if (isCalculating)
    {
        if (nextNum === 0 && oprtr === '/') {
            clearClick();
            alert("You can't divide by zero!")
        }

        else {
            display.textContent = Math.round(operate(currentNum, nextNum, oprtr) * 100) / 100;
            currentNum = +display.textContent;
        }
    }
        
    oprtr = operator;
    isOp = true;
}

const equalClick = function() {
    //TODO: fix bug when after entering a number and an operator and pressing equal sign, crash!
    if(isCalculating) {
        isCalculating = false;
    if (nextNum === 0 && oprtr === '/') {
        clearClick();
        alert("You can't divide by zero!")
    }   
    else {
        display.textContent = Math.round(operate(currentNum, nextNum, oprtr) * 100) / 100;
        currentNum = +display.textContent;
        isOp = false;
    }
    }
}

const clearClick = function() {
    display.textContent = '';
    count = 0;
    isOp = false;
    isCalculating = false;
    // currentNum = undefined;
    // nextNum = undefined;
    // oprtr = '';
}

const decimalClick = function () {
    if (display.textContent.includes('.')) return;
    display.textContent += '.';

}

const display = document.querySelector('#display');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');

let count = 0;
let isOp = false;
let isCalculating = false;
let currentNum;
let nextNum;

numbers.forEach(number => number.addEventListener(
    'click', () => displayNums(number.textContent)
    ));

let oprtr = '';
operators.forEach(operator => operator.addEventListener(
    'click', () => operatorClick(operator.textContent))
    );

const equalBtn = document.querySelector('#equals');
equalBtn.addEventListener('click', () => {
    equalClick();
});

const decimalBtn = document.querySelector('#decimal');
decimalBtn.addEventListener('click', () => decimalClick())

const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', () => clearClick());


