var express = require("express");
var exphbs = require("express-handlebars");

var app = express();

var port = 3000;

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

var icecreams = [
    {name: 'vanilla', price: 10, awesomeness: 3},
    {name: 'chocolate', price: 4, awesomeness: 8},
    {name: 'banana', price: 1, awesomeness: 1},
    {name: 'greentea', price: 5, awesomeness: 7},
    {name: 'jawbreakers', price: 6, awesomeness: 2},
  ];

  app.get("/icecream/:name", function(req, res){
      var iceCreamType = req.params.name;

      for (var i = 0; i < icecreams.length; i++) {
          if(icecreams[i].name === iceCreamType) {
              res.render("index", icecreams[i]);
          }
      }ç
  });

  app.get("/icecreams", function(req, res){
      res.render("icecreams", {icecreams: icecreams});
  });

  app.listen(port);