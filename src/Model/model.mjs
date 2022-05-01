export default class Model {
  constructor() {
    this.arrLeft = [
      { rate: "RUB", checked: "checked" },
      { rate: "USD", checked: "" },
      { rate: "TRY", checked: "" },
      { rate: "AZN", checked: "" },
    ];
    this.arrRight = [
      { rate: "RUB", checked: "" },
      { rate: "USD", checked: "checked" },
      { rate: "TRY", checked: "" },
      { rate: "AZN", checked: "" },
    ];

    this.coefficient = null
    this.fromCurrency = "RUB"
    this.toCurrency = "USD"
    this.fromSumm = '1'
    this.toSumm =null
    
    this.tempArr = [
      { rate: "RUB", summ: "1", perUnit: "" },
      { rate: "USD", summ: "" },
    ];
  }

  rateFromTo() {
    this.tempArr[1].summ = this.tempArr[0].perUnit * this.tempArr[0].summ;
  }

  rateToFrom() {
    this.tempArr[0].summ = (1 / this.tempArr[0].perUnit) * this.tempArr[1].summ;
  }
}
