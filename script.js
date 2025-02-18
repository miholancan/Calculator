function sum(n1, n2, decimalPlaces = 8){
	let n3 = Number(n1) + Number(n2);
	return parseFloat(n3.toString().match(new RegExp(`^-?\\d+(?:\\.\\d{0,${decimalPlaces}})?`))[0]);
}
function sub(n1, n2, decimalPlaces = 8){
	let n3 = n1 - n2;
	return parseFloat(n3.toString().match(new RegExp(`^-?\\d+(?:\\.\\d{0,${decimalPlaces}})?`))[0]);
}
function mul(n1, n2, decimalPlaces = 8){
	let n3 = n1 * n2;
	return parseFloat(n3.toString().match(new RegExp(`^-?\\d+(?:\\.\\d{0,${decimalPlaces}})?`))[0]);
}
function div(n1, n2, decimalPlaces = 8){
	if (n2 === "0") {
		return display.textContent = "ERROR"
	}else {
		let n3 = n1 / n2;
		return parseFloat(n3.toString().match(new RegExp(`^-?\\d+(?:\\.\\d{0,${decimalPlaces}})?`))[0]);
	}
}
function operate(operator, n1, n2){
	if(operator === "+") {
		return sum(n1, n2);
	}
	else if(operator === "-"){
		return sub(n1, n2);
	}
	else if(operator === "*"){
		return mul(n1, n2);
	}
	else if(operator === "/"){
		return div(n1, n2);
	}
	else{
		return "Error";
	}
}
function containsOperator(str){
	return /[+\-*/]/.test(str);
}

let n1 = "";
let n2 = "";
let result = "";
let operator = "";

const operatorButton = ["Divide", "Multiply", "Subtract", "Add"];
const operatorSymbol = ["/", "*", "-", "+"];
let display = document.querySelector(".displayWrapper");

const buttonDot = document.querySelector("button.buttonDot");
buttonDot.onclick = () => {
	if (result == display.textContent) {
		n1 = "";
		n2 = "";
		result = "";
		operator = "";
		display.textContent = "";
		buttonDot.disabled = false;
		}
	if (containsOperator(display.textContent)) {
		if (n2 === "") {
			n2 = "0"
		}
		n2 = n2.concat(".");
		buttonDot.disabled = true;
		display.textContent = n1 + "" + operator + "" + n2;
	}
	else {
		if (n1 === "") {
			n1 = "0"
		}
		n1 = n1.concat(".");
		buttonDot.disabled = true;
		display.textContent = n1;
	}
}

for(let i = 0; i <= 9; i++){
	let button = document.querySelector(`button.button${i}`);
	button.onclick = () => {
		if (result == display.textContent || display.textContent == "ERROR") {
			n1 = "";
			n2 = "";
			result = "";
			operator = "";
			display.textContent = "";
			buttonDot.disabled = false;
			}
		if (result === "") {
			if (operator.length < 1) {
				if (n1 === "0") {
					n1 = "0.";
					buttonDot.disabled = true;
				}
				n1 = n1.concat(i);
				display.textContent = n1;
			}else {
				if (n2 === "0") {
					n2 = "0.";
					buttonDot.disabled = true;
				}
				n2 = n2.concat(i);
				display.textContent = n1 + "" + operator + "" + n2;
			}
		}
		else {
			if (n2 === "0") {
				n2 = "0.";
				buttonDot.disabled = true;
			}
			n2 = n2.concat(i);
			n1 = result;
			display.textContent = n1 + "" + operator + "" + n2;
		}
		if (display.textContent.length > 14) {
			display.style.fontSize = "1.5rem";
		}
	};
}



for(let i = 0; i <= 3; i++){
	let button = document.querySelector(`button.button${operatorButton[i]}`);
	button.onclick = () => {
		buttonDot.disabled = false;
		if (display.textContent == "ERROR") {
			n1 = "";
			n2 = "";
			result = "";
			operator = "";
			display.textContent = "";
			buttonDot.disabled = false;
		}
		if (operator.length > 0) {
			result = operate(operator, n1, n2);
			display.textContent = result;
		}
		if (result === "") {
			if (operatorSymbol[i] === "-" && n1.length < 1) {
				n1 = operatorSymbol[i];
				display.textContent = n1 + "" + operator;
			}
			else if(operator.length < 1 && n1.length > 0){
				operator = operatorSymbol[i];
				display.textContent = n1 + "" + operator;
			}	
		}
		else {
			n2 = "";
			operator = operatorSymbol[i];
			display.textContent = result + "" + operator;
		}	
	}
}


let equalsButton = document.querySelector("button.buttonEquals");
equalsButton.onclick = () => {
	if (n1 === "" || n2 === "" || operator === "") {
		display.textContent = "ERROR";
	}
	else{
		result = operate(operator, n1, n2);
		display.textContent = result;
	}
	
}

let allClear = document.querySelector("button.buttonClear");
allClear.onclick = () => {
	n1 = "";
	n2 = "";
	result = "";
	operator = "";
	display.textContent = "";
	buttonDot.disabled = false;
	display.style.fontSize = "2rem";
}

