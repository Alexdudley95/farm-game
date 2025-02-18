import tileModel from "./tileModel.js"
import tileView from "./tileView.js"

class tileController {
  constructor(){


  }

  checkSurroundingTiles(array, y, x){
    console.log(x + "-" + y);
    console.log(array)
    if(y <= 0){
      console.log("False con 1");
    }else{
      if((array[x][y - 1].getValue()) == 0 && (array[x][y + 1].getValue()) == 0){
        console.log("Winner");
        array[x][y].setValue(3);
      }else{
        console.log("False con 2");
      }
    }

  }
}



export default tileController
