let arrOfNum= new Array();
let arrOfOperation = new Array();
let arrOfHistory = new Array();
let number =""
let changingInput =""

function eval(oper){
	arrOfNum.push(number)
	number=""
	arrOfOperation.push(oper);
	changingInput += ` ${oper} `
	document.getElementById("sm-display").innerHTML = changingInput

	calculate(arrOfNum, arrOfOperation)
}
function takeNum(num){
	number+=num
	changingInput += num
	document.getElementById("sm-display").innerHTML = changingInput
	calculate(arrOfNum, arrOfOperation)
}
function erase(process){

}
function calculate(){

}
function operate(operator, num1, num2){
	switch(num1){
		case '+':return num1 + num2
		case '-':return num1 - num2
		case '*':return num1 * num2
		case '/':
			if(num2==0){return "undefined"}
			else{return num1 / num2}
		case 'per':return (num1/100)*num2
	}
}