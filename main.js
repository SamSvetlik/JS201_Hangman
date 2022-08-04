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

let wordbank = ["AROUND", "LETTER", "PUBLIC", "REMAKE", "CANDLE", "GUITAR", "PRINCE", "STOMPS", "ECLAIR", "TRICKY"]
let word = ""
let correctGuesses = []
let wrongGuesses = 0;

const generateWord = () => {
  let x = Math.floor(Math.random() * 10)
  word = wordbank[x]
  for (let i = 0; i < word.length; i++) {
    correctGuesses.push("-")
  }

  document.getElementById("middle").innerHtml = correctGuesses.join(" ");
}

const hangman = (letter) => {

  if(!word.includes(letter)){
    wrongGuesses++;
    return;
  }
  for (let i = 0; i < word.length; i++) {
    if (letter.equal(word[i])){
      correctGuesses[i] = letter;
    }
  }
  
  document.getElementById("middle").innerHtml = correctGuesses.join(" ");

}

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
if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}






// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.
