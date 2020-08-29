import BasicObject from "./BasicObject.js";

export class Headline extends BasicObject {

    constructor (obj_or_domElem) {

        super(obj_or_domElem);

        if (!this.obj.textContent) this.obj.textContent = "Default headline";

        this.createElements();
    }

    createElements () {
        this.row = document.createElement("div"); 
        this.row.classList.add("headline");
        this.textDiv = document.createElement("div");
        this.textDiv.textContent = this.obj.textContent;
        this.textDiv.style.paddingTop ="25px";
        //let newText = document.createTextNode(this.obj.textContent); 
        this.row.appendChild(this.textDiv);
    }

    getContent(){
        return this.row;
    }
}

export default Headline;