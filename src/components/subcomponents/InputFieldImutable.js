
export class InputFieldImutable{

    constructor (obj) {

        this.config = obj;
       
        if (!this.config.classList) this.config.classList = ["input_std"];

        //----------- bind methods --------------------------

        this.getContent = this.getContent.bind(this);
        this.setClassList = this.setClassList.bind(this);
        this.setValue = this.setValue.bind(this);
        
        //----------- callback ------------------------------

        if (!this.config.callback) console.log("InputFieldImutable: missing callback");

        //----------- create dom elements -------------------

        this.createElements();
        this.setClassList(this.config.classList);
    }


    createElements () {

        this.container = document.createElement ("div");
        this.container.classList.add("arrow_pulldown_container");

        this.content = document.createElement("input");
        this.content.setAttribute('readonly', 'readonly');
        this.content.classList.add("pointer");

        if (this.config.value) this.content.setAttribute("value", this.config.value);
        if (this.config.width) this.content.style.width = this.config.width;

        this.arrow = document.createElement("div");
        this.arrow.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="6px" height="4px";"viewBox="0 0 6 4"> <polygon fill="white" points="3,4 0,0 6,0"/></svg>'
        this.arrow.classList.add("arrow_pulldown");

        this.container.appendChild(this.content);
        this.container.appendChild(this.arrow);
        this.content.addEventListener ('mousedown', this.config.callback);

    }

    getContent(){
        return this.container;
    }

    setClassList (arr) {
        arr.forEach(name => {
            this.content.classList.add(name);
        });
    }

    setValue(value){
        this.config.value = value;
        this.content.value = value;
    }


}

export default InputFieldImutable;

