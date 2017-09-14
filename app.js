console.log("js is on")

// --- set important global variables ---
var playerOne = "x";
var playerTwo = "o";
var turn = 0;
var gameEnd = false;
var kitty = false;
var activeBoard = ["0", "1", "2", "3", "4", "5", "6", "7", "8"]
var winCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [6, 4, 2]]; 
var currentPlayer;
var startInt;
// --- referencing the dom elements we need ---
var board = document.querySelector(".board-wrapper");
var winMessage = document.querySelector(".win-message");
var resetButton = document.getElementById("reset");
var meowButton = document.getElementById("meow");
var playerOneChar = document.querySelector(".player-one-char");
var playerTwoChar = document.querySelector(".player-two-char");
var children = board.childNodes;

// --- this event listener [which targets whichever tile the player clicks on] executes everything ---
board.addEventListener("click", function(event) {
  var index = event.target.dataset.cell;  // each tile has a unique dataset.cell, which we use to reference the activeBoard
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
    newDrawAlert();
    clearInterval(startInt);
    glowOrNoGlow();
  }
});

// --- this event listener resets the game ---
resetButton.addEventListener("click", function() {
  resetGame();
})

// --- this event listener executes operation kitty ---
meowButton.addEventListener("click", function() {
  crazyCat();
});

// --- newWinCheck function ---
var newWinCheck = function (array) {
  if (currentPlayer === "x") {
    playerNum = "player one"; 
  } else {
    playerNum = "player two";
  }
  if (activeBoard[array[0]] === activeBoard[array[1]] && activeBoard[array[0]] === activeBoard[array[2]] && gameEnd === false) {
    winMessage.textContent = playerNum + " wins";
    winMessage.classList.toggle("unhide");
    gameEnd = true;
  }
};

// --- nu drawCheck hu dis? ---
var newDrawAlert = function () {
  if (turn === 9 && gameEnd === false) {
    winMessage.textContent = "draw";
    winMessage.classList.toggle("unhide");
    gameEnd = true;
  }
};

// --- resetGame function ---
var resetGame = function() {
  turn = 0;
  gameEnd = false;
  activeBoard = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  children.forEach(function(child){
    child.textContent = " ";
  });
  clearInterval(startInt);
  glowOrNoGlow();
  kitty = false;
  if (winMessage.classList.value === "win-message unhide") {
    winMessage.classList.toggle("unhide");
    meow.currentTime=0;
  }
};

var meow = new Audio("catSound.wav");
var catArray = [];
// --- operation kitty ---
var crazyCat = function() {
  if (gameEnd === false && kitty === false) {
    meow.play();
    activeBoard.forEach(function(item, index) {
      var numItem = parseInt(item);
      if (numItem === index) {
        catArray.push(index);
      }
    })
    var randVal = catArray[Math.floor((Math.random() * catArray.length) +1)];
    board.children[randVal].innerHTML = "<img src='cat.gif' class='fit' alt='kitty'>";
    activeBoard[randVal] = "meow";
    turn ++;
    clearInterval(startInt);
    glowOrNoGlow();
    kitty = true;
  }
}

// --- current player indicator ---
var glowOrNoGlow = function() {
  if (turn % 2 === 0 && gameEnd === false) {
    startInt = setInterval(function() {
      playerOneChar.classList.toggle("glow") // --- SYNTAX SYNTAX SYNTAX! --- 
    }, 1000);
    playerTwoChar.classList.remove("glow");
  } else if (turn % 2 !== 0 && gameEnd === false) {
    startInt = setInterval(function() {
      playerTwoChar.classList.toggle("glow")
    }, 1000);
    playerOneChar.classList.remove("glow");
  } else {
    playerOneChar.classList.remove("glow");
    playerTwoChar.classList.remove("glow");
  }
};
// --- call it on page load ---
glowOrNoGlow();

