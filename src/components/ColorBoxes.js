import ColorBox from './subcomponents/ColorBox.js';



export class ColorBoxes {

    constructor (domElement) {

        this.domElement = domElement;
        this.id = this.domElement.attributes.id.value;
        let grays = ["#000000", "#1a1a1a", "#333333", "#4d4d4d", "#666666", "#808080", "#999999", "#b3b3b3", "#cccccc", "#e5e5e5", "#ffffff"];

        
        //----------- the layout ---------------------------

        let layoutBegin = [`<div class="collapse" id="`, this.id,`"> `,"\n",
        `<div class="colorbox-container">`].join("");

        let boxArray = [];
        for (let i = 0; i <11; i++) {
            let box = new ColorBox(this.id + "_" + i, grays[i]);
            boxArray.push(box.getLayout());
        }
        let boxDivs = boxArray.join(" ");

        let layoutEnd = [`</div>`,"\n",`</div>`].join("");

        this.domElement.outerHTML = [layoutBegin, boxDivs, layoutEnd].join("");
    }
}

export default ColorBoxes;
