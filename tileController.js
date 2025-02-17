import tileModel from "./tileModel.js"
import tileView from "./tileView.js"

class tileController {
  constructor(){
    this.id = new tileModel();

  }

  setId(id){
    console.log("HERE" + id)

    this.id = id;
  }

  // setID(oldId, newId){
  //   var oldId = this.id;
  //   this.id = newId;
  //   return newId;
  // }
}


export default tileController
