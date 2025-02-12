function sum(n1, n2){
	return n1 + n2;
}
function sub(n1, n2){
	return n1 - n2;
}
function mul(n1, n2){
	return n1 * n2;
}
function div(n1, n2){
	return n1 / n2;
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

let display = document.querySelector(".displayWrapper");
let no1 = document.querySelector("button.button1");
no1.onclick = () => {
	n1 = n1.concat("1");
	display.textContent = n1;

	console.log(n1);
};


let allClear = document.querySelector("button.buttonClear");
allClear.onclick = () => {
	n1 = "";
	display.textContent = n1;
	console.log(n1);
}

