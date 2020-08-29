
export class DropDownMenuHead {

    constructor (obj) {

        this.config = obj;
        this.stateValue = this.config.value || false;
        this.isOpen = false;

        this.getContent = this.getContent.bind(this);
        this.handleClick = this.handleClick.bind(this);
       
        this.createElements();
    }

    createElements () {
        this.textDiv = document.createElement ("div");
        this.textDiv.classList.add("menu_drop_down_head");
        this.textDiv.classList.add("row_right");
        this.textDiv.textContent = this.config.value;
        this.textDiv.addEventListener ('mousedown', this.handleClick );
    }

    getContent () {
        return this.textDiv;
    }

    setValue (value)  {
        this.stateValue = value;
        this.textDiv.textContent = value;
    }

    handleClick (e) {
        if (!this.isOpen) {
            this.config.menu.open();
        }
    }
}

export default DropDownMenuHead;

