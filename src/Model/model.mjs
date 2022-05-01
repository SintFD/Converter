export default class Model {
  constructor() {
    this.arrLeft = [
      { rate: "RUB" },
      { rate: "USD" },
      { rate: "TRY" },
      { rate: "AZN" },
    ];
    this.arrRight = [
      { rate: "RUB" },
      { rate: "USD" },
      { rate: "TRY" },
      { rate: "AZN" },
    ];
    this.tempArr = [
      { rate: "RUB", summ: "1", perUnit: null },
      { rate: "USD", summ: null },
    ];
  }

  checkedCange() {
    this.arrLeft.forEach((el) => {
      this.tempArr[0].rate === el.rate
        ? (el.checked = "checked")
        : (el.checked = "");
    });

    this.arrRight.forEach((el) => {
      this.tempArr[1].rate === el.rate
        ? (el.checked = "checked")
        : (el.checked = "");
    });
  }

  rateFromTo() {
    this.tempArr[1].summ = this.tempArr[0].perUnit * this.tempArr[0].summ;
  }

  rateToFrom() {
    this.tempArr[0].summ = (1 / this.tempArr[0].perUnit) * this.tempArr[1].summ;
  }
}
