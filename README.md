--Simple farming game using JS/Jquery, HTML & CSS--

This is a simple farming game where the goal is to plant seeds on ground that is at touching at least one tile of water. 

The system uses a 2D array for the tile map and utilizes the MVC model.

This is my first time implementing a 2D array and passing types to each one of the items within the array.
A function will then check the surrounding tiles to see if it is water- if true, the plant will not die when planted. 


-- TODO:
  - Change water check to return true and call another function if this tile is touching water rather than setting the tile from the tile check. This way it can be implemented in otherways other than just changing the tile, returning bool value opens up functionality for other actions if the tile is/isn't touching water 
