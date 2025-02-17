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
    this.tileClickable.addEventListener('click', () => this.getValue());
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
    giveId(() => {
      console.log(this.tileModel.id);
    })
    // return this.tileModel.getId();
  }
  getValue(){
    return console.log(this.tileModel.getValue());
  }




}

function getid(){
  return tileController.id();
}

export default tileView
