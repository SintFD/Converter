export default class View {
  constructor() {
    this.root = document.getElementById("root");
  }

  init() {
    this.createElements();
  }

  createButton(props) {
    const button = document.createElement("button");

    props.text && (button.innerText = props.text);
    props.id && (button.id = props.id);
    props.id === 0 && (button.id = props.id);
    props.class && (button.className = props.class);
    props.type && (button.type = props.type);

    return button;
  }

  createDiv(props) {
    const div = document.createElement("div");

    props.text && (div.innerText = props.text);
    props.class && (div.className = props.class);
    props.id && (div.id = props.id);

    return div;
  }

  createLabel(props) {
    const label = document.createElement("label");

    props.text && (label.innerText = props.text);
    props.class && (label.className = props.class);
    props.id === 0 && (label.id = props.id);
    props.id && (label.id = props.id);
    props.for === 0 && (label.htmlFor = props.for);
    props.for && (label.htmlFor = props.for);

    return label;
  }

  createInput(props) {
    const input = document.createElement("input");

    props.text && (input.value = props.text);
    props.class && (input.className = props.class);
    props.name && (input.name = props.name);
    props.id === 0 && (input.id = props.id);
    props.id && (input.id = props.id);
    props.type && (input.type = props.type);
    props.checked && input.setAttribute("checked", "checked");

    return input;
  }

  createElements() {
    this.header = this.createDiv({
      class: "header",
    });

    this.container = this.createDiv({
      class: "container",
    });

    this.converterTitle = this.createDiv({
      text: "Конвертер валют онлайн",
      class: "converter-title",
    });

    this.converters = this.createDiv({
      class: "converters",
    });

    this.leftConverter = this.createDiv({
      id: "left-converter",
      class: "converter-box",
    });

    this.rightConverter = this.createDiv({
      id: "right-converter",
      class: "converter-box",
    });

    this.leftButtons = this.createDiv({
      id: "leftButtons",
      class: "buttons-box",
    });

    this.rightButtons = this.createDiv({
      id: "rightButtons",
      class: "buttons-box",
    });

    this.iHave = this.createDiv({
      class: "i-have",
      text: "У меня есть",
    });

    this.wantBuy = this.createDiv({
      class: "want-Buy",
      text: "Хочу приобрести",
    });

    this.leftInput = this.createInput({
      text: "1",
      class: "converters-input active",
      id: "left-input",
    });

    this.rightInput = this.createInput({
      class: "converters-input",
      id: "right-input",
    });

    this.leftRate = this.createDiv({
      class: "rate",
      id: "left-rate",
    });

    this.rightRate = this.createDiv({
      class: "rate",
      id: "right-rate",
    });

    this.root.append(this.header);
    this.root.append(this.container);

    this.container.append(this.converterTitle);
    this.container.append(this.converters);

    this.converters.append(this.leftConverter);
    this.converters.append(this.rightConverter);

    this.leftConverter.append(this.iHave);
    this.leftConverter.append(this.leftButtons);
    this.leftConverter.append(this.leftInput);
    this.leftConverter.append(this.leftRate);

    this.rightConverter.append(this.wantBuy);
    this.rightConverter.append(this.rightButtons);
    this.rightConverter.append(this.rightInput);
    this.rightConverter.append(this.rightRate);
  }
}
