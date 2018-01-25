// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================
var inquirer = require ("inquirer");

var defaultPassword = "123456";

inquirer.prompt([

{
	type: "input",
	message: "Welcome to Node Pizza. What's your name for the order?",
	name: "orderName"
},
{
	type: "password",
	message: "Please enter your password",
	name: "password"
},
{
	type: "list",
	message: "What size pizza would you like to order?",
	choices: ["Small Pizza (12 inch)", "Medium Pizza (16 inch)", "Large Pizza (19 inch)"],
	name: "pizzaSize"
},
{
	type: "checkbox",
	message: "What toppings would you like on your pizza?",
	choices: ["Cheese", "Pepperoni", "Peppers and Onions", "Mushrooms", "Olives", "Sausage", "Anchovies"],
	name: "toppingsChoices"
},
{
	type: "confirm",
	message: "Is this pizza for delivery?",
	name: "confirm",
	default: true
},
{
	type: "confirm",
	message: "Are you ready to place the order?",
	name: "confirm",
	default: true
}
])
.then(function(inquirerResponse) {
	if(!inquirerResponse.confirm) {
		console.log("That's ok, come back and order a pizza when you're sure!");
	}
	else {
		if (inquirerResponse.password === defaultPassword) {
			console.log("Hello, " + inquirerResponse.orderName + "! You ordered a " + inquirerResponse.pizzaSize + " with " + inquirerResponse.toppingsChoices + ". Your pizza will be ready shortly!");
		}	
		else {
			return;
		}	
	}
})






