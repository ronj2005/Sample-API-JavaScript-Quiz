// set variables
var welcomeId = document.querySelector("#quiz-title");
var quizId = document.querySelector("#quizId");
var endQuiz = document.querySelector("#endQuiz");
var resultId = document.querySelector("#resultId");
var startQuizBtn = document.querySelector("#startQuizBtn");
var finalScore = document.querySelector("#finalScore");
var userNameInput = document.querySelector("#userName-text");
var userNameForm = document.querySelector("#userName-form");
var submituserNames = document.querySelector("#submituserNames");
var userNameCountSpan = document.querySelector("#userName-count");
var userNameList = document.querySelector("#userName-list");
var correct = document.querySelector("#correct");
var wrong = document.querySelector("#wrong");
var question = document.querySelector("#question");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");

// Create the questions array.


var questionArray = [{

    question: "What is JavaScript?",
    answers: ["used to cretae dynamic websites", "CPU mainframe", "used for backing up device", "used to purchase email account"],
    correctAnswerIndex: "0"
}, {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: ["Javascript", "Terminal / Bash", "Console logs", "For loops"],
    correctAnswerIndex: "3"
}, {
    question: "What does CSS stand for?",
    answers: ["computer style sheet", "cascading sheet style", "computer sheet style", "cascading style sheet"],
    correctAnswerIndex: "3"
}, {
    question: "Web api is:",
    answers: ["JavaScript", "application programming interface", "application interface program", "application programming interlace"],
    correctAnswerIndex: "1"
}, {
    question: "What is HTML?",
    answers: ["hyperlink markup link", "hotmail language", "hypertext markup language", "hyperlink markup link"],
    correctAnswerIndex: "2"
}, {
    question: "Commonly use data types DO NOT Include:",
    answers: ["Strings", "Booleans", "Alerts", "Numbers"],
    correctAnswerIndex: "2"
}, {
    question: "The condition in an if/else statement is enclosed within:",
    answers: ["Quotes", "Curly brackets", "Parentheses", "Square brackets"],
    correctAnswerIndex: "2"
}, {
    question: "Arrays in Javascript can be used to store all except:",
    answers: ["Numbers and Strings", "Null", "Objects", "All of the above"],
    correctAnswerIndex: "1"
}, {
    question: "String values must be enclosed within:",
    answers: ["Commas", "Curly brackets", "Quotes", "Parentheses"],
    correctAnswerIndex: "1"
}, {
    question: "Arrays can be used to store ",
    answers: ["booleans", "numbers", "strings", "all of the above"],
    correctAnswerIndex: "3"
    }
];
    

var i = 0;
var answerChoice = "";
var correctAnswer = "";

var listOfAnswers = [];
var userNames = [];
var highScores = [];



var codeTimer = 60;
var timerFinish = document.querySelector("#counterId").textContent;

init();

function init() {
 
    var storedHighScores = JSON.parse(localStorage.getItem("highScores"));


    if (storedHighScores !== null) {
        highScores = storedHighScores.sort((a, b) => b - a);
    }

}

function codeQuiz() {

    var currentQuestion = questionArray[i];
    question.textContent = currentQuestion.question;
    answer1.textContent = currentQuestion.answers[0];
    answer2.textContent = currentQuestion.answers[1];
    answer3.textContent = currentQuestion.answers[2];
    answer4.textContent = currentQuestion.answers[3];
    correctAnswer = currentQuestion.correctAnswerIndex;
}

$(".answer").click(function() {
    answerChoice = this.value;
    listOfAnswers.push(answerChoice);

    if (answerChoice === correctAnswer) {
        correct.setAttribute("style", "display: inline-block;");
        wrong.setAttribute("style", "display: none;");
        resultId.setAttribute("style", "display: inline-block;")
            // console.log("Correct")
    }
    if (answerChoice !== correctAnswer) {
        codeTimer -= 4;
        $("#counterId").html('00:' + codeTimer);
        // console.log("-10 Seconds!")
        correct.setAttribute("style", "display: none;");
        wrong.setAttribute("style", "display: inline-block;");
        // console.log("Wrong")
    }
    if (i === 10) {
        quizId.setAttribute("style", "display: none;");
        endQuiz.setAttribute("style", "display: inline-block;");
    }
    if (i !== 10) {
        return i = i + 1, codeQuiz();
    }
});

function quizTimer() {

    welcomeId.setAttribute("style", "display: none;");
    quizId.setAttribute("style", "display: inline-block;");

    var timer = setInterval(function() {

        codeTimer--;
        $("#counterId").html('00:' + codeTimer);
        if (codeTimer === 0) clearInterval(timer)

        if (codeTimer === 0) {

            quizId.setAttribute("style", "display: none;");
            endQuiz.setAttribute("style", "display: inline-block;");
        }

        if (listOfAnswers.length === 10) {
            quizId.setAttribute("style", "display: none;");
            endQuiz.setAttribute("style", "display: inline-block;");
            clearInterval(timer)
            finalScore.textContent = codeTimer;

        }

    }, 1000);

};

function storeHighscores() {
    // Sort highScores in Descending order - most time left is highest score
    highScores.sort((a, b) => {
            if (a.score < b.score) {
                return 1
            } else {
                return -1
            }
        })
        // Stringify and set "highScores" key in localStorage to highScores array
    localStorage.setItem("highScores", JSON.stringify(highScores));
};

startQuizBtn.addEventListener("click", codeQuiz);
startQuizBtn.addEventListener("click", quizTimer);

userNameForm.addEventListener("submit", function(event) {
    event.preventDefault();

  
    var userNameText = userNameInput.value.trim().toUpperCase();
    var userNames = [];

    if (userNameText === "") {
        return;
    };
  
    userNames.push(userNameText);
    // console.log(userNames);
    userNameInput.value = "";

    generateNewHighScore();

    function generateNewHighScore() {

       
        userNameList.textContent = "";
        

        var lastUser = userNames[(userNames.length - 1)];
        var userScore = parseInt(finalScore.textContent);
        userNameCountSpan.textContent = userNames.length;

        var newHighscore = { user: lastUser, score: userScore }
        highScores.push(newHighscore);

        storeHighscores();
        window.location.href = "data.html";
    };
});