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
        margin: 8px 0;
      }

      .alert {
        padding: 12px;
        border-radius: var(--border-radius);
        text-align: center;
        color: #fff;
        background-color: var(--secondary-color);
        box-shadow: var(--box-shadow);
        backdrop-filter: blur(5px);
      }

      .success {
        background-color: var(--primary-color);
      }

      .error {
        background-color: #dc3545;
      }
    `,
  ];

  render() {
    return html` <div class="alert ${this.type}">${this.message}</div> `;
  }
}
customElements.define('alert-component', AlertComponent);
