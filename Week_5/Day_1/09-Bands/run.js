var music = require("./bands.js");

var genre = process.argv[2];

for (var key in music.artists) {
	if(key === genre || !genre) {
		console.log("A " + key + " band is " + music.artists[key]);
	}
}

