var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "great_bayDB"
});

function connect() {
	connection.connect(function(err) {
		if (err) throw err;
		console.log("connected as id " + connection.threadId + "\n");
	})
};

function post(item, startingBid) {
	console.log("Posting new item");
	var query = connection.query("INSERT INTO products SET ?", 
		{
			item: item,
			starting_bid: startingBid
		},
		function(err, res) {
		console.log(res.affectedRows + "product inserted!\n");
		main();
		}
	);
};

function readDB() {
	connection.query("SELECT * FROM products", function(err, res) {
		if (err) throw err;

		for(var i = 0; i < res.length; i++) {
			resultArr.push(res[i].item);
		}
		console.log(resultArr);
	})
}

function main() {
	inquirer.prompt([
		{
			type: "list",
			name: "choice",
			message: "What would you like to do?",
			choices: ["Post an Item", "Bid on an item"]
		}
	]).then(function(input) {
		switch(input.choice){
			case "Post an Item": 
			inquirer.prompt([
				{
					type: "input",
					name: "item",
					message: "What would you like to post?"
				},
				{
					type: "input",
					name: "starting_bid",
					message: "How much would you like to post this item for?",
					validate: function(input) {
						if(isNaN(input)) {
							return "Please enter a number."
						}
						else {
							return true;
						}
					}
				}
			]).then(function(postResponse) {
				connect();
				post(postResponse.item, postResponse.starting_bid);
			})
			break;

			case "Bid an on item":
			connect();
			var resultArr = [];
			connection.query("SELECT * FROM products", function(err, res) {
				if (err) throw err;

				for(var i = 0; i < res.length; i++) {
					resultArr.push(res[i].item);
				}
				console.log(resultArr);
			})
			inquirer.prompt([
			{
				type: "list",
				name: "item",
				message: "Which item would you like to bid on?",
				choices: resultArr;
			}
			{
				type: "input",
				name: "bid",
				message: "How much would you like to bid?"
				validate: function(input) {
					if(input < )
				}
			}
			])
			bid();
			break;
		}
	});
}
main();
