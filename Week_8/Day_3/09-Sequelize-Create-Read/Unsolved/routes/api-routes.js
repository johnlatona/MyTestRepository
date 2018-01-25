// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/todos", function(req, res) {
    db.Todo.findAll({}, function(data){
      res.json(data);
    });
  })

  // POST route for saving a new todo. We can create todo with the data in req.body
  app.post("/api/todos", function(req, res) {
    // Write code here to create a new todo and save it to the database
    // and then res.json back the new todo to the user
    var newTodo = req.body;
    db.Todo.create({
      text: newTodo.text,
      complete: newTodo.complete
    }).then(function(data){
      res.json(data);
    })
  });

  // DELETE route for deleting todos. We can get the id of the todo to be deleted from
  // req.params.id
  app.delete("/api/todos/:id", function(req, res) {
    var idSelected = req.params.id;
    db.Todo.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(data){
      res.json(data);
    });
  });

  // PUT route for updating todos. We can get the updated todo data from req.body
  app.put("/api/todos", function(req, res) {
    db.Todos.update({
      text: req.body.text,
      completed: req.body.completed
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(data){
      res.json(data);
    });
  });
};
