
class tileModel{
  constructor(id){
    this.id = id;
    this.value = 0;
  }
  setId(id){
    this.id = id;
  }
  setValue(value){
    this.value = value;
  }
  getId(){
    return this.id;
  }
  getValue(){
    return this.value;
  }
}



export default tileModel;