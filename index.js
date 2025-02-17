// const test =[
//   [0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 3, 0, 0],
//   [0, 0, 0, 0, 0, 0]
//   ];

import app from "./app.js";

const gameDiv = $('#game-area');
new app(gameDiv);







// var money = 0;

// var dirt  = '<img src="img/dirt.png" width="64" height="64" class="dirt">';
// var plowed  = '<img src="img/plowed.png" width="64" height="64" class="plowed">';
// var sprout  ='<img src="img/sprout.png" width="64" height="64" class="sprout">';
// var water   = '<img src="img/water.png" width="64" height="64" class="water">';

// console.log(test.length);



// // for(let i = 0; i < test.length; i++){
// //   var inner = test[i];
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
//     test[input] = 1;
//     updateSprites(input);
//   }else if($(input).html() == plowed){
//     test[input] = 0;
//     updateSprites(input);
//     console.log(test[input]);
//   }
// }

// function handClick(input){
//   console.log($(input).html());
//   if($(input).html() == plowed ){
//     test[input] = 2;
//     updateSprites(input);
//   }else if ($(input).html() == sprout ){
//     test[input] = 3;
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
//   console.log(test[input]);
//   if(test[input] == 0){
//     $(input).html(dirt);
//   }else if (test[input] == 1){
//     $(input).html(plowed);
//   }else if (test[input] == 2){
//     $(input).html(sprout);
//   }else if(test[input] == 3){
//     $(input).html(water);
//   }
// }

// $(('#money-text')).text("Money: " + money +"  |  " + toolChoice);

