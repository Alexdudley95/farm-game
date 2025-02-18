//TODO:
// add water search functionality
// look into implementing Jest

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


for(let i = 0; i < tileArray.length; i++){
  var inner = tileArray[i];
  $('#game-area').append("<div id= " + i +">");
    for(let j = 0; j < inner.length; j++){

      tileArray[i][j] = new tile($('#' + i),i + "-" + j ,tileArray[i][j], i, j);
      //                          ^ Div    , ^ id       , ^ Value       ,^x, ^y
      tileArray[i][j].initView(j);// < not sure what that j is doing here
    }
}

function check(){
  for(let i = 0; i < tileArray.length; i++){
    let inner2 = tileArray[i]
    for(let j = 0; j < inner2.length; j++){

      console.log("inside loop: " + i + "-" + j)
      con.checkSurroundingTiles(tileArray, i, j)
    }
  }

}

check(tileArray)



// function checkSurroundingTiles(array, x, y){

//   if((array[x][y - 1].getValue()) == 0 && (array[x][y + 1].getValue()) == 0){
//     console.log("Winner");
//     array[x][y].setValue(3);
//   }else{
//     console.log("False");
//   }
// }

// checkSurroundingTiles(tileArray, 0, 2);

$('#ui-button-shovel').click(function(){
  //con.checkSurroundingTiles(tileArray);
})


