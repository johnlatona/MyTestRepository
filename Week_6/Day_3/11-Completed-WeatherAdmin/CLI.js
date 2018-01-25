var WeatherAdmin = require("./admin.js");
var UserSearch = require("./user.js");
var fs = require("fs");
var inquirer = require("inquirer");

inquirer.prompt([
	{
		type: "list",
		message: "Welcome to WeatherAdmin, please select a mode below:",
		choices: ["User", "Administrator"],
		name: "userType"
	}
])
.then(function(typeResponse) {
	var type = typeResponse.userType;

	if(type === "User") {
		inquirer.prompt([
			{
				type: "input",
				message: "What is your name?",
				name: "username"
			},
			{
				type: "input",
				message: "Please type the City, State of the location you'd like weather information for.",
				name: "location"
			}
		]).then(function(userResponse) {
			var name = userResponse.username;
			var location = userResponse.location;

			var newWeatherUser = new WeatherAdmin();
			newWeatherUser.newUserSearch(name, location);
		});
	}

	if(type === "Administrator") {
		var newWeatherAdmin = new WeatherAdmin();
		newWeatherAdmin.getData();
	}
});