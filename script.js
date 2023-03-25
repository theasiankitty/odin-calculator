const inputDisplay = document.querySelector('.display-input');
inputDisplay.disabled = 'disabled';

const keys = document.querySelectorAll('.num-keys');
const operators = document.querySelectorAll('.operators');
const percentage = document.querySelector('.percentage');
percentage.addEventListener('click', percentageOf);

const equals = document.querySelector('.equals');
equals.addEventListener('click', getResult);

const clear = document.querySelector('.all-clear');
clear.addEventListener('click', allClear);

keys.forEach(key => key.addEventListener('click', () => insertKey(key.value)));
operators.forEach(operator => operator.addEventListener('click', () => insertOperator(operator.value)));

function insertKey(key) {
    if (inputDisplay.value === '0') {
        inputDisplay.value = key;
    } else if (inputDisplay.value === 'NaN') {
        inputDisplay.value = key;
    } else {
        inputDisplay.value += key;
    }
    checkLength();
}

function insertOperator(key) {
    const addOp = '+';
    const subtractOp = '-';
    const multiplyOp = '*';
    const divideOp = '/';

    switch (key) {
        case 'PLUS':
            insertKey(addOp);
            break;
        case 'MINUS':
            insertKey(subtractOp);
            break;
        case 'TIMES':
            insertKey(multiplyOp);
            break;
        case 'DIVIDE':
            insertKey(divideOp);
            break;
    }
}

function percentageOf() {
    const percentOp = '%';
    insertKey(percentOp);
}

function allClear() {
    inputDisplay.value = '0';
    checkLength();
}

function getResult() {
    if (inputDisplay.value.includes('%')) {
        let input = inputDisplay.value.split('%');
        let result = (input[0] * input[1]) / 100;

        inputDisplay.value = result;
    } else {
        inputDisplay.value = eval(inputDisplay.value);
    }
    checkLength();
}

function checkLength() {
    if (window.innerWidth < 500) {
        if (inputDisplay.value.length <= 8) {
            inputDisplay.style.fontSize = '3rem';
        }
    
        if (inputDisplay.value.length > 9) {
            inputDisplay.style.fontSize = '2rem';
        }
    
        if (inputDisplay.value.length > 14) {
            inputDisplay.value = 'NaN';
            checkLength();
        }
    } else {
        if (inputDisplay.value.length <= 8) {
            inputDisplay.style.fontSize = '4rem';
        }
    
        if (inputDisplay.value.length > 9) {
            inputDisplay.style.fontSize = '2rem';
        }
    
        if (inputDisplay.value.length > 14) {
            inputDisplay.value = 'NaN';
            checkLength();
        }
    }
}