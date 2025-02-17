import tileController from './tileController.js';

class tileView{
  constructor(gameDiv){
    this.tileController = new tileController();
    this.tileRowDiv = document.createElement('div');
    this.tileInner = document.createElement('img');
    this.addButton = document.createElement('g');

    this.tileArray = tileController.tileArray

    gameDiv.append(this.tileRowDiv);
    gameDiv.append(this.tileInner);
    gameDiv.append(this.addButton);

    // for(let i = 0; i < tileController.length; i++){
    //   var inner = this.tileArray[i];
    //   gameDiv.append(this.tileRowDiv);
    //     for(let j = 0; j < inner.length; j++){
    //       this.addButton,
    //       this.tileInner
    //     }
    // }

  }


  updateView() {
    const{tileController, tileRowDiv, addButton, tileInner} = this;
    tileRowDiv.innerHTML = 'HELLO WORLD';
    addButton.outerHTML = '<g></g>';
    tileInner.outerHTML = '<img src="img/dirt.png" width="64" height="64" class="dirt">';
  }



}

function addSprite(){
  this.updateView();
}


export default tileView
