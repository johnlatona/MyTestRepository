// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function(){

 
  $(function() {

    // jQuery event handlers should go here.
    $(".create-form").on("submit", function(event) {
      event.preventDefault();

      var newQuote = {
        author: $("#auth").val().trim(),
        quote: $("#quo").val().trim()
      };

      $.ajax("/", {
        type: "POST",
        data: newQuote
      }).then(function(data){
        //reload the page
        location.reload();
      });
    });

    $(".update-form").on("submit", function(event) {
      event.preventDefault();

      var id = $(this).data("id");

      var updatedQuote = {
        id: id,
        quote: $("#quo").val().trim()
      };

      $.ajax("/api/quotes/" + id, {
        type: "PUT",
        data: updatedQuote
      }).then(function(data){
        //reload the page
        location.assign("/");
      });
    });
  });
});
