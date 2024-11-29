import { LitElement, html, css } from 'lit';

export class LoginComponent extends LitElement {
  constructor() {
    super();
    this.email = '';
    this.password = '';
  }

  static get properties() {
    return {
      email: { type: String },
      password: { type: String },
    };
  }

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      gap: 16px;
      align-items: center;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 8px;
      width: 300px;
      max-width: 100%;
    }

    input {
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    button {
      padding: 8px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  `;

  handleInputChange(event) {
    const { name, value } = event.target;
    this[name] = value;

    console.log(`Updated ${name}:`, value);
  }

  handleSubmit(event) {
    event.preventDefault();

    // Validación simple para login
    const validEmail = 'user@test.com';
    const validPassword = '1234';

    console.log('Login attempt with:', this.email, this.password);

    if (this.email === validEmail && this.password === validPassword) {
      console.log('Login successful');
      this.dispatchEvent(new CustomEvent('login-success', { bubbles: true }));
    } else {
      console.log('Login failed: Invalid credentials');
      this.dispatchEvent(
        new CustomEvent('login-error', {
          detail: { error: 'Invalid credentials' },
          bubbles: true,
        })
      );
    }
  }

  render() {
    return html`
      <form @submit=${this.handleSubmit}>
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          .value=${this.email}
          @input=${this.handleInputChange}
          required
        />

        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          .value=${this.password}
          @input=${this.handleInputChange}
          required
        />

        <button type="submit">Login</button>
      </form>
    `;
  }
}

customElements.define('login-component', LoginComponent);
