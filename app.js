import tileView from './tileView.js';

class appView{
  constructor(gameDiv){
    this.tileView = new tileView(gameDiv).updateView();

  }
}



export default appView;