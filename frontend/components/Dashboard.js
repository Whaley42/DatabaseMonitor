

export default class Dashboard extends HTMLElement{


    connectedCallback(){
        console.log("in connected call back")
        const template = document.getElementById("dashboard")
        const content = template.content.cloneNode(true);
        this.appendChild(content);
    }
}


customElements.define("content-dashboard", Dashboard);