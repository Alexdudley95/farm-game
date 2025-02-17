import tileController from './tileController.js';

class tileView{
  constructor(gameDiv){
    this.tileController = new tileController();
    this.id = tileController.id;
    this.tileInner = document.createElement('img');
    gameDiv.append(this.tileInner);
  }


  updateView() {
    const{tileInner} = this;
    tileInner.outerHTML = '<img src="img/dirt.png" width="64" height="64" class="dirt">';
  }



}



export default tileView
