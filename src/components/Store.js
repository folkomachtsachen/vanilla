import Demo from "../demo.js";

export class Store  {

    constructor (name) {
        this.name = name;
        this.register = this.register.bind(this);
        this.setDomElement = this.setDomElement.bind(this);
        this.update = this.update.bind(this);
        this.data = {};
        this.demo = new Demo(this.name, this.data);
    }

    register(id, value){
        if (!id) return;
        if (!value) {
            this.data[id] = id;
        }else {
            this.data[id] = value;
        }
    }

    setDomElement (domElement) {
        this.domElement = domElement;
    }


    update(id, value){
        this.data[id] = value;
        this.demo.update();
    }
}

export default Store;