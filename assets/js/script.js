var previousSearch = []

// Api call
$("#submit").click(function () {
  //Get value from when user types in city
  var input = $("#userInput").val();
  previousSearch.push (input)
  console.log(previousSearch)
  $.getJSON(
    "http://api.openweathermap.org/data/2.5/forecast?q=" +
      input +
      "&units=metric&APPID=a05a45a9905cbe052cad2b21f009f6bb",
    function (data) {
      for (let loop = 1; loop < 6;loop++){
        var temp= temp
        $("#temp").text("Temp: " + data.list[0].main.temp)
        $("#wind").text("Wind: " + data.list[0].wind.speed)
        $("#humi").text("Humidity: " + data.list[0].main.humidity)
        console.log(data)
      }
    }
  );
});

// 

// A $( document ).ready() block.
$(document).ready(function () {
  var currentDate = moment();
  $("#cityPlace").text("" + currentDate.format("l"));
  for (let index = 1; index < 6; index++) {
    var futureDays = moment().add(index, "days");
    $("#day" + index).text(futureDays.format("l"));
  }
});


you