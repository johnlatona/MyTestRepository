var weather = require("weather-js");
var fs = require("fs");

function UserSearch(name, location) {
	this.name = name;
	this.location = location; 
	this.date = Date.now();
	this.getWeather =  function() {
		weather.find({search: this.location, degreeType: "F"}, function(err, result) {
			if(err) {
				return console.log(err);
			}
			else {
				console.log(JSON.stringify(result, null, 2));
				//console.log("The current temperature in " + result.location.name + " is " + result.current.temperature + "°F.");
				/*
				fs.writeFile("log.txt", "{" + this.name + ", " + this.location + ", " + result.current.date + "}", function(err) {
					if(err) {
						return console.log(err);
					}

					console.log("log.txt was updated!");

				});
				*/

			}
		})
	}
}

module.exports = UserSearch;