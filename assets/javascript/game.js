$(document).ready(function() {

var animalArray = ["cat", "dog", "mouse", "horse", "dragon", "batman", "snake", "goku", "naruto", "mustang"];


// create buttons
for (var i = 0; i < animalArray.length; i++) {
    var gifButton = $("<button>");
    gifButton.text(animalArray[i]);
    gifButton.attr("data-button", animalArray[i]);
    $("#gif-button").append(gifButton);
}

//if an animal button is clicked
$("#gif-button").on("click", "button", function() {
    var searchid = $(this).attr("data-button");
    console.log(searchid);


// I"ve grayed out this section of code until I can get the attribute data-button to come to this function.
   var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
   searchid + "&api_key=dc6zaTOxFJmzC&limit=10";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response) {
    var results = response.data
    console.log(results);
//    for (var i = 0; i < results.length; i++) {
//    var animalDiv = $("<div>");
//    var rating = results[i].rating;
//    var p = $("<p>").text("Rating: " + rating);
//    var animalImage = $("<img>");
//    animalImage.attr("src", results[i].images.fixed_height.url);
//    animalImage.prepend(p);
//    animalDiv.prepend(animalImage);
//    $("#gifs-appear-here").prepend(animalDiv);

});


});



//if the "submit" button is clicked
$("#add-search").on("click", function() {
    event.preventDefault();
    var gifInfo = $("#gif-input").val().trim();
    var gifButton = $("<button>");
    gifButton.text(gifInfo);
    gifButton.attr("data-button", gifInfo);
    $("#gif-button").append(gifButton);

});
});


