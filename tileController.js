import tileModel from "./tileModel.js"
import tileView from "./tileView.js"

class tileController {
  constructor(){


  }


  isEquals0(tileArray, check, depth, i , j){
    console.log("HELLO")
  }
  isEquals5(tileArray, check, depth, i , j){
    console.log("5")
  }


  checkSurroundingTiles(tileArray, check, depth){
    let comp = 1;
      for(let i = 0; i < tileArray.length; i++){
        let inner = tileArray[i]
        for(let j = 0; j < inner.length; j++){
          if(i == 0){
            this.isEquals0(tileArray, check, depth, i, j)
          }else if( i == 5){
            this.isEquals5(tileArray, check, depth, i, j)
          }else if(j == 0){

          }else if(j == 5){

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


// if(i <= 0 || i >=5 || j <= 0 || j>= 5){
//   if(tileArray[i][j].getValue() == check){
//       tileArray[i][j].isTouchingWater(depth);
//   }
//   //tileArray[i][j].setValue(3);
// }else
