let userInput = document.getElementById("user-input");
let inputArray = [];

let addButton = document.getElementById("add-btn");

function pushtoarray() {
  inputArray.push(parseInt(userInput.value));
  console.log(inputArray);
  document.getElementById("array-output").innerHTML = inputArray;
}

addButton.addEventListener("click", pushtoarray);
