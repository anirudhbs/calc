import { LitElement, html, customElement } from "lit-element"

import "./components/calc-keypad"

@customElement("my-app")
export class MyApp extends LitElement {
  render() {
    return html`
      <calc-keypad></calc-keypad>
    `
  }
}
