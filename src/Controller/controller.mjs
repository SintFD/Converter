export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  init() {
    this.view.init();
    this.render();
    this.createButtons();
    this.leftInput();
    this.rightInput();
  }

  async getCurrency(currencyFrom, currencyIn) {
    const response = await fetch(
      `https://api.exchangerate.host/convert?from=${currencyFrom}&to=${currencyIn}`
    );
    const data = await response.json();

    this.tempArr[0].perUnit = data.result;
  }

  async convert() {
    this.tempArr = this.model.tempArr;
    await this.getCurrency(this.tempArr[0].rate, this.tempArr[1].rate);
  }

  leftInput() {
    this.view.leftInput.addEventListener("keyup", (e) => {
      this.view.leftInput.classList.add("active");
      this.model.tempArr[0].summ = e.target.value;
      this.render();
    });
  }

  rightInput() {
    this.view.rightInput.addEventListener("keyup", (e) => {
      this.view.leftInput.classList.remove("active");
      this.model.tempArr[1].summ = e.target.value;
      this.render();
    });
  }

  createButtons() {
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

      input.addEventListener("click", () => {
        this.tempArr[0].rate = label.innerText;
        this.convert();
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

      input.addEventListener("click", () => {
        this.tempArr[1].rate = label.innerText;
        this.convert();
        this.render();
      });

      this.view.rightButtons.append(input);
      this.view.rightButtons.append(label);
    });
  }

  async render() {
    const tempArr = this.model.tempArr;

    await this.convert();

    if (this.view.leftInput.className !== "converters-input") {
      this.model.rateFromTo();
      this.view.rightInput.value = tempArr[1].summ;
    } else {
      this.model.rateToFrom();
      this.view.leftInput.value = tempArr[0].summ;
    }

    this.view.rightRate.innerText = `1 ${tempArr[1].rate} = ${
      Math.floor((1 / tempArr[0].perUnit) * 10 ** 6) / 10 ** 6
    } ${tempArr[0].rate}`;
    this.view.leftRate.innerText = `1 ${tempArr[0].rate} = ${tempArr[0].perUnit} ${tempArr[1].rate}`;
  }
}
