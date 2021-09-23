var startBtn = document.querySelector(".startBtn");
var timeElement= document.querySelector(".timer-count");
var timeOut = document.querySelector(".time-out");
var btnBox = document.querySelector(".box1")


startBtn.addEventListener("click", function (event) {
    var pressStart = event.target;
  
    
    if (pressStart !== startBtn) {
        console.log("not working");
        event.preventDefault();
    }

    else {
        startBtn.setAttribute("visible", "hidden");
        console.log("working");
        startBtn.style.display = "none"
        btnBox.style.display = "none"
    }

    var secLeft = 60;
    // var secLeft = questions.length * 15;

    var countDown = setInterval(function () {
        
        if (pressStart) {
            secLeft--;            
        }
            
        if (secLeft <= 0 ) {
            secLeft = 0;
            timeOut.textContent = "Time's Up";
        };
        timeElement.textContent = secLeft;

        if (pressStart = true) {
            pressStart = countDown;
            
        }
        }, 1000);

        var questions = [];
// questions array
var questions = [
    {
    Question: "Which of the following is a server-side Java Script object?",
    choices: ["Function", "File", "File Upload", "Date"],
    answer: "Date",
    }, 
    {
    Question: "What is the alternate name for Java script?",
    choices: ["LimeScript", "Both a and b", "ECMScript", "ECMAScript"],
    answer: "ECMAScript",
    },
    {
    Question: "To insert a JavaScript into an HTML page, which tag is used?",
    choices: ["< script=’java’>", "< javascript>", "< script>", "<js>"],
    answer: "<script>",
    },
    {
    Question: "Which of the below is used in Java script to insert special characters?",
    choices: ["&", "/", "-", "%"],
    answer: "&",
    },
    {
    Question: "Which attribute needs to be changed to make elements invisible?",
    choices: ["visibility", "visible", "invisibility", "invisible"],
    answer: "visibility",
    },
    {
    Question: "What java wrapper type is created when a JavaScript object is sent to Java?",
    choices: ["ScriptObject", "JavaObject", "jobject", "JSObject"],
    answer: "JSObject",
    },
    {
    Question: "Which is the correct way to write a JavaScript array?",
    choices: ["&", "/", "-", "%"],
    answer: "&",
    },
    {
    Question: "Which of the following is correct to write “Hello World” on the web page?",
    choices: ["&", "/", "-", "%"],
    answer: "&",
    },
    {
    Question: "Which of the following is correct to write “Hello World” on the web page?",
    choices: ["&", "/", "-", "%"],
    answer: "&",
    },
    {
    Question: "Which of the following is the tainted property of a window object in Java Script?",
    choices: ["&", "/", "-", "%"],
    answer: "&",
    },
];


var indexCurrentQ = 0;
var indexCurrentA = 0;

//increamenting index value to get the next question
var nextQuestionSet = document.querySelector(".nextQuestion");
var nextAnswerSet = document.querySelector(".answerBtn");
nextQuestionSet.addEventListener("click", function(event) {
    event.preventDefault();
varQuestionBox = nextAnswerSet + nextQuestionSet; 
    indexCurrentQ++;
    indexCurrentA++;
    getQuestion();
})


var qtitle = document.querySelector(".qtitle");
var ol = document.querySelector("ol");

function getQuestion () {
    var currentQ = questions[indexCurrentQ];
    var answerBtn = document.querySelector(".answerBtn")
    qtitle.textContent = currentQ.Question;

    for(var i =0; i< currentQ.choices.length; i++){
        // var li = document.createElement("li");
        answerBtn.textContent = currentQ.choices[i];
        ol.appendChild(answerBtn);
        

}
}
getQuestion();

})

