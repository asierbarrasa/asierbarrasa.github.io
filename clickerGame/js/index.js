
$( document ).ready(function() {
    var timeleft = 0;
    var counter = 0;
 var foo =  document.getElementById("clickEventHandler").addEventListener("click", function(){
     if(timeleft == 0){
     timeleft = 10;
     counter = 0;
    var downloadTimer = setInterval(function function1(){
    document.getElementById("timer").innerHTML = timeleft;

    timeleft -= 1;
    if(timeleft <= 0){
        timeleft = -100;
        clearInterval(downloadTimer);
        document.getElementById("timer").innerHTML = "Time is up!"
    }
    }, 1000);
     }
if(timeleft > 0){
     counter +=1;
     document.getElementById("count").innerHTML = counter;
        var back = ["red","blue","gray","green","yellow"];
        var rand = back[Math.floor(Math.random() * back.length)];
        $('#clickEventHandler').css('background',rand);
}
   // console.log(countdown);
});
    
});