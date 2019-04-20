import { LitElement, html } from "lit-element"
import "./calc-result"
import "./calc-keypad"

class CalcApp extends LitElement {
  constructor() {
    super()
    this.foo = "hello world"
  }

  render() {
    return html`
      <p>${this.foo}</p>
      <calc-result></calc-result>
      <calc-keypad></calc-keypad>
    `
  }
}

customElements.define("calc-app", CalcApp)
