var countDownDate = getNextDayOfWeek(new Date(), 5);

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("displayTime").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";


  document.getElementById("displayTime2").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  var htmlText = ''
  // If the count down is finished, write some text
  if(days < 3 && days >=0){
    document.getElementById("displayFriday").innerHTML = "Ya casi es viernes!";
    if(document.getElementById("homer").classList.contains('hidden')){
      document.getElementById("homer").classList.remove('hidden')
      document.getElementById("timer").classList.add('hidden')

    }


  }else{
    if(document.getElementById("timer").classList.contains('hidden')){
      document.getElementById("timer").classList.remove('hidden')
      document.getElementById("homer").classList.add('hidden')
    }
  }
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("displayTime").innerHTML = "YA ES VIERNES!";
    document.getElementById("displayFriday2").innerHTML = "Ya casi es viernes!";

  }
}, 1000);

function checkVisibility(toBeVisible){

}

function getNextDayOfWeek(date, dayOfWeek) {
    // Code to check that date and dayOfWeek are valid left as an exercise ;)

    var resultDate = new Date(date.getTime());

    resultDate.setDate(date.getDate() + (7 + dayOfWeek - date.getDay()) % 7);
    resultDate.setHours(14);
    resultDate.setMinutes(00);
    resultDate.setSeconds(01);
    return resultDate.getTime();
}