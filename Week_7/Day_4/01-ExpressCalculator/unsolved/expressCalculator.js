// Dependencies
var express = require("express");

// Create express app instance.
var app = express();

// Routes
// What routes do you need to have? Which ones are optional?
// TODO Add your routes here
app.get("/:operation/:num1?/:num2?", function(req, res) {

  // TODO parse out the variables from the request
  // Parameters are received from the URL
  // TODO make sure they're converted to integers (and not strings)
  // Parameters are converted to integers

  var firstNumber = parseFloat(req.params.num1);
  var secondNumber = parseFloat(req.params.num2);
  var operation = req.params.operation;

  // Initialize the result variable to send later
  var result;
  // Switch statement chooses operation based on the operation parameter.
  switch (operation) {
    // BONUS - How could you use * + etc. inside the app.get()?
    case "add":
      result = firstNumber + secondNumber;
      // Add your logic here. Pun intended.
      break;
    case "subtract":
      result = firstNumber - secondNumber;
      // Subtract logic
      break;
    case "multiply":
      result = firstNumber * secondNumber;
      // Multiply
      break;
    case "divide":
      result = firstNumber / secondNumber;
      // Divide
      break;
    default:
      // Handle anything that isn't specified
      result =
        "Sorry! The only valid operations are add, subtract, multiply, and divide.";
  }

  // We return the result back to the user in the form of a string
  res.send(result.toString());

});

// Initiate the listener.
app.listen(3002);
