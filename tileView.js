import tileModel from './tileModel.js';

class tileView{
  constructor(gameDiv,id, value, x, y){
    this.tileModel = new tileModel(id, x, y);
    this.tileClickable = document.createElement('a');
    this.value = value;
    this.id = id;
    this.x = x;
    this.y = y;
    this.tileModel.setX(this.x);
    this.tileModel.setY(this.y);
    this.tileModel.setId(this.id);
    this.tileModel.setValue(this.value);
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


}


export default tileView
