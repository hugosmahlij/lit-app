import { LitElement, html, css } from 'lit';

export class AuthLayout extends LitElement {
  static styles = [
    css`
      :host {
        display: grid;
        grid-template-rows: auto 1fr auto;
        width: 100%;
        min-height: 100vh;
        background-color: var(--background-color);
      }

      header,
      footer {
        background-color: white;
        padding: 16px;
        text-align: center;
        border-radius: var(--border-radius);
        box-shadow: var(--box-shadow);
        margin: 8px;
      }

      footer {
        text-align: center;
      }

      main {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 16px;
        background: rgba(255, 255, 255, 0.8);
        border-radius: var(--border-radius);
        box-shadow: var(--box-shadow);
        backdrop-filter: blur(10px);
        margin: 8px;
      }
    `,
  ];

  render() {
    return html`
      <header>
        <slot name="header"></slot>
      </header>
      <main>
        <slot name="main"></slot>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
    `;
  }
}
customElements.define('auth-layout', AuthLayout);
