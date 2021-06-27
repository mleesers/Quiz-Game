correct = 0;
wrong = 0;
highScore = 0;
secondsLeft = 60;
function timer(){
    var timeInterval = setInterval(function(){
        console.log(secondsLeft);
        secondsLeft--;
    },1000);
}
function correct(){

}
function wrong(){
    
}
function main(){
    console.log("start Button")
    timer();
    question1();
}

function question1(){
    window.alert("Commonly used data types DO NOT Include: \n 1.strings, 2.booleans 3.alerts 4.numbers");
    answer = window.prompt("Enter a number bewteen 1-4: ");
    if(answer === 3){
        window.alert("Correct!");
        correct += 1;
    }else{
        window.alert("Incorrect!");
        wrong += 1;
    }
}