import BasicObject from "../BasicObject.js";


export class BasicRow extends BasicObject {

    constructor (obj_or_domElem) {

        super(obj_or_domElem);

        this.setClassName = this.setClassName.bind(this);
        this.appendChild = this.appendChild.bind(this);

        this.setClassName();
        this.createElements ();
    }

    setClassName () {
        this.obj.rowClassName = "row100";
    }

    createElements () {
        this.row = document.createElement("div"); 
        this.row.setAttribute("class", this.obj.rowClassName);
    }

    appendChild (obj) {
        this.row.appendChild (obj);
    }

    getContent() {
        return this.row;
    }
}

export default BasicRow;
