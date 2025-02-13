const test =[
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0]
  ];

var flag = false;


console.log(test.length);
for(let i = 0; i < test.length; i++){
  var inner = test[i];
  $('#game-area').append("<div id=" + i + ">");
    for(let j = 0; j < inner.length; j++){
      $('#' + i).append("<a id='"+ i +"-"+ j +"'>");
      $("#" + i +"-"+ j).append("<img src='img/dirt.png' width='64' height='64' class='dirt'></a>");
    }
 $('#game-area').append("</div")
}

$('a').click(function(){
  console.log($(this).html())
  if($(this).html() == '<img src="img/plowed.png" width="64" height="64" class="plowed">' ){
    $(this).html("<img src='img/dirt.png' width='64' height='64' class='dirt'>")
  }else{
    $(this).html("<img src='img/plowed.png' width='64' height='64' class='plowed'>")
  }

})