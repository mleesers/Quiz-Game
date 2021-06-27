/*correct = 0;
wrong = 0;
total = wrong + correct;
highScore = 0;
function timer(){
    secondsLeft = 60;
    var timeInterval = setInterval(function(){
        secondsLeft--;
    },1000);
    console.log(secondsLeft);
    if(secondsLeft != 0 || total != 5){
        main();
    }
    else if(secondsLeft == 0);{
    console.log("You have failed to answer all the questions in time")
    }
}
timer();
function correctAnswer(){
    window.alert("Correct!");
        correct += 1;
}
function wrongAnswer(){
    window.alert("Incorrect!");
        wrong += 1;
        secondsLeft -= 10;
}*/
function main(){
    console.log("start Button");
    question1();
    /*console.log(correct);
    console.log(wrong);
    highScore = correct;
    console.log(highScore)*/
}
main();

function question1(){
   document.getElementById("question").innerHTML = "Commonly used data types DO NOT Include ____";
    for(i=1;i<=4;i++){
        arr = ["empty","strings","booleans","alerts","numbers"]
        document.getElementById("answer" + i).innerHTML = arr[i]
    }
    /*window.alert("Commonly used data types DO NOT Include ____. \n 1.strings, 2.booleans 3.alerts 4.numbers");
    answer = window.prompt("Enter a number bewteen 1-4: ");
    if(answer == 3){
        correctAnswer();
    }else{
        wrongAnswer();
    }
    question2();*/
}/*
function question2(){
    window.alert("The condition in an if/else statement is enclosed within _____. \n 1.quotes, 2.curly brackets 3.parentheses 4.square brackets");
    answer = window.prompt("Enter a number bewteen 1-4: ");
    if(answer == 2){
        correctAnswer();
    }else{
        wrongAnswer();
    }
    question3();
}
function question3(){
    window.alert("Arrays in JavaScript can be used to store ____. \n 1.numbers and strings 2.other arrays 3.booleans 4.all of the above");
    answer = window.prompt("Enter a number bewteen 1-4: ");
    if(answer == 4){
        correctAnswer();
    }else{
        wrongAnswer();
    }
    question4();
}
function question4(){
    window.alert("string values must be enclose within ____ when being assigned to variables. \n 1.commas, 2.curly brackets 3.quotes 4.parentheses");
    answer = window.prompt("Enter a number bewteen 1-4: ");
    if(answer == 3){
        correctAnswer();
    }else{
        wrongAnswer();
    }
    question5();
}

function question5(){
    window.alert("A very useful tool used during development and debugging for printing content to the debugger is: \n 1.JavaScript, 2.terminal/bash 3.for loops 4.console.log");
    answer = window.prompt("Enter a number bewteen 1-4: ");
    if(answer == 4){
        correctAnswer();
    }else{
        wrongAnswer();
    }
}

*/