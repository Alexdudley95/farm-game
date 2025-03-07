import tileModel from "./tileModel.js"
import tileView from "./tileView.js"

class tileController {
  constructor(){


  }


  //could be a switch case instead of 4 functions
  checkAbove(tileArray, check, i, j, comp){
    if(tileArray[i - comp]?.[j].getValue() == check){
      return true;
    }
    return false;
  }
  checkBelow(tileArray, check, i, j , comp){
    if(tileArray[i + comp]?.[j].getValue() == check){
      return true;
    }
    return false;
  }
  checkLeft(tileArray, check, i , j, comp){
    let arr = tileArray?.[i]?.[j - comp];
    if(arr === undefined ){

    }else if(arr.getValue() == check){
      return true;
    }
    return false;
  }
  checkRight(tileArray, check, i, j, comp){
    let arr = tileArray?.[i]?.[j + comp];
    if(arr === undefined ){

    }else if(arr.getValue() == check){
      return true;
    }
    return false;
  }

  checkSurroundingTiles(tileArray, check, depth){
    let comp = 1;
    for(let i = 0; i < tileArray.length; i++){
      let inner = tileArray[i]
      for(let j = 0; j < inner.length; j++){
        if((this.checkLeft(tileArray, check, i, j, comp)) ||
          (this.checkBelow(tileArray, check, i, j, comp)) ||
          (this.checkAbove(tileArray, check, i, j, comp)) ||
          (this.checkRight(tileArray, check, i, j, comp))){
            tileArray[i][j].isTouchingWater(depth);
          }
      }
    }
  }

}




export default tileController
