import BasicObject from "./BasicObject.js";
import Icons from "./subcomponents/Icons.js";
import Icon3States from "./subcomponents/Icon3States.js";


export class Alignment extends BasicObject {

    constructor (obj_or_domElem) {

        super(obj_or_domElem);

        this.showCurrentIcon = this.showCurrentIcon.bind (this);

        this.storeProp = "textAlign";
        this.stateValue = this.obj.value || "left";
        this.createElements();
        this.showCurrentIcon();
    }

    createElements () {

        this.row = document.createElement("div");
        this.row.setAttribute("id", this.obj.id);
        this.row.classList.add("tool_row");
        this.row.style.minHeight = "59px";

        this.label = document.createElement("div");
        this.label.classList.add("label");
        this.label.textContent = "Alignment:";

        
        let iconLeftConfig = {
            id: "left",
            svg: Icons.icon_align_left(),
            width:25,
            height:25,
            classList: ["row_right"],
            callback: this.valueChanged };
        this.iconLeft = new Icon3States(iconLeftConfig);

        let iconRightConfig = {
            id: "right",
            svg: Icons.icon_align_right(),
            width:25,
            height:25,
            classList: ["simple_row_content_right"],
            callback: this.valueChanged };
        this.iconRight = new Icon3States(iconRightConfig);

        let iconCenterConfig = {
            id: "center",
            svg: Icons.icon_align_center(),
            width:25,
            height:25,
            classList: ["simple_row_content_right"],
            callback: this.valueChanged };
        this.iconCenter = new Icon3States(iconCenterConfig);

        this.row.appendChild(this.label);
        this.row.appendChild(this.iconRight.getContent());
        this.row.appendChild(this.iconCenter.getContent());
        this.row.appendChild(this.iconLeft.getContent());
    }

    getContent(){
        return this.row;
    }

    getValue() {
        return this.stateValue;
    }

    setValue(value) {
        this.stateValue = value;
        //this.content.setAttribute("style", "background-color:"+this.stateValue +")");
    }

    valueChanged(isChecked) {
        this.stateValue = isChecked;
        this.store.update(this.id, this.stateValue);
        this.showCurrentIcon();
    }

    showCurrentIcon () {

        switch (this.stateValue) {
            case "left":
                this.iconLeft.setActive(true);
                this.iconCenter.setActive(false);
                this.iconRight.setActive(false);
                break;
            case "center":
                this.iconLeft.setActive(false);
                this.iconCenter.setActive(true);
                this.iconRight.setActive(false);
                break;
            case "right":
                this.iconLeft.setActive(false);
                this.iconCenter.setActive(false);
                this.iconRight.setActive(true);
                break;
        }
    }


    setValueFromStore (value) {
        this.stateValue = value;
        this.showCurrentIcon();
    }

}

export default Alignment;