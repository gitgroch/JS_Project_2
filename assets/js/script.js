// Wait for the DOM to finish loading before starting the survey 

document.addEventListener("DOMContentLoaded", function(){

})

// Global Variables 

const question = document.getElementById('question');
const choices = document.getElementsByClassName('.choice-text');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

const score_points = {
    if 
};

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
function startSurvey() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions]
    getNewQuestion();
}

function getNewQuestion() {
    if(availableQuestions.lenght === 0 || questionCounter > max_questions)
    
    return window.location.assign('/end.html')

    questionCounter++;
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.lenght);
    currentQuestion = availableQuestions[questionsIndex];
    question.InnerText = currentQuestion.question;
}


function checkAnswer() {

}

function storeAnswer() {

}

function calculateScore() {

}


