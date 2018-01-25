var fs = require("fs");

var UserSearch = require("./user.js");

function WeatherAdmin() {
	this.newUserSearch = function(name, location) {
		var userSearch = new UserSearch(name, location);
		userSearch.getWeather();

		var log = `\nName: ${userSearch.name} Location: ${userSearch.location} Date: ${userSearch.date}`;

		fs.appendFile("log.txt", log, function(err){
			if(err) {
				return err;
			}
			console.log("Log was successfully saved!");
		});
	};

	this.getData = function() {
		fs.readFile("log.txt", "utf8", function(err, data){
			console.log(data);
		})

	};
};

module.exports = WeatherAdmin;