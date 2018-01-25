
var http = require("http");

var PORT7000 = 7000;

var PORT7500 = 7500;

function handleRequest7000(request, response) {
	var responses = ["You're the coolest person ever!", "You're super good looking", "You must be a genius!", "Did it hurt when you fell from heaven?", "You're the nicest person I know!"];

	var selectedResponse = Math.floor(Math.random() * 5);
	response.end(responses[selectedResponse]);
} 

function handleRequest7500(request, response) {
	var responses = ["You're literally the worst person ever", "Your face looks like it was smashed with a frying pan", "You have no friends", "WHY do you suck so much?", "Just give up...like seriously."];

	var selectedResponse = Math.floor(Math.random() * 5);
	response.end(responses[selectedResponse]);
}

var server7000 = http.createServer(handleRequest7000);

server7000.listen(PORT7000, function() {
	console.log("Server listening on: http://localhost:" + PORT7000);
});

var server7500 = http.createServer(handleRequest7500);

server7500.listen(PORT7500, function() {
	console.log("Server listening on: http://localhost:" + PORT7500);
});