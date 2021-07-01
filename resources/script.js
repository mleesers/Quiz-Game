timeEl = document.querySelector(".time")
responseEl = document.querySelector(".response")
answer1 = document.getElementById("answer1");
answer2 = document.getElementById("answer2");
answer3 = document.getElementById("answer3");
answer4 = document.getElementById("answer4");
next = document.getElementById("next");
initialSet = document.getElementById("initials");
submitbut = document.getElementById("submit");


secondsLeft = 60;
correct = 0;
wrong = 0;
total = wrong + correct;

function scoreSet(){
    highScore = {
        Initials: initialSet.value,
        Score: correct
    }
    localStorage.setItem("highScore", JSON.stringify(highScore));
}
function renderScores(){
    highScore1 = JSON.parse(localStorage.getItem("highScore"));
    if (highScore1 !== null) {
        document.getElementById("initialsPrint").innerHTML = highScore1.Initials;
        document.getElementById("scorePrint").innerHTML = highScore1.Score;
        }else {
            return;
        }
}

function timeOut(){
    document.querySelector(".card").style.display = "none";
    document.getElementById("timeOut").style.display = "block";
}

 
submitbut.addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById("scorePage").style.display = "block";
    scoreSet();
    renderScores();

});


function timer(){
    timeInterval = setInterval(function(){
        timeEl.textContent = "Time: " + secondsLeft;
        if(secondsLeft <= 0){
            clearInterval(timeInterval);
            timeOut();
        }else{
            secondsLeft--;
        }
    },1000);
  
}
function correctAnswer(event){
    responseEl.textContent = "Correct!"
    correct += 1;
    n = true;
}
function wrongAnswer(event){
    responseEl.textContent = "Wrong!"
    wrong += 1;
    secondsLeft -= 10;
    n = true;
}
function main(){
    document.querySelector(".questions").style.display = "none";
    document.getElementById("timeOut").style.display = "none";
    document.getElementById("endDisplay").style.display = "none";
    document.getElementById("scorePage").style.display = "none";
    scoreSet();
    document.getElementById("start").addEventListener("click", function(event){
        event.preventDefault();
        document.querySelector(".quizStart").style.display = "none";
        timer();
        question1();
    });
    
}
main();


function question1(){
    document.querySelector(".questions").style.display = "block";
    document.getElementById("question").innerText = "Commonly used data types DO NOT Include ____.";
    for(i=1;i<=4;i++){
        arr = ["empty","strings","booleans","alerts","numbers"];
        document.getElementById("answer" + i).innerHTML = i + "."  + arr[i];
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
    document.getElementById("answer1").addEventListener("click", function(){
        wrongAnswer();
        question3();
    });
    document.getElementById("answer2").addEventListener("click", function() {
        wrongAnswer();
        question3();
    });
    document.getElementById("answer3").addEventListener("click", function(){
        correctAnswer();
        question3();
    });
    document.getElementById("answer4").addEventListener("click", function() {
        wrongAnswer();
        question3();
    });
    
}


function question3(){
    document.getElementById("question").innerHTML = "Arrays in JavaScript can be used to store ____.";
    for(i=1;i<=4;i++){
        arr = ["empty","numbers and strings","other arrays","booleans","all of the above"]
        document.getElementById("answer" + i).innerHTML = arr[i]
    }
    document.getElementById("answer1").addEventListener("click", function(){
        wrongAnswer();
        question4();
    });
    document.getElementById("answer2").addEventListener("click", function() {
        wrongAnswer();
        question4();
    });
    document.getElementById("answer3").addEventListener("click", function(){
        wrongAnswer();
        question4();
    });
    document.getElementById("answer4").addEventListener("click", function() {
        correctAnswer();
        question4();
    });
}

function question4(){
    document.getElementById("question").innerHTML = "string values must be enclose within ____ when being assigned to variables."
    for(i=1;i<=4;i++){
        arr = ["empty","commas","curly brackets","quotes","parentheses"]
        document.getElementById("answer" + i).innerHTML = arr[i]
    }
    document.getElementById("answer1").addEventListener("click", function(){
        wrongAnswer();
        question5();
    });
    document.getElementById("answer2").addEventListener("click", function() {
        wrongAnswer();
        question5();
    });
    document.getElementById("answer3").addEventListener("click", function(){
        correctAnswer();
        question5();
    });
    document.getElementById("answer4").addEventListener("click", function() {
        wrongAnswer();
        question5();
    });
}


function question5(){
    document.getElementById("question").innerHTML = "A very useful tool used during development and debugging for printing content to the debugger is:"
    for(i=1;i<=4;i++){
        arr = ["empty","JavaScript","terminal/bash","for loops","console.log"]
        document.getElementById("answer" + i).innerHTML = arr[i]
    }
    document.getElementById("answer1").addEventListener("click", function(){
        correctAnswer();
        question5();
    });
    document.getElementById("answer2").addEventListener("click", function() {
        wrongAnswer();
        question5();
    });
    document.getElementById("answer3").addEventListener("click", function(){
        wrongAnswer();
        question5();
    });
    document.getElementById("answer4").addEventListener("click", function() {
        wrongAnswer();
        question5();
    });

}
