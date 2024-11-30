import { LitElement, html, css } from 'lit';

export class PublicLayout extends LitElement {
  static styles = [
    css`
      :host {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
        background: linear-gradient(
          135deg,
          rgba(173, 216, 230, 0.8),
          rgba(240, 248, 255, 0.8)
        );
      }

      div {
        background-color: rgba(255, 255, 255, 0.9);
        padding: 32px;
        border-radius: var(--border-radius);
        box-shadow: var(--box-shadow);
        backdrop-filter: blur(10px);
        text-align: center;
        width: 100%;
        max-width: 400px;
      }
    `,
  ];

  render() {
    return html`
      <div>
        <slot></slot>
      </div>
    `;
  }
}
customElements.define('public-layout', PublicLayout);
