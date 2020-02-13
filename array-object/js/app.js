let userInput = document.getElementById("user-input");
let inputArray = [];
let logEntries = [];

let addButton = document.getElementById("add-btn");

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

addButton.addEventListener("click", pushtoarray);
