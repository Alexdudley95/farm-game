import tileController from './tileController.js';

class tileView{
  constructor(gameDiv, id){
    this.tileController = new tileController();
    this.tileClickable = document.createElement('a');
    this.id = id;
    this.tileController.setId(this.id)
    console.log(id);
    this.tileClickable.setAttribute("id", this.id);
    this.tileClickable.addEventListener('click', () => this.updateView());
    gameDiv.append(this.tileInner);
    gameDiv.append(this.tileClickable);
  }


  initView() {
    const{tileClickable} = this;
    tileClickable.innerHTML = '<img src="img/dirt.png" width="64" height="64" class="dirt">';
  }

  updateView(){
    console.log("Inside updateView");
  }




}



export default tileView
