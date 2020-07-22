class MiFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /* html */
            `Copyright &copy; 2020 Vazquez Sanchez Edwin.`;
    }
}
customElements.define("mi-footer", MiFooter);