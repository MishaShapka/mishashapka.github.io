$(document).ready(function(){
    $("#countdown").countdown({
        date: "10 april 2019 12:00:00",
        format: "on"
    },
    
    function() {
        // callback function
    });
});