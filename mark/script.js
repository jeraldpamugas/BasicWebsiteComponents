/* const value = document.getElementById("display") */ 

let value1 = $("#display");
let btn1 = "";
let operator = null;
let firstNumber = null;


function appendNumber(number) {
    btn1 += number;
    value1.val(btn1);
  }
  
  function setOperator(op) {
    if (btn1 === "") return;
    firstNumber = parseFloat(btn1);
    operator = op;
    btn1 = "";
  }

function clearDisplay() {
    btn1 = "";
    value1.val("");
  }


  function calculateResult() {
    if (btn1 === "" || operator === null || firstNumber === null) return;
    let secondNumber = parseFloat(btn1);
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
    value1.val(result);
    btn1 = result.toString();
    operator = null;
    firstNumber = null;
  }
  