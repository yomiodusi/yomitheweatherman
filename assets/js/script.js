var previousSearch = []


// Api call
$("#submit").click(function () {
  //Get value from when user types in city
  var input = $("#userInput").val();
  previousSearch.push (input)
  console.log(previousSearch)
  $.getJSON(
    "http://api.openweathermap.org/data/2.5/weather?q=" +
      input +
      "&units=metric&APPID=a05a45a9905cbe052cad2b21f009f6bb",
    function (data) {
        $("#temp").text(data.main.temp)
        $("#wind").text(data.wind.speed)
        $("#humi").text(data.main.humidity)
        $("#uvi").text(data.main.temp)
        console.log(data)
    }
  );
});

// A $( document ).ready() block.
$(document).ready(function () {
  var currentDate = moment();
  $("#cityPlace").text("Atlanta " + currentDate.format("ll"));
  for (let index = 1; index < 6; index++) {
    var futureDays = moment().add(index, "days");
    $("#day" + index).text(futureDays.format("ll"));
  }
});
