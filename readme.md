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

For the first round of styling I had hard coded the measurements of the board. In an attempt to make the game easier to scale I went back and re-did the whole css stylesheet and tried to keep the number of individual styles to a minimum as well as converting all size measurements to percentages rather than pixel values.

Once I had the game working and looking the way I wanted, I attempted to add in a 'wildcard' feature (the 'meow' button). I haven't found a way to make it impactful yet but will return to it later.