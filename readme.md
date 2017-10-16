# Tic Tac Toe 

## Rules

* Two players take turns, clicking on a tile within the game board to place their marker.

* The player to achieve three consecutive marks horizontally, vertically or diagonally wins.

* The meow button is a wildcard feature, I haven't finialised how it will be implemented yet. Currently, when activated it randomly positions your opponents marker and returns to the current players turn. 

### Play it here!

https://lyleinnes.github.io/projectone/



## Approach taken

I began with a very rough sketch of a wire frame and created a flow chart to get an idea of what logic I would need to implement.

Initially I tried to create the entire game in JS using the console to test as I went. However I found it too difficult to replicate player input for testing purposes so I added some basic HTML to create the board/tiles a player can select.

I used JS to capture the DOM element which contains all the playable tiles (div's). Adding an event listener to the container element and using event bubbling, each playable tile was now able to be manipulated.

for the first round of styling i had hard coded the measurements of the board which i hadnt really considered until i had finished. in an attempt to make the game easier to scale i went back and re-did the whole css stylesheet and tried to keep the number of individual styles to a minimum.

once i had the game sized the way i wanted, i attempted to add in a 'wildcard' (the 'meow' button) which would make a random move for your opponent and then return to your turn.

