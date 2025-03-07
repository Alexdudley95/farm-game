import tileModel from "./tileModel.js"
import tileView from "./tileView.js"

class tileController {
  constructor(){


  }

  checkAbove(tileArray, check, i, j, comp){
    if(tileArray[i - comp][j].getValue() == check){
      return true;
    }
    return false;
  }
  checkBelow(tileArray, check, i, j , comp){
    if(tileArray[i + comp][j].getValue() == check){
      return true;
    }
    return false;
  }
  checkLeft(tileArray, check, i , j, comp){
    if(tileArray[i][j - comp].getValue() == check){
      return true;
    }
    return false;
  }
  checkRight(tileArray, check, i, j, comp){
    if(tileArray[i][j + comp].getValue() == check){
      return true;
    }
    return false;
  }

  checkSurroundingTiles(tileArray, check, depth){
    let comp = 1;
      for(let i = 0; i < tileArray.length; i++){
        let inner = tileArray[i]
        for(let j = 0; j < inner.length; j++){
          if(i == 0 && j == 0){
            if((this.checkRight(tileArray, check, i, j, comp) == true) ||
              (this.checkBelow(tileArray, check, i, j, comp) == true)){
                tileArray[i][j].isTouchingWater(depth);
              }
          }else if( i == 5 && j == 5){
            if((this.checkLeft(tileArray, check, i, j, comp) == true) ||
            (this.checkAbove(tileArray, check, i, j, comp) == true)){
              tileArray[i][j].isTouchingWater(depth);
            }
          }else if(j == 0){

          }else if(j == 5){

          }
        }
      }

  }


}

export default tileController
