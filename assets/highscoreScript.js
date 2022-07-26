var userScore = localStorage.getItem("score");
var userInput = document.querySelector("#userInput");
var submitBtn = document.querySelector("#submitButton");
var scores = JSON.parse(localStorage.getItem("scores")) || [];

function storingScore() {
  var displayscorepTag = document.createElement("p");
  displayscorepTag.setAttribute("value", userScore);
  displayscorepTag.textContent = "Your score is " + userScore;
  document.body.appendChild(displayscorepTag);
  console.log(typeof userScore);

  console.log(userScore);
}

storingScore();

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  var userName = userInput.value;

  var userRecord = {
    name: userName,
    score: userScore,
  };

  scores.push(userRecord);
  localStorage.setItem("scores", JSON.stringify(scores));

  console.log(userRecord);

  for (let i = 0; i < userInput.length; i++) {
    var listEl = document.createElement("li");
    listEl.textContent = Scores[i].name + " " + Scores[i].score;
    highscoresList.appendChild(listEl);
  }
});
