
const Parts = {

    toolChooser : ["font-size:12px;","color:rgb(132, 136, 140);","display:block",
                  "font-weight: 200;", "text-transform: uppercase;","letter-spacing:2px;",
                  "border-bottom: 1px solid rgb(0, 0, 0);",
                "padding:16px 12px 12px 12px"],
    toolChooserHover : ["border-bottom: 1px solid rgb(80, 80, 80);", "color:rgb(69,196,242);"],
    toolChooserActive : ["border-bottom: 1px solid rgb(80, 80, 80);", "color:rgb(182, 187, 195);"],
    toolChooserRow : ["padding-bottom:18px;", "padding-top:24px;"],

    headline : [
        "font-size:15px;","color:rgb(132, 136, 140);", "width:100%",
        "font-weight: 200;", "text-transform: uppercase;","letter-spacing:2px;"],
    
    divider : ["max-height: 1px;","min-height:1px;","background-color:rgb(80, 80, 80);"],

    label : [
        "font-size:12px;", "font-weight: 400;", "color:rgb(132, 136, 140);",
        "text-transform: uppercase;", "letter-spacing:1px;","width:50%", 
        "flex: none;","float:left;","min-height:44px"], 

    toolRow : ["display:inline-block;", "width:100%;", "max-height:26px", "padding-bottom:1px;"],
    toolRowLeftSide : ["display:table-cell;", "float:left;"],
    toolRowRightSide : ["display:inline-block;", "float:right;"],
    

    testcolor: ["background-color:rgb(200, 200, 70);"],
    testcolor2: ["background-color:rgb(0, 100, 70);"],
    testcolor3: ["background-color:rgb(255, 70, 70);"],


    colorGroup : ["background-color: rgb(32, 34, 44);"],
    colorInput : ["background-color:rgb(0, 0, 0);"],
    colorMenuItem: ["background-color: rgb(58, 59, 70);"],
    colorMenuItemHover: ["background-color: rgb(43, 46, 57);"],
    colorMenuItemActive: ["background-color: rgb(72, 74, 87);"],

    // colorFtCommon : ["color:rgb(132, 136, 140);"],
    colorFtInput : ["color:rgb(162, 167, 175);"],
    colorFtDropMenuHead : ["color:white;"],
    colorFtMenuItem : ["color:rgb(162, 167, 175);"],

    
    buttonStd : ["border: none;", "outline: 0;", "padding: 6px 8px 5px 8px;","text-align: center;",
                    "text-decoration: none;","display: inline-block;",
                    "text-transform: uppercase;","letter-spacing:1px;", "cursor: pointer;",
                    "border-radius: 8px;"],

    buttonDarkBG: ["background-color: rgb(0, 0, 0);", "color:rgb(182, 187, 195);"],
    buttonDarkBGHover: ["background-color: rgb(10, 40, 100);", "color:white;"],

    buttonIcon : ["border: none;", "outline: 0;", "padding: 2px;","text-align: center;",
                    "text-decoration: none;","display: inline-block;",
                    "text-transform: uppercase;","letter-spacing:1px;", "cursor: pointer;",
                    "border-radius: 8px;"],
    buttonIconBG: ["background-color: rgb(32, 34, 44);", "color:rgb(182, 187, 195);"],

    simpleIcon: ["display: inline-block;"],

    iconFillNormal : ["fill: #888888;"],
    iconFillHover : ["fill: #dddddd;"],
    iconFillMouseDown : ["fill: #ffffff;"],

    menuDropDownHead : ["padding: 2px;", "color: rgb(162, 167, 175);", "border: none;", "white-space: nowrap;", "border-bottom: 1px solid rgb(80, 80, 80);"],
    menuDropDownHeadHover : ["color: #dddddd;"],

    fs0 : ["font-size:0px;"], fs10 : ["font-size:10px;"], fs12 : ["font-size:12px;"], 
    fs14 : ["font-size:14px;"], fs15 : ["font-size:15px;"],

    textNotSelectable: [
       " -moz-user-select: none;",
       " -khtml-user-select: none;",
       " -webkit-user-select: none;"
    ],


    inputFieldStandard: [
        "height: 25px;",
        "font-size:14px;",
        "font-weight: 300;",
        "color: rgb(162, 167, 175);",
        "background-color: rgb(32, 34, 44);",
        "border: none;",
        "outline: none;",
        "border-bottom: 1px solid rgb(80, 80, 80);",
        "padding: 2px;"],

    inputFieldsGap : ["margin-right: 8px;"],

    opacity05 : ["opacity: 0.5;"],
    opacity08 : ["opacity: 0.8;"],
    opacity1 : ["opacity: 1.0;"],

    zIndex0 : ["z-index: 0"],
    zIndex1000 : ["z-index: 1000"],
    zIndex2000 : ["z-index: 1000"],
    zIndex3000 : ["z-index: 1000"],


    w100 : ["width:100%;"], w90 : ["width:90%;"], w80 : ["width:80%;"],
    w70 : ["width:70%;"], w66 : ["width:66%;"], w60 : ["width:60%;"],
    w50 : ["width:50%;"], w40 : ["width:40%;"], w33 : ["width:33%;"],
    w30 : ["width:30%;"], w20 : ["width:20%;"], w10 : ["width:10%;"],
    
    w25px : ["width:25px;"], w30px : ["width:30px;"], w40px : ["width:40px;"],
    w50px : ["width:50px;"], w60px : ["width:60px;"], w70px : ["width:70px;"],
    w80px : ["width:80px;"], w90px : ["width:90px;"], w100px : ["width:100px;"],
    w200px : ["width:200px;"],



    grid : ["display:grid;", "grid-column-gap: 8px;"],


    table : ["display: table;"],
    table_cell : ["display: table-cell;", "vertical-align: middle;"],

    pointer : ["cursor:pointer;"],
   
    flex : ["display:flex;","flex-wrap: nowrap;"],
    flex1 : ["flex: 1"],
    noFlex: ["flex: none;"], 
    flexToLeft : ["justify-content:start"],
    flexToCenter: ["justify-content:center"],
    flexToRight : ["justify-content:end"],

    gap_input: ["padding-right:20px;"], 

    rowStd : ["padding-bottom:0px;"],

    row : ["display:grid;", "width: 100%;","padding-bottom:5px;"],
    columns_auto_auto : ["grid-template-columns: auto auto;"],
    columns_100_auto_60 : ["grid-template-columns: 100px auto 60px;"],
    columns_40_auto_60 : ["grid-template-columns: 40px auto 60px;"],
    columns_60_auto : ["grid-template-columns: 60px auto;"],
    columns_40_auto : ["grid-template-columns: 60px auto;"],
    columns_auto_60 : ["grid-template-columns: auto 60px;"],
    columns_50_50 : ["grid-template-columns: 50% 50%;"],


    displayBlockInline : ["display: inline-block"],
    displayBlock : ["display: block"],

    displayInline : ["display: inline-block"],
    textRight : ["text-align: right;"],

    justifyContentLeft : ["justify-content:left"],

    justifySelfRight : ["justify-self: right;"],
    justifySelfLeft : ["justify-self: left;"],
    alignSelfCenter : ["align-self: center;"],

    toolGroup : [
        "padding: 30px 12px;"],

    menuItem : [
        "display:inline-block;",
        "padding: 8px;",
        "font-weight: 400;",
        "color:rgb(210, 210, 210);",
        "cursor:pointer;"],
    
    menuItemHover : [
        "background-color: rgb(43, 46, 57);"],

    menuItemActive: [
        "background-color: rgb(72, 74, 87);" ,"color:rgb(255, 255, 255);"],

    menuDropDown : ["position: absolute;"],
    menuDropDown2 : ["display: none;", "position: absolute;"],
    firstItem : ["padding-top:10px;"],
    lastItem : ["padding-bottom:10px;"],
    
    menuDropHeadOpacity : ["opacity: 0.5;"], // verdächtig
    menuDropHeadHover : ["opacity: 0.8;"],
    menuText : ["margin-left: auto;", "text-align:right;"],
    menuDropHeadBackground : [
        "border-bottom: 1px solid rgb(80, 80, 80);"],

       
    inputField : [
        "height:25px;",
        "border: none;",
        "outline: none;",
        "padding:2px;",
        "font-weight: 300;",
        "float:left" ],


    colorbox : [
        "width: 35px;",
        "max-width: 35px;",
        "height:21px;",
        "man-height:21px;",
        "margin-right:0px;",
        "background-color: #fff;"],

    colorboxhover : [
        "border:1px solid;",
        "border-color:rgb(201, 201, 201);" ],

    slider : [
        "-webkit-appearance: none;",
        "height: 10px;",
        "align-self: top;",
        "border-radius: 12px;",
        "outline: none;",
        "opacity: 1;",
        "-webkit-transition: .2s;",
        "transition: opacity .2s;"],
    
    sliderSmall : [
        "-webkit-appearance: none;",
        "height: 3px;",
        "align-self: top;",
        "border-radius: 12px;",
        "outline: none;",
        "opacity: 1;",
        "-webkit-transition: .2s;",
        "transition: opacity .2s;"],
    
     
     hide : ["display:none;"],

     shadow: ["box-shadow: 5px 5px 10px 0px rgba(0,0,0,0.24);"],

     alignIcon: ["width: 18px;","max-width: 18px;", "height:25px;"],

     rowLeftRight: ["display:inline-block;"],
     rowLeftSide: ["display:table-cell;", "float:left;"],
     
     rowRightSideContainer: ["display:inline-block;", "float:right;"],
     rowRightSideContainerContent: ["display:inline-block;", "float:right;"],
     

     text_not_selectable :["textNotSelectable"],

     panel : [ "max-height: 0;", "overflow: hidden;","transition: max-height 0.2s ease-out;"]
    

};

const CssPartCombinations = {

    label: ["label"],
    tool_row: ["toolRow"],
    row_left: ["toolRowLeftSide"],
    row_right: ["toolRowRightSide"],

    simple_row_left_right : ["rowLeftRight", "w100", "rowStd"],
    simple_row_content_left : ["table_cell", "rowLeftSide"],
    simple_row_content_right : ["rowRightSideContainerContent"],

    //-----------------------------------------------

    tool_group: ["toolGroup", "colorGroup"],

    // headline:
    headline: ["headline"],

    // input fields: 
    input_std : ["inputFieldStandard", "w30px", "justifySelfRight", "textRight"],
    'input_std:hover' : ["colorInput"],
    input_left_std : ["inputFieldStandard", "inputFieldsGap", "w30px"],
    'input_left_std:hover' : ["colorInput"],
    
   
     // colorbox: 
    colorbox_std: ["colorbox", "justifySelfRight"],
    'colorbox_std:hover' : ["colorboxhover"],

    // divider:
    divider: ["divider","w100"],


    // drop down menu
    menu_item_std : ["menuItem", "colorMenuItem", "fs14", "w100","zIndex1000"],
    'menu_item_std:hover' : ["colorMenuItemHover"],
    'menu_item_std:active' : ["menuItemActive"],
    'menu_item_std:first-child' : ["firstItem"],
    'menu_item_std:last-child' : ["lastItem"],

    menu_dropdown_std : ["w40", "justifySelfRight"],
    menu_dropdown_head : ["flex", "w60", "testcolor", "flexToRight"],
    menu_dropdown_text : ["menuText", "fs14", "w100", "alignSelfCenter", "testcolor2", "colorFtInput"],
  
    
    
    align_right: ["justifySelfRight"],
    align_left: ["justifySelfRight", "gap_input"],
    

    slider_std: ["slider", "w100"],
    slider_small: ["sliderSmall", "w100"],
    slider_container_std: ["grid", "columns_40_auto_60"],
    slider_container_small: ["grid"],
    container_std: ["w100"],
    

    row_std : ["table", "rowStd", "w100"], // noch im Colorpicker !
    row_auto_60: ["grid", "w100","columns_auto_60"],

    // vspace_sm : ["height_sm"],
    // vspace_md : ["height_md"],
    // vspace_lg : ["height_lg"],


    flexbox : ["flex"],

    table : ["table", "fs14"],
    table_100 : ["table", "w100", "fs14"],
    table_cell : ["table_cell"],
    table_cell_right : ["table_cell", "textRight"],
   


    menu_drop_down : ["menuDropDown", "shadow"],
    
    
    shadow : ["shadow"],


    button_std : ["buttonStd", "buttonDarkBG"],
    'button_std:hover' : ["buttonDarkBGHover"],

    button_icon : ["buttonIcon", "buttonIconBG"],
    'button_icon:hover' : ["buttonDarkBGHover"],


    icon_fill_normal : ["iconFillNormal"],
    icon_fill_hover : ["iconFillHover"],
    icon_fill_mouse_down : ["iconFillMouseDown"],

    menu_drop_down_head : ["menuDropDownHead", "fs14", "pointer"], // wird gebraucht
    'menu_drop_down_head:hover' : ["menuDropDownHeadHover"],
    
    collapse : ["panel"],

    tool_chooser :["pointer","toolChooser"], 
    'tool_chooser:hover' : ["toolChooserHover"],
    tool_chooser_active : ["toolChooserActive"],
    
    tool_chooser_row : ["toolChooserRow", "flex", "flexToCenter"]
    
};
    

export class DynamicCSSClass {


    static createClasses () {
        for (const property in CssPartCombinations) {
            DynamicCSSClass.create(property);
          }
    }
    
    static create (name) {

        let newClassName = "."+name;
        
        // get a combination by name:
        let combi = CssPartCombinations[name];
        if (!combi) {
            console.log("css combination:", name, "not found");
            return;
        }

        // get all parts of the combination an create a css rule:
        let parts = [newClassName + " {"];
        for (let i = 0; i< combi.length; i++) {
            // console.log(combi[i]);
            // console.log("-----------");
            parts.push(Parts[combi[i]].join(""));
        }
        parts.push("}");
        let newRule = parts.join(" ");

        //check existing rules list:
        let allCSS = document.styleSheets[0];

        //if rule already exists, make it unavailable:
        for (let i= allCSS.cssRules.length-1; i>=0; i-- ){
          if (allCSS.cssRules[i].selectorText === newClassName) {
            allCSS.cssRules[i].selectorText = "this-will-never-show-up";
          }
        }
        //--------append new rule:
        allCSS.insertRule(newRule, allCSS.cssRules.length);

        return newRule;
    }  
};

export default DynamicCSSClass;


