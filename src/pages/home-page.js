import { html, LitElement } from 'lit';
import { AuthMixin } from '../mixins/auth-mixin';

export class HomePage extends AuthMixin(LitElement) {
  firstUpdated() {
    this.redirectIfNotAutheticated();
  }

  handleLogout() {
    this.logOut();
  }

  render() {
    return html`
      <auth-layout>
        <button @click=${this.handleLogout}>Log out</button>
      </auth-layout>
    `;
  }
}
