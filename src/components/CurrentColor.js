import BasicObject from "./BasicObject.js";
import ColorBox from "./subcomponents/ColorBox.js";
import ColorPickerHSL from './subcomponents/ColorPickerHSL.js';
import {hsl2rgb} from "./helper/HslToRgb.js";
import {rgbStringToHSL} from "./helper/HslToRgb.js";


export class CurrentColor extends BasicObject {

    constructor (obj_or_domElem) {

        super(obj_or_domElem);
        this.storeProp = "color";
        this.stateValue = this.obj.value || "rgb(255,0,0)";
        this.oldValue = this.obj.value || "rgb(255,0,0)";

        this.pickerIsCollapsed = true;
    
        this.openPicker = this.openPicker.bind(this);
        this.newColorClicked = this.newColorClicked.bind(this);
        this.oldColorClicked = this.oldColorClicked.bind(this);
        this.confirm = this.confirm.bind(this);


        //----------- callback ------------------------------

        this.obj.callbackColorbox = this.valueChanged;
        this.obj.callbackUpdateColorbox = this.setValue;
        this.obj.callbackConfirm = this.confirm;

        //----------- create dom elements -------------------
        
        this.createElements();
        this.setValue(this.stateValue);
    }


    createElements () {

        this.wrapper = document.createElement("div");

            this.row = document.createElement("div");
            this.row.classList.add("row_std");
            this.row.style.minHeight = "59px";
            this.label = document.createElement("div");
            this.label.classList.add("label");
            this.label.textContent = this.obj.name || "Current Color:";
            
            this.oldcolorbox = new ColorBox({value:this.oldValue, callback: this.oldColorClicked});
            this.oldcolorboxcontent = this.oldcolorbox.getContent();
            this.oldcolorboxcontent.classList.add("hide");

            this.colorbox = new ColorBox({value:this.stateValue, confirm: this.confirm, callback: this.newColorClicked});
            this.colorboxcontent = this.colorbox.getContent();
            this.colorboxcontent.classList.add("row_right");

            this.row.appendChild(this.label);
            this.row.appendChild(this.colorboxcontent);
            this.row.appendChild(this.oldcolorboxcontent);

            this.colorpicker = new ColorPickerHSL(this.obj);
            this.colorpickercontent = this.colorpicker.getContent();

        this.wrapper.appendChild(this.row); 
        this.wrapper.appendChild(this.colorpickercontent);
    }

    getContent(){
        return this.wrapper;
    }

    newColorClicked () {
        this.openPicker();
    }

    oldColorClicked () {
        this.stateValue = this.oldcolorbox.getValue();
        this.colorpicker.setRGB(this.stateValue);
    }

    getValue() {
        return this.stateValue;
    }

    setValue(value) {
        this.stateValue = value;
        this.colorbox.setValue(value);
        if (this.obj.store) this.obj.store.update(this.id, this.stateValue);
    }

    valueChanged(colorValue) {
        this.colorpicker.setRGB(colorValue);
    }

    openPicker () {
        // collapse
        if (this.colorpickercontent.style.maxHeight){
            this.colorpickercontent.style.maxHeight = null;
            this.oldcolorboxcontent.classList.remove("row_right");
            this.oldcolorboxcontent.classList.add("hide");
        // open
        } else {
            this.colorpickercontent.style.maxHeight = this.colorpickercontent.scrollHeight + "px";
            this.oldcolorboxcontent.classList.add("row_right");
            this.oldValue = this.stateValue;
            this.oldcolorbox.setValue(this.stateValue);
        } 
    }

    confirm (okOrCancel) {
        if (okOrCancel === "ok") {

        }
        else {
            this.stateValue = this.oldValue;
            this.colorbox.setValue(this.stateValue);
            this.colorpicker.setRGB(this.stateValue);

        }
        this.openPicker();
    }

    setStore(obj) {
        this.obj.store = obj;
        this.obj.store.register(this.id, this.value);
    }

    getValueFromStore () {
        if (this.id)  {
            this.setValueFromStore (this.obj.store.data[this.id])
        }
    }

    setValueFromStore (value) {
        this.stateValue = value;
        this.colorbox.setValue(this.stateValue);
        this.colorpicker.setRGB(this.stateValue);
    }
}

export default  CurrentColor;