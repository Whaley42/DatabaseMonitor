import Card from "./Card.js";


export default class Dashboard extends HTMLElement{

    render(){
        
        //Display Info Cards
        const overviewInfo = [
            {top: '<i class="fa-solid fa-server fa-xl"></i>', middle: "Instances", bottom: "500",infoColor: "success"},
            {top: '<i class="fa-solid fa-database fa-xl"></i>', middle: "Databases", bottom: "500",infoColor: "success"},
            {top: '<i class="fa-solid fa-triangle-exclamation fa-xl"></i>', middle: "Warnings", bottom: "500",infoColor: "warning"},
            {top: '<i class="fa-solid fa-radiation fa-xl"></i>', middle: "Critical Alerts", bottom: "500",infoColor: "critical"},

        ];
        const overviewArea = this.querySelector(".overview-area");
        for(let i = 0; i < 4; i++){
            overviewArea.appendChild(new Card(overviewInfo[i]))
        }

        //Display Tables
    }

    connectedCallback(){
        console.log("in connected call back")
        const template = document.getElementById("dashboard")
        const content = template.content.cloneNode(true);
        this.appendChild(content);
        this.render();
    }
}


customElements.define("content-dashboard", Dashboard);