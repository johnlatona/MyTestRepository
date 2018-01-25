var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var port = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "quotes_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

app.use(express.static(path.join(__dirname, "public")));

app.get("/", function(req, res){
  connection.query("SELECT * FROM quotes;", function(err, data){
    if (err){
      return res.status(500).end();
    }
    res.render("index", { quotes: data });
  });
});

app.get("/:id", function(req, res){
  connection.query("SELECT * FROM quotes WHERE id = ?;", [req.params.id], function(err, data){
    if (err){
      return res.status(500).end();
    }
    res.render("single-quote", data[0]);
  });
});

app.post("/", function(req,res){
  connection.query("INSERT INTO quotes (author, quote) VALUES (?, ?)", [req.body.author, req.body.quote], function(err, data) {
    if (err) {
      return res.status(500).end();
    }
    res.json({id: data.insertID});
  });
});

app.put("/api/quotes/:id", function(req,res){
  connection.query("UPDATE quotes SET quote = ? WHERE id = ?", [req.body.quote, req.params.id], function(err, data) {
    if (err) {
      return res.status(500).end();
    }
    res.status(200).end();
  });
});

app.delete("/api/quotes/:id", function(req,res){
  connection.query("DELETE FROM quotes WHERE id = ?", req.params.id, function(err, data) {
    if (err) {
      return res.status(500).end();
    }
    res.status(200).end();
  });
});


app.listen(port, function() {
  console.log("Listening on PORT " + port);
});
