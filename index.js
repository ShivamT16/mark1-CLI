readlineSync = require("readline-sync")

var score = 0;
var questions = [{
  question: "His favourite food? ",
  answer: "Chole Bhature"
}, {
  question: "Shivam's favourite movie? ",
  answer: "Bahubali"
},
{
  question: "Shivam's favourite SUV? ",
  answer: "Scorpio"
},
{
  question: "First programming language he learned? ",
  answer: "C++"
},
{
  question: "Shivam is graduate now? ",
  answer: "Yes"
}
];

var Username = readlineSync.question("May I know your name? ")
console.log("Welcome " + Username)
console.log("-------------")

var Age = readlineSync.question("Am I older than 25? ")
if (Age == "Yes" || Age == "yes") {
  score = score - 1;
  console.log("No,You are wrong. I'm 22 right now", "Your score is " + score)
  console.log("-------------")
}
else {
  score = score + 1;
  console.log("You are right", "Your score is " + score)
  console.log("-------------")
}

var questionss = " Where Shivam lives? "
var answerss = "Noida"
play(questionss, answerss)

function play(question, answer) {
  var City = readlineSync.question("Where shivam lives? ")

  if (City === answer) {
    score = score + 1;
    console.log("You are right:", "Your score is " + score)
    console.log("-------------")
  }
  else {
    score = score - 1;
    console.log("You are wrong:", "Your score is " + score)
    console.log("-------------")
  }
}

function plays(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("You are right");
    score = score + 1;

  } else {
    score = score - 1;
    console.log("You are wrong");

  }
  console.log("Your score is " + score);
  console.log("-------------")
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    plays(currentQuestion.question, currentQuestion.answer)
  }
}
game();

console.log("Your final score is: " + score);



