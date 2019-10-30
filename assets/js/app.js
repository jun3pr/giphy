$( document ).ready(function() {
    // my array
    let topic = [];
    //function that displays the gif buttons
    
    function displayGifButtons() {
        $("#gifButtonsView").empty();
        for (let i = 0; i < topic.length; i++) {
        let gifButton = $("<button>");
        
        gifButton.addClass("");
        gifButton.addClass("btn btn-primary")
        gifButton.attr("data-name", topic[i]);
        gifButton.text(topic[i]);
        $("#gifButtonsView").append(gifButton);
        }
        }