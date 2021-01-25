class PFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
            `Copyright &copy; 2021 Leonardo Ariff Razo Becerra.`;
    }
}
customElements.define("mi-footer", MiFooter);
