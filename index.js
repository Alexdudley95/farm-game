//TODO:
//add search for blocks touching - in progress
//add some sort of update loop - perhaps updates after a few seconds
//add planting functionality and plant life cycle

export function sum(a, b){
  return a + b
}


const tileArray =[
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0]
  ];

import tile from "./tileView.js";
import controller from "./tileController.js"

const con = new controller();

function initSetup(){
  for(let i = 0; i < tileArray.length; i++){
    var inner = tileArray[i];
    $('#game-area').append("<div id= " + i +">");
      for(let j = 0; j < inner.length; j++){

        tileArray[i][j] = new tile($('#' + i),i + "-" + j ,tileArray[i][j]);
        //                          ^ Div    , ^ id       , ^ Value
        tileArray[i][j].initView();
      }
  }
}

initSetup();

//check for water
  con.checkSurroundingTiles(tileArray, 3, 1)
  con.checkSurroundingTiles(tileArray, 3, 1)
//con.checkSurroundingTiles(tileArray, 1, 2)


$('#ui-button-update').click(function(){
    con.checkSurroundingTiles(tileArray, 1, 2)
    con.checkSurroundingTiles(tileArray, 3, 1)

})


