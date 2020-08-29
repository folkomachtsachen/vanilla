import BasicObject from "./BasicObject.js";
import DropDownMenu from "./subcomponents/DropDownMenu.js";


export class FontWeight extends BasicObject {

    constructor (obj_or_domElem) {

        super(obj_or_domElem);

        this.storeProp = "fontWeight";

        //----------- menu value-----------------------------

        this.obj.items = [300,400,500,700,900];
        this.obj.currentItem = 2;
        this.stateValue = this.obj.value || 400;
        //if (!this.obj.value) this.obj.value = 300;
        if (!this.obj.menuWidth) this.obj.menuWidth = "80px";

        //----------- callback ------------------------------

        this.obj.callbackPullDownMenu = this.valueChanged;

        //----------- create dom elements -------------------

        this.createElements();
        this.setValue(this.stateValue);
    }

    createElements () {

        this.row = document.createElement("div");
        this.row.classList.add("tool_row");
        this.row.style.minHeight = "59px";

        this.label = document.createElement("div");
        this.label.classList.add("label");
        this.label.textContent = "Font weight:";

        this.dropDown = new DropDownMenu(this.obj);
    
        this.row.appendChild(this.label);
        this.row.appendChild(this.dropDown.getContent());
    }

    getContent(){
        return this.row;
    }

    getValue() {
        return this.stateValue;
    }

    setValue(value) {
        this.stateValue = value;
        this.dropDown.setValue(this.stateValue);
        if (this.store) this.store.update(this.id, this.stateValue);
    }

    valueChanged(value) {
        this.stateValue = value;
        this.dropDown.setValue(this.stateValue);
        this.store.update(this.id, this.stateValue);
    }

    setValueFromStore (value) {
        this.stateValue = value;
        this.dropDown.setValue(this.stateValue);
    }
}

export default FontWeight;