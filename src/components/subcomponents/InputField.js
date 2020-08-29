
export class InputField{

    constructor (obj) {

        this.config = obj;
        this.stateValue = this.config.value || 0;

        if (this.config.type === "number") {
            if (!this.config.min) this.config.min = "0";
            if (!this.config.max) this.config.max = "100";
            if (!this.config.value) this.config.value = "0";
        }
        if (!this.config.classList) this.config.classList = ["input_std"];

        //----------- bind methods --------------------------

        this.getContent = this.getContent.bind(this);
        this.setClassList = this.setClassList.bind(this);
        this.getValue = this.getValue.bind(this);
        this.setValue = this.setValue.bind(this);
        this.valueChanged = this.valueChanged.bind(this);
        this.checkMin = this.checkMin.bind(this);
        this.checkMax = this.checkMax.bind(this); 
        this.checkMinMax = this.checkMinMax.bind(this);
        this.restrictToNumbers = this.restrictToNumbers.bind(this);
        this.valueChangedOnBlur =  this.valueChangedOnBlur.bind(this);
        this.handleClick = this.handleClick.bind(this);
    
        //----------- callback ------------------------------

        if (!this.config.callback) console.log("InputField: missing callbackInput");

        //----------- create dom elements -------------------

        this.createElements();
        this.setClassList(this.config.classList);
    }


    createElements () {

        this.content = document.createElement("input");
        this.config.type="text";
        if (this.config.min) this.content.setAttribute("min", this.config.min);
        if (this.config.max) this.content.setAttribute("max", this.config.max);
        if (this.config.step) this.content.setAttribute("step", this.config.step);
        this.content.setAttribute("value", this.stateValue)
        if (this.config.width) this.content.style.width = this.config.width;
        if (this.config.restrict) this.content.setAttribute("restrict", this.config.restrict);
        this.content.addEventListener ('input', this.valueChanged);
        this.content.addEventListener ('blur', this.valueChangedOnBlur);
        this.content.addEventListener ('click', this.handleClick);

    }

    getContent(){
        return this.content;
    }

    setClassList (arr) {
        arr.forEach(name => {
            this.content.classList.add(name);
        });
    }

    getValue() {
        return this.stateValue;
    }

    setValue(value) {

        // type "number" creates arrow-buttons
        if (this.config.type === "number") {
            let checkedValue = this.Max (this.config.max, value);
            this.stateValue = checkedValue;
        }
        else {
            // restricted to numbers, no arrows:
            if (this.config.restrict === "0-9"){
                let restricted = this.restrictToNumbers(value);
                let checked = this.checkMax (this.config.max, restricted); 
                this.stateValue = checked;
                this.content.value = this.stateValue;
            }
            // arbitrary, unchecked
            else {
                this.stateValue = value;
                this.content.value = this.stateValue;
            }
        }
    }

    valueChanged(e) {
        this.setValue(this.content.value);
        this.config.callback(this.stateValue);
    }

    valueChangedOnBlur(e) {
        let checked = this.checkMin(this.config.min, this.content.value);
        this.setValue(checked);
        this.config.callback(this.stateValue);
    }

    checkMin (min, value) {
        return (value < min ? min : value);
    }

    checkMax (max, value) {
        return (value > max ? max : value);
    }
   
    checkMinMax (min, max, value) {
        if (!value) return 0;
        let val = this.checkMin(parseInt(min), parseInt(value));
        let final = this.checkMax(parseInt(max),val);
        return final;
    }

    restrictToNumbers (value) {
        if (typeof(value) === "number") return value;
        let checked = value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
        return checked;
    }

    handleClick (e) {
        this.config.callbackClick(e);
    }
}

export default InputField;
