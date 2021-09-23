var startBtn = document.querySelector(".startBtn");
var timeElement= document.querySelector(".timer-count");
var timeOut = document.querySelector(".time-out");



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

var questions = [
    {
    Question: "What is 15+8?",
    choices: [3, 23, 33, 43],
    answer: 23,
    }, 
    {
    Question: "What is 99 * 3?",
    choices: [13, 223, 433, 553],
    answer: 233,
    },
    {
    Question: "WHat is Middle Name",
    choices: ["Jack", "Job", "Jones", "Luna"],
    answer: "Luna",
    },
    {
    Question: "What is US capital?",
    choices: [13, 223, 433, 553],
    answer: 233,
    }
];


var indexCurrentQ = 0;

//increamenting index value to get the next question
var nextQuestion = document.querySelector(".nextQuestion");
nextQuestion.addEventListener("click", function(event) {
    event.preventDefault();
    indexCurrentQ++;
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

