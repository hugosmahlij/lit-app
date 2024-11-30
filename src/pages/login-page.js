import { LitElement, html, css, nothing } from 'lit';
import { Router } from '@vaadin/router';

import '../components/login-component.js';
import '../components/alert-component.js';
import '../layouts/public-layout.js';

export class LoginPage extends LitElement {
  constructor() {
    super();
    this.alertType = '';
    this.alertMessage = '';
  }

  static get properties() {
    return {
      alertType: { type: String },
      alertMessage: { type: String },
    };
  }

  handleLoginSuccess(event) {
    const { email } = event.detail;
    this.alertType = 'success';
    this.alertMessage = 'login success';

    Router.go('/home');
  }

  handleLoginError(event) {
    const { error } = event.detail;
    this.alertType = 'error';
    this.alertMessage = `login failed ${error || ''}`;
  }

  firstUpdated() {}

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('login-success', this.handleLoginSuccess.bind(this));
    this.addEventListener('login-error', this.handleLoginError.bind(this));
  }

  disconnectedCallback() {
    this.removeEventListener(
      'login-success',
      this.handleLoginSuccess.bind(this)
    );
    this.removeEventListener('login-error', this.handleLoginError.bind(this));
    super.disconnectedCallback();
  }

  static styles = [
    css`
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-items: center;
        width: 100%;
        background-color: var(--background-color);
      }

      login-component {
        max-width: 400px;
        background-color: rgba(255, 255, 255, 0.8);
        border-radius: var(--border-radius);
        box-shadow: var(--box-shadow);
        padding: 20px;
      }

      alert-component {
        margin-top: 20px;
      }
    `,
  ];

  render() {
    return html`
      <public-layout>
        <login-component></login-component>
        ${this.alertType
          ? html`<alert-component
              .type=${this.alertType}
              .message=${this.alertMessage}
            ></alert-component>`
          : nothing}
      </public-layout>
    `;
  }
}
customElements.define('login-page', LoginPage);
