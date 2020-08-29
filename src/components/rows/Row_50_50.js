import BasicRow from "./BasicRow.js";


export class Row_50_50 extends BasicRow {

    constructor (obj_or_domElem) {
        super(obj_or_domElem);
    }

    setClassName () {
        this.obj.rowClassName = "row_50_50";
    }
}

export default Row_50_50;
