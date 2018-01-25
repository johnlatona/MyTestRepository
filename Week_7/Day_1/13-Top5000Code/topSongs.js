var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	port: 3306,
	password: "",
	database: "top_songsDB"
});

connection.connect(function(err){
	if (err) throw err;
});

var command = process.argv[2];

if(command === "artist_song_data") {
	var artistName = process.argv[3];
	var query = connection.query("SELECT * FROM top5000 WHERE artist = ?", [artistName], function(err, results, fields) {
		if (err) throw err;
		console.log(results);
	});
}

if(command === "all_artists_multiple") {
	var query = connection.query("SELECT artist, COUNT(*) FROM top5000 GROUP BY artist HAVING COUNT(*) > 1", function(err, results, fields) {
		if (err) throw err;
		/*
		for(var i = 0; i < results.length; i++) {
			if(results[i]["COUNT(*)"] > 1) {
				console.log(results[i].artist);
			}
		}
		*/
		console.log(results);
	})

}

if(command === "song") {
	var songName = process.argv[3];
}

if(command === "range") {
	inquirer.prompt([
		{
			type: "input",
			name: "start",
			message: "What position should we start at?"
		},
		{
			type: "input",
			name: "end",
			message: "What position should we end at?"
		}
	]).then(function(answers) {

		var query = "SELECT * FROM top5000 WHERE position BETWEEN ? and ?;";
		connection.query(query, [answers.start, answers.end], function(err, results) {
			console.log(results);
		})
	})
}

if(command === "specific") {
	inquirer.prompt([
	{
		type: "input",
		name: "songName",
		message: "Which song would you like to search for?"
	}
	]).then(function(answer) {
		//like searches everything in a part of a database that contains any of the searched string
		var query = "SELECT * FROM top5000 WHERE song like '%'" + answer.songName + "'%'";

		connection.query(query, function(err, results) {
			console.log(results);
		})
	})
}