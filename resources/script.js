function timer(){
    secondsLeft = 30;
    var timeInterval = setInterval(function(){
        console.log(secondsLeft);
        secondsLeft--;
    },1000);
}