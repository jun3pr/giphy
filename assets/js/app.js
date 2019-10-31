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
   
    let shows = $("#topicInput").val().trim();
        if (shows == ""){
            return false;//no blank buttons
            }

    topic.push(shows);
        displayGifButtons();
            return false;
            });
            }