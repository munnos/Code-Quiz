console.log("is this working?");

// Array storing questions and answers

var questions = [
  {
    qtitle: "What is a boolean?",
    choices: ["An Array", "An object", "True or false value"],
    answer: "True or false value",
  },

  {
    qtitle: "What would you want to use a 'for' loop?",
    choices: [
      "To repeat a section of code a number of times",
      "To style a page",
      "Iterate through an array",
    ],
    answer: "Iterate through an array",
  },

  {
    qtitle:
      "What kind of form does data need to take to be able to use browser local storage?",
    choices: ["Booleans", "Strings", "Numbers", "Conditional Statement"],
    answer: "Strings",
  },

  {
    qtitle: "What is an array composed of?",
    choices: ["Objects", "Strings", "Functions", "For loops"],
    answer: "Objects",
  },
];

var questionIndex = 0;
var startButton = document.querySelector("#start");
var questionElement = document.querySelector(".questions");
var choicesElement = document.querySelector("#choices");
var timerEl = document.querySelector("#timer");
var secondsLeft = 60;
var scoreElement = document.querySelector("#high-scores");
var userScore = 0;

// Function keeping track of score and penalising user 15 seconds off timer if answer question incorrectly

function qClick(event) {
  console.log(event.target.innerHTML);
  var userChoice = event.target.innerHTML;
  localStorage.setItem("score", userScore);

  if (userChoice === questions[questionIndex].answer && questionIndex === 3) {
    endofQuiz();
    storingScore();
  }
  if (userChoice === questions[questionIndex].answer) {
    questionIndex++;
    userScore++;
    renderQuestion();
    console.log(userScore);
  } else if (userChoice !== questions[questionIndex].answer) {
    secondsLeft -= 15;
    userScore--;
    renderQuestion();
    console.log(userScore);
  }
  return;
}

// function which renders questions

function renderQuestion() {
  var currentQuestion = questions[questionIndex];
  var questionTitle = document.querySelector("#question-title");
  console.log(currentQuestion.qtitle);
  questionTitle.textContent = currentQuestion.qtitle;
  choicesElement.innerHTML = "";
  for (let i = 0; i < currentQuestion.choices.length; i++) {
    var choice = currentQuestion.choices[i];
    var choiceLi = document.createElement("li");
    choiceLi.setAttribute("value", choice);
    choiceLi.textContent = choice;
    choicesElement.appendChild(choiceLi);
  }
}

// redirection to high-score.html page when quiz ends

function endofQuiz() {
  window.location.replace("high-score.html");
}

function startQuiz() {
  var startScreen = document.querySelector("#start-screen");
  startScreen.setAttribute("class", "hide");
  questionElement.removeAttribute("class");
  setTime();
  renderQuestion();
}

// Timer

function setTime(event) {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = "Time left: " + secondsLeft;

    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      alert("You ran out of time! Please try again");
      endofQuiz();
    }
    return;
  }, 1000);
}

// Starts quiz functions when user clicks Start Quiz button

choicesElement.onclick = qClick;
startButton.onclick = startQuiz;
