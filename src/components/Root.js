import BasicObject from "./BasicObject.js";
import Store from './Store.js';
import Components from './Components.js';


export class Root extends BasicObject{

    constructor (obj_or_domElem) {

        super(obj_or_domElem);
        if (!this.obj.id) {
            console.log ("A group must have an Id !")
        }
        else {
            this.name = this.obj.id;
            this.obj.root = this.obj.id;
        }
        
        
        this.components = [];
        this.currentComponent = null;
        this.store = new Store(this.name);
        this.store.register(this.name);
        

        
        //----------- bind methods ------------------------

        this.createElements = this.createElements.bind(this);
        this.getContent = this.getContent.bind(this);
        this.hide = this.hide.bind(this);
        this.show = this.show.bind(this);
    

        //----------- create new wrapper -------------------

        this.createElements();


        //----------- child elements -----------------------

        this.children = this.obj.refDom.children;
        
        for (let i = 0; i < this.children.length; i++) {
            
            let newComponent = Components.createByType(this.children[i]);
            newComponent.setStore(this.store);
            let content = newComponent.getContent();
            this.divElement.appendChild(content);
            this.components.push(newComponent);
        }

        this.store.setDomElement(this.divElement);

    }

    createElements () {
        this.divElement = document.createElement("div"); 
        this.divElement.setAttribute("id", "root");
        this.divElement.classList.add("tool_group");
    }

    getContent () {
        return this.divElement;
    }

    hide () {
        this.divElement.classList.add("hide");
    }
    
    show () {
        this.divElement.classList.remove("hide");
    }

}

export default Root;
