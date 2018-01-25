// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps
  app.get("/api/allChirps", function(req, res) {
    connection.query("SELECT * FROM chirps", function(err, data){
      if (err) {
        res.status(500).end();
      }
      res.json(data);
    });
  });

  // Add a chirp
  app.post("/api/new", function(req, res) {
    connection.query("INSERT INTO chirps (author, chirp) VALUES(?, ?)", [req.body.author, req.body.chirp], function(err, data) {
      if (err) {
        res.status(500).end();
      }
      res.json("Chirp added at id: " + res.insertId);
    });
  });
};
