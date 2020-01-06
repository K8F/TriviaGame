console.log("correct file")

//pseudocode
//===========================================================
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

//==========================================================


//code starts

//event listeners
$(document).ready(function(){
    $("#remaining-time").hide();
    $("#start").on('click', startGame);
})

//score
var correct = 0; 
var incorrect = 0; 
var unanswered = 0;

//timer
//amount of time for each question
var timeLeft = 10;
//timer is off until player clicks start
var timerOn = false;
var timerID = '';

//questions object
var trivia = {
    currentQuestion: 0,

    questions: {
        q1: "What classic horror movie features a serial killer in a William Shatner mask?",
        q2: "What horror movie features a serial killer wearing a mask inspired by an Edvard Munch painting?",
        q3: "What horror film caused some theatres to suggest that patrons prone to motion sickness sit in the aisle seats?",
        q4: "In Poltergeist, what grabs Robbie Freeling through his bedroom window?",
        q5: "How much screen time does Freddy Krueger get in the first A Nightmare on Elm Street movie??"
    },
   
    choices:{ 
        q1: ['Texas Chainsaw Massacre', 'Friday the 13th', 'Halloween', 'The Fog'],
        q2: ['Halloween', 'The Man in the Black Suit', 'Henry: Portrait of a Serial Killer', 'Scream'],
        q3: ['Mimic', 'Friday the 13th, Part III: 3D', 'The Blair Witch Project', 'Vertigo'],
        q4: ['A Clown', 'A Mailman', 'A Tree', 'A Water Hose'],
        q5: ['7 Minutes', '14 Minutes', '3.5 Minutes', '21 Minutes']
    },

    answers: {
        q1: 2,
        q2: 3,
        q3: 2,
        q4: 2,
        q5: 0
    },

    //method for checking player's guess
    guessChecker: function(guess){
        
        //timer ID for questionReset
        var resultID;
        //console.log(Object.values(trivia.answers), trivia.currentQuestion);
        //console.log(Object.values(trivia.answers)[trivia.currentQuestion]);

            //(pulls correct answer for current question

           var correctAnswer=Object.values(trivia.answers)[trivia.currentQuestion];
           
           //console.log("current answer:", correctAnswer, guess);

           //check the results of the player guess against the current answer;
           //add to correct score
           if (guess === correctAnswer){
               correct++;
               clearInterval(timerID);
               resultID=setTimeout(resetQuestion, 1000);
               $('#results').html('<h3>You did it!</h3>');
           }

           //add to incorrect score
           else{
               incorrect++;
               clearInterval(timerID);
               resultID=setTimeout(resetQuestion, 1000);
               var answerString=Object.values(trivia.choices)[trivia.currentQuestion][correctAnswer];
               $('#results').html('<h3>Incorrect. The answer is: ' + answerString +'</h3>');
           }
        },
}
    
function startGame(){
    //reset game
    trivia.currentQuestion=0;
    correct=0; 
    incorrect=0;
    unanswered=0;
    clearInterval(timerID);
    
    //show game section
    $('#game').show();
    
    //reset results
    $('#results').html('');
    
    //hide start button
    $('#start').hide();
    
    //show timer
    $('#remaining-time').show();
    $('#timer').text(timeLeft);
    
    //display first question
        //function
        showQuestion();
    }



//timer countdown function
function countdown(){
    // if timer still has time left and there are still questions left to ask
    if(timeLeft > -1 && trivia.currentQuestion < Object.keys(trivia.questions).length){
      $('#timer').text(timeLeft);
      timeLeft--;
        }
    //if statement for timer running completely out
    else if (timeLeft===-1){
        unanswered++;
       
        //console.log("unanswered:" + unanswered);
       
        clearInterval(timerID);
        resultID=setTimeout(resetQuestion, 1000);
        $('#results').html('<h3>Out of time! The answer was: ' + Object.values(trivia.answers)[trivia.currentQuestion] + '</h3>');
   }   

   else if(trivia.currentQuestion === Object.keys(trivia.questions).length){
    
    //shows end stats
    $('#results')
    .html('<h3>Here are your results:</h3>'+
    '<p>Correct: '+ correct +'</p>'+
    '<p>Incorrect: '+ incorrect +'</p>'+
    '<p>Unaswered: '+ unanswered +'</p>'+
    '<p>Click start to play again.</p>');

    //hide game section
   $('#game').hide();

   $('#start').show();

   }}

   //loop through questions
   function showQuestion(){
    //display timer
    timeLeft= 10;
    $('#timer').text(timeLeft);

    //prevent timer from speeding up
    if(!timerOn){
        timerID=setInterval(countdown,1000);
    };
    //gather questions and show current question
    var question=Object.values(trivia.questions)[trivia.currentQuestion];
    $('#question').text(question);

    //append choice buttons for the current question
    var questionChoices = Object.values(trivia.choices)[trivia.currentQuestion];
    $.each(questionChoices, function(index, value){

        $('#choices').append($("<button>"+value+"</button>").on('click', this, function(){
            return trivia.guessChecker(index);
        }))

        //log current choices--these are showing up
        //console.log("current choices: " + questionChoices);
    })
}


   function resetQuestion(){
    trivia.currentQuestion++;
    console.log("current question " + trivia.currentQuestion);
    $('#choices').empty();
    $('#results h3').empty();


    //start next question
    showQuestion();
}
   








