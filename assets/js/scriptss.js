var currentDate = moment();


// A $( document ).ready() block.
$(document).ready(function () {
    $("#cityPlace").text("My City " + currentDate.format("l"));
    for (let index = 1; index < 6; index++) {
      var futureDays = moment().add(index, "days");
      $("#day" + index).text(futureDays.format("l"));
    }
});

var userData= document.getElementById("userInput");
var cityPlace= document.getElementById("cityPlace");

function collectInfo(){
    cityPlace.innerHTML = userData.value + currentDate.format("l")
}


// A $( document ).ready() block.
$(document).ready(function () {
    $("#cityPlace").text("" + currentDate.format("l"));
    for (let index = 1; index < 6; index++) {
      var futureDays = moment().add(index, "days");
      $("#day" + index).text(futureDays.format("l"));
    }
});