
import controller from "./tileController.js"

var dirt  = '<img src="img/dirt.png" width="64" height="64" class="dirt">';
var plowed  = '<img src="img/plowed.png" width="64" height="64" class="plowed">';
var sprout  ='<img src="img/sprout.png" width="64" height="64" class="sprout">';
var water   = '<img src="img/water.gif" width="64" height="64" class="water">';

class tileModel{
  constructor(id, x, y){
    this.id = id;
    this.value = 0;
    this.x = x;
    this.y = y;
    this.touchingWater = 0;
  }
  setX(x){
    this.x = x;
  }
  setY(y){
    this.y = y;
  }

  setId(id){
    this.id = id;
  }
  setValue(value){
    if(value > 3){
      value = 3
    }
    this.value = value;
  }
  setTouchingWater(value){
    this.touchingWater = value;
    console.log(this.touchingWater)
  }
  getId(){
    return this.id;
  }
  getValue(){
    return this.value;
  }
  setTile(){
    if(this.value == 0){
      return dirt;
    }else if(this.value == 2){
      return sprout;
    }else if(this.value == 3){
      return water;
    }else if(this.touchingWater == 1 && this.value == 1){
      return plowed;
    }
  }
}



export default tileModel;