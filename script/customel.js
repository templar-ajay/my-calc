class logContent extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML = `
            ${localStorage.getItem("InnerHtml")}
        `
    }
}
customElements.define('log-content',logContent)