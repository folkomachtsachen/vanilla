import BasicObject from '../BasicObject.js';
import RowSliderHue from './slider/RowSliderHue.js';
import RowSliderSaturation from './slider/RowSliderSaturation.js';
import RowSliderLuminance from './slider/RowSliderLuminance.js';
import InputField from "./InputField.js";
import Icon3States from "./Icon3States.js";
import Button from "./Button.js";
import {hsl2rgb} from "../helper/HslToRgb.js";
import {rgb2hsl} from "../helper/HslToRgb.js";
import {rgb2hex} from "../helper/HslToRgb.js";
import {rgbStringToRGB} from "../helper/HslToRgb.js";
import VerticalSpace from "../rows/VerticalSpace.js";
import Icons from "./Icons.js";


export class ColorPickerHSL extends BasicObject {
    
    constructor (obj_or_domElem) {

        super(obj_or_domElem);

        this.init = this.init.bind(this);
        this.adjustSaturationSlider = this.adjustSaturationSlider.bind(this);
        this.createRGBString = this.createRGBString.bind(this);
        this.getHSLfromSliders = this.getHSLfromSliders.bind(this);
        this.setRGB = this.setRGB.bind(this);
        this.sliderChanged = this.sliderChanged.bind(this);
        this.rgbInputFieldChanged = this.rgbInputFieldChanged.bind(this);
        this.hexInputFieldChanged = this.hexInputFieldChanged.bind(this);
        this.updateColorField = this.updateColorField.bind(this);
        this.okButtonClicked = this.okButtonClicked.bind(this);
        this.cancelButtonClicked = this.cancelButtonClicked.bind(this);

        this.storeProp = "color";
        this.rgbString = this.obj.value || "rgb(255,0,0)";
        this.rgb = {r:255,g:0,b:0};
        this.hex = "";
        this.hsl = {h:0,s:100,l:50};

        this.obj.callbackHueSlider = this.sliderChanged;
        this.obj.callbackInput = this.inputChanged;

        //----------- create dom elements -------------------

        this.createElements();
        this.init();
    }

    createElements () {

        this.row = document.createElement("div");
        this.row.classList.add("collapse");

        this.hueSlider = new RowSliderHue({sliderStateChanged:this.valueChanged,textContent:"H:"});
        this.saturationSlider = new RowSliderSaturation({sliderStateChanged:this.valueChanged,textContent:"S:"});
        this.luminanceSlider = new RowSliderLuminance({sliderStateChanged:this.valueChanged,textContent:"L:"});
        this.row.appendChild(this.hueSlider.getContent());
        this.row.appendChild(this.saturationSlider.getContent());
        this.row.appendChild(this.luminanceSlider.getContent());

        this.spaceH = new VerticalSpace("lg");
        this.row.appendChild(this.spaceH.getContent());
        
        
        let configRGBInput = {
            classList: ["input_left_std", "simple_row_content_left"],
            callback: this.rgbInputFieldChanged,
            width: "108px"};
        this.rgbInput = new InputField(configRGBInput);


        let configHexInput = {
            classList: ["input_left_std", "simple_row_content_left"],
            callback: this.hexInputFieldChanged,
            width: "68px"};
        this.hexInput = new InputField(configHexInput);


        let configOkButton = {
            text: "ok",
            svg: Icons.icon_ok(),
            width: "30px",
            margin: "0px 0px 0px 0px",
            classList: ["row_right"],
            callback: this.okButtonClicked };
        this.okButton = new Icon3States(configOkButton);

            
        let configCancelButton = {
            text: "cancel",
            svg: Icons.icon_cancel(),
            width: "30px",
            margin: "0px 0px 0px 0px",
            classList: ["row_right"],
            callback: this.cancelButtonClicked };
        this.cancelButton = new Icon3States(configCancelButton);

        this.rowInputsBottom = document.createElement("div");
        this.rowInputsBottom.classList.add("row_std");
        this.rowInputsBottom.style.paddingBottom = "45px";

        this.rowInputsBottom.appendChild(this.rgbInput.getContent());
        this.rowInputsBottom.appendChild(this.hexInput.getContent());
        this.rowInputsBottom.appendChild(this.okButton.getContent());
        this.rowInputsBottom.appendChild(this.cancelButton.getContent());

        this.row.appendChild(this.rowInputsBottom);
    }

    init () {
        this.setRGB (this.obj.value);
        this.adjustSaturationSlider();
    }

    getContent() {
        return this.row;
    }

    getValue() {
        return this.hsl;
    }

    valueChanged(e) {
        this.getHSLfromSliders();
        this.adjustSaturationSlider ();
    }
    
    adjustSaturationSlider () {
       this.saturationSlider.setSliderBackground(this.rgbString);
    }

    createRGBString () {
        this.rgbString = ["rgb(", this.rgb.r,",",this.rgb.g,",",this.rgb.b,")"].join("");
    }

    getHSLfromSliders () {
        this.hsl.h = this.hueSlider.getValue();
        this.hsl.s = this.saturationSlider.getValue();
        this.hsl.l = this.luminanceSlider.getValue();
        this.rgb = hsl2rgb(this.hsl);
        this.hex = rgb2hex(this.rgb.r, this.rgb.g,this.rgb.b);
        this.createRGBString ();
        this.rgbInput.setValue(this.rgbString);
        this.hexInput.setValue(this.hex);
        this.updateColorField();
    }

    setValue(value) {
    }

    setRGB (rgbString) {
       
        this.rgbString = rgbString;
        this.rgb = rgbStringToRGB(rgbString);
        this.hex = rgb2hex(this.rgb.r, this.rgb.g,this.rgb.b) ;
        this.hsl = rgb2hsl(this.rgb);
        this.hueSlider.setValue(this.hsl.h);
        this.saturationSlider.setValue(this.hsl.s);
        this.luminanceSlider.setValue(this.hsl.l);
        this.rgbInput.setValue(this.rgbString);
        this.hexInput.setValue(this.hex);
        this.updateColorField();
        this.adjustSaturationSlider();
    }

    sliderChanged (e) {
    }

    rgbInputFieldChanged (e) {
        console.log("data from input field");
    }

    hexInputFieldChanged (e) {
        console.log("hex data from input field");
    }

    updateColorField () {
        this.obj.callbackUpdateColorbox(this.rgbString);
    }

    okButtonClicked () {
        this.obj.callbackConfirm("ok");
    }

    cancelButtonClicked () {
        this.obj.callbackConfirm("cancel");
    }

    
    
}

export default ColorPickerHSL;

