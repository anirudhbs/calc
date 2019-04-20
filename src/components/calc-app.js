import { LitElement, html } from "lit-element"

class CalcApp extends LitElement {
  constructor() {
    super()
    this.foo = "hello world"
  }

  render() {
    return html`
      <p>${this.foo}</p>
    `
  }
}

customElements.define("calc-app", CalcApp)
