import RowSliderBase from "./RowSliderBase.js";

export class RowSliderSaturation extends RowSliderBase{

    constructor (obj_or_domElem) {

        super(obj_or_domElem);
       
        this.obj.sliderType = "saturation";
        this.obj.min = "0";
        this.obj.max = "100";
        this.obj.value = "100";

        this.createElements();
        this.setLabel();
    }

    setSliderBackground(colorValue) {
        
        if (!colorValue) colorValue = `#00ff00`;
        this.sliderContent.style = "background: linear-gradient(90deg, #000 0%, " + colorValue +  " 100%);";
    }

    setLabel () {
        this.label.textContent = "S:";
    }
}

export default RowSliderSaturation
