import { LitElement, html, css, property, customElement } from "lit-element"

@customElement("calc-keypad")
export class CalcKeypad extends LitElement {
  @property({ type: Boolean })
  private resetOnInput = false

  handleClick(e: any) {
    const resultNode = document.querySelector("#result")
    if (this.resetOnInput) {
      resultNode.textContent = ""
    }

    const value = e.target.name
    const operators = ["+", "-", "*", "/"]

    if (value === "+" || value === "-" || value === "*" || value === "/") {
      if (resultNode.textContent === "" || operators.includes(resultNode.textContent.slice(-1))) {
        // do nothing
        // todo: use switch case
      } else {
        resultNode.textContent = resultNode.textContent + value
      }
    } else if (value === ".") {
      if (resultNode.textContent.slice(-1) !== ".") {
        resultNode.textContent = resultNode.textContent + value
      }
    } else {
      resultNode.textContent = resultNode.textContent + value
    }
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

  backSpace() {
    const value = document.querySelector("#result").textContent
    document.querySelector("#result").textContent = value.slice(0, value.length - 1)
  }

  static get styles() {
    return css`
      .row {
        display: block;
      }

      button {
        background: #4527a0;
        font-size: 27px;
        cursor: pointer;
        width: 3em;
        height: 2em;
        margin-top: 0.5em;
        margin-left: 0.5em;
        border-radius: 5px;
        box-shadow: 0px 4px rgba(0, 0, 0, 0.2);
        margin: 0 7px 11px 0;
        color: #ffeb3b;
        line-height: 46px;
        text-align: center;
        user-select: none;
        outline: 0 solid;
        transition: all 0.2s ease;
      }

      button:hover {
        transform: scale(1.05);
      }

      .special {
        background: #d6643f;
        box-shadow: 0px 4px #c3502b;
        color: #f1c851;
      }
    `
  }

  render() {
    return html`
      <div>
        <div class="row">
          <button name="(" @click="${this.handleClick}">(</button>
          <button name=")" @click="${this.handleClick}">)</button>
          <button name="C" @click="${this.backSpace}" class="special">C</button>
          <button name="CE" @click="${this.clear}" class="special">CE</button>
        </div>

        <div class="row">
          <button name="1" @click="${this.handleClick}">1</button>
          <button name="2" @click="${this.handleClick}">2</button>
          <button name="3" @click="${this.handleClick}">3</button>
          <button name="+" @click="${this.handleClick}">+</button>
        </div>

        <div class="row">
          <button name="4" @click="${this.handleClick}">4</button>
          <button name="5" @click="${this.handleClick}">5</button>
          <button name="6" @click="${this.handleClick}">6</button>
          <button name="-" @click="${this.handleClick}">-</button>
        </div>

        <div class="row">
          <button name="7" @click="${this.handleClick}">7</button>
          <button name="8" @click="${this.handleClick}">8</button>
          <button name="9" @click="${this.handleClick}">9</button>
          <button name="*" @click="${this.handleClick}">x</button>
        </div>

        <div class="row">
          <button name="." @click="${this.handleClick}">.</button>
          <button name="0" @click="${this.handleClick}">0</button>
          <button name="=" @click="${this.computeValue}" class="special">=</button>
          <button name="/" @click="${this.handleClick}">÷</button>
        </div>
      </div>
    `
  }
}
