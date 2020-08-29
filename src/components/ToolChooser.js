

export class ToolChooser {

    constructor (obj) {

        
        this.prepareItems = this.prepareItems.bind(this);
        this.hiliteCurrent = this.hiliteCurrent.bind(this);
        this.setCurrent = this.setCurrent.bind(this);
        this.setCallback = this.setCallback.bind(this);
        
        this.items = [];
        this.createElements();
        this.prepareItems();
        this.current = this.items[0];

        
        
        this.hiliteCurrent();
    }

    createElements () {

        this.row = document.createElement("div");
        this.row.classList.add("tool_chooser_row");
        
        this.el1 = document.createElement("div"); 
        this.el1.name = "groupheadline";
        this.el1.textContent = "Headline";
        this.items.push(this.el1);

        this.el2 = document.createElement("div"); 
        this.el2.name = "grouptext";
        this.el2.textContent = "Text";
        this.items.push(this.el2);

        this.el3 = document.createElement("div"); 
        this.el3.name = "groupcard";
        this.el3.textContent = "Card";
        this.items.push(this.el3);

       // this.row.classList.add("headline");
    
        this.row.appendChild(this.el1);
        this.row.appendChild(this.el2);
        this.row.appendChild(this.el3);
    }

    getContent(){
        return this.row;
    }

    prepareItems () {
        this.items.forEach(item => {
            item.classList.add("tool_chooser");
            item.addEventListener("click", this.setCurrent)
        });
    }

    hiliteCurrent () {
        this.items.forEach(item => {item.classList.remove("tool_chooser_active")});
        this.current.classList.add("tool_chooser_active");
    }

    setCurrent (e) {
        this.current = e.target;
        this.hiliteCurrent();
        this.callback (e.target.name);
    }

    setCallback (func) {
        this.callback = func;
    }

}

export default ToolChooser;