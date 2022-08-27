//need a timer for quiz-click start button timer begins
//click start button quiz also begins
//first question appears
//click answer to question and next question appears
//if answer incorrectly time is deducted 
// all questions answered or timer reach 0 game ends
// add and save intials to score and collect scores
//need to log highscores

var startButton = document.querySelector("#start-btn");
var quizContainer = document.querySelector("#quiz");
var startContainer = document.querySelector("#start");
var timeContainer = document.querySelector("#time");
var timeSpan = document.querySelector("#time-left");
var questionH2 = document.querySelector("#title");
var choice1 =document.querySelector("#choice1")
var choice2 =document.querySelector("#choice2")
var choice3 =document.querySelector("#choice3")
var timeInterval = 60;

var currentIndex = 0;

var quizQuestions = [
    {
        question: "Which of these are a string?",
        answerChoices: {
            a: 'true',
            b: '"true"',
            c: '[7]'
        },
        correctAnswer: '"true"'
    },
    {
        question: "what variable is used in a for loop?",
        answerChoices: {
            a: 'i',
            b: 'x',
            c: 'y'
        },
        correctAnswer: "i"
    },

    {
        question: "Which is a Boolean?",
        answerChoices: {
            a: '39',
            b: 'false',
            c: '<div>'
        },
        correctAnswer: "false"
    },
    {
        question: "How do you style an ID in CSS?",
        answerChoices: {
            a: '.id',
            b: '<id>',
            c: '#id'
        },
        correctAnswer: "#id"
    },
];


function deductTime() {
    timeSpan.textContent = timeInterval;
    timeInterval--;
}


function startQuiz() {
    quizContainer.style.display = "block";
    timeContainer.style.display = "block";
    startContainer.style.display = "none";

    timeSpan.textContent = timeInterval

    setInterval(deductTime, 1000)

    displayQuestion()
}

function displayQuestion () {
// if statemet to check if there is more questions to display

    questionH2.textContent = quizQuestions[currentIndex].question;
    choice1.textContent = quizQuestions [currentIndex].answerChoices.a
    choice2.textContent = quizQuestions [currentIndex].answerChoices.b
    choice3.textContent = quizQuestions [currentIndex].answerChoices.c

    choice1.addEventListener("click", nextQuestion)
    choice2.addEventListener("click", nextQuestion)
    choice3.addEventListener("click", nextQuestion)



}

function nextQuestion (event) {
    var selectedAnswer = event.target.textContent;
    var correctAnswer = quizQuestions[currentIndex].correctAnswer;
    // check if what they selected is correct

    if(selectedAnswer == correctAnswer) {
        alert("Correct!") 
    } else {
        alert("Wrong!")
        (timeSpan - 5000)
    }


    currentIndex++;
    displayQuestion()
}



startButton.addEventListener("click", startQuiz)