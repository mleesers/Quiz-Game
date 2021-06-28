timeEl = document.querySelector(".time")
answer1 = document.getElementById("answer1");
answer2 = document.getElementById("answer2");
answer3 = document.getElementById("answer3");
answer4 = document.getElementById("answer4");
next = document.getElementById("next");
start = document.getElementById("start");
hideStart = document.querySelector(".card")

correct = 0;
wrong = 0;
total = wrong + correct;
highScore = 0;



function timer(){
    secondsLeft = 60;
    timeInterval = setInterval(function(){
        console.log(secondsLeft);
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft;
    },1000);
    console.log(secondsLeft);
    if(secondsLeft == 0){
        console.log("you ran out of time")
    }
}

function correctAnswer(){
    window.alert("fine")
    correct += 1;
    n = true;
}
function wrongAnswer(){
    window.alert("not today")
    wrong += 1;
    secondsLeft -= 10;
    n = true;
}
function main(){
    timer();
    question1();
}
main();

function question1(){
   document.getElementById("question").innerHTML = "Commonly used data types DO NOT Include ____.";
    for(i=1;i<=4;i++){
        arr = ["empty","strings","booleans","alerts","numbers"];
        document.getElementById("answer" + i).innerHTML = arr[i];
    }
    answer1.addEventListener("click", function() {
        wrongAnswer();
        question2();
    });
    answer2.addEventListener("click", function() {
        wrongAnswer();
        question2();
    });
    answer3.addEventListener("click", function() {
        correctAnswer();
        question2();
    });
    answer4.addEventListener("click", function() {
        wrongAnswer();
        question2();
    });
}
function question2(){
    document.getElementById("question").innerHTML = "The condition in an if/else statement is enclosed within _____.";
    for(i=1;i<=4;i++){
        arr = ["empty","quotes","curly brackets","parentheses","square brackets"]
        document.getElementById("answer" + i).innerHTML = arr[i]
    }
    document.getElementById("answer1").addEventListener("click", wrongAnswer);
    document.getElementById("answer2").addEventListener("click", correctAnswer);
    document.getElementById("answer3").addEventListener("click", wrongAnswer);
    document.getElementById("answer4").addEventListener("click", wrongAnswer);
    document.getElementById("next").addEventListener("click", question3)
    
    
}
/*
function question3(){
    document.getElementById("question").innerHTML = "Arrays in JavaScript can be used to store ____.";
    for(i=1;i<=4;i++){
        arr = ["empty","numbers and strings","other arrays","booleans","all of the above"]
        document.getElementById("answer" + i).innerHTML = arr[i]
    }
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
}*/