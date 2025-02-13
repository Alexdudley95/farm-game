const test =[
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0]
  ];

var flag = false;

var money = 0;

$(('#money-text')).text("Money: " + money);

console.log(test.length);
for(let i = 0; i < test.length; i++){
  var inner = test[i];
  $('#game-area').append("<div id=" + i + ">");
    for(let j = 0; j < inner.length; j++){
      $('#' + i).append("<g id='"+ i +"-"+ j +"'>");
      $("#" + i +"-"+ j).append("<img src='img/dirt.png' width='64' height='64' class='dirt'></a>");
    }
 $('#game-area').append("</div")
}

function shovelClick(input){
  if($(input).html() == '<img src="img/plowed.png" width="64" height="64" class="plowed">' ){
    $(input).html("<img src='img/dirt.png' width='64' height='64' class='dirt'>")
  }else{
    $(input).html("<img src='img/plowed.png' width='64' height='64' class='plowed'>")
  }
}


var toolChoice = 0;

$('#ui-button-shovel').click(function(){
  toolChoice = 1;
})
$('#ui-button-hand').click(function(){
  toolChoice =0;
})

$('g').click(function(){

  switch(toolChoice){
    case 0:
      console.log("Hand!")
      break;
    case 1:
      shovelClick($(this));
      break;
  }

})


