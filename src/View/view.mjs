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
    props.class && (button.className = props.class);
    props.type && (button.type = props.type);

    return button;
  }

  createDiv(props) {
    const div = document.createElement("div");

    props.text && (div.innerText = props.text);
    props.id && (div.id = props.id);

    return div;
  }

  createForm(props) {
    const form = document.createElement("form");

    props.id && (form.id = props.id);

    return form;
  }

  createInput(props) {
    const input = document.createElement("input");

    props.text && (input.value = props.text);
    props.class && (input.className = props.class);
    props.name && (input.name = props.name);
    props.id && (input.id = props.id);

    return input;
  }

  createUl(props) {
    const ul = document.createElement("ul");

    props.id && (ul.id = props.id);

    return ul;
  }

  createLi(props) {
    const li = document.createElement("li");

    props.text && (li.innerHTML = props.text);
    props.class && (li.className = props.class);
    props.id && (li.id = props.id);
    props.id === 0 && (li.id = props.id);
    props.draggable && (li.draggable = props.draggable);

    return li;
  }

  createElements() {}
}
