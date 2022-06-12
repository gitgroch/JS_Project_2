// Wait for the DOM to finish loading before starting the survey 

document.addEventListener("DOMContentLoaded", function(){

})

// Global Variables 

const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));

let currentQuestion = {};

let acceptingAnswers = true;
// set starting score
let score = 0;
// set starting position for questions 
let questionCounter = 0;
// create empty array for all available questions 
let availableQuestions = [];
// set maximum questions in survey before end
const max_questions = 5;


// Survey Questions 
let questions = [
    {
        question:'Who is the greatest historical figure in the history of the Galaxy?',
        choice1: 'Human Steve Jobs',
        choice2: 'First Earth President Dwayne the Rock Johnson',
        choice3: 'Android Steve Jobs',
        choice4: 'Xanthar Devourer of Worlds',
    },
    {
        question:'You have won 5000 intergalactic credits, what will you spend it on?',
        choice1: 'Donate to offworld colonies for fresh water and food ',
        choice2: '5000 Galactic BigMacs',
        choice3: 'Download more RAM',
        choice4: 'Ion Cannons for my battlecruiser ',
    },
    {
        question:'You come across an unidentified starship having quantum engine trouble in the Delta Quadrant. Do you:',
        choice1: 'Offer the crew use of your holodeck while they wait for Galactic AA to show up',
        choice2: 'Slow down to propulsion engines as you pass by but dont stop',
        choice3: 'Offer to run statistical analysis of the quantum relay sub routines in a fraction of a zeptosecond',
        choice4: 'Capture the ship and crew for the glory of the home world',
    },
    {
        question:'Which of the following statements do you identify with the most?',
        choice1: 'One must not interfere with the normal development of any alien life or society',
        choice2: 'Galactic Amazon Prime day is better than Galactic Black Friday',
        choice3: 'One must not injure a human being or, through inaction, allow a human being to come to harm',
        choice4: 'Pathetic earthlings have no place outside their solar system',
    },
    {
        question:'Are you an Android?',
        choice1: '01101110 01101111',
        choice2: 'I dont read binary',
        choice3: '01111001 01100101 01110011',
        choice4: 'I have no need for your puny human numbers',
    },
]




// Functions 

/**
 * Set score and counter to 0, pull in values from questions variable 
 * then call getNewQuestions Function
 */
startSurvey = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}

/**
 * Check if there are any availble questions, if none send to end page. 
 * Otherwise increase question counter and pull in a new random question 
 */

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > max_questions) {
    return window.location.assign('/end.html')
    }

    questionCounter++;
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    question.InnerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset ['number'];
        choice.InnerText = currentQuestion['choice' + number]

    })

    availableQuestions.splice(questionsIndex, 1);

    acceptingAnswers = true;
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice;

        getNewQuestion();
    })
})


calculateScore = num => {

}


function checkAnswer() {

}

function storeAnswer() {

}


startSurvey();
