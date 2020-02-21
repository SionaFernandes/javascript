const defaultResult = 0;
let currentResult = defaultResult;

//Gets user input from input field
function getUserNumberInput() {
  return parseInt(userInput.value);
}

//Calculates log
function LogOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); //vendor file
}
function calaculateResult(calculationType) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let mathOperator;
  if (calculationType === "add") {
    currentResult += enteredNumber;
    mathOperator = "+";
  } else if (calculationType === "subtract") {
    currentResult -= enteredNumber;
    mathOperator = "-";
  } else if (calculationType === "multipy") {
    currentResult *= enteredNumber;
    mathOperator = "*";
  } else {
    currentResult /= enteredNumber;
    mathOperator = "/";
  }
  LogOutput(mathOperator, initialResult, enteredNumber);
}

function add() {
  calaculateResult("add");
}
function subtract() {
  calaculateResult("subtract");
}
function multiply() {
  calaculateResult("multipy");
}
function divide() {
  calaculateResult("divide");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
