import BasicObject from "./BasicObject.js";
import InputField from "./subcomponents/InputField.js";
import SmallSlider from "./subcomponents/slider/SmallSlider.js";


export class SpaceTop extends BasicObject {

    constructor (obj_or_domElem) {

        super(obj_or_domElem);
        this.storeProp = "paddingBottom";
        this.stateValue = this.obj.value || 14;

        this.sliderChanged = this.sliderChanged.bind(this);
        this.showSlider = this.showSlider.bind(this);
        this.handleInputClicked = this.handleInputClicked.bind(this);
        this.collapse =  this.collapse.bind(this);
    
        //----------- callback ------------------------------

        this.obj.callbackInput = this.valueChanged;

        //----------- create dom elements -------------------
        
        this.createElements();
    }


    createElements () {

        this.row = document.createElement("div");
        this.row.classList.add("tool_row");
        this.row.style.minHeight = "59px";

        this.label = document.createElement("div");
        this.label.classList.add("label");
        this.label.textContent = "Space above:";

        let configInput = {
            classList: ["input_std", "row_right"],
            callback: this.valueChanged,
            callbackClick: this.handleInputClicked,
            type:"number",
            min: 0,
            max:200,
            step:1,
            value:this.stateValue,
            restrict:"0-9"};
        this.input = new InputField(configInput);

        let configSlider = {
            background: "#555555",
            sliderClassName : "slider_small",
            callbackSlider: this.sliderChanged,
            min: 0,
            max:200,
            step:1,
            value:this.stateValue};
        this.slider = new SmallSlider(configSlider);

        this.row.appendChild(this.label);
        this.row.appendChild(this.input.getContent());
        this.row.appendChild(this.slider.getContent());

    }

    getContent(){
        return this.row;
    }

    getValue() {
        return this.stateValue;
    }

    setValue(value) {
        this.stateValue = value;
    }

    valueChanged(value) {
        this.stateValue = value;
        this.store.update(this.id, this.stateValue);
    }

    setValueFromStore (value) {
        this.stateValue = value;
        this.input.setValue(this.stateValue);
    }

    sliderChanged (e) {
        this.stateValue = this.slider.getValue();
        this.input.setValue(this.stateValue);
        this.store.update(this.id, this.stateValue);
    }

    showSlider () {
        this.slider.open();
    }

    handleInputClicked () {
        this.showSlider();
    }

    collapse () {
        this.sliderContainer.classList.add("hide");
    }
}

export default SpaceTop;