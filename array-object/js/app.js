let userInput = document.getElementById("user-input");
let inputArray = [];
let newArray = [];
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

//pop
let popButton = document.getElementById("popbtn");

//shift
let shiftButton = document.getElementById("shiftbtn");

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

function poparray() {
  newArray.push(inputArray.pop());
  document.getElementById("new-array-output").innerHTML = newArray;
  document.getElementById("array-output").innerHTML = inputArray;
}

function shiftarray() {
  newArray.push(inputArray.shift());
  document.getElementById("new-array-output").innerHTML = newArray;
  document.getElementById("array-output").innerHTML = inputArray;
}

addButton.addEventListener("click", pushtoarray);
splicebtn.addEventListener("click", splicearray);
unshiftbtn.addEventListener("click", unshiftarray);
popButton.addEventListener("click", poparray);
shiftButton.addEventListener("click", shiftarray);
