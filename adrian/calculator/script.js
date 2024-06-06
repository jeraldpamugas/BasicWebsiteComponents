let display = $("#display");
let currentInput = "";
let operator = null;
let firstNumber = null;

function appendNumber(number) {
  currentInput += number;
  display.val(currentInput);
}

function setOperator(op) {
  if (currentInput === "") return;
  firstNumber = parseFloat(currentInput);
  operator = op;
  currentInput = "";
}

function clearDisplay() {
  currentInput = "";
  operator = null;
  firstNumber = null;
  display.val("");
}

function calculateResult() {
  if (currentInput === "" || operator === null || firstNumber === null) return;
  let secondNumber = parseFloat(currentInput);
  let result = 0;
  switch (operator) {
    case "+":
      result = firstNumber + secondNumber;
      break;
    case "-":
      result = firstNumber - secondNumber;
      break;
    case "*":
      result = firstNumber * secondNumber;
      break;
    case "/":
      result = firstNumber / secondNumber;
      break;
  }
  display.val(result);
  currentInput = result.toString();
  operator = null;
  firstNumber = null;
}
