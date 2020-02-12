// To Get the modal
var modalbox = document.getElementById("custom-modal");

// Get the button that opens the modal
var btn = document.getElementById("modalbtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modalbox.classList.add("custom-effect");
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalbox.classList.remove("custom-effect");
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalbox) {
    modalbox.classList.remove("custom-effect");
  }
};

var footerbtn = document.getElementById("btn-close");

footerbtn.onclick = function() {
  modalbox.classList.remove("custom-effect");
};
