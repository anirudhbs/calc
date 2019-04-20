import { LitElement, html } from "lit-element"

class CalcResult extends LitElement {
  constructor() {
    super()
    this.result = 0
  }

  render() {
    return html`
      <div>${this.result}</div>
    `
  }
}

customElements.define("calc-result", CalcResult)
