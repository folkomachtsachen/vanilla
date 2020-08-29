import BasicObject from "../BasicObject.js";


export class MenuItem extends BasicObject {

    constructor (obj_or_domElem) {

        super(obj_or_domElem);

        this.selected = this.selected.bind(this);

        if (!this.obj.itemClassName) this.obj.itemClassName = "menu_item_std";
        if (!this.obj.textContent) this.obj.textContent = "Item";

        this.createElements();
    }

    createElements () {
        this.content = document.createElement("div"); 
        this.content.setAttribute("type", "menuItem");
        this.content.setAttribute("class", this.obj.itemClassName);
        this.content.classList.add("text_not_selectable");
        this.content.textContent = this.obj.textContent;
        this.content.addEventListener('click', this.selected);
    }

    getContent() {
        return this.content;
    }

    selected () {
        this.obj.callback(this.content.textContent);
    }
}

export default MenuItem;