
var words = [
    "mario",
    "arkanoid",
    "digdug",
    "frogger",
    "galaga",
    "pinball"
];

let guessLeft = 10;
let wins = 0;
let losses = 0;
let userGuesses = ""
let guessLength = 0;


var word = words[Math.floor(Math.random() * words.length)];

console.log(word);

var answerArray = [];
for (var i = 0; i < word.length; i++) {
answerArray[i] = "_ ";
}

document.onkeyup = function(event) {
        var userInput = event.key.toLowerCase();
        for (var j = 0; j < word.length; j++) {
            if (word[j] === userInput) {
            answerArray[j] = userInput;
            guessLength +=1;
            
            }
        }
        if (word.indexOf(userInput) < 0){
            guessLeft -= 1
            userGuesses += userInput + " "

        }
        
//having trouble getting these to appear before the event occurs, when moved above the event key they don't appear
        document.querySelector("#hangman").textContent = "Word :" + answerArray.join("");
document.querySelector("#guessLeft").textContent = "Guesses Left: " + guessLeft;
 document.querySelector("#guesses").textContent = "Guesses: " + userGuesses;
 //ideally these would reset the game so you could keep playing
//  if ( guessLength === word.length) {
//     alert("congrats! you guessed " + word)
//     word = words[Math.floor(Math.random() * words.length)];
//     userGuesses = ""
//     guessLeft = 10;
//     console.log(word)
//     answerArray = [];
//     for (var i = 0; i < word.length; i++) {
//         answerArray[i] = "_ ";
//     }

// }

// if (guessLeft < 1) {
//     alert("try again!")
//     word = words[Math.floor(Math.random() * words.length)];
//     userGuesses = ""
//     guessLeft = 10;
//     console.log(word)
//     answerArray = [];
//     for (var i = 0; i < word.length; i++) {
//         answerArray[i] = "_ ";
//     }



}