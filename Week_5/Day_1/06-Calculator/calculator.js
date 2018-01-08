if(isNaN(process.argv[3]) || isNaN(process.argv[4])) {
	console.log("Please enter two numbers");
}
else if (process.argv[2] == "add") {
	console.log(parseFloat(process.argv[3]) + parseFloat(process.argv[4]));
}
else if (process.argv[2] == "subtract") {
	console.log(parseFloat(process.argv[3]) - parseFloat(process.argv[4]));
}
else if (process.argv[2] == "multiply") {
	console.log(parseFloat(process.argv[3]) * parseFloat(process.argv[4]));
}
else if (process.argv[2] == "divide") {
	console.log(parseFloat(process.argv[3]) / parseFloat(process.argv[4]));
}
else if (process.argv[2] == "remainder") {
	console.log(parseFloat(process.argv[3]) % parseFloat(process.argv[4]));
}
else if (process.argv[2] == "exp") {
	console.log(Math.pow(parseFloat(process.argv[3]), parseFloat(process.argv[4])));
}
else if (process.argv[2] == "algebra") {
	var arr = process.argv[3].split(/[x+=]/);
	var answer = (parseFloat(arr[3]) - parseFloat(arr[2])) / parseFloat(arr[0]);
	console.log("x = " + answer);
}