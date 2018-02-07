/* TODO:

  1. Make a reusable function for creating a table body in index.html with the results from your MongoDB query
  Each row should have info for one animal.

  2. Make two AJAX functions that fire when users click the two buttons on index.html.
      a. When the user clicks the Weight button, the table should display the animal data sorted by weight.
      b. When the user clicks the Name button, the table should display the animal data sorted by name.

  Good luck!

  *Hint*: We don't want to keep adding to the table with each button click. We only want to show the new results.
  What can we do to the table to accomplish this?

  *Bonus*: Write code to set an 'active' state on the column header. It should make the color sorted-by column red.
  *Bonus*: Add additional ways to sort (e.g. by class or number of legs)
*/

// We'll be rewriting the table's data frequently, so let's make our code more DRY
// by writing a function that takes in data (JSON) and creates a table body
function displayResults(data) {
  $("tbody").empty();
  for (var i = 0; i < data.length; i++) {
    var newRow = $("<tr>");
    var rowInfo = data[i];
    for (key in rowInfo) {
      if(key === "_id") {
        continue;
      }
      else {
        var newEntry = $("<td>");
        newEntry.append(rowInfo[key]);
        newRow.append(newEntry);
      }
    }
    $("tbody").append(newRow);
  }
}

$.getJSON("/all", function(data) {
  // Call our function to generate a table body
  displayResults(data);
  console.log(data);
});

$("#weight-sort").on("click", function(event) {
  $("tbody").empty();
  event.preventDefault();
  $.getJSON("/weight", function(data) {
    displayResults(data);
    $("#animal-weight").css("color", "red");
    $("#animal-name").css("color", "black");
  });
});

$("#name-sort").on("click", function(event) {
  $("tbody").empty();
  event.preventDefault();
  $.getJSON("/name", function(data) {
    displayResults(data);
    $("#animal-name").css("color", "red");
    $("#animal-weight").css("color", "black");
  });
});
