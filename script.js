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


//detect click on each number
let display = document.querySelector('div');
const numbers = document.querySelectorAll('.number');
numbers.forEach(number => number.addEventListener(
    'click', () => display.textContent += number.textContent));
const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', () => display.textContent = "");
//make that number go to the div
//store the number on the div