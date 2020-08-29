import BasicObject from "../../BasicObject.js";
import Slider from "./Slider.js"; // should be above of the following !
import InputField from "../InputField.js";


export class RowSliderBase extends BasicObject{

    constructor (obj_or_domElem) {

        super(obj_or_domElem);
        
        this.stateValue = 0;

        if (!this.obj.rowClassName) this.obj.rowClassName = "slider_container_std";
        if (!this.obj.labelClassName) this.obj.labelClassName = "label_std";
        if (!this.obj.inputFieldClassName) this.obj.inputFieldClassName = "input_std";
        
        //----------- bind methods --------------------------

        this.setLabel = this.setLabel.bind(this);
        this.setSliderBackground = this.setSliderBackground.bind(this);
        this.sliderChanged = this.sliderChanged.bind(this);
        this.inputChanged = this.inputChanged.bind(this);

        //----------- callbacks -----------------------------

        this.obj.callbackSlider = this.sliderChanged;
        this.obj.callbackInput = this.inputChanged;

        //----------- create dom elements -------------------

        this.createElements();
        this.setLabel();
    }

    createElements () {

        this.row = document.createElement("div");
        this.row.classList.add("slider_container_std")

        this.label = document.createElement("div");
        this.label.classList.add("label");
        this.label.style.paddingTop = "5px";
        this.label.style.width = "30px";

        this.slider = new Slider(this.obj);
        this.sliderContent = this.slider.getContent();

        this.sliderContainer = document.createElement("div");
        this.sliderContainer.style.width = "100%";
        this.sliderContainer.style.paddingTop = "6px";
        this.sliderContainer.appendChild(this.sliderContent);

        let configInput = {
            classList: ["input_std", "row_right"],
            callback: this.inputChanged,
            type:"number",
            min: this.obj.min,
            max: this.obj.max,
            step:this.obj.step || 1,
            value:this.obj.value,
            width:"30px",
            restrict:"0-9"};
        this.input = new InputField(configInput);

        this.setSliderBackground();
        this.row.appendChild(this.label);
        this.row.appendChild(this.sliderContainer);
        this.row.appendChild(this.input.getContent());
    }

    getContent() {
        return this.row;
    }

    getValue() {
        return this.stateValue;
    }

    setValue(value) {
        let checked = this.checkMinMax(this.obj.min, this.obj.max, value);
        this.stateValue = checked;
        this.slider.setValue(checked);
        this.input.setValue(checked);
    }

    

    sliderChanged (e) {
        this.stateValue = e.target.value;
        this.input.setValue(e.target.value);
        this.obj.sliderStateChanged(e);
    }

    inputChanged () {
        
        let val = this.input.getValue();
        let checked = this.checkMinMax(this.obj.min, this.obj.max, val);
        this.stateValue = checked;
        this.slider.setValue(checked);
        if (val != checked) {
            e.target.value = checked;
            this.stateValue = checked;
        }
       this.obj.sliderStateChanged();
    }

    setSliderBackground () {

    }

    setLabel () {

    }
}

export default RowSliderBase;
