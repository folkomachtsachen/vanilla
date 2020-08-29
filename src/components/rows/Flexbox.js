import BasicObject from "../BasicObject.js";


export class Flexbox extends BasicObject {

    constructor (obj_or_domElem) {

        super(obj_or_domElem);

        this.setClassName = this.setClassName.bind(this);
        this.createElements = this.createElements.bind(this);
        this.getContent = this.getContent.bind(this);
        this.appendChild = this.appendChild.bind(this);

        this.setClassName();
        this.createElements ();
    }

    setClassName () {
        this.obj.gridClassName = "flexbox";
    }

    createElements () {
        this.row = document.createElement("div"); 
        this.row.setAttribute("class", this.obj.gridClassName);
    }

    appendChild (obj) {
        this.row.appendChild (obj);
    }

    setChildAt (obj,from,to) {
        this.row.appendChild (obj);
        let newClassName = obj.getAttribute("class") + " cell_3_4";
         obj.setAttribute("class", newClassName);
    }



    getContent() {
        return this.row;
    }
}

export default Flexbox;
