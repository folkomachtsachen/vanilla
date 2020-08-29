import BasicObject from "./BasicObject.js";


export class Divider extends BasicObject {

    constructor (obj_or_domElem) {

        super(obj_or_domElem);

        this.top = this.obj.top || "25px";
        this.bottom = this.obj.bottom || "30px";

        this.createElements();
    }

    createElements () {
        this.row = document.createElement("div");
        this.row.classList.add("divider"); 
        this.row.style.marginTop = this.top;
        this.row.style.marginBottom = this.bottom;
    }

    getContent(){
        return this.row;
    }
}

export default Divider;