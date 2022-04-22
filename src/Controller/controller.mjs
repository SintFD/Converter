export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  init() {
    this.view.init();
    this.render();
    this.convert("RUB", "USD");
  }

  async getCurrency(currencyFrom, currencyIn) {
    const response = await fetch(
      `https://api.exchangerate.host/latest?base=${currencyFrom}&symbols=${currencyIn}`
    );
    const data = await response.json();

    return data;
  }

  convert(currencyFrom, currencyIn) {
    this.getCurrency(currencyFrom, currencyIn).then((data) => {
      console.log(data);
    });
  }

  render() {
    this.view.leftButtons.innerHTML = "";
    this.view.rightButtons.innerHTML = "";

    const temp = 0;
    const tempArr = this.model.tempArr;

    
    this.model.checkedCange();

    this.model.arrLeft.forEach((el, index) => {
      const input = this.view.createInput({
        type: "radio",
        name: "currency",
        class: "checked-inputs",
        id: index,
        checked: el.checked,
      });

      const label = this.view.createLabel({
        text: el.rate,
        class: "checked-labels",
        for: index,
      });

      input.addEventListener("click", (e) => {
        tempArr[0] = label.innerText;
        this.render();
      });

      this.view.leftButtons.append(input);
      this.view.leftButtons.append(label);
    });

    this.model.arrRight.forEach((el, index) => {
      const input = this.view.createInput({
        type: "radio",
        name: "currency-2",
        class: "checked-inputs",
        id: `input-${index}`,
        checked: el.checked,
      });

      const label = this.view.createLabel({
        text: el.rate,
        class: "checked-labels",
        for: `input-${index}`,
      });

      input.addEventListener("click", (e) => {
        tempArr[1] = label.innerText;
        this.render();
      });

      this.view.rightButtons.append(input);
      this.view.rightButtons.append(label);
    });
  }
}
