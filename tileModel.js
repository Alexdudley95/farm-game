
var dirt  = '<img src="img/dirt.png" width="64" height="64" class="dirt">';
var plowed  = '<img src="img/plowed.png" width="64" height="64" class="plowed">';
var sprout  ='<img src="img/sprout.png" width="64" height="64" class="sprout">';
var water   = '<img src="img/water.png" width="64" height="64" class="water">';

class tileModel{
  constructor(id){
    this.id = id;
    this.value = 0;
    this.x = 0;
    this.y = 0;
  }

  setId(id){
    this.id = id;
  }
  setValue(value){
    this.value = value;
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
    }else if(this.value == 1){
      return plowed;
    }else if(this.value == 2){
      return sprout;
    }else if(this.value == 3){
      return water;
    }
  }
  setXY(){
    var i = this.id.split('-');
    this.x = i[0];
    this.y = i[1];
  }
}



export default tileModel;