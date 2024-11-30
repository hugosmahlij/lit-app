import { LitElement, html, css } from 'lit';

export class LoginComponent extends LitElement {
  constructor() {
    super();
    this.initProperties();
  }

  static get properties() {
    return {
      email: { type: String },
      password: { type: String },
    };
  }

  static styles = [
    css`
      :host {
        display: flex;
        flex-direction: column;
        gap: 16px;
        align-items: center;
      }

      form {
        display: flex;
        flex-direction: column;
        gap: 12px;
        width: 300px;
        max-width: 100%;
        background: rgba(255, 255, 255, 0.8);
        border-radius: var(--border-radius);
        box-shadow: var(--box-shadow);
        backdrop-filter: blur(10px);
        padding: 20px;
        border: 1px solid rgba(0, 0, 0, 0.1);
      }

      label {
        font-size: 14px;
        color: var(--text-color);
        margin-bottom: 4px;
      }

      input[type='email'],
      input[type='password'] {
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: var(--border-radius);
        font-size: 14px;
        box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.1);
      }

      button {
        padding: 10px;
        background-color: var(--primary-color);
        color: #fff;
        border: none;
        border-radius: var(--border-radius);
        cursor: pointer;
        font-size: 14px;
        transition: background-color 0.3s ease;
      }

      button:hover {
        background-color: #0056b3;
      }
    `,
  ];

  handleSubmit(event) {
    event.preventDefault();

    if (this.email === 'user@example.com' && this.password === 'asd') {
      localStorage.setItem('isAuthenticated', true);
      this.dispatchCustomEvent('login-success', { email: this.email });
    } else {
      this.dispatchCustomEvent('login-error', {
        error: 'Invalid credentials.',
      });
    }

    this.initProperties();
  }

  initProperties() {
    this.email = '';
    this.password = '';
  }

  dispatchCustomEvent(eventName, detail) {
    const event = new CustomEvent(eventName, {
      detail,
      bubbles: true,
      composed: true,
    });

    this.dispatchEvent(event);
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this[name] = value;
  }

  render() {
    return html`
      <form @submit=${this.handleSubmit}>
        <label for="email">Email:</label>
        <input
          required
          type="email"
          id="email"
          name="email"
          .value=${this.email}
          @input=${this.handleInputChange}
        />

        <label for="password">Password:</label>
        <input
          required
          type="password"
          id="password"
          name="password"
          .value=${this.password}
          @input=${this.handleInputChange}
        />

        <button type="submit">Login</button>
      </form>
    `;
  }
}
customElements.define('login-component', LoginComponent);
