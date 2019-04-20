import { LitElement, html } from "lit-element"

class CalcKeypad extends LitElement {
  constructor() {
    super()
    this.resetOnInput = true
  }

  handleClick(e) {
    const resultNode = document.querySelector("#result")
    if (this.resetOnInput) {
      resultNode.textContent = ""
    }

    resultNode.textContent = resultNode.textContent + e.target.name
    this.resetOnInput = false
  }

  computeValue() {
    const resultNode = document.querySelector("#result")
    resultNode.textContent = eval(resultNode.textContent)
    this.resetOnInput = true
  }

  clear() {
    document.querySelector("#result").textContent = ""
  }

  render() {
    return html`
      <style>
        button {
          height: 3em;
          width: 8em;
          margin-top: 0.5em;
          margin-left: 0.5em;
        }
      </style>
      <div className="button">
        <button name="(" @click="${this.handleClick}">(</button>
        <button name="CE" @click="${this.clear}">CE</button>
        <button name=")" @click="${this.handleClick}">)</button>
        <button name="C" @click="${this.clear}">C</button><br />

        <button name="1" @click="${this.handleClick}">1</button>
        <button name="2" @click="${this.handleClick}">2</button>
        <button name="3" @click="${this.handleClick}">3</button>
        <button name="+" @click="${this.handleClick}">+</button><br />

        <button name="4" @click="${this.handleClick}">4</button>
        <button name="5" @click="${this.handleClick}">5</button>
        <button name="6" @click="${this.handleClick}">6</button>
        <button name="-" @click="${this.handleClick}">-</button><br />

        <button name="7" @click="${this.handleClick}">7</button>
        <button name="8" @click="${this.handleClick}">8</button>
        <button name="9" @click="${this.handleClick}">9</button>
        <button name="*" @click="${this.handleClick}">x</button><br />

        <button name="." @click="${this.handleClick}">.</button>
        <button name="0" @click="${this.handleClick}">0</button>
        <button name="=" @click="${this.computeValue}">=</button>
        <button name="/" @click="${this.handleClick}">÷</button><br />
      </div>
    `
  }
}

customElements.define("calc-keypad", CalcKeypad)
