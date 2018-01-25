var express = require("express");
var mysql = require("mysql");
var bodyParser = require("body-parser");

var app = express();

var PORT = 3000;

var connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "seinfeld_db"
});

connection.connect(function(err) {
	if(err) {
		console.log("error connectiong: " + err.stack);
		return;
	}
	console.log("connected to MySQL as id " + connection.threadId);
});

app.get("/cast", function(req, res) {
	connection.query("SELECT * FROM actors", function(err, result){
		var html = "<h1>Seinfeld Cast</h1>";

		html += "<ul>";

		for (var i = 0; i < result.length; i++) {
			html += "<li><p> ID: " + result[i].id + "</p>";
			html += "<p>Name: " + result[i].name + "</p>";
			html += "<p>Coolness Points: " + result[i].coolness_points + "</p>";
			html += "<p>Attitude: " + result[i].attitude + "</p>";
		}

		html += "</ul>";

		res.send(html);
	});
});

app.get("/coolness-chart", function(req, res) {
	connection.query("SELECT * FROM actors ORDER BY coolness_points DESC", function(err, result){
		var html = "<h1>Seinfeld Coolness Chart</h1>";

		html += "<ul>";

		for (var i = 0; i < result.length; i++) {
			html += "<li><p> ID: " + result[i].id + "</p>";
			html += "<p>Name: " + result[i].name + "</p>";
			html += "<p>Coolness Points: " + result[i].coolness_points + "</p>";
			html += "<p>Attitude: " + result[i].attitude + "</p>";
		}

		html += "</ul>";

		res.send(html);
	});
});

app.get("/attitude-chart/:att", function(req, res) {
	var attitude = req.params.att;
	connection.query("SELECT * FROM actors WHERE attitude = ?", attitude, function(err, result){

		var html = "<h1>Seinfeld Attitudes Chart</h1>";

		html += "<ul>";

		for (var i = 0; i < result.length; i++) {
			html += "<li><p> ID: " + result[i].id + "</p>";
			html += "<p>Name: " + result[i].name + "</p>";
			html += "<p>Coolness Points: " + result[i].coolness_points + "</p>";
			html += "<p>Attitude: " + result[i].attitude + "</p>";
		}

		html += "</ul>";

		res.send(html);
	});
});

app.listen(PORT, function() {
	console.log("App is now listening on PORT: " + PORT);
});