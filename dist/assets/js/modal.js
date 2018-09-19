// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

/************************************************
 * Modal demo
 *************************************************/
var modal_default = document.getElementById('modal_default');
var btn_default = document.getElementById("btn_default");

var modal_danger = document.getElementById('modal_danger');
var btn_danger = document.getElementById("btn_danger");

var modal_info = document.getElementById('modal_info');
var btn_info = document.getElementById("btn_info");

var dark = document.getElementById("dark");
var lol = document.getElementsByClassName("close-modal");

btn_default.onclick = function () {
  modal_default.style.display = "block";
  dark.style.display = "block";
}

btn_danger.onclick = function () {
  modal_danger.style.display = "block";
  dark.style.display = "block";
}

btn_info.onclick = function () {
  modal_info.style.display = "block";
  dark.style.display = "block";
}

function closeInfo() {
  modal_info.style.display = "none";
  dark.style.display = "none";
}

function closeDanger() {
  modal_danger.style.display = "none";
  dark.style.display = "none";
}

function closeDefault() {
  modal_default.style.display = "none";
  dark.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal_default) {
    modal_default.style.display = "none";
    dark.style.display = "none";
  }
  if (event.target == modal_danger) {
    modal_danger.style.display = "none";
    dark.style.display = "none";
  }
  if (event.target == modal_info) {
    modal_info.style.display = "none";
    dark.style.display = "none";
  }
}
