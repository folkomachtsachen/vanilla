import Icons from "./Icons.js";


export class Checkbox {

    constructor (obj) {

        
        this.setClassList = this.setClassList.bind(this);
        this.setRefToGraphic = this.setRefToGraphic.bind(this);
        this.setValue = this.setValue.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleHover = this.handleHover.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.toggle = this.toggle.bind(this);

        this.callback = obj.callback;
        this.checked = false;
        this.uncheckedSVG = Icons.icon_unchecked();
        this.checkedSVG = Icons.icon_checked();


        //----------- create dom elements -------------------

        this.createElements();
        //this.setClassList(this.classList);
        this.setActive (this.checked);
    }

    createElements () {

        this.box = document.createElement("div");
        this.box.classList.add("simple_row_content_right");
        this.box.style.height = "25px";

        this.boxUnChecked = document.createElement("div");
        this.boxUnChecked.innerHTML = this.uncheckedSVG;
        this.refToUnChecked = this.setRefToGraphic(this.boxUnChecked);
        
        this.boxChecked = document.createElement("div");
        this.boxChecked.innerHTML = this.checkedSVG;
        this.refToChecked = this.setRefToGraphic(this.boxChecked);
       
        this.box.appendChild(this.boxChecked);
        this.box.appendChild(this.boxUnChecked);

        this.box.addEventListener ('mouseenter', this.handleHover);
        this.box.addEventListener ('mouseleave', this.handleMouseOut);
        this.box.addEventListener ('mousedown', this.handleMouseDown);
        this.box.addEventListener ('mouseup', this.handleMouseUp);

    }

    setClassList (arr) {
        arr.forEach(name => {
            this.box.classList.add(name);
        });
    }

    getContent(){
        return this.box;
    }

    setRefToGraphic (aBox) {
        let theRef = false;
        let refToSVG = aBox.childNodes[0];
        let nodes = refToSVG.childNodes;
        for (let i = 0; i < nodes.length; i++) {
            if (nodes[i].nodeName === "g"){
                theRef = nodes[i];
                break;
            }
        }
        return theRef;
    }

    setValue(value) {
        this.setActive(value);
    }
    
    setActive (value) {

        this.checked = value;
        if (this.checked)  {
            this.boxChecked.classList.remove("hide");
            this.boxUnChecked.classList.add("hide");
        }
        else {
            this.boxChecked.classList.add("hide");
            this.boxUnChecked.classList.remove("hide");
        }
    }

    handleClick (e) {
        this.toggle();
        this.callback(this.checked);
    }

    handleHover (e) {
        this.refToChecked.classList.add("icon_fill_hover");
        this.refToUnChecked.classList.add("icon_fill_hover");
    }

    handleMouseOut (e) {
        this.refToChecked.classList.remove("icon_fill_mouse_down");
        this.refToChecked.classList.remove("icon_fill_hover");
        this.refToUnChecked.classList.remove("icon_fill_mouse_down");
        this.refToUnChecked.classList.remove("icon_fill_hover");
    }

    handleMouseDown (e) {
        this.refToChecked.classList.add("icon_fill_mouse_down");
        this.refToUnChecked.classList.add("icon_fill_mouse_down");
    }

    handleMouseUp (e) {
        this.refToChecked.classList.remove("icon_fill_mouse_down");
        this.refToUnChecked.classList.remove("icon_fill_mouse_down");
        this.toggle();
        this.callback(this.checked); 
    }

    toggle () {
        this.checked = !this.checked;
        this.setActive(this.checked);
    }
}

export default Checkbox;