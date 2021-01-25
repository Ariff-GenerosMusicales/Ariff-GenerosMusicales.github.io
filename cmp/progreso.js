class Progreso extends HTMLElement {
  connectedCallback() {
    this.innerHTML = 
      `<process max="100">Cargando…</process>`;
  }
}
customElements.define("process", Progreso);
