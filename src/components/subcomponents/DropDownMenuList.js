import BasicObject from "../BasicObject.js";
import MenuItem from "./MenuItem.js";


export class DropDownMenuList extends BasicObject {

    constructor (obj_or_domElem) {

        super(obj_or_domElem);

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.itemSelected = this.itemSelected.bind(this);
        this.stopMouseUpTracking = this.stopMouseUpTracking.bind(this);
        this.mouseUpOutside = this.mouseUpOutside.bind(this);

        this.allNodes = [];
        this.width = parseInt(this.obj.menuWidth.split("px")[0]);

        if (!this.obj.items) this.obj.items = ["Item 1", "Item 2", "Item 3"];

        //----------- callback ------------------------------

        if (!this.obj.callbackInput) console.log("DropDownMenuList: callbackInput not found") ;

        this.createElements();
    }

    createElements () {

        this.content = document.createElement("div"); 
        this.content.classList.add("menu_dropdown_std");
        this.content.style.width = this.obj.menuWidth;
        
        this.obj.items.forEach(item => {
            let newItem = new MenuItem({textContent:item, callback:this.itemSelected});
            this.allNodes.push(newItem);
            this.content.appendChild(newItem.getContent());
        });
    }

    getContent(){
        return this.content;
    }

    valueChanged(e) {
    }

    open () {
        this.content.classList.remove("hide");
        window.addEventListener ('mouseup', this.mouseUpOutside);
    }

    close () {
        this.content.classList.add("hide");
        this.stopMouseUpTracking();
    }

    itemSelected (itemText) {
        this.content.classList.add("hide");
        this.stopMouseUpTracking();
        this.obj.callbackInput(itemText);
    }

    stopMouseUpTracking () {
        window.removeEventListener ('mouseup', this.mouseUpOutside);
    }

    mouseUpOutside (e) {
        if (e.target.getAttribute("type") != "menuItem") this.close();
    }
}

export default DropDownMenuList;