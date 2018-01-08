var fs = require("fs");

var command = process.argv[2];
var number = parseFloat(process.argv[3]);

function bankApp(operation, amount) {
	var total;
	var rounded;

	if(operation === "total") {
		fs.readFile("bank.txt", "utf8", function(error, data) {

			if(error) {
				return console.log(error);
			}

			total = 0;
			dataArr = data.split(", ");

			for (var i = 0; i < dataArr.length; i++) {
				total += parseFloat(dataArr[i]);
			}

			console.log("Your total balance is " + total.toFixed(2));
		});
	}

	if(operation == "deposit") {
		fs.appendFile("bank.txt", ", " + amount, function(err) {
			if(err) {
				return console.log(err);
			}
			else {
				console.log("You deposited " + amount + " dollars");
			}
		});
	}

	if(operation == "withdraw") {
		fs.appendFile("bank.txt", ", -" + amount, function(err){
			if(err) {
				return console.log(err);
			}
			else {
				console.log("You withdrew " + amount + " dollars");
			}
		});
	}

	if (operation == "lotto") {
		fs.appendFile("bank.txt", ", -.25", function(err) {
			if(err) {
				return console.log(err);
			}
			else {
				var chance = Math.floor((Math.random() * 10) + 1);

				if (chance === 1) {
					fs.appendFile("bank.txt", ", 20", function(err) {
						if(err) {
							return console.log(err);
						}
						else {
							console.log("You won the lottery! Here's $20");
						}
					});
				}
				else {
					console.log("You lost!");
				}
			}
		});
	}
}

bankApp(command, number);

