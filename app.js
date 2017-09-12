console.log("js is on")

var playerOne = "x";
var playerTwo = "o";
var turn = 0;
var logic = ["","","","","","","","",""];
var gameEnd = false;
var currentPlayer;

var board = document.querySelector(".board-wrapper");
// by adding an event listener on the parent of the divs that represent the game tiles, we can target each div as its clicked (using event targeting)
board.addEventListener("click", function(event) {
  // the first condition sets player as either playerOne or playerTwo depending on the turn variable
  if (turn % 2 === 0) {
    currentPlayer = playerOne
  } else {
    currentPlayer = playerTwo
  }
  // this condition checks that the tile the player clicks is 'inactive' before continuing
  if (event.target.textContent === "") {
    // declare an index variable based on the selected tiles data-cell value (these correspond with indexes on the logic array)
    var index = event.target.dataset.cell;
    // set the selected tile's text content to the current player's 'marker'
    event.target.textContent = currentPlayer;
    // set the corresponding logic array value to player marker by using the data-cell value
    logic[index] = currentPlayer;
    // check win here
    } else {
    turn += 1;
  }
});

// --- check win logic ---






    // var rowOne = logic[0] + logic[1] + logic[2];
    // var rowTwo = logic[3] + logic[4] + logic[5];
    // var rowThree = logic[6] + logic[7] + logic[8];
    // var colOne = logic[0] + logic[3] + logic[6];
    // var colTwo = logic[1] + logic[4] + logic[7];
    // var colThree = logic[2] + logic[5] + logic[8];
    // var diagTl = logic[0] + logic[4] + logic[8];
    // var diagBl = logic[6] + logic[4] + logic[2];
    // if (rowOne === "xxx" || "ooo") {
    //   console.log('yay');
    // } else if (rowTwo === "xxx" || "ooo") {
    //   console.log('yay');
    // } else if (rowThree === "xxx" || "ooo") {
    //   console.log('yay');
    // } else if (colOne === "xxx" || "ooo") {
    //   console.log('yay');
    // } else if (colTwo === "xxx" || "ooo") {
    //   console.log('yay');
    // } else if (colThree === "xxx" || "ooo") {
    //   console.log('yay');
    // } else if (diagTl === "xxx" || "ooo") {
    //   console.log('yay');
    // } else if (diagBl === "xxx" || "ooo") {
    //   console.log('yay');
    // }

    // if (logic[0] + logic[1] + logic[2] === "xxx" || "ooo") {
    //   console.log(currentPlayer)
    // } else if (logic[3] + logic[4] + logic[5] === "xxx" || "ooo") {
    //   console.log(currentPlayer)
    // } else if (logic[6] + logic[7] + logic[8] === "xxx" || "ooo") {
    //   console.log(currentPlayer)
    // } else if (logic[0] + logic[3] + logic[6] === "xxx" || "ooo") {
    //   console.log(currentPlayer)
    // } else if (logic[1] + logic[4] + logic[7] === "xxx" || "ooo") {
    //   console.log(currentPlayer)
    // } else if (logic[2] + logic[5] + logic[8] === "xxx" || "ooo") {
    //   console.log(currentPlayer)
    // } else if (logic[0] + logic[4] + logic[8] === "xxx" || "ooo") {
    //   console.log(currentPlayer)
    // } else if (logic[2] + logic[4] + logic[6] === "xxx" || "ooo") {
    //   console.log(currentPlayer)
    // } else {








