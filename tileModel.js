
import con from "./tileController.js"

var dirt  = '<img src="img/dirt.png" width="64" height="64" class="dirt">';
var plowed  = '<img src="img/plowed.png" width="64" height="64" class="plowed">';
var plowed2 = '<img src="img/plowed2.png" width="64" height="64" class="plowed">';
var sprout  ='<img src="img/sprout.png" width="64" height="64" class="sprout">';
var water   = '<img src="img/water.gif" width="64" height="64" class="water">';

class tileModel{
  constructor(id){
    this.id = id;
    this.value = 0;
    this.touchingWater = 0;
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
    if(this.value != 3 && this.touchingWater != 1){
      this.touchingWater = value;
      this.value = 1;
    }
    //console.log(this.touchingWater)
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
    }else if(this.touchingWater == 2 || this.value == 1){
      return plowed2;
    }else{
      return dirt;
    }
  }
}



export default tileModel;