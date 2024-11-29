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
        --dile-primary-color: #464444;
      }

      h1,
      p {
        color: #000;
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
          <h2 slot="title">Home Page</h2>
          <dile-menu-hamburger slot="menu">
            <nav slot="menu">
              <p><a href="one.html">Link one</a></p>
              <p><a href="two.html">Link two</a></p>
            </nav>
          </dile-menu-hamburger>
          <span slot="actions">Create</span>
        </dile-nav>
        <p slot="footer">Todos los derechos reservados</p>
      </auth-layout>
    `;
  }
}
customElements.define('home-page', HomePage);
