
export class Demo {

    constructor (storename,storeData) {
        
        this.update = this.update.bind(this);
        
        this.storeData = storeData;
        this.storename = storename;
        this.domElement = null;
        this.subElement = null;
        this.canvas = null;

        switch (this.storename) {
            case "grouptext":
                this.domElement = document.getElementById("demo_text");
                break;
            case "groupheadline":
                this.domElement = document.getElementById("demo_headline");
                break;
            case "groupcard":
                this.domElement = document.getElementById("demo_card");
                this.subElement = document.getElementById("card_text_container");
                this.canvas = document.getElementById("canvas");
                break;
        }
    }
    
    update () {
       
        for (let key in this.storeData) {

            switch (key) {
                case "headline_fs":
                    this.domElement.style.fontSize = this.storeData[key] +"px";
                    break;
                case "headline_fw":
                    this.domElement.style.fontWeight = this.storeData[key];
                    break;
                case "headline_lh":
                    this.domElement.style.lineHeight = this.storeData[key] +"px";
                    break;
                case "headline_al":
                    this.domElement.style.textAlign = this.storeData[key];
                    break;
                    spacetop
                case "headline_st":
                    this.domElement.style.paddingTop = this.storeData[key] +"px";
                    break;   
                case "headline_sb":
                    this.domElement.style.paddingBottom = this.storeData[key] +"px";
                    break;
                case "headline_co":
                    this.domElement.style.color = this.storeData[key];
                    break;
                case "headline_up":
                    this.domElement.style.textTransform = this.storeData[key] ? "uppercase" :"none";
                    break;

                case "text_co":
                    this.domElement.style.color = this.storeData[key];
                    break;
                case "text_al":
                    this.domElement.style.textAlign = this.storeData[key];
                    break;
                case "text_fs":
                    this.domElement.style.fontSize = this.storeData[key] +"px";
                    break;
                case "text_fw":
                    this.domElement.style.fontWeight = this.storeData[key];
                    break;
                case "text_lh":
                    this.domElement.style.lineHeight = this.storeData[key] +"px";
                    break;
                case "text_sb":
                    this.domElement.style.paddingBottom = this.storeData[key] +"px";
                    break;

                case "card_sp":
                    this.subElement.style.padding = this.storeData[key] +"px";
                    break;
                case "card_sh":
                    (this.storeData[key]) ? 
                    this.domElement.classList.add("card-shadow") : 
                    this.domElement.classList.remove("card-shadow")
                    break;
                case "canvas_co":
                    this.canvas.style.backgroundColor = this.storeData[key];
                    break;

            }
        }
    }
}
export default Demo;
