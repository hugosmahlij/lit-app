const { Router } = require('@vaadin/router');
import { LitElement, html, css } from 'lit';

export class RouterApp extends LitElement {
  firstUpdated() {
    const router = new Router(this.shadowRoot.querySelector('#outlet'));
    router.setRoutes([
      { path: '/', redirect: '/login' },
      { path: '/login', component: 'login-page' },
      { path: '/home', component: 'home-page' },
    ]);
  }

  static styles = [
    css`
      :host {
        display: block;
        width: 100%;
        min-height: 100vh;
      }
    `,
  ];

  render() {
    return html` <div id="outlet"></div> `;
  }
}
customElements.define('router-app', RouterApp);
