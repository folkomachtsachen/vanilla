import RowSliderBase from "./RowSliderBase.js";

export class RowSliderHue extends RowSliderBase{

    constructor (obj_or_domElem) {

        super(obj_or_domElem);
       
        this.obj.sliderType = "hue";
        this.obj.min = "0";
        this.obj.max = "360";
        this.obj.value = "66"; // as string, int doesn´t work

        this.createElements();
        this.setSliderBackground();
        this.setLabel();
    }  


    setSliderBackground() {
        this.label.textContent = "Fo";
        this.sliderContent.style = "background: linear-gradient(90deg, red 0%, #ff0 17%, lime 33%, cyan 50%, blue 66%, #f0f 83%, red 100%);";
    }

    setLabel () {
        this.label.textContent = "H:";
    }
}

export default RowSliderHue