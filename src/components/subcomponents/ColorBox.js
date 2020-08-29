import BasicObject from "../BasicObject.js";


export class ColorBox extends BasicObject {

    constructor (obj_or_domElem) {

        super(obj_or_domElem);

        if (!this.obj.value) this.obj.value = "rgb(255,0,0)";
    
        this.createElements();
        this.setValue(this.obj.value);
    }

    createElements () {
        this.content = document.createElement("div"); 
        this.content.classList.add("colorbox_std");
        this.content.addEventListener ('click', this.obj.callback);
    }

    getContent(){
        return this.content;
    }

    getValue() {
        return this.obj.value;
    }

    setValue(rgbString) {
        this.obj.value = rgbString;
        this.content.style.backgroundColor = rgbString;
    }

    valueChanged(value) {
        this.obj.callbackColorbox(this.obj.value);
    }
}

export default ColorBox;