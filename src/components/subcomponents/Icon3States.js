
export class Icon3States {

    constructor (obj) {

        this.createElements = this.createElements.bind(this);
        this.setRefToGraphic = this.setRefToGraphic.bind(this);
        this.setClassList = this.setClassList.bind(this);
        this.getContent = this.getContent.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleHover = this.handleHover.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);

        this.id = obj.id || "noname";
        this.svg = obj.svg || false;
        this.width = obj.width || "100%";
        this.height = obj.height || "30px";
        this.margin = obj.margin || false;
        this.classList = obj.classList || ["simple_icon"];
        this.callback = obj.callback;

        this.isActive = false;
        this.refToGraphic = null;

        this.createElements();
        this.setClassList(this.classList);
    }


    createElements () {

        this.icon = document.createElement("div");
        this.icon.style.width = this.width;
        this.icon.style.height = this.height;
        if (this.icon.margin) {
            this.icon.style.margin= this.margin;
        }
        this.icon.innerHTML = this.svg;
        this.setRefToGraphic();
       
        this.icon.addEventListener ('mouseenter', this.handleHover);
        this.icon.addEventListener ('mouseleave', this.handleMouseOut);
        this.icon.addEventListener ('mousedown', this.handleMouseDown);
        this.icon.addEventListener ('mouseup', this.handleMouseUp);
    }


    setRefToGraphic () {
        let refToSVG = this.icon.childNodes[0];
        let nodes = refToSVG.childNodes;
        for (let i = 0; i < nodes.length; i++) {
            if (nodes[i].nodeName === "g"){
                this.refToGraphic = nodes[i];
                break;
            }
        }
    }

    setClassList (arr) {
        arr.forEach(name => {
           this.icon.classList.add(name);
        });
    }

    getContent () {
        return this.icon; 
    }

    setActive (value) {
        this.isActive = value;

        if (this.isActive)  {
            this.refToGraphic.classList.remove("icon_fill_mouse_down");
            this.refToGraphic.classList.add("icon_fill_hover");
        }
        else {
            this.refToGraphic.classList.remove("icon_fill_mouse_down");
            this.refToGraphic.classList.remove("icon_fill_hover");
        }
    }

    handleClick (e) {
       this.callback(e);
    }

    handleHover (e) {
        this.refToGraphic.classList.add("icon_fill_hover");
    }

    handleMouseOut (e) {
        this.refToGraphic.classList.remove("icon_fill_mouse_down");
        if (!this.isActive) this.refToGraphic.classList.remove("icon_fill_hover");
    }

    handleMouseDown (e) {
        this.refToGraphic.classList.add("icon_fill_mouse_down");
    }

    handleMouseUp (e) {
        this.refToGraphic.classList.remove("icon_fill_mouse_down");
        this.callback(this.id); 
    }
    
}

export default Icon3States;