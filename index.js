var name = prompt("enter your name ");
console.log("welcome to quiz DO YOU KNOW ME " + name);
var score = 0;

var readlineSync = require("readline-sync");
// var age = prompt("what's your age " + name);
// let i = Number("age");

// console.log("Your name is " + typeof name);
// console.log("Your age is " + typeof i);
const doYouKnowMe = [
  {
    question: "Where do I live ?",
    answer: "Varanasi"
  },
  {
    question: "I am beach person or mountain?",
    answer: "Mountain"
  },
  {
    question: "I like Twitter or LinkedIn?",
    answer: "Twitter"
  },
  {
    question: "What's my favorite dish?",
    answer: "sweets"
  },
  {
    question: "What's my mother toungue?",
    answer: "Hindi"
  }
]



function quiz(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Yay! you are right " + "the correct answer is " + answer);
    score = score + 1;
  }
  else {
    console.log("You are wrong " + "the correct answer is " + answer);
  }
  //print score after every answer
  console.log(" Your Score " + score);
  console.log("---------------");
  totalScore(score);
}
function totalScore(score) {
  console.log(name + " Your total score is: " + score);
}
//loop all the questions and answer to the quiz function using for loop
for (let i = 0; i < doYouKnowMe.length; i++) {
  var currentQuestion = doYouKnowMe[i];
  quiz(currentQuestion.question, currentQuestion.answer);
}