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


//make the display show numbers clicked
const displayNums = function(digit) {
    display.textContent += digit;
    currentNum = +display.textContent;
}


//when an operator is clicked save the operator and operand and clear the display
const operatorClick = function(operator) {
    nextNum = currentNum;
    oprtr = operator;
    display.textContent = "";
}
//when equal sign is clicked, make the operations using operands and the operator.
const equalClick = function(operandA, ) {
    display.textContent = operate(currentNum, nextNum, oprtr);
    currentNum = +display.textContent;
}

const display = document.querySelector('div');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');

var currentNum = 0;
var nextNum = 0;
numbers.forEach(number => number.addEventListener(
    'click', () => displayNums(number.textContent)
    ));

var oprtr = '';
operators.forEach(operator => operator.addEventListener(
    'click', () => operatorClick(operator.textContent))
    );

const equalBtn = document.querySelector('#equals');
equalBtn.addEventListener('click', () => {
    equalClick();
});



//const clearBtn = document.querySelector('#clear');
//clearBtn.addEventListener('click', () => display.textContent = "");
