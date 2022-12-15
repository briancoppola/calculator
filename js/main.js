const calculator = document.querySelector('.calculator');
const display = calculator.querySelector('.calculator__display');
const keys = calculator.querySelector('.calculator__keypad');

const calcState = {
  displayValue: '0',
  firstNumber: null,
  secondNumber: null,
  operator: '',
  previousKeyType: null,
};

/* Inputs */

const inputDigit = (value) => {
  if (calcState.previousKeyType !== 'number' || calcState.displayValue === '0') clearDisplay();
  if (calcState.previousKeyType === 'equals') {
    clearValues();
  }
  calcState.displayValue += value;
  updateDisplay();
  calcState.previousKeyType = 'number';
};

const inputOperator = (value) => {
  if (calcState.firstNumber === null) {
    calcState.firstNumber = parseFloat(calcState.displayValue);
  } else if (calcState.previousKeyType !== 'equals') {
    calculateResult();
  }
  calcState.operator = value;
  calcState.secondNumber = null;
  calcState.previousKeyType = 'operator';
};

const inputPlusMinus = () => {
  if (calcState.displayValue !== '0') {
    calcState.displayValue = calcState.displayValue * -1;
    updateDisplay();
  }
};

const inputPercent = () => {
  if (calcState.previousKeyType === 'number') {
    calcState.displayValue = calcState.displayValue / 100;
    updateDisplay();
    calcState.previousKeyType = 'percent';
  }
};

const inputDecimal = () => {
  if (calcState.previousKeyType !== 'number' || calcState.displayValue === '0') {
    clearDisplay();
    calcState.displayValue += '0';
  }
  calcState.displayValue += '.';
  updateDisplay();
  calcState.previousKeyType = 'number';
};

/* Calcuate result */

const calculateResult = (value) => {
  if (!isNaN(calcState.firstNumber) && calcState.operator) {
    if (!calcState.secondNumber) calcState.secondNumber = parseFloat(calcState.displayValue);
    const allKeyInput = `${calcState.firstNumber}${calcState.operator}${calcState.secondNumber}`;
    const result = eval(allKeyInput);
    calcState.displayValue = result;
    updateDisplay();
    if (value === '=') {
      calcState.previousKeyType = 'equals';
    }
    calcState.firstNumber = calcState.displayValue;
  }
};

/* Update & clear functions */

const updateDisplay = () => {
  if (calcState.displayValue.toString().length > 9) {
    display.textContent = parseFloat(calcState.displayValue).toPrecision(8);
    return;
  }
  display.textContent = calcState.displayValue;
};

const clearDisplay = () => {
  calcState.displayValue = '';
  display.textContent = '0';
};

const clearValues = () => {
  calcState.firstNumber = null;
  calcState.secondNumber = null;
  calcState.operator = '';
  calcState.previousKeyType = null;
};

/* Key press event handlers */

keys.addEventListener('click', (event) => {
  const target = event.target;
  if (!target.matches('button')) return;
  keyEvaluate(target.dataset.key);
});

document.addEventListener('keydown', (event) => {
  let keyValue = event.key;
  console.log(keyValue);
  if (keyValue === 'Escape') {
    keyValue = 'AC';
  }
  if (keyValue === 'Enter') {
    keyValue = '=';
  }
  keyEvaluate(keyValue);
});

const keyEvaluate = (keyValue) => {
  if (!isNaN(keyValue)) keyValue = parseInt(keyValue);

  switch (keyValue) {
    case '+':
    case '-':
    case '*':
    case '/':
      inputOperator(keyValue);
      break;
    case '+/-':
      inputPlusMinus();
      break;
    case '%':
      inputPercent();
      break;
    case '.':
      inputDecimal();
      break;
    case '=':
      calculateResult(keyValue);
      break;
    case 'AC':
      clearDisplay();
      clearValues();
      break;
    default:
      if (!isNaN(keyValue)) {
        inputDigit(keyValue);
      }
  }
};
