import BasicObject from "./BasicObject.js";
import Icons from "./subcomponents/Icons.js";
import Icon3States from "./subcomponents/Icon3States.js";
import Checkbox from "./subcomponents/Checkbox.js";


export class Uppercase extends BasicObject {

    constructor (obj_or_domElem) {

        super(obj_or_domElem);
        this.storeProp = "textTransform";
        this.stateValue = this.obj.value || false;
        this.createElements();
        this.iconChecked.setValue(this.stateValue);
    }

    createElements () {

        this.row = document.createElement("div");
        this.row.setAttribute("id", this.obj.id);
        this.row.classList.add("tool_row");

        this.label = document.createElement("div");
        this.label.classList.add("label");
        this.label.textContent = "Uppercase:";

        this.iconChecked = new Checkbox({callback: this.valueChanged});

        this.row.appendChild(this.label);
        this.row.appendChild(this.iconChecked.getContent());
    }

    getContent(){
        return this.row;
    }

    getValue() {
        return this.stateValue;
    }

    setValue(value) {
        this.stateValue = value;
        this.store.update(this.id, this.stateValue);
    }

    valueChanged(checked) {
        this.stateValue = checked;
        this.store.update(this.id, this.stateValue);
    }
    setValueFromStore (value) {
        this.stateValue = value;
        this.iconChecked.setValue(this.stateValue);
    }

}

export default Uppercase;