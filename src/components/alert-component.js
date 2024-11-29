import { LitElement, html, css } from 'lit';

export class AlertComponent extends LitElement {
  static get properties() {
    return {
      type: { type: String },
      message: { type: String },
    };
  }

  static styles = [
    css`
      :host {
        display: block;
        padding: 8px;
        margin: 8px 0;
        border-radius: 4px;
      }

      .alert {
        padding: 8px;
        border-radius: 4px;
        color: white;
        text-align: center;
        background-color: var(--color-primary, blue);
      }

      .success {
        background-color: var(--color-success, green);
      }

      .error {
        background-color: var(--color-error, red);
      }
    `,
  ];

  render() {
    return html` <div class="alert ${this.type}">${this.message}</div> `;
  }
}
customElements.define('alert-component', AlertComponent);
