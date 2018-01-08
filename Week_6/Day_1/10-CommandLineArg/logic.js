var num1 = process.argv[2];
var num2 = process.argv[3];

function numCompare(arg1, arg2) {
	if(arg1 == arg2) {
		return true;
	}
	else {
		return false;
	}
}

function div7(arg1, arg2) {
	if((arg1 % 7 == 0) && (arg2 % 7 == 0)){
		return true;
	}
	else {
		return false;
	}
}

console.log(numCompare(num1, num2));
console.log(div7(num1, num2));
