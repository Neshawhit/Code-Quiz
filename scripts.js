
startButton = document.querySelector("#start");
quizContainer = document.querySelector("#quiz");
questionsContainer = document.querySelector("#questions");
submitButton =document.querySelector ("#end");

var state = startButton;
var questions = questionsContainer;
var quiz =quizContainer;
var submitQuiz = submitButton;
var results = ('Quiz Respones');
var answerChoices = ;

//need a timer for quiz
//need to log highscores
//click start button being quiz
//after click timer beings first question appears
//click answer to question and next question appears
//if answer incorrectly time is deducted
// all questions answered or timer reach 0 game ends
// add and save intials to score and collect scores





var questions = [
    {


        question: "Which of these are a string?",
        answerChoices:{
            a: 'true'
            b: '"true"'
            c: '[7]'
        }
        correctAnswer: 'b'
    },
    {
      question: "what variable is used in a for loop?",
        answerChoices:{
            a: 'i'
            b: 'x'
            c: 'y'
        }
        correctAnswer: "a"
    },

    {
      question: "Which is a Boolean?",
        answerChoices:{
            a: '39'
            b: 'false'
            c: '<div>'
        }
        correctAnswer: "b"
    },
    {
        question: "How do you style an ID in CSS?",
          answerChoices:{
              a: '.id'
              b: '<id>'
              c: '#id'
          }
          correctAnswer: "c"
      },
    ];


// function startQuiz(){
// 	startEl = prompt("Begin Quiz")
// 	console.log(startQuiz)
// 	return ((Ready to begin?) = true)
// }

function generateQuiz (questions, quiz, results, submitButton){
    function displayQuestions(questions, quiz){

    }
}


