var express = require("express");
var db = require("./models");

var port = process.env.PORT || 3000;
var app = express();

db.sequelize.sync().then(function(){
    app.listen(port, function(){
        console.log("App listening on PORT: " + port);
    });
});