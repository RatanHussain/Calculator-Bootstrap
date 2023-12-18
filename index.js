/** @format */

let display = document.querySelector('#dis');

function slce() {
	display.value = display.value.slice(0, -1);
}

function cleared() {
	display.value = '';
}

function sum(valuee) {
	display.value += valuee;
}
function equal() {
	display.value = eval(display.value);
}
