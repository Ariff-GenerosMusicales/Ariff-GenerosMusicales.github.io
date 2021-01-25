class MNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = 
      `<ul>
        <li><a href="index.html">Sesión</a></li>
      </ul>`;
    this.ul = this.querySelector("ul");
  }
  protege(privilegios) {
    let html = "";
    if (privilegios.has("GenerosMusicales")) {
      html +=`<li><a href="generosmusicales.html">GenerosMusicales</a></li>`;
    }
    if (privilegios.has("Usuarios")) {
      html += `<li><a href="usuarios.html">Usuarios</a></li>`;
    }
    this.ul.innerHTML += html;
  }
}
customElements.define("nav", MNav);
