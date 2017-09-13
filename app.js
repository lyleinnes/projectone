console.log("js is on")

// --- set important global variables ---
var playerOne = "X";
var playerTwo = "O";
var turn = 0;
var gameEnd = false;
var activeBoard = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
var winCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [6, 4, 2]]; 
var currentPlayer;

// --- referencing the dom elements we need ---
var board = document.querySelector(".board-wrapper");
var winMessage = document.querySelector(".win-message");
var resetButton = document.getElementById("reset");
var meowButton = document.getElementById("meow");
var children = board.childNodes;

// --- this event listener [which targets whichever tile the player clicks on] is essentially the game ---
board.addEventListener("click", function(event) {
  var index = event.target.dataset.cell;  // each tile has a unique dataset.cell, which we store as a kind of psuedo index..
  if (turn % 2 === 0) {
    currentPlayer = playerOne;
  } else {
    currentPlayer = playerTwo;
  }
  if (event.target.textContent === " " && gameEnd === false) {
    event.target.textContent = currentPlayer;
    activeBoard[index] = currentPlayer;
    winCombos.forEach(newWinCheck); // -- peow peow --
    turn ++;
  }
});

// --- this event listener resets the game ---
resetButton.addEventListener("click", function() {
  resetGame();
})

// --- this event listener executes operation kitty ---


// --- newWinCheck function ---
var newWinCheck = function (array) {
  if (currentPlayer === "X") {
    playerNum = "player one"; 
  } else {
    playerNum = "player two";
  }
  if (activeBoard[array[0]] === activeBoard[array[1]] && activeBoard[array[0]] === activeBoard[array[2]]) {
    winMessage.textContent = playerNum + " wins";
    winMessage.className = "transRed";
    gameEnd = true;
  } else if (turn === 8 && gameEnd === false) {
    winMessage.textContent = "draw";
    winMessage.className = "transRed";
  }
};

// --- resetGame function ---
var resetGame = function() {
  turn = 0;
  gameEnd = false;
  activeBoard = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
  children.forEach(function(child){
    child.textContent = " ";
  })
  winMessage.textContent = "";
  winMessage.className = "win-message";
}
