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
    tileClickable.innerHTML = '<img src="img/dirt.png" width="64" height="64" class="dirt">';
  }

  updateView(){
    console.log(this.id);
  }

  getId(){
    return this.tileModel.getId();
  }
  getValue(){
    console.log(this.tileModel.getValue());
    console.log(this.tileModel.id);
    return this.tileModel.getValue();
  }
  incrementValue(){
    let x = this.tileModel.getValue();
    this.tileModel.setValue(x += 1);
    this.getValue();
  }

}


export default tileView
