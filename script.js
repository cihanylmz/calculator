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
    //if before is operator clear the display
    //add new digit to display
    //add new display to nextNum
    //
    if(isOp) {
        display.textContent = "";
        isOp = false;
    }
    display.textContent += digit;
    if (count > 0)
    {
        nextNum = +display.textContent;
    }
        
    else 
        currentNum = +display.textContent;
    
}

const operatorClick = function(operator) {
    
    if (count > 0)
    {
        display.textContent = operate(currentNum, nextNum, oprtr).toFixed(2);
        currentNum = +display.textContent;
    }
        
    oprtr = operator;
    isOp = true;
    count++;
    //display.textContent = "";

    
}

const equalClick = function() {
    if(count>0) {
    count = 0;
    display.textContent = operate(currentNum, nextNum, oprtr).toFixed(2);
    currentNum = +display.textContent;
    isOp = false;
    }
}

const display = document.querySelector('div');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');

let count = 0;
let isOp = false;
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



//const clearBtn = document.querySelector('#clear');
//clearBtn.addEventListener('click', () => display.textContent = "");
