// *********************************************************************************
// TO DO:
// 1. Display all chirps on page load
// 2. Add new chirp to database and prepend to existing chirps
// *********************************************************************************

// When the page loads, grab and display all of our chirps
$(document).ready(function() {

    function getAllChirps() {
        $(".chirp").remove();
        $.ajax("/api/allChirps", {
            type: "GET"
        }).then(function(data) {
            for(var i = 0; i < data.length; i++) {
                var chirp = $("<div>");
                chirp.addClass("chirp");
    
                chirp.append(`<p>${data[i].author}</p>`);
                chirp.append(`<p>${data[i].chirp}</p>`);
                chirp.append(`<p>${data[i].created}</p>`);
    
                $("#chirps").append(chirp);
            }
        });     
    }

    getAllChirps();

    $("#addChirp").on("click", function(event) {
        event.preventDefault();

        var newChirp =  {
            author: $("#author").val().trim(),
            chirp: $("#chirp").val().trim()
        }

        $("#author").val("");
        $("#chirp").val("");

        $.ajax("/api/new", {
            type: "POST",
            data: newChirp
        }).then(function(data){
            getAllChirps();
        })
    })

    
});


// When user chirps
