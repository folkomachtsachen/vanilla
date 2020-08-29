
export class Button {

    constructor (obj) {

        this.text = obj.text;
        this.svg = obj.svg || false;
        this.width = obj.width || "100%";
        this.height = obj.height || "30px";
        this.margin = obj.margin || false;
        this.classList = obj.classList || ["button_std"];
        this.callback = obj.callback;

        this.setClassList = this.setClassList.bind(this);
        this.handleClick =  this.handleClick.bind(this);

        //----------- create dom elements -------------------

        this.createElements();
        this.setClassList(this.classList);
    }

    createElements () {
        this.button = document.createElement("button");
        this.button.setAttribute("class", "button_std");
        this.button.style.width = this.width;
        this.button.style.height = this.height;
        if (this.margin) {
            this.button.style.margin= this.margin;
        }
        if (this.svg) {
            this.button.innerHTML = this.svg;
        }
        else {
            this.button.innerHTML = this.text;
        }
        this.button.addEventListener ('click', this.handleClick);
    }

    
    setClassList (arr) {
        arr.forEach(name => {
            this.button.classList.add(name);
        });
    }

    getContent(){
        return this.button;
    }

    handleClick (e) {
       this.callback(e);
    }
}

export default Button;