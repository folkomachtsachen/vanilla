import BasicObject from "../BasicObject.js";
import InputFieldImutable from "./InputFieldImutable.js";
import DropDownMenuHead from "./DropDownMenuHead.js";
import DropDownMenuList from "./DropDownMenuList.js";
import Icons from "./Icons.js";


export class DropDownMenu extends BasicObject {

    constructor (obj_or_domElem) {

        super(obj_or_domElem);

        this.getContent = this.getContent.bind(this);
        this.itemClicked = this.itemClicked.bind(this);

        this.stateValue = this.obj.value || false;

        if (!this.obj.itemClassName) this.obj.itemClassName = "menu_item_std";
        if (!this.obj.items) this.obj.items = ["Item 1", "Item 2", "Item 3"];
        if (this.obj.currentItem) this.obj.currentItem = 0;
        this.obj.textContent = this.obj.items[this.obj.currentItem];
       
        //----------- callback ------------------------------

        this.obj.callbackInput = this.itemClicked;
        
        this.createElements();
    }
    
    createElements () {

        this.container = document.createElement("div");
        this.container.classList.add("row_right");

        this.menu = new DropDownMenuList(this.obj);
        this.menuContent = this.menu.getContent();
        this.menuContent.classList.add("menu_drop_down");
        this.menuContent.classList.add("hide");


        let configHead = {
            menu: this.menu,
            width:"80px",
            classList: ["input_std", "row_right", "textRight"],
            value:this.stateValue,
            callback:this.handleMenu};   
        this.head = new DropDownMenuHead(configHead);

        this.container.appendChild(this.head.getContent());
        this.container.appendChild(this.menuContent);
    }
  

    getContent () {
        return this.container;
    }

    itemClicked (itemName) {
        this.stateValue = itemName;
        this.obj.callbackPullDownMenu(this.stateValue);
    }

    getValue() {
        return this.stateValue;
    }

    setValue(value) {
        this.stateValue = value;
        this.head.setValue(value);
    }

    valueChanged() {
    }

}

export default DropDownMenu;
