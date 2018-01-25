// Instructions:
// Convert the below geocoding code from earlier today so that it uses inquirer.js instead of process.argv to handle the intake of user inputs. 
// Make sure your new code provides the exact same output as it did with process.argv.

// HINT: Don't forget to create your package.json file and save the correct packages to it.
// HINT: You should not need to change *that much* code.

// ========================================================================================================================

// Include the geocoder NPM package (Remember to run "npm install geocoder"!)
var geocoder = require("geocoder");

var inquirer = require("inquirer");

inquirer.prompt([
	{
		type: "input",
		message: "What is the address or the name of the place you would like to look up?",
		name: "place"
	},
	{
		type: "confirm",
		message: "Are you ready to search?",
		name: "confirm"
	}
]).then(function(inquirerResponse) {
	geocoder.geocode(inquirerResponse.place, function(err, data) {
		if(err) {
			return console.log(err);
		}
		else {
			console.log(JSON.stringify(data, null, 2));
		}
	});
});

