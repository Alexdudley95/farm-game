import tileModel from "./tileModel.js"
import tileView from "./tileView.js"

class tileController {
  constructor(){


  }

  IisEquals0(tileArray, check, depth, i , j){
    let comp = 1;
    if(tileArray[i + comp][j].getValue() == check){
          tileArray[i][j].isTouchingWater(depth);
        }
  }
  IisEquals5(tileArray, check, depth, i , j){
    let comp = 1;
    if(tileArray[i - comp][j].getValue() == check){
          tileArray[i][j].isTouchingWater(depth);
        }
  }

  JisEquals0(tileArray, check, depth, i , j){
    let comp = 1;
    if(tileArray[i][j + comp].getValue() == check){
      tileArray[i][j].isTouchingWater(depth);
    }
  }

  JisEquals5(tileArray, check, depth, i , j){
    let comp = 1
    if(tileArray[i][j - comp].getValue() == check){
      tileArray[i][j].isTouchingWater(depth);
    }
  }

  checkSurroundingTiles(tileArray, check, depth){
    let comp = 1;
      for(let i = 0; i < tileArray.length; i++){
        let inner = tileArray[i]
        for(let j = 0; j < inner.length; j++){
          if(i == 0){
            this.IisEquals0(tileArray, check, depth, i, j);
          }else if( i == 5){
            this.IisEquals5(tileArray, check, depth, i, j);
          }else if(j == 0){
            this.JisEquals0(tileArray, check, depth, i ,j);
          }else if(j == 5){
            this.JisEquals5(tileArray, check, depth, i, j);
          }else if( (tileArray[i][j - comp].getValue() == check)||
            (tileArray[i - comp][j].getValue() == check)||
            (tileArray[i][j + comp].getValue() == check)||
            (tileArray[i + comp][j].getValue() == check))
            {
            tileArray[i][j].isTouchingWater(depth);

            }
        }
      }

  }


}

export default tileController
