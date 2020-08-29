import BasicObject from "../../BasicObject.js";


export class SmallSlider extends BasicObject{

    constructor (obj_or_domElem) {

        super(obj_or_domElem);

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.stopMouseUpTracking = this.stopMouseUpTracking.bind(this);
        this.mouseUpOutside = this.mouseUpOutside.bind(this);

        this.obj.callback = this.obj.callbackSlider;
        
        this.createElements();
    }

    createElements () {
       
        this.sliderContainer = document.createElement("div");
        this.sliderContainer.classList.add("tool_row");
        this.sliderContainer.classList.add("collapse");

        this.slider = document.createElement("input"); 
        this.slider.setAttribute("type", "range");
        this.slider.setAttribute("hideable", true);
        this.slider.setAttribute("class", "slider_small");
        this.slider.setAttribute("min", this.obj.min); 
        this.slider.setAttribute("max", this.obj.max);
        this.slider.setAttribute("value", this.obj.value);
        this.slider.style.background = "#555555";
        this.slider.addEventListener ('input', this.obj.callback);

        this.space = document.createElement("div");
        this.space.setAttribute("hideable", true);
        this.space.style.height = "40px";

        this.sliderContainer.appendChild(this.slider);
        this.sliderContainer.appendChild(this.space);

        this.sliderContainer.classList.add("hide");
    }

    getContent () {
        return this.sliderContainer;
    }

    valueChanged (value) {
        //console.log(value);
    }

    setValue (value) {
        this.slider.value = value;
    }

    getValue () {
        return (this.slider.value);
    }

    open () {
        this.sliderContainer.classList.remove("hide");
        this.sliderContainer.classList.remove("collapse");
        this.sliderContainer.style.maxHeight = (this.sliderContainer.scrollHeight) + "px";
        this.sliderContainer.classList.add("slider_container_small");
        window.addEventListener ('mouseup', this.mouseUpOutside);
    }

    close () {
        this.sliderContainer.style.maxHeight = null;
        //this.sliderContainer.classList.remove("row_std");
        this.sliderContainer.classList.add("collapse");
        this.sliderContainer.classList.add("hide");
        this.stopMouseUpTracking();
    }

    stopMouseUpTracking () {
        window.removeEventListener ('mouseup', this.mouseUpOutside);
    }

    mouseUpOutside (e) {
        if (!e.target.hasAttribute("hideable")) this.close();
    }
}

export default SmallSlider;