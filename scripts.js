//need a timer for quiz-click start button timer begins done
//click start button quiz also begins done
//first question appears done
//click answer to question and next question appears done
//if answer incorrectly time is deducted  done
// all questions answered or timer reach 0 game ends 
// add and save intials to score and collect scores
//need to log highscores

var startButton = document.querySelector("#start-btn");
var quizContainer = document.querySelector("#quiz");
var startContainer = document.querySelector("#start");
var timeContainer = document.querySelector("#time");
var submitButton = document.querySelector("#submit")
var endQuiz = document.querySelector("#end");
var timeSpan = document.querySelector("#time-left");
var questionH2 = document.querySelector("#title");
var choice1 =document.querySelector("#choice1");
var choice2 =document.querySelector("#choice2");
var choice3 =document.querySelector("#choice3");
var userInitials = document.querySelector("text");
var timeInterval = 60;
//var score = count (correctAnswer)
//var setTime = 0;
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
    if (timeInterval === 0){
        clearInterval(timeInterval);
        endQuiz.style.display = "block";
        quizContainer.style.display = "none";
        timeContainer.style.display = "none";
    
    }
   if(timeInterval < 0){
    endQuiz.style.display = "block";
    quizContainer.style.display = "none";
    timeContainer.style.display = "none";

    
   }
    
 
}
// get running time to stop at zero 



function startQuiz() {
    quizContainer.style.display = "block";
    timeContainer.style.display = "block";
    startContainer.style.display = "none";
    endQuiz.style.display = "none";
    

    timeSpan.textContent = timeInterval

    setInterval(deductTime, 1000)

    displayQuestion()
}

function displayQuestion () {
// if statement to check if there is more questions to display 

    questionH2.textContent = quizQuestions[currentIndex].question;
    choice1.textContent = quizQuestions [currentIndex].answerChoices.a
    choice2.textContent = quizQuestions [currentIndex].answerChoices.b
    choice3.textContent = quizQuestions [currentIndex].answerChoices.c

    choice1.addEventListener("click", nextQuestion)
    choice2.addEventListener("click", nextQuestion)
    choice3.addEventListener("click", nextQuestion)
    if (nextQuestion !== nextQuestion) { //figure out how to identify an empty array and go to next section 
        // choice1.addEventListener("click", nextQuestion)
        // choice2.addEventListener("click", nextQuestion)
        // choice3.addEventListener("click", nextQuestion)
        
        endQuiz.style.display = "block";
      
        
    }



}

function nextQuestion (event) {
    var selectedAnswer = event.target.textContent;
    var correctAnswer = quizQuestions[currentIndex].correctAnswer;
    
    // check if what they selected is correct
    // log correct answers
    if(selectedAnswer == correctAnswer) {
        alert("Correct! +25pts") 
        // (results + 25)
        
    } else {
        alert("Wrong! - 20 seconds")
        timeInterval = (timeInterval - 20)
        
        //figure out how to deduct time
    }
    
    
    currentIndex++;
    displayQuestion()
}

function collectResults(){
var results = count(quizQuestions.question.correctAnswer)
    console.log(userInitials)
}

//  function keepScore(correctAnswer){
//       var results = 



console.log(userInitials)

startButton.addEventListener("click", startQuiz)
submitButton.addEventListener("click", collectResults)