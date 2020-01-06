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
//when user clicks, game starts
$("#start").on('click', startGame);
$("#remaining-time").hide();
$(document).on('click' , '#choices', guessChecker);
})


//current question starts at 0
var currentQuestion=0;

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
//reset game
currentQuestion=0;
correct=0; 
incorrect=0;
unanswered=0;
clearInterval(timerID);

//show game section
$('#game').show;

//reset results
$('#results').html('');


//hide start button
$('#start').hide();

//show timer
$('#remaining-time').show();
$('#timer').text(timeLeft);

//display first question
    //function
    showQuestions();
    
}
//loop through questions

function showQuestions(){
    //display timer
    timeLeft= 5;
    $('#timer').text(timeLeft);

    //prevent timer from speeding up
    if(!timerOn){
        timerID=setInterval(countdown,1000);
    };

    //append questions
    var ask=Object.values(trivia.questions)[currentQuestion];
    $('#question').text(ask);

    //append possible answers for that question
    var questionChoices = Object.values(trivia.choices)[currentQuestion];
    $.each(questionChoices, function(index, choiceList){
        $('#choices').append($("<button></button>").html(choiceList));
    })
}
//timer countdown function
function countdown(){
    // if timer still has time left and there are still questions left to ask
    if(timeLeft > -1 && currentQuestion < Object.keys(trivia.questions).length){
      $('#timer').text(timeLeft);
      timeLeft--;
        }
    //need if statement for timer running completely out. 
    else if (timeLeft===-1){
        unanswered++;
        console.log(unanswered);
        result= false;
        clearInterval(timerID);
        resultID=setTimeout(guessResult, 1000);
        $('#results').html('<h3>Out of time! The answer was ' + Object.values(trivia.answers)[currentQuestion] + '</h3>');
   }   

   else if (currentQuestion === Object.keys(trivia.questions).length) {
    
    //hide game section
   $('#game').hide();
    
    $('#results')
    .html('<h3>Thank you for playing!</h3>'+
    '<p>Correct: '+ correct +'</p>'+
    '<p>Incorrect: '+ incorrect +'</p>'+
    '<p>Unaswered: '+ unanswered +'</p>'+
    '<p>Please play again!</p>');

     

   $('#start').show();


   }}

   
console.log(Object.keys(trivia.answers));




function guessChecker(){
   var resultID;
   var currentAnswer=Object.values(trivia.answers)[currentQuestion];
   
   if($(this).html()=== currentAnswer){
       correct++;
       clearInterval(timerID);
       resultID = setTimeout(guessResult,1000);
       $('#results').html('<h3>Correct Answer!</h3>');
   }

   else{
       trivia.incorrect++;
       clearInterval(timerID);
       resultID=setTimeout(timerID.guessResult, 1000);
       $('#results').html('<h3>Better luck nedt time!' + currentAnswer +'</h3>');
   }
}

   function guessResult(){
       currentQuestion++;
       $('#choices').remove();
       $('#results h3').remove();

       showQuestions();
   }

console.log(unanswered);
