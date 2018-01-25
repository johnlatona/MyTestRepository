var fs = require("fs");

// Write a function that logs a message, then executes
// a function argument.

var functionParam1 = () => {
	console.log("I am a function");
};

var str = "I am a string";

function one(str, func) {
	func();
	console.log(str);
}

one(str, functionParam1);

function oneAlt(str, func) {
	console.log(str);
	func();
}

oneAlt("I am an alt string", function() {
	console.log("I am an alt function");
})

// Write a function that runs a function argument if
// its other argument is truthy.

var boolean = true;

var functionParam2 = () => {
	console.log("I am a function and the boolean is true");
}

function two(boolean, func) {
	if(boolean) {
		func();
	}
	else {
		return;
	}
}

two(boolean, functionParam2);

// Write a function that accepts a function argument and
// a value, and returns a function that returns the result
// of executing the function argument with the value.
// This isn't as hard as it sounds!

function functionParam3(param) {
	console.log("My name is " + param + ".");
}

var value = "John";

function three(value, func) {
	return function() {
		return func(value);
	};
}

var fun = three(value, functionParam3);

fun();

// Use fs.writeFile to log a message to a file called
// log.txt. Are yo uusing callbacks anywhere? Where?

fs.writeFile("log.txt", "woeifjwoeifjwe", function(err) {
	if(err) {
		return console.log(err);
	}
	console.log("weodijweifjw");
});
