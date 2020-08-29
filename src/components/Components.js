
import Divider from './Divider.js';
import Headline from './Headline.js';
import Root from './Root.js';
import Label from './subcomponents/Label.js';
import MenuItem from './subcomponents/MenuItem.js';
import DropDownMenuList from './subcomponents/DropDownMenuList.js';
import DropDownMenu from './subcomponents/DropDownMenu.js';
import FontWeight from './FontWeight.js';
import FontSize from './FontSize.js';
import LineHeight from './LineHeight.js';
import SpaceBottom from './SpaceBottom.js';
import SpaceTop from './SpaceTop.js';
import Alignment from './Alignment.js';
import CurrentColor from './CurrentColor.js';
import Button from './subcomponents/Button.js';
import Uppercase from './Uppercase.js';

// import Grid from './rows/Grid.js';
import ToolChooser from './ToolChooser.js';
import CardSpace from './CardSpace.js';
import Shadow from './Shadow.js';

export class Components {

    static mapComponents (type, domElement) {

        let componentTypeName = type;
        let element = domElement;

        switch (componentTypeName) {

            case "toolchooser":
                return new ToolChooser({});
                break;
            case "root":
                return new Root(element);
                break;
            case "headline":
                return new Headline(element);
                break;
            case "inputfield": 
                return new InputField (element);
                break;
            case "label": 
                return new Label (element);
                break; 
            case "menuitem":
                return new MenuItem (element);
                break;
            case "dropdownmenulist": 
                return new DropDownMenuList (element);
                break;
            case "dropdownmenu":
                return new DropDownMenu(element);
                break;
            case "fontweight":
                return new FontWeight(element);
                break;
            case "alignment":
                return new Alignment(element);
                break;
            case "currentcolor":
                return new CurrentColor(element);
                break;
            case "fontsize":
                return new FontSize(element);
                break;
            case "lineheight":
                return new LineHeight(element);
                break;
            case "spacebottom":
                return new SpaceBottom(element);
                break;
            case "spacetop":
                return new SpaceTop(element);
                break;  
            case "divider":
                return new Divider(element);
                break;
            case "button":
                return new Button({text:"Hallo"});
                break;
            case "uppercase":
                return new Uppercase(element);
                break;
            case "cardspace":
                return new CardSpace(element);
                break;
            case "shadow":
                return new Shadow(element);
                break;
            default: console.log ("Components: mapComponents: ", componentTypeName,"notfound.");
        }
    }
    

    static createByType (divElement) {

        let componentType = divElement.attributes.componenttype || false;
        if (!componentType) {
            console.log("Components:createByType: componenttype not found.");
            return;
        }
        let type = componentType.value;
        let newComponent = Components.mapComponents(type, divElement);
        return newComponent;
    }


    static createById (domElementId) {

        let element = document.getElementById(domElementId);
        if (!element) {
            console.log("Components:createById id: ",domElementId,"not found.");
            return;
        }
        if (!element.attributes.componenttype){
            console.log("Components:createById: componenttype not found.");
            return;
        }

        let type = element.attributes.componenttype.value;
    
        // // if "type is "root", all child components are handled there!
        let newComponent = Components.mapComponents(type, element);
        let newContent = newComponent.getContent() ;
        
        element.parentNode.insertBefore(newContent, element);
        element.parentNode.removeChild(element);
        
        return newComponent;
    
    }
}

export default Components;