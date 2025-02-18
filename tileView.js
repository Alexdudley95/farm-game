import tileModel from './tileModel.js';

class tileView{
  constructor(gameDiv, id, value){
    this.tileModel = new tileModel();
    this.tileClickable = document.createElement('a');
    this.id = id;
    this.value = value;
    this.tileModel.setId(this.id);
    this.tileModel.setValue(this.value);
    this.tileClickable.setAttribute("id", this.id);
    this.tileClickable.addEventListener('click', () => this.incrementValue());
    //add elements to Div
    gameDiv.append(this.tileClickable);

  }

  initView() {
    const{tileClickable} = this;
    this.setXY();
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
    let x = this.tileModel.getValue();
    this.tileModel.setValue(x += 1);
    this.updateView();
  }

  setValue(value){
    this.tileModel.setValue(value);
    this.value = this.tileModel.value;
    this.updateView();
  }

  setXY(){
    this.tileModel.setXY();
    this.x = this.tileModel.x;
    this.y = this.tileModel.y;
  }

}


export default tileView
