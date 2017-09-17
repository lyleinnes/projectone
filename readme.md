# Tic Tac Toe 

## Rules

* Two players take turns, clicking on a tile within the game board to place their marker.

* The player to achieve three consecutive marks horizontally, vertically or diagonally wins.

### Play it here!

https://lyleinnes.github.io/projectone/


```
## Approach taken

I began with a very rough sketch for a wire frame and created a flow chart to get an idea of what logic I would need to implement.

Initially I tried to create the entire game in JS but realised it was counter intuitive because i found testing to be easier when I had the board set up in html so i could easily test the code as i went.

Once i had the initial dom elements linked i began setting out the requirements for a win. initially I had about 8 or 9 lines of code to check each possible win. once i had the the wincheck function working a drawcheck was the next step.

for the first round of styling i had hard coded the measurements of the board which i hadnt really considered until i had finished. in an attempt to make the game easier to scale i went back and re-did the whole css stylesheet and tried to keep the number of individual styles to a minimum.

once i had the game sized the way i wanted, i attempted to add in a 'wildcard' (the kitty button) which would make a random move for your opponent and then return to your turn. however this was added without enough time for thorough testing so there was one flaw where it would fail to register a draw...

```