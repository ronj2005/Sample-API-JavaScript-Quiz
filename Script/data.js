
var userNameList = document.querySelector("#highScoresList");
init();
function init() {
  var storedHighScores = JSON.parse(localStorage.getItem("highScores"));

  if (storedHighScores !== null) {
    highScores = storedHighScores;
  }

  renderHighScores();
}

function renderHighScores() {
  for (var i = 0; i < highScores.length; i++) {
    var newHighScore = document.createElement("li");
    var userNumber = i + 1;
    var userName = highScores[i].user;
    var userScore = highScores[i].score;

    newHighScore.textContent =
      userNumber + ". " + userName + " -- " + userScore;
    userNameList.appendChild(newHighScore);
  }
}

var goBack = document.querySelector("#goBack");
goBack.addEventListener("click", function (event) {
  event.preventDefault();

  window.location.href = "./index.html";
});

var clearQuiz = document.querySelector("#clearQuiz");
clearQuiz.addEventListener("click", function (event) {
  event.preventDefault();

  localStorage.clear();
  return (highScores = []);
});