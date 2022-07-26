/*
'use strict';
// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
*/
let wordbank = ["AROUND", "LETTER", "PUBLIC", "REMAKE", "CANDLE", "GUITAR", "PRINCE", "STOMPS", "ECLAIR", "TRICKY"]
let word = "";
let wordArray = [];
let correctGuesses = [];
let wrongGuesses = 0;
let allGuesses = []

const generateWord = () => {
  wrongGuesses = 0;
  let x = Math.floor(Math.random() * 10)
  word = wordbank[x]
  console.log(word)
  wordArray = word.split('')
  for (let i = 0; i < wordArray.length; i++) {
    correctGuesses.push("-")
  }
  document.getElementById("guesses").innerHTML = correctGuesses.join("");;
}

const hangman = (letter) => {
  letter = letter.toUpperCase();
  allGuesses.push(letter)
  document.getElementById("guessedLetters").innerText = allGuesses
  if(!wordArray.includes(letter)) {
    wrongGuesses++;
    if(wrongGuesses >= 6){
      document.getElementById("middle").innerHTML = "SORRY! YOU LOSE!"
      correctGuesses = wordArray
      document.getElementById("guesses").innerHTML = correctGuesses.join("")
    }
    document.getElementById(wrongGuesses.toString()).toggleAttribute("hidden");
    return;
  }
  for (let i = 0; i < wordArray.length; i++) {
    if (letter === wordArray[i]) {
      correctGuesses[i] = letter;
    }
  }
  

  document.getElementById("guesses").innerHTML = correctGuesses.join("");

  if(!correctGuesses.includes("-")){
    document.getElementById("middle").innerHTML = "CONGRATULATIONS!"
  }

}
const noRefresh = (e) => {
  e.preventDefault();
  hangman(document.getElementById('user-input').value)
  document.getElementById('user-input').value = ""
}
/*
// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
const getPrompt = () => {
  rl.question('letter ', (answer) => {
    console.log( hangman(answer) );
    getPrompt();
  });
}
// Unit Tests
// to use them run the command: npm test main.js
// to close them ctrl + C


if (typeof describe === "function") {
  describe("#hangman()", () => {
    it("take in letter, if letter is in word then reveal letter", () => {
      word = ["H", "E", "L", "L", "O"];
      hangman("H");
      assert.equal(word[0], correctWord[0]);
    });
    
    
    it("takes in a letter, if letter is wrong, does not add a word", () => {
      word = ["H", "E", "L", "L", "O"];
      hangman("X");
      assert.equal(correctWord.join(""), "H_____");
    });
  });
  
  
  describe("Lose the game", () => {
    it("Should determine a loser when the player runs out of turns", () => {
      counter = 1
      assert.equal(hangman('X'), "You Lose!");
      
    });
  });
    
    
    
   
describe("win the game", () => {
    it('should determain a winner if player guesses letters correctly', () => {
       word = correctWord
       assert.equal(checkForWin(), true )
       assert.equal(checkForWin(), "you win") 
       
     });
    });
} else {
  getPrompt();
}

*/
