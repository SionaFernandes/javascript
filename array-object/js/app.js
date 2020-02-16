let userInput = document.getElementById("user-input");
let inputArray = [];
let logEntries = [];

let addButton = document.getElementById("add-btn");

let spliceInput = document.getElementById("splice-input");
let splicePosition = document.getElementById("splice-position");
let splicebtn = document.getElementById("splicebtn");

function pushtoarray() {
  inputArray.push(parseInt(userInput.value));
  document.getElementById("array-output").innerHTML = inputArray;
  const logEntry = {
    action: "Clicked",
    value: parseInt(userInput.value)
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function splicearray() {
  inputArray.splice(splicePosition.value, 0, parseInt(spliceInput.value));
  document.getElementById("array-output").innerHTML = inputArray;
}

addButton.addEventListener("click", pushtoarray);
splicebtn.addEventListener("click", splicearray);
