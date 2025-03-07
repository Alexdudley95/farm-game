import tileModel from './tileModel.js';

class tileView{
  constructor(gameDiv,id, value){
    this.tileModel = new tileModel(id);
    this.tileClickable = document.createElement('a');
    this.value = value;
    this.id = id;
    this.touchingWater = this.tileModel.touchingWater;
    this.tileModel.setId(this.id);
    this.tileModel.setValue(this.value);
    //add event listener
    this.tileClickable.setAttribute("id", this.id);
    this.tileClickable.addEventListener('click', () => this.incrementValue());
    //add elements to Div
    gameDiv.append(this.tileClickable);

  }

  initView() {
    const{tileClickable} = this;
    tileClickable.innerHTML = this.tileModel.setTile(this.value);
  }

  updateView(){
    this.tileClickable.innerHTML = this.tileModel.setTile(this.value);
  }

  getId(){
    return this.tileModel.getId();
  }
  getValue(){
    return this.tileModel.getValue();
  }
  incrementValue(){
    let z = this.tileModel.getValue();
    this.tileModel.setValue(z += 1);
    this.updateView();
  }

  setValue(value){
    this.tileModel.setValue(value);
    this.value = this.tileModel.value;
    this.updateView();
  }
  isTouchingWater(depth){
    if(this.getValue() != 3){
      this.tileModel.setTouchingWater(depth);
      this.touchingWater = this.tileModel.touchingWater;
      this.updateView();
    }

  }


}


export default tileView
