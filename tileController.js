import tileModel from "./tileModel.js"
import tileView from "./tileView.js"

class tileController {
  constructor(id){
    this.id = id;
    this.tileArray = [];
    tileModel.tileArray = [
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0]
      ];
    this.tileArray = tileModel.tileArray;
    this.length = this.tileArray.length

  }

}

export default tileController
