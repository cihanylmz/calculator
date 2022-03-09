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
    if(display.textContent === "")
        return;
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
}

const decimalClick = function () {
    if (display.textContent.includes('.')) return;
    display.textContent += '.';

}

const deleteDigit = function () {
    display.textContent = display.textContent.slice(0,
        display.textContent.length - 1);
    if (isCalculating)
    {
        nextNum = +display.textContent;
    }
        
    else 
        currentNum = +display.textContent;
}

function isOperator(str){
    return /^[-+/*]/.test(str);
}

const pressKey = function (key) {
    if(!isNaN(+key))
    {
        displayNums(key);
        return;
    }
        
    if (isOperator(key)) {
        operatorClick(key);
        return;
    }
        
    if (key === 'Backspace') {
        deleteDigit();
        return;
    }
    if (key === ',' || key === '.') {
        decimalClick();
        return;
    }
    if (key === 'Escape') {
        clearClick();
        return;
    }
    if (key === 'Enter') {
        equalClick();
        return;
    }
}

const display = document.querySelector('#display');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');

let count = 0;
let isOp = false;
let isCalculating = false;
let currentNum;
let nextNum;


document.addEventListener('keydown', (e) => pressKey(e.key))

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

const dltBtn = document.querySelector('#backspace');
dltBtn.addEventListener('click', () => deleteDigit());


