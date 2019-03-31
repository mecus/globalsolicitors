export class Navigation extends HTMLElement {
    
    constructor(){
        super();
        let shadowDom = this.attachShadow({mode: "open"});
        let section = document.createElement("div");
        section.setAttribute("class", "nav");
        shadowDom.appendChild(section);
    }

}