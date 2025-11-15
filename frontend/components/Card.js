export default class Card extends HTMLElement{

    constructor(cardInfo){
        super();
        this.cardInfo = cardInfo;
    }

    connectedCallback(){
        console.log("Loading Card Callback...")
        // const template = document.getElementById("dashboard-card");
        // const content = template.content.cloneNode(true);
        // this.appendChild(content);
        this.innerHTML = 
        `
            <div class="padding-small ${this.cardInfo.infoColor}">${this.cardInfo.top}</div>
            <div class="padding-small">${this.cardInfo.middle}</div>
            <div class="font-large">${this.cardInfo.bottom}</div>
        `
    }

}
customElements.define("monitor-card", Card)