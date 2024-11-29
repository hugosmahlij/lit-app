import { LitElement, html, css, nothing } from 'lit';
import { Router } from '@vaadin/router';

import '../components/login-component.js';

export class LoginPage extends LitElement {
  static get properties() {
    return {
      alertMessage: { type: String },
    };
  }

  constructor() {
    super();
    this.alertMessage = ''; // Mensaje de error si el login falla
  }

  // Maneja el evento de login exitoso
  handleLoginSuccess() {
    localStorage.setItem('userAuthenticated', 'true'); // Guardar autenticación
    Router.go('/home'); // Redirigir al usuario
  }

  // Maneja el evento de login fallido
  handleLoginError(event) {
    const { error } = event.detail;
    this.alertMessage = error || 'Login failed. Please try again.';
  }

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

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }

    .alert {
      color: red;
      margin-bottom: 16px;
    }
  `;

  render() {
    return html`
      ${this.alertMessage
        ? html`<div class="alert">${this.alertMessage}</div>`
        : nothing}
      <login-component></login-component>
    `;
  }
}

customElements.define('login-page', LoginPage);
