var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var fs = require("fs");
var reservations = fs.readFileSync(__dirname + "/reservations.json");
var reservations = JSON.parse(reservations);

function reservation() { 
  this.id;
  this.name;
  this.phone;
  this.email;
  this.waitlist = 0;
  this.generateUniqueID = function () {
    var max = 1;
    for (var key in reservations) {
      if (reservations[key].id > max) {
        max = reservations[key].id + 1;
      }
    }
    this.id = max;
  }
  this.isWaitlist = function() {
    var num = 0;
    for (var key in reservations) {
        num++;
    }

    if (num > 4) {
      this.waitlist = 1;
    }
  }
}


var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

 

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "add.html"));
});
app.get("/home", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

 app.get("/all", function(req, res) {
  res.json(reservations);
});

 app.get("/clear", function(req, res) {
  reservations = [];
  fs.writeFileSync(JSON.stringify(reservations));
  res.sendFile(path.join(__dirname, "view.html"));

 });

app.post("/add/new", function(req, res) {

  var reservation = new reservation();
  reservation.name = req.body.name;
  reservation.phone = req.body.phone;
  reservation.email = req.body.email;
  reservation.generateUniqueID();
  reservation.isWaitlist();  
 
  console.log(newReservation);

  reservations.push(newReservation);

  fs.writeFileSync(JSON.stringify(reservations));


 });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});