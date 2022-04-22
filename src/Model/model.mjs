export default class Model {
  constructor() {
    this.arrLeft = [{rate:"RUB", checked:'checked'}, {rate:"USD",checked:''}, {rate:"EUR",checked:''}, {rate:"GBP",checked:''}];
    this.arrRight = [{rate:"RUB", checked:''}, {rate:"USD",checked:'checked'}, {rate:"EUR",checked:''}, {rate:"GBP",checked:''}]
    this.tempArr = ["RUB", "USD"];
  }



  checkedCange(){
    this.arrLeft.forEach((el)=>{
      this.tempArr[0] === el.rate ? el.checked = 'checked' : el.checked = ''
    })

    this.arrRight.forEach((el)=>{
      this.tempArr[1] === el.rate ? el.checked = 'checked' : el.checked = ''
    })
  }
}
