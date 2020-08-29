import BasicObject from "../../BasicObject.js";


export class Slider extends BasicObject{

    constructor (obj_or_domElem) {

        super(obj_or_domElem);

        if (!this.obj.sliderType) this.obj.sliderType = "basic";
        if (!this.obj.type) this.obj.type = "range";
        if (!this.obj.background) this.obj.background = "#888888";
        if (!this.obj.sliderClassName) this.obj.sliderClassName = "slider_std";

        //----------- callback ------------------------------

        this.obj.callback = this.obj.callbackSlider;
        
        //----------- create dom elements -------------------
        this.createElements();
    }

    createElements () {
       
        this.slider = document.createElement("input"); 
        this.slider.setAttribute("type", this.obj.type);
        this.slider.setAttribute("class", this.obj.sliderClassName);
        this.slider.setAttribute("min", this.obj.min); 
        this.slider.setAttribute("max", this.obj.max);
        this.slider.setAttribute("value", this.obj.value);
        this.slider.style.background = this.obj.background;
        this.slider.addEventListener ('input', this.obj.callback);
    }

    getContent () {
        return this.slider;
    }

    valueChanged (value) {
        
    }

    setValue (value) {
        this.slider.value = value;
    }

    getValue () {
        return (this.slider.value);
    }
}

export default Slider;