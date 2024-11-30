import { LitElement, html, css } from 'lit';
import { AuthMixin } from '../mixins/auth-mixin.js';

import '@dile/ui/components/nav/nav.js';
import '@dile/ui/components/menu-hamburger/menu-hamburger.js';
import '../layouts/auth-layout.js';

export class HomePage extends AuthMixin(LitElement) {
  static styles = [
    css`
      :host {
        width: 100%;
        border-radius: var(--border-radius);
        --dile-primary-color: var(--primary-color);
      }

      h1,
      p {
        color: var(--text-color);
      }

      .logout-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
      }

      dile-nav {
        border-radius: var(--border-radius);
      }

      button {
        padding: 10px 20px;
        background-color: var(--primary-color);
        color: white;
        border: none;
        border-radius: var(--border-radius);
        cursor: pointer;
        font-size: 14px;
        transition: background-color 0.3s ease;
      }

      button:hover {
        background-color: #0056b3;
      }

      .card {
        background: rgba(255, 255, 255, 0.8);
        border-radius: var(--border-radius);
        box-shadow: var(--box-shadow);
        padding: 20px;
        margin-top: 20px;
        text-align: center;
        backdrop-filter: blur(10px);
        width: 100%;
        max-width: 400px;
      }

      .card h3 {
        color: var(--text-color);
        font-size: 24px;
      }

      header,
      footer {
        background: rgba(255, 255, 255, 0.5);
        border-radius: var(--border-radius);
        box-shadow: var(--box-shadow);
        padding: 10px;
      }

      main {
        padding: 16px;
        background: linear-gradient(
          135deg,
          rgba(173, 216, 230, 0.8),
          rgba(240, 248, 255, 0.8)
        );
        min-height: calc(100vh - 120px);
      }
    `,
  ];

  connectedCallback() {
    super.connectedCallback();
    this.redirectIfNotAuthenticated(); // Protege la ruta
  }

  handleLogout() {
    localStorage.removeItem('isAuthenticated');
    window.location.href = '/login';
  }

  render() {
    return html`
      <auth-layout>
        <dile-nav slot="header" menu="right">
          <h2 slot="title">Home</h2>
          <dile-menu-hamburger slot="menu">
            <nav slot="menu">
              <p><a href="one.html">Link one</a></p>
              <p><a href="two.html">Link two</a></p>
            </nav>
          </dile-menu-hamburger>
          <span slot="actions"
            ><button @click=${this.handleLogout}>Logout</button></span
          >
        </dile-nav>

        <div slot="main" class="card">
          <h3>Bienvenido de nuevo!</h3>
          <p>Estamos felices de verte :)</p>
        </div>

        <p slot="footer">Todos los derechos reservados</p>
      </auth-layout>
    `;
  }
}
customElements.define('home-page', HomePage);
