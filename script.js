function sum(n1, n2){
	return Number(n1) + Number(n2);
}
function sub(n1, n2){
	return n1 - n2;
}
function mul(n1, n2){
	return n1 * n2;
}
function div(n1, n2){
	if (n2 === "0") {
		return display.textContent = "ERROR:Can't divide by 0"
	}else {
		return n1 / n2;
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

let n1 = "";
let n2 = "";
let operator = "";
const operatorButton = ["Divide", "Multiply", "Subtract", "Add"];
const operatorSymbol = ["/", "*", "-", "+"];
let display = document.querySelector(".displayWrapper");


for(let i = 0; i <= 9; i++){
	let button = document.querySelector(`button.button${i}`);
	button.onclick = () => {
		if (operator.length < 1) {
			n1 = n1.concat(i);
			display.textContent = n1;
			console.log(`This is n1 -> ${n1}`);
		}else {
			n2 = n2.concat(i);
			display.textContent = n1 + "" + operator + "" + n2;
			console.log(`This is n2 -> ${n2}`);
		}
	};
}

for(let i = 0; i <= 3; i++){
	let button = document.querySelector(`button.button${operatorButton[i]}`);
	button.onclick = () => {
		if (operatorSymbol[i] === "-" && n1.length < 1) {
			n1 = operatorSymbol[i];
			display.textContent = n1 + "" + operator;
		}
		else if(operator.length < 1 && n1.length > 0){
			operator = operatorSymbol[i];
			display.textContent = n1 + "" + operator;
		}	
	}
}


let equalsButton = document.querySelector("button.buttonEquals");
equalsButton.onclick = () => {
	let result = operate(operator, n1, n2);
	display.textContent = result;
}

let allClear = document.querySelector("button.buttonClear");
allClear.onclick = () => {
	n1 = "";
	n2 = "";
	operator = "";
	display.textContent = "";
	console.log(n1);
}

