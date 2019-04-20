import { LitElement, html } from "lit-element"

class CalcKeypad extends LitElement {
  constructor() {
    super()
  }

  handleClick(e) {
    console.log(e.target.name)
  }

  render() {
    return html`
      <div className="button">
        <button name="(" @click="${this.handleClick}">(</button>
        <button name="CE" @click="${this.handleClick}">CE</button>
        <button name=")" @click="${this.handleClick}">)</button>
        <button name="C" @click="${this.handleClick}">C</button><br />

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
        <button name="=" @click="${this.handleClick}">=</button>
        <button name="/" @click="${this.handleClick}">÷</button><br />
      </div>
    `
  }
}

customElements.define("calc-keypad", CalcKeypad)
