import RowSliderBase from "./RowSliderBase.js";

export class RowSliderLuminance extends RowSliderBase{

    constructor (obj_or_domElem) {

        super(obj_or_domElem);
       
        this.obj.sliderType = "luminance";
        this.obj.min = "0";
        this.obj.max = "100";
        this.obj.value = "50";

        this.createElements();
        this.setLabel();
    }
    
    setSliderBackground() {
        
        this.sliderContent.style = "background: linear-gradient(90deg, #000 0%, #fff 100%);";
    }

    setLabel () {
        this.label.textContent = "L:";
    }
}

export default RowSliderLuminance
