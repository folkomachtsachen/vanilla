import Components from './components/Components.js';
import DynamicCSSClass from './components/helper/DynamicCSSClass.js';


export class App {

    

    static start () { 

        console.log("manno");
        DynamicCSSClass.createClasses();
        
        let toolChooser = Components.createById ("toolchooser");
        toolChooser.setCallback(App.switchTools);
    
        App.rootIds.forEach(id => {
            let newTool = Components.createById (id);
            App.tools.push(newTool);
        });
        App.switchTools("groupheadline");

        
    }


    static switchTools(name) {
        App.tools.forEach(tool => {
            tool.hide();
            if (name === tool.id) tool.show();
        });
    }
}

App.rootIds = ["groupheadline", "grouptext", "groupcard"];
App.tools = [];

export default App;
