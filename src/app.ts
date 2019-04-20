import { LitElement, html, customElement } from "lit-element"

import "./components/calc-keypad"

@customElement("calc-keypad")
export class CalcKeypad extends LitElement {
  render() {
    return html`
      <div>
        <calc-keypad></calc-keypad>
      </div>
    `
  }
}
