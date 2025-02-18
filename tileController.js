import tileModel from "./tileModel.js"
import tileView from "./tileView.js"

class tileController {
  constructor(){


  }


checkSurroundingTiles(tileArray, check){
  let comp = 1;
    for(let i = 0; i < tileArray.length; i++){
      let inner = tileArray[i]
      for(let j = 0; j < inner.length; j++){
        if(i <= 0 || i >=5 || j <= 0 || j>= 5){
          tileArray[i][j].setValue(3);
          console.log("edge")
        }else if( (tileArray[i][j - comp].getValue() == check)||
                  (tileArray[i - comp][j].getValue() == check)||
                  (tileArray[i][j + comp].getValue() == check)||
                  (tileArray[i + comp][j].getValue() == check))
                  {
                  tileArray[i][j].isTouchingWater();
                  console.log(tileArray[i][j].touchingWater)
                  }
      }
    }

}
}



export default tileController
