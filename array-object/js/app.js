let userInput = document.getElementById("user-input");
let inputArray = [];
let logEntries = [];

//push
let addButton = document.getElementById("add-btn");

//splice
let spliceInput = document.getElementById("splice-input");
let splicePosition = document.getElementById("splice-position");
let splicebtn = document.getElementById("splicebtn");

//unshift
let unshiftInput = document.getElementById("unshift-input");
let unshiftbtn = document.getElementById("unshiftbtn");

function pushtoarray() {
  inputArray.push(parseInt(userInput.value));
  document.getElementById("array-output").innerHTML = inputArray;
  const logEntry = {
    action: "Clicked",
    value: parseInt(userInput.value)
  };
  logEntries.push(logEntry);
  console.log(logEntries);
  userInput.value = null;
}

function splicearray() {
  inputArray.splice(splicePosition.value, 0, parseInt(spliceInput.value));
  document.getElementById("array-output").innerHTML = inputArray;
  spliceInput.value = null;
}

function unshiftarray() {
  inputArray.unshift(unshiftInput.value);
  document.getElementById("array-output").innerHTML = inputArray;
  unshiftInput.value = null;
}
addButton.addEventListener("click", pushtoarray);
splicebtn.addEventListener("click", splicearray);
unshiftbtn.addEventListener("click", unshiftarray);
