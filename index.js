//TODO: Add id & values for each tiles
// if statement for each tile
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


for(let i = 0; i < tileArray.length; i++){
  var inner = tileArray[i];
  $('#game-area').append("<div id= " + i +">");
    for(let j = 0; j < inner.length; j++){
      tileArray[i][j] = new tile($('#' + i), ""+ i +"-" +j, tileArray[i][j]);//.initView(j);
      tileArray[i][j].initView(j);
    }
}



function checkSurroundingTiles(array){
  let x = 1;
  let y = 0;
  if((array[0][x - 1].getValue()) == 0 && (array[0][x + 1].getValue()) == 0){
    console.log("Winner");
    array[0][x - 1].setValue(3);
  }else{
    console.log("False");
  }
}

checkSurroundingTiles(tileArray);

$('#ui-button-shovel').click(function(){
  checkSurroundingTiles(tileArray);
})


//old code pre MCV

// var money = 0;

// var dirt  = '<img src="img/dirt.png" width="64" height="64" class="dirt">';
// var plowed  = '<img src="img/plowed.png" width="64" height="64" class="plowed">';
// var sprout  ='<img src="img/sprout.png" width="64" height="64" class="sprout">';
// var water   = '<img src="img/water.png" width="64" height="64" class="water">';

// console.log(tileArray.length);



// // for(let i = 0; i < tileArray.length; i++){
// //   var inner = tileArray[i];
// //   $('#game-area').append("<div id=" + i + ">");
// //     for(let j = 0; j < inner.length; j++){
// //       $('#' + i).append("<g id='"+ i +"-"+ j +"'>");
// //       $("#" + i +"-"+ j).append( dirt + "</g>");
// //     }
// //  $('#game-area').append("</div")
// // }

// function shovelClick(input){
//   console.log($(input).html());
//   if($(input).html() == dirt){
//     tileArray[input] = 1;
//     updateSprites(input);
//   }else if($(input).html() == plowed){
//     tileArray[input] = 0;
//     updateSprites(input);
//     console.log(tileArray[input]);
//   }
// }

// function handClick(input){
//   console.log($(input).html());
//   if($(input).html() == plowed ){
//     tileArray[input] = 2;
//     updateSprites(input);
//   }else if ($(input).html() == sprout ){
//     tileArray[input] = 3;
//     updateSprites(input);
//   }
// }


// var toolChoice = 0;

// $('#ui-button-shovel').click(function(){
//   toolChoice = 1;
// })
// $('#ui-button-hand').click(function(){
//   toolChoice =0;
// })

// $('g').click(function(){
//   switch(toolChoice){
//     case 0:
//       handClick($(this));
//       break;
//     case 1:
//       shovelClick($(this));
//       break;
//   }

// })

// function updateSprites(input){
//   console.log(tileArray[input]);
//   if(tileArray[input] == 0){
//     $(input).html(dirt);
//   }else if (tileArray[input] == 1){
//     $(input).html(plowed);
//   }else if (tileArray[input] == 2){
//     $(input).html(sprout);
//   }else if(tileArray[input] == 3){
//     $(input).html(water);
//   }
// }

// $(('#money-text')).text("Money: " + money +"  |  " + toolChoice);

