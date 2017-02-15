<script type="text/javascript">
    
  var wordList =[
  "DARTH VADER",
  "HAN SOLO",
  "LUKE SKYWALKER",
  "PRINCESS LEIA",
  "DEATH STAR",
  "OBI WAN KENOBI"
  ];

  var alpha =[
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
  'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ]

  var chosenWord = "";
  var letterInChosenWord = [];
  var numBlanks = 0;
  var blanksAndSuccesses = [];
  var wrongGuesses = [];

  var winCounter = 0;
  var lossCounter = 0;
  var numGuesses = 10;

  function startGame(){
    /*
    1. select a word at random
    2. want to break up that random word into letters and replace with underscores
    3. we want to add those underscores to HTML
    4. numGuesses always equals 10, blanksandsuccesses and wrongguesses are empty arrays
    5. 
    */

    numGuesses = 10;
    blanksAndSuccesses = [];
    wrongGuesses = [];

    chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
    letterInChosenWord = chosenWord.split("");
    numBlanks = letterInChosenWord.length;

    for(var i = 0; i < numBlanks; i++){
      blanksAndSuccesses.push("_");
    }
    document.getElementById('guesses-left').innerHTML = numGuesses;
    document.getElementById('word-blank').innerHTML = blanksAndSuccesses.join(" ");
  }

  function checkLetters(letter){
  /* 
  1. Compare the letter the user picks matches any of the letters of the word
  2. I want a conditional statement to determine if the letter the user picked is in the word. If so do something, if not do something else.
  3. If the user is wrong we want to decrease the numGuesses variable by one.
  */
    
    var letterInWord = false;

    for (var i = 0; i < numBlanks; i++){
      if(chosenWord[i] === letter){
        letterInWord = true;
      
      }
    }

    if(letterInWord){
      for(i = 0; i < numBlanks; i++){
        if(chosenWord[i] === letter){
        blanksAndSuccesses[i] = letter;
        
        }
      }

    }else{
      numGuesses --;
      wrongGuesses.push(letter);
    } 
  }

  function roundComplete(){
    /* 
    1. It's going to update the HTML with letters that are in the word.
    2. It's going to update the HTML with guesses we have left.
    3. It's going to update the HTML to show wrong guesses.
    4. It's going to determine whether the user won or lost.
    */

    document.getElementById('word-blank').innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById('guesses-left').innerHTML = numGuesses;
    document.getElementById('wrong-guesses').innerHTML = wrongGuesses.join(" ");
  

    if(letterInChosenWord.join(" ") === blanksAndSuccesses.join(" ")){
      winCounter ++;
      alert("You Win!");
      document.getElementById('win-counter').innerHTML = winCounter;
    }else if(numGuesses === 0){
      document.getElementById('loss-counter').innerHTML = lossCounter ++;
      document.getElementById('wrong-guesses').innerHTML = "";
      alert("You Lose!");
      startGame();
    } 
  }

  startGame();
  document.onkeyup = function(event){
    /* 
    1. It's going to take in the letter we type in.
    2. It's going to pass it through checkLetter function.
    */

    var letterGuessed = String.fromCharCode(event.keyCode).toUpperCase();
    checkLetters(letterGuessed);
    roundComplete();
  }


  </script>