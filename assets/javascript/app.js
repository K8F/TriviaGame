console.log("correct file")

//player clicks to start

//questions queue up

//first question shows 
//timer starts

//If user clicks answer 3 if statements:

//if correct, notification saying it's correct; shows image

//If incorrect, notification saying it's incorrect; shows correct answer & image

//If timer runs out, notification saying times up; shows correct answer and image

//After a few seconds, shows next question

//End of quiz (reset):


//code starts

$(document).ready(function(){
//event listeners
$("#remaining-time").hide();
$("#start").on('click', startGame);
})
$("")

//score
var correct = 0; 
var incorrect = 0; 
var unanswered = 0;
var currentSet=0;

//timer
var timeLeft = 15;
var timerOn = false;
var timerID = '';

//questions object
var questions = [
    {    
        question: "This is the first question?",
        choices: ['1', '2', '3', '4'],
        answer: '2',
    },
    {   question: "This is the second question?",
        choices: ['1', '2', '3', '4'],
        answer: '3'
    }, 

    {
        question: "This is the third question?",
        choices: ['1', '2', '3', '4'],
        answer: '1'
    },
    {
        question: "This is the fourth question?",
        choices: ['1', '2', '3', '4'],
        answers: '4',
    },

    {
        question: "This is the fifth question?",
        choices: ['1', '2', '3', '4'],
        answer: '4'
    }
]

function startGame(){
correct=0; 
incorrect=0;
unanswered=0;
clearInterval(timerID);

//show game section
$('#game').show;

//reset results
$('#results').html('');

//show timer
$('#timer').text(timeLeft);

//hide start button
$('#start').hide();

$('#remaining-time').show();

//display first question
    //function
    showQuestion();

}

//loop through questions

function showQuestion(){
    timeLeft= 15;
    $('#timer').removeClass('times-up');
    $('#timer').text(timeLeft);

    //prevent timer from speeding up
    if(!timerOn){
        timerID=setInterval(countdown,1000);
    }


function countdown(){
    // if timer still has time left and there are still questions left to ask
    if(timeLeft > -1 && currentSet < Object.keys(questions).length){
      $('#timer').text(timeLeft);
      timeLeft--;
    
        }

        //need if statement for timer running completely out. 
    }



//show questions

var nextQuestion = function(){
    //30 seconds for each question

    
}
   







// for (var i=0; i<questions.length; i++) {
    //     var response = window.prompt(questions[i].choices);
    //     if(response == questions[i].answer){
    //         correct++;
    //         //change this later so that new screen appears with answer & photo
    //     } else{
    //         incorrect++;
    //         //change this later sot hat new screen appears with answer & photo
    //     }

    //     //if statement if timer runs out
    // }


