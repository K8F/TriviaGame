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


//object array starts at 0
var currentSet=0;

//score
var correct = 0; 
var incorrect = 0; 
var unanswered = 0;

//timer
var timeLeft = 15;
var timerOn = false;
var timerID = '';

//questions object
var trivia = {
    questions: {
        q1: "This is the first question?",
        q2: "This is the second question?",
        q3: "This is the third question?",
        q4: "This is the fourth question?",
        q5: "This is the fifth question?"
    },
   
    choices:{
        q1: ['1', '2', '3', '4'],
        q2: ['1', '2', '3', '4'],
        q3: ['1', '2', '3', '4'],
        q4: ['1', '2', '3', '4'],
        q5: ['1', '2', '3', '4']
    },

    answers: {
        q1: '2',
        q2: '4',
        q3: '1',
        q4: '1',
        q5: '3'
    }
}
    
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
    showQuestions();

    
}
//loop through questions

function showQuestions(){
    timeLeft= 15;
    $('#timer').text(timeLeft);

    //prevent timer from speeding up
    if(!timerOn){
        timerID=setInterval(countdown,1000);
    }

    //index questions
    var questionAsked=Object.values(trivia.questions)[currentSet];
    $('#question').text(questionAsked);

    //possible answers
    var questionChoices = Object.values(trivia.choices)[currentSet];
    $.each(questionChoices, function(index, choiceList){
        $('#choices').append($("<button></button").html(choiceList));
        
    })
//function for timer
function countdown(){
    // if timer still has time left and there are still questions left to ask
    if(timeLeft > -1 && currentSet < Object.keys(trivia.questions).length){
      $('#timer').text(timeLeft);
      timeLeft--;
        }
    
    
    //need if statement for timer running completely out. 

    else if (timeLeft===-1){
        unanswered++;
        
   }    

   console.log(unanswered)

    }


    
}
   



