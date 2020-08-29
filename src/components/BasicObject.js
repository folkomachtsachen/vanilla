
export class BasicObject {

    constructor (obj_or_domElem) {

        this.org = obj_or_domElem;
        this.obj = obj_or_domElem;
        this.obj["buildfrom"] = "object";
       
        if (obj_or_domElem.tagName ==="DIV") {

            this.obj = {buildfrom: "domElement"};
            let attrs = obj_or_domElem.attributes;
            for (let i = 0; i<attrs.length; i++) {
                this.obj[attrs[i].name] = attrs[i].value;
            }
            this.obj["textContent"] = this.org.textContent;
            this.obj["refDom"] = this.org;
        }
        if (!this.obj.id) this.obj.id = false;
        if (!this.obj.value) {

            if (this.obj.textContent) {
                this.obj.value = this.obj.textContent;
            }
            else {
                this.obj.value = false;
            }
        }

        this.id = this.obj.id;
        this.value = this.obj.value;
        this.storeProp = null;
       
        this.name = "baseobject";

        this.getContent = this.getContent.bind(this);
        this.setClassName = this.setClassName.bind(this);
        this.checkMin = this.checkMin.bind(this);
        this.checkMax = this.checkMax.bind(this);
        this.checkMinMax = this.checkMinMax.bind(this);
        
        this.createElements = this.createElements.bind(this);
        //this.handleComponentClick = this.handleComponentClick.bind(this);
        this.getValue = this.getValue.bind(this);
        this.setValue = this.setValue.bind(this);
        this.valueChanged = this.valueChanged.bind(this);
        this.setStore = this.setStore.bind(this);
        this.setStoreID = this.setStoreID.bind(this);
        this.getValueFromStore = this.getValueFromStore.bind(this);
        this.setValueFromStore = this.setValueFromStore.bind(this);
        this.setRoot = this.setRoot.bind(this);

    }

    
    getContent(){
    }

    checkMin (min, value) {
        return (value < min ? min : value);
    }

    checkMax (max, value) {
        return (value > max ? max : value);
    }
   
    checkMinMax (min, max, value) {
        let val = this.checkMin(parseInt(min), parseInt(value));
        let final = this.checkMax(parseInt(max),val);
        return final;
    }

    setClassName (str) {
        this.obj.className = str;
    }
    
    getValue() {
    }

    setValue() {
    }

    valueChanged() {
    }

    setStore(obj) {
        this.store = obj;
        this.store.register(this.id, this.value);
    }

    setStoreID (name) {
        console.log(name);
    }

    setRoot (name) {
        this.root = name;
    }

    getValueFromStore () {
        if (this.storeProp)  {
            this.setValueFromStore(this.store.data[storeProp]);
        }
    }

    setValueFromStore (value) {
        
    }


}

export default BasicObject;

