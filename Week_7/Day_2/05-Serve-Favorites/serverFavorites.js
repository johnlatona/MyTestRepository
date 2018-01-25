
var http = require("http");
var fs = require("fs");

var PORT = 8080;

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
	var path = req.url;

	var fileName;

	switch(path) {
		case "/":
			fileName = "index.html";
			break;

		case "/foods":
			fileName = "foods.html";
			break;

		case "/movies":
			fileName = "movies.html";
			break;

		case "/css_frameworks":
			fileName = "favoritecss.html";
			break;
	}

	fs.readFile(__dirname + `/${fileName}`, function(err, data) {
		res.writeHead(200, { "Content-Type": "text/html" });
		res.end(data);
	});
}

server.listen(PORT, function() {
	console.log("Server is listening on PORT:" + PORT);
});