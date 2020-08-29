import BasicObject from "../BasicObject.js";


export class Label extends BasicObject {

    constructor (obj_or_domElem) {

        super(obj_or_domElem);

        if (!this.obj.labelClassName) this.obj.labelClassName = "label";
        if (!this.obj.textContent) this.obj.textContent = "Label";

        //----------- bind methods --------------------------
        this.createElements = this.createElements.bind(this);

        this.createElements();
    }

    createElements () {
        this.container = document.createElement("div");
        this.content = document.createElement("div"); 
        this.content.setAttribute("class", this.obj.labelClassName);
        this.content.textContent = this.obj.textContent;
    }

    getContent(){
        return this.content;
    }
}

export default Label;