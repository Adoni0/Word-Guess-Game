var wins = 0; //Global trackers
var losses = 0;
var remainingGuesses = 10;
var mistakesMade = 0;
var lettersGuessed = [];
var answerArray = [];
var remainingLetters = 0;
var currentWord = [];


var tvOptions = ['Game of Thrones', 'Breaking Bad', 'Friends', 'Vikings', 'Seinfeld', 'The Mandolorian', 'Love Island'];

function initializeGame(){
  lettersGuessed = [];
  answerArray = [];
  remainingLetters = 0;
  currentWord = tvOptions[Math.floor(Math.random() * (tvOptions.length))];//randomly pick word


for (var i = 0; i < currentWord.length; i++) {
  answerArray.push('_');
  //console.log(answerArray);
}
remainingLetters = currentWord.length;

$('#answer').text(answerArray);

};

initializeGame();

$(document).ready();
$(document).on('keypress', function(event){
  var userGuess = event.key.toLowerCase();
  console.log('user guess', userGuess);
  if (remainingGuesses > 0) {

    for(var k = 0; k < lettersGuessed.length; k++){
      if(lettersGuessed[k] === userGuess){
        alert('You have already chosen that')
      }
      else {
        lettersGuessed.push(userGuess);
      $('#lettersGuessed').text(lettersGuessed);

      //check if the user guess is is in tvOptions
      currentWord.indexOf(userGuess);
      if(currentWord.indexOf(userGuess) !== -1) {
        //loop through an replace the dash with the letter
        for(var j = 0; j < currentWord.length; j++){
          if(currentWord[j] === userGuess) {
            answerArray[j] = userGuess;
            $('#answer').text(answerArray);
            remainingLetters--;
            $('#wins').text(wins);
            $('#losses').text(losses);
            $('#mistakesMade').text(mistakesMade);
            $('#remainingGuesses').text(remainingGuesses);
            if (remainingLetters === 0){
              wins++;
              answerArray = [];
              lettersGuessed = [];
              initializeGame();
            }
          }
        }
      } else { //incriment scores
        mistakesMade++;
        remainingGuesses--;
      }
      
      }
    } 
      //push the guess to the array holding the letters typed
      
    } else {
      losses++;
      initializeGame();
      alert('GAME OVER!')
    }
  });








