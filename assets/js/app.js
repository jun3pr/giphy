$( document ).ready(function() {
   
    // my array
    let topic = ["Game Of Thrones","Breaking Bad","House Of Cards","Peaky Blinders","Money Heist","Elite","Spartacus","The Night Of"];
    
    //function that displays the gif buttons
    
    function displayGifButtons() {
        $("#gifButtonsView").empty();
            for (let i = 0; i < topic.length; i++) {
                let gifButton = $("<button>");
        
        gifButton.addClass("shows");
        gifButton.addClass("btn btn-primary")
        gifButton.attr("data-name", topic[i]);
        gifButton.text(topic[i]);
       
        $("#gifButtonsView").append(gifButton);
    }}

        //function to add new button
    function addNewButton() {
    $("#addGif").on("click", function() {
   
    //no blank buttons
        let shows = $("#topicInput").val().trim();
        if (shows == ""){
            return false;
    }

    topic.push(shows);
        displayGifButtons();
            return false;
            });
    }
        
        //function that displays the gifs

    function displayGifs() {
        let shows = $(this).attr("data-name");
            let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + shows + "&api_key=dc6zaTOxFJmzC&limit=8";

    $.ajax({
        url: queryURL,
        method: 'GET'
    })


    .done(function(response) {
        $("#gifsView").empty();
    
        //show results of gifs
    
    let results = response.data;
        if (results == ""){
        alert("Ehh no GIF for this!");
    }

    for (let i = 0; i<results.length; i++){
        
        //put gifs in a div
        let gifDiv = $("<div1>");


        //pull rating of gif
    let gifRating = $("<p>").text("Rating " + results[i].rating);
    gifDiv.append(gifRating);


//pull gif
let gifImage = $("<img>");
gifImage.attr("src", results[i].images.fixed_height_small_still.url);
//paused images
gifImage.attr("data-still", results[i].images.fixed_height_small_still.url);
//animated images
gifImage.attr("data-animate", results[i].images.fixed_height_small.url);