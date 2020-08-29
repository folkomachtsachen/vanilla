
export class VerticalSpace {

    constructor (sizeName) {

        this.className = "vspace_sm";
        if (sizeName === "md") this.className = "vspace_md";
        if (sizeName === "lg") this.className = "vspace_lg";
        
        this.createElements = this.createElements.bind(this);
        this.getContent = this.getContent.bind(this);
        this.createElements ();
    }

    createElements () {
        this.row = document.createElement("div"); 
        this.row.setAttribute("class", this.className);
    }

    getContent() {
        return this.row;
    }
}

export default VerticalSpace;