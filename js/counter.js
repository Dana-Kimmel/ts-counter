"use strict";
var number = 0;
function minus() {
    number--;
    updateDisplay();
}
function plus() {
    number++;
    updateDisplay();
}
function updateDisplay() {
    var input = document.getElementById("numInput");
    input.className = "";
    if (number % 2 == 0) {
        input.classList.add("redtext");
    }
    if (number % 3 == 0) {
        input.classList.add("boldtext");
    }
    if (number % 5 == 0) {
        input.classList.add("italictext");
    }
    input.value = number.toString();
}
function onLoad() {
    updateDisplay();
}
