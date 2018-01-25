var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "ice_creamDB"
});

connection.connect(function(err) {
  if (err) throw err; //throw keyword stops program and console.logs the error.
  console.log("connected as id " + connection.threadId);
  connection.end();
});
