// Initialize Firebase (YOUR OWN APP)
// Initialize Firebase
var config = {
  apiKey: "AIzaSyCdF2BOqAuAkOFXrMXJrZjL1WUPZtv9dwM",
  authDomain: "myfirstproject-12547.firebaseapp.com",
  databaseURL: "https://myfirstproject-12547.firebaseio.com",
  projectId: "myfirstproject-12547",
  storageBucket: "myfirstproject-12547.appspot.com",
  messagingSenderId: "692818555424"
};

firebase.initializeApp(config);

var database = firebase.database();

// Set Initial Counter
var initialValue = 100;

var clickCounter = initialValue;

// --------------------------------------------------------------

// At the initial load, get a snapshot of the current data.
database.ref().on("value", function(snapshot){
	console.log(snapshot.val());

	if(snapshot.val() === null){
		// Save new value to Firebase. will execute the value function. This is ok beceause it is in a conditional. However if it wasnt in a conditional, it would be an infinite loop
	  database.ref().set({
	  	clickCount: clickCounter
	  });
	}
	else{

		clickCounter = snapshot.val().clickCount;

		$("#click-value").html(clickCounter);

		console.log("ClickCounter: " + clickCounter);
	}
})

// Print the initial data to the console.


// Change the html to reflect the initial value.


// Change the clickCounter to match the data in the database


// Log the value of the clickCounter


// Change the HTML Value


// If any errors are experienced, log them to console.

// --------------------------------------------------------------

// Whenever a user clicks the click button
$("#click-button").on("click", function() {

  // Reduce the clickCounter by 1
  clickCounter--;


  // Alert User and reset the counter
  if(clickCounter === 0){
  	alert("You Made It!");

  	clickCounter = initialValue;
  }


  // Save new value to Firebase
  database.ref().set({
  	clickCount: clickCounter
  })

  // Log the value of clickCounter
  console.log(clickCounter);

});

// Whenever a user clicks the restart button
$("#restart-button").on("click", function() {

  // Set the clickCounter back to initialValue
  clickCounter = initialValue;

  // Save new value to Firebase
  database.ref().set({
  	clickCount: clickCounter
  });

  // Log the value of clickCounter
  console.log(clickCounter);

  // Change the HTML Values
  $("#click-value").html(clickCounter);

});
